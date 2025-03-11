import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";
import CourseCardDetail from "../Course/CourseCardDetail";
import { FiArrowLeft } from "react-icons/fi";
import { Save } from "lucide-react";

export default function Edit({ course, course_section }) {
    const { data, setData, put, errors, reset, clearErrors } = useForm({
        course_id: course_section.course_id,
        title: course_section.title,
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        data.course_id = course.id;

        put(
            route("backend.course_section.update", {
                course: course,
                course_section: course_section,
            }),
            {
                onError: (error) => {
                    console.log("error", error);
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
        <BackendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Edit Courses Sections
                </h2>
            }
        >
            <Head title="Edit Course Section" />

            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <Link
                            href={route("backend.course_section.index", {
                                course: course,
                            })}
                            preserveState={true}
                            className="btn btn-neutral"
                        >
                            <FiArrowLeft />
                            Back to Course
                        </Link>
                    </div>
                    <div className="mb-6">
                        <CourseCardDetail course={course} />
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <form onSubmit={onSubmitHandler} className="card-body">
                            <h2 className="card-title mb-6">Edit Section</h2>
                            <div className="mb-6">
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
                            </div>

                            <div className="card-actions justify-end">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    <Save size={16} />
                                    <span>Update</span>
                                </button>
                                <Link
                                    href={route(
                                        "backend.course_section.index",
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
        </BackendLayout>
    );
}
