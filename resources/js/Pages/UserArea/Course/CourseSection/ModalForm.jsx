import { Link, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

import { Save } from "lucide-react";
import ReactModal from "react-modal";
import { toast } from "react-toastify";
import classNames from "classnames";

export default function ModalForm({
    isOpen = false,
    setIsOpen,
    course,
    course_section = null,
}) {
    const { data, setData, post, put, errors, reset, clearErrors, processing } =
        useForm({
            course_id: course_section ? course_section.course_id : course.id,
            title: course_section ? course_section.title : "",
        });

    useEffect(() => {
        setData({
            course_id: course_section ? course_section.course_id : course.id,
            title: course_section ? course_section.title : "",
        });
    }, [course_section]);

    useEffect(() => {
        if (isOpen == false) {
            reset();
        }
    }, [isOpen]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // data.course_id = course.id;

        console.log("course_section", course_section);

        if (course_section) {
            put(
                route("user_area.course_section.update", {
                    course_section,
                }),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        toast.success("Course Section berhasil di ubah");
                        reset();
                        setIsOpen(false);
                    },
                    onError: () => {
                        toast.success("Course Section gagal di ubah");
                    },
                }
            );
        } else {
            post(
                route("user_area.course.course_section.store", {
                    course: course,
                }),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        toast.success("Course Section berhasil di simpan");
                        reset();
                        setIsOpen(false);
                    },
                    onError: () => {
                        toast.success("Course Section gagal di simpan");
                    },
                }
            );
        }
    };

    const inputChangeHandler = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setData(name, value);
    };
    return (
        <dialog
            id="my_modal_3"
            className={classNames("modal", { "modal-open": isOpen })}
            open={isOpen}
        >
            <div className="modal-box">
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
                <h3 className="font-bold text-lg mb-6">Buat Section Baru</h3>

                <form onSubmit={onSubmitHandler}>
                    <div className="mb-6">
                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">
                                    Judul Section
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Judul Section"
                                className="input input-bordered w-full"
                                name="title"
                                onChange={inputChangeHandler}
                                value={data.title}
                            />
                            {errors.title && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.title}
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
                            <span>{course_section ? "Ubah" : "Simpan"}</span>
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
