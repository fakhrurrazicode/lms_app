import { useForm, usePage } from "@inertiajs/react";
import classNames from "classnames";
import { Save } from "lucide-react";
import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";

export default function EditCourseSectionModal({
    isOpen,
    setIsOpen,
    courseSection,
    setCourseSection,
}) {
    const { data, setData, put, errors, reset, clearErrors } = useForm({
        title: "",
    });

    let {
        props: { request },
    } = usePage();

    useEffect(() => {
        setData("title", courseSection ? courseSection.title : "");
    }, [courseSection]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const query = new URLSearchParams(request).toString();

        put(
            `/backend/course_section/${
                courseSection ? courseSection.id : ""
            }?${query}`,
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    setIsOpen(false);
                    setCourseSection(null);
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
            className="absolute mt-16 left-1/2 -translate-x-1/2  overflow-auto outline-none p-5 w-4/12 h-auto"
            ariaHideApp={false}
        >
            <div className="card bg-base-100 shadow-xl">
                <form onSubmit={onSubmitHandler} className="card-body">
                    <h2 className="card-title mb-6">Update Section</h2>
                    <div className="mb-6">
                        <input
                            type="hidden"
                            name="course_id"
                            onChange={inputChangeHandler}
                            value={data.course_id}
                        />

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
                                setCourseSection(null);
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
