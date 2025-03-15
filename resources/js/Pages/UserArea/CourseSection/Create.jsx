import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";
import CourseCardDetail from "../Course/CourseCardDetail";
import { FiArrowLeft } from "react-icons/fi";
import { Save } from "lucide-react";

export default function Create({ course, course_section }) {
    const { data, setData, post, errors, reset, clearErrors } = useForm({
        course_id: course.id,
        title: "",
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // data.course_id = course.id;

        post(
            route("user_area.course_section.store", {
                course: course,
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
                            Back to Course
                        </Link>
                    </div>
                    <div className="mb-6">
                        <CourseCardDetail course={course} />
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <form onSubmit={onSubmitHandler} className="card-body">
                            <h2 className="card-title mb-6">
                                Create new Section
                            </h2>
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
