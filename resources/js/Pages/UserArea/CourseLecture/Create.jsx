import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";
import CourseCardDetail from "../Course/CourseCardDetail";
import { FiArrowLeft } from "react-icons/fi";
import { Save } from "lucide-react";

export default function Create({ course, course_section }) {
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
        course_id: course.id,
        course_section_id: course_section.id,
        title: "",
        video: "",
        description: "",
    });

    // useEffect(() => {
    //     setData({
    //         ...data,
    //         course_id: course_section ? course_section.course_id : "",
    //         course_section_id: course_section ? course_section.id : "",
    //     });
    // }, [course_section]);

    // let {
    //     props: { request },
    // } = usePage();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // request.selected_course_id = course_section.course_id;
        // const query = new URLSearchParams(request).toString();

        // post(`/user_area/course_lecture?${query}`, {
        post(
            route("user_area.course_lecture.store", {
                course: course,
                course_section: course_section,
            }),
            {
                preserveScroll: true,
                preserveState: true,
                onError: (error) => {
                    console.log("data", data);
                    console.log("error", error);
                },
            }
        );
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
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Create Courses Sections
                </h2>
            }
        >
            <Head title="Create Course Section" />

            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <Link
                            href={route("user_area.course_section.index", {
                                course: course,
                            })}
                            preserveState={true}
                            className="btn btn-neutral"
                        >
                            <FiArrowLeft />
                            Back to Course Section
                        </Link>
                    </div>
                    <div className="mb-6">
                        <CourseCardDetail course={course} />
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <form onSubmit={onSubmitHandler} className="card-body">
                            <h2 className="card-title mb-6">
                                Create new Lecture for section{" "}
                                <span className="text-primary">
                                    {course_section ? course_section.title : ""}
                                </span>
                            </h2>
                            <div className="mb-6">
                                <label className="form-control w-full mb-6">
                                    <div className="label">
                                        <span className="label-text">
                                            Video
                                        </span>
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
                                        <span className="label-text">
                                            Title
                                        </span>
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
                                        <span className="label-text">
                                            Description
                                        </span>
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
                                <Link
                                    href={route(
                                        "user_area.course_section.index",
                                        {
                                            course: course,
                                        }
                                    )}
                                    className="btn btn-neutral"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </UserAreaLayout>
    );
}
