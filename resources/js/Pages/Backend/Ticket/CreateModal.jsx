import { useForm, usePage } from "@inertiajs/react";
import classNames from "classnames";
import { Save } from "lucide-react";
import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";

export default function CreateModal({ isOpen, setIsOpen }) {
    const { props } = usePage();

    const priorities = ["low", "medium", "high"];
    const statuses = ["open", "pending", "closed"];

    const { data, setData, post, errors, reset } = useForm({
        user_id: "",
        subject: "",
        description: "",
        status: "",
        priority: "",
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const query = new URLSearchParams(props.query).toString();

        post(`/backend/ticket?${query}`, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setIsOpen(false);
                reset();
            },
        });
    };

    return (
        <ReactModal
            closeTimeoutMS={200}
            isOpen={isOpen}
            contentLabel="Minimal Modal Example"
            overlayClassName="fixed inset-0 bg-base-200/70"
            className="absolute mt-16 left-1/2 -translate-x-1/2  overflow-auto outline-none p-5 w-4/12 h-auto"
            ariaHideApp={false}
        >
            <div className="card bg-base-100 shadow-xl">
                <form onSubmit={onSubmitHandler} className="card-body">
                    <h2 className="card-title mb-6">Create new Ticket</h2>
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
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
                                }}
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

                            <textarea
                                className="textarea textarea-bordered h-24"
                                placeholder="Description"
                                name="description"
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
                                }}
                                value={data.description}
                            ></textarea>

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
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
                                }}
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
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
                                }}
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
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
                                }}
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
                        <button type="submit" className="btn btn-primary">
                            <Save size={16} />
                            <span>Save</span>
                        </button>
                        <a
                            className="btn btn-neutral"
                            onClick={(e) => {
                                console.log("button cancel");
                                e.preventDefault;
                                reset();
                                setIsOpen(false);
                            }}
                        >
                            Cancel
                        </a>
                    </div>
                </form>
            </div>
        </ReactModal>
    );
}
