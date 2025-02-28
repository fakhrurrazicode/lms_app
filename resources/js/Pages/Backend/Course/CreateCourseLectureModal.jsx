import { useForm, usePage } from "@inertiajs/react";
import classNames from "classnames";
import { Save } from "lucide-react";
import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";

export default function CreateCourseLectureModal({
    isOpen,
    setIsOpen,
    courseSection,
    setCourseSection,
}) {
    const {
        data,
        setData,
        post,
        errors,
        reset,
        clearErrors,
        processing,
        progress,
    } = useForm({
        course_id: "",
        course_section_id: "",
        title: "",
        video: "",
        description: "",
    });

    useEffect(() => {
        setData({
            ...data,
            course_id: courseSection ? courseSection.course_id : "",
            course_section_id: courseSection ? courseSection.id : "",
        });
    }, [courseSection]);

    let {
        props: { request },
    } = usePage();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        request.selected_course_id = courseSection.course_id;
        const query = new URLSearchParams(request).toString();

        post(`/backend/course_lecture?${query}`, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setIsOpen(false);
                reset();
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

                // if (file) {
                //     const reader = new FileReader();

                //     reader.onload = function (e) {
                //         previewImageRef.current.src = e.target.result;
                //     };

                //     reader.readAsDataURL(file);
                // } else {
                //     previewImageRef.current.classList.add("hidden");
                //     previewImageRef.current.src = "";
                // }

                setData(name, file);
                break;

            default:
                setData(name, value);
                break;
        }
    };

    return (
        <ReactModal
            closeTimeoutMS={200}
            isOpen={isOpen}
            contentLabel="Minimal Modal Example"
            overlayClassName="fixed inset-0 bg-base-200/70"
            className="absolute mt-16 left-1/2 -translate-x-1/2  overflow-auto outline-none p-5 md:w-3/4 lg:w-10/12 h-auto"
            ariaHideApp={false}
        >
            <div className="card bg-base-100 shadow-xl">
                <form onSubmit={onSubmitHandler} className="card-body">
                    <h2 className="card-title mb-6">
                        Create new Lecture for section{" "}
                        <span className="text-primary">
                            {courseSection ? courseSection.title : ""}
                        </span>
                    </h2>
                    <div className="mb-6">
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
                                <span className="label-text">Title</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Title"
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
                                <span className="label-text">Description</span>
                            </div>
                            <textarea
                                className="textarea textarea-bordered h-64"
                                placeholder="Description"
                                name="description"
                                onChange={inputChangeHandler}
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
                    </div>

                    <div className="card-actions justify-end">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={processing}
                        >
                            <Save size={16} />
                            <span>Save</span>
                        </button>
                        <a
                            className="btn btn-neutral"
                            onClick={(e) => {
                                console.log("button cancel");
                                e.preventDefault;
                                reset();
                                clearErrors();
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
