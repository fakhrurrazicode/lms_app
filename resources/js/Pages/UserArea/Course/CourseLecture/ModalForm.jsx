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
        });

    // useEffect(() => {
    //     setData({
    //         course_id: course_lecture ? course_lecture.course_id : course.id,
    //         course_section_id: course_lecture
    //             ? course_lecture.course_section_id
    //             : course_section
    //             ? course_section.id
    //             : "",
    //         title: course_lecture ? course_lecture.title : "",
    //         video: null,
    //         description: course_lecture ? course_lecture.description : "",
    //     });
    // }, [course, course_lecture, course_section, isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        // Cegah reset jika user sudah mulai input data
        if (data.title || data.description || data.course_section_id) return;

        setData({
            course_id: course_lecture ? course_lecture.course_id : course.id,
            course_section_id: course_lecture
                ? course_lecture.course_section_id
                : course_section
                ? course_section.id
                : "",
            title: course_lecture ? course_lecture.title : "",
            video: null,
            description: course_lecture ? course_lecture.description : "",
        });
    }, [isOpen]);

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

        if (course_lecture) {
            post(
                route("user_area.course_lecture.update", {
                    course_lecture,
                }),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        toast.success("Course Lecture berhasil di ubah");
                        reset();
                        setIsOpen(false);
                    },
                    onError: () => {
                        toast.success("Course Lecture gagal di ubah");
                    },
                }
            );
        } else {
            console.log("data", data);
            post(
                route("user_area.course.course_lecture.store", {
                    course: course,
                }),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        toast.success("Course Lecture berhasil di simpan");
                        reset();
                        setIsOpen(false);
                    },
                    onError: () => {
                        toast.success("Course Lecture gagal di simpan");
                    },
                }
            );
        }
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
            <div className="modal-box">
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
                        <>Ubah Lecture</>
                    ) : (
                        <>Buat Lecture baru</>
                    )}
                </h3>

                <form onSubmit={onSubmitHandler}>
                    <div className="mb-6">
                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">
                                    Course Section
                                </span>
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
                                <span className="label-text">Video</span>
                            </div>

                            <input
                                type="file"
                                accept="video/*"
                                className="file-input file-input-bordered w-full max-w-xs"
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
                                    Judul Lecture
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Judul Lecture"
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
                                    Deskripsi Lecture
                                </span>
                            </div>
                            <ReactQuill
                                theme="snow"
                                value={data.description}
                                onChange={(value) =>
                                    setData("description", value)
                                }
                                className="bg-white rounded-box border border-base-300"
                                style={{
                                    height: "16rem",
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
