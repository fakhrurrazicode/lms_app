import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

import { Save } from "lucide-react";
import ReactModal from "react-modal";
import { toast } from "react-toastify";
import classNames from "classnames";
import TinyEditor from "@/Components/Custom/TinyEditor";

export default function ModalForm({
    isOpen = false,
    setIsOpen,
    ticket = null,
}) {
    const { props } = usePage();
    const priorities = ["low", "medium", "high"];
    const statuses = ["open", "pending", "closed"];

    const { data, setData, post, put, errors, reset, clearErrors, processing } =
        useForm({
            user_id: ticket ? ticket.user_id : "",
            subject: ticket ? ticket.subject : "",
            description: ticket ? ticket.description : "",
            priority: ticket ? ticket.priority : "",
            status: ticket ? ticket.status : "",
        });

    useEffect(() => {
        console.log(ticket);
        setData({
            user_id: ticket ? ticket.user_id : "",
            subject: ticket ? ticket.subject : "",
            description: ticket ? ticket.description : "",
            priority: ticket ? ticket.priority : "",
            status: ticket ? ticket.status : "",
        });
    }, [ticket]);

    useEffect(() => {
        if (isOpen == false) {
            reset();
        }
    }, [isOpen]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (ticket) {
            put(
                route("backend.ticket.update", {
                    ticket,
                }),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        toast.success("Ticket berhasil di ubah");
                        reset();
                        setIsOpen(false);
                    },
                    onError: () => {
                        toast.success("Ticket gagal di ubah");
                    },
                }
            );
        } else {
            post(route("backend.ticket.store"), {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    toast.success("Ticket berhasil di simpan");
                    reset();
                    setIsOpen(false);
                },
                onError: () => {
                    toast.success("Ticket gagal di simpan");
                },
            });
        }
    };

    const inputChangeHandler = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        console.log(name, value);

        setData(name, value);
    };
    return (
        <dialog
            id="my_modal_3"
            className={classNames("modal", { "modal-open": isOpen })}
            open={isOpen}
        >
            <div className="modal-box w-11/12 max-w-5xl">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                        }}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg mb-6">
                    {ticket ? "Ubah Ticket" : "Buat Ticket Baru"}
                </h3>

                <form onSubmit={onSubmitHandler}>
                    <div className="mb-6">
                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Subject</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="input input-bordered w-full"
                                name="subject"
                                onChange={inputChangeHandler}
                                value={data.subject}
                            />
                            {errors.subject && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.subject}
                                    </span>
                                </div>
                            )}
                        </label>
                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>

                            {/* <ReactQuill
                                theme="snow"
                                value={data.description}
                                onChange={(value) =>
                                    setData("description", value)
                                }
                                className="input input-bordered"
                                style={{
                                    minHeight: "16rem",
                                    marginBottom: "1rem",
                                }}
                            /> */}

                            <TinyEditor
                                value={data.description}
                                onChange={(value) =>
                                    setData("description", value)
                                }
                            />

                            {errors.description && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.description}
                                    </span>
                                </div>
                            )}
                        </label>

                        <label className="form-control mb-6">
                            <div className="label">
                                <span className="label-text">Priority</span>
                            </div>
                            <select
                                className="select select-bordered"
                                name="priority"
                                onChange={inputChangeHandler}
                                value={data.priority}
                            >
                                {priorities.map((priority) => (
                                    <option value={priority}>{priority}</option>
                                ))}
                            </select>

                            {errors.priority && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.priority}
                                    </span>
                                </div>
                            )}
                        </label>

                        <label className="form-control mb-6">
                            <div className="label">
                                <span className="label-text">Status</span>
                            </div>
                            <select
                                className="select select-bordered"
                                name="status"
                                onChange={inputChangeHandler}
                                value={data.status}
                            >
                                {statuses.map((status) => (
                                    <option value={status}>{status}</option>
                                ))}
                            </select>

                            {errors.status && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.status}
                                    </span>
                                </div>
                            )}
                        </label>

                        <label className="form-control mb-6">
                            <div className="label">
                                <span className="label-text">User</span>
                            </div>
                            <select
                                className="select select-bordered"
                                name="user_id"
                                onChange={inputChangeHandler}
                                value={data.user_id}
                            >
                                <option></option>
                                {props.users.map((user) => (
                                    <option value={user.id}>
                                        {user.name} :: {user.email}
                                    </option>
                                ))}
                            </select>

                            {errors.user_id && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.user_id}
                                    </span>
                                </div>
                            )}
                        </label>
                    </div>

                    <div className="card-actions justify-end">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={processing}
                        >
                            {processing ? (
                                <span className="loading loading-spinner loading-md"></span>
                            ) : (
                                <Save size={16} />
                            )}
                            <span>{ticket ? "Ubah" : "Simpan"}</span>
                        </button>
                        <button
                            className="btn btn-neutral"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(false);
                            }}
                        >
                            Batalkan
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    );
}
