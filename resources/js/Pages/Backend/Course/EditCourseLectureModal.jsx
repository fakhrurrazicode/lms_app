import { useForm, usePage } from "@inertiajs/react";
import classNames from "classnames";
import { Save } from "lucide-react";
import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";

export default function EditCourseLectureModal({
    isOpen,
    setIsOpen,
    courseLecture,
    setCourseLecture,
}) {
    const { data, setData, post, errors, reset, clearErrors } = useForm({
        course_id: "",
        course_section_id: "",
        title: "",
        video: null,
        description: "",
    });

    let {
        props: { request },
    } = usePage();

    useEffect(() => {
        // setData("title", courseLecture ? courseLecture.title : "");
        setData({
            ...data,
            course_id: courseLecture ? courseLecture.course_id : "",
            course_section_id: courseLecture
                ? courseLecture.course_section_id
                : "",
            title: courseLecture ? courseLecture.title : "",
            description: courseLecture ? courseLecture.description : "",
        });
    }, [courseLecture]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        request.selected_course_id = courseLecture.course_id;
        const query = new URLSearchParams(request).toString();

        post(
            `/backend/course_lecture/${
                courseLecture ? courseLecture.id : ""
            }?${query}`,
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    setIsOpen(false);
                    setCourseLecture(null);
                    reset();
                },
            }
        );
    };

    const inputChangeHandler = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setData(name, value);
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
                    <h2 className="card-title mb-6">Update Lecture</h2>
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
                                clearErrors();
                                setCourseLecture(null);
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
