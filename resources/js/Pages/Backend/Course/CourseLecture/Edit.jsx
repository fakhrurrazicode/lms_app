import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

import { FiArrowLeft } from "react-icons/fi";
import { Save } from "lucide-react";

export default function Edit({ course, course_section, course_lecture }) {
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
        title: course_lecture.title,
        video: null,
        description: course_lecture.description,
    });

    // useEffect(() => {
    //     // setData("title", courseLecture ? courseLecture.title : "");
    //     setData({
    //         ...data,
    //         course_id: courseLecture ? courseLecture.course_id : "",
    //         course_section_id: courseLecture
    //             ? courseLecture.course_section_id
    //             : "",
    //         title: courseLecture ? courseLecture.title : "",
    //         description: courseLecture ? courseLecture.description : "",
    //     });
    // }, [courseLecture]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // post(
        //     `/user_area/course_lecture/${
        //         courseLecture ? courseLecture.id : ""
        //     }?${query}`,
        post(
            route("backend.course_lecture.update", {
                course: course,
                course_section: course_section,
                course_lecture: course_lecture,
            }),
            {
                preserveScroll: true,
                preserveState: true,
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
                    Edit Courses Sections
                </h2>
            }
        >
            <Head title="Edit Course Section" />

            <div className="">
                <div className="w-full">
                    <div className="mb-6">
                        <Link
                            href={route("backend.course_section.index", {
                                course: course,
                            })}
                            preserveState={true}
                            className="btn btn-neutral"
                        >
                            <FiArrowLeft />
                            Kembali ke Section
                        </Link>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <form onSubmit={onSubmitHandler} className="card-body">
                            <h2 className="card-title mb-6">
                                Perbaharui Lecture{" "}
                                <span className="text-primary">
                                    {course_lecture ? course_lecture.title : ""}
                                </span>
                            </h2>
                            <div className="mb-6">
                                <label className="form-control w-full max-w-xs mb-6">
                                    <div className="label">
                                        <span className="label-text">
                                            Video
                                        </span>

                                        <span className="label-text-alt">
                                            Abaikan jika tidak ingin mengubah
                                            video
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
                                    <textarea
                                        className="textarea textarea-bordered h-64"
                                        placeholder="Deskripsi Lecture"
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
                                    {processing ? (
                                        <span className="loading loading-spinner loading-md"></span>
                                    ) : (
                                        <Save size={16} />
                                    )}
                                    <span>Perbaharui</span>
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
                                    Batalkan
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </UserAreaLayout>
    );
}
