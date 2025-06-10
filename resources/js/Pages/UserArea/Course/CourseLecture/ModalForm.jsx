import { Link, useForm } from "@inertiajs/react";

import React, { useEffect, useRef } from "react";

import { Save } from "lucide-react";
import ReactModal from "react-modal";
import { toast } from "react-toastify";
import classNames from "classnames";
import ReactQuill from "react-quill";

export default function ModalForm({
    isOpen = false,
    setIsOpen,
    course,
    course_section = null,
    course_lecture = null,
}) {
    const formRef = useRef(null);
    const fileInputRef = useRef(null);

    const { data, setData, post, errors, reset, clearErrors, processing } =
        useForm({
            course_id: course_lecture ? course_lecture.course_id : course.id,
            course_section_id: course_lecture
                ? course_lecture.course_section_id
                : course_section
                ? course_section.id
                : "",
            title: course_lecture ? course_lecture.title : "",
            video: null,
            description: course_lecture ? course_lecture.description : "",
            attachments: [],
        });

    useEffect(() => {
        if (course_lecture) {
            setData({
                course_id: course_lecture.course_id,
                course_section_id: course_lecture.course_section_id,
                title: course_lecture.title,
                video: null,
                description: course_lecture.description || "",
                attachments: [],
            });
        }
    }, [course_section, course_lecture]);

    useEffect(() => {
        if (isOpen == false) {
            reset();
            clearErrors();
            if (formRef.current) formRef.current.reset();
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    }, [isOpen]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const url = course_lecture
            ? route("user_area.course_lecture.update", { course_lecture })
            : route("user_area.course.course_lecture.store", { course });

        post(url, {
            forceFormData: true,
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast.success(
                    `Course Lecture berhasil di ${
                        course_lecture ? "ubah" : "simpan"
                    }`
                );
                reset();
                setIsOpen(false);
            },
            onError: () => {
                toast.error(
                    `Course Lecture gagal di ${
                        course_lecture ? "ubah" : "simpan"
                    }`
                );
            },
        });
    };

    const inputChangeHandler = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case "video":
                const file = e.target.files[0];
                setData(name, file);
                break;

            default:
                setData(name, value);
                break;
        }
    };
    return (
        <dialog
            id="my_modal_3"
            className={classNames("modal", { "modal-open": isOpen })}
            open={isOpen}
        >
            <div className="modal-box w-11/12 max-w-5xl">
                <form method="dialog" ref={formRef}>
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
                    {course_lecture ? (
                        <>Ubah Pelajaran</>
                    ) : (
                        <>Buat Pelajaran baru</>
                    )}
                </h3>

                <form onSubmit={onSubmitHandler}>
                    <div className="mb-6">
                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Pilih Bagian</span>
                            </div>
                            <select
                                className="select select-bordered"
                                name="course_section_id"
                                onChange={inputChangeHandler}
                                value={data.course_section_id}
                            >
                                <option></option>
                                {course.course_sections.map(
                                    (course_section, index) => (
                                        <option
                                            key={index}
                                            value={course_section.id}
                                        >
                                            {course_section.title}
                                        </option>
                                    )
                                )}
                            </select>
                            {errors.course_section_id && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.course_section_id}
                                    </span>
                                </div>
                            )}
                        </label>
                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">
                                    Video Pelajaran
                                </span>
                                <span className="label-text-alt">
                                    {"Ukuran maksimal file <= 50MB"}
                                </span>
                            </div>

                            <input
                                type="file"
                                accept="video/*"
                                className="file-input file-input-bordered w-full"
                                name="video"
                                onChange={inputChangeHandler}
                                ref={fileInputRef}
                                // value={data.video}
                            />
                            {errors.video && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.video}
                                    </span>
                                </div>
                            )}
                        </label>

                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">
                                    Judul Pelajaran
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Judul Pelajaran"
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

                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">
                                    Deskripsi Pelajaran
                                </span>
                            </div>
                            <ReactQuill
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
                            />
                            {errors.description && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.description}
                                    </span>
                                </div>
                            )}
                        </label>

                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">
                                    Lampiran (opsional)
                                </span>
                                <span className="label-text-alt">
                                    Dapat Memilih lebih dari 1 file
                                </span>
                            </div>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full"
                                name="attachments"
                                multiple
                                onChange={(e) => {
                                    setData(
                                        "attachments",
                                        Array.from(e.target.files)
                                    );
                                }}
                            />
                            {errors.attachments && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.attachments}
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
                            <span>{course_lecture ? "Ubah" : "Simpan"}</span>
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
