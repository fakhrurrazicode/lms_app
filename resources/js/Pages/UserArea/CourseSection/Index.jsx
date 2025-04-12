import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";
import CourseCardDetail from "../Course/CourseCardDetail";
import { FiArrowLeft } from "react-icons/fi";
import { Edit, Plus, Trash, Video } from "lucide-react";
import { FaPlus } from "react-icons/fa";

export default function Index({ course, course_sections }) {
    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Section Kursus
                </h2>
            }
        >
            <Head title="Course Section" />
            <div className="">
                <div className="w-full">
                    <div className="mb-6">
                        <Link
                            href={route("user_area.course.index")}
                            preserveState={true}
                            className="btn btn-neutral"
                        >
                            <FiArrowLeft />
                            Kembali
                        </Link>
                    </div>
                    <div className="mb-6">
                        <CourseCardDetail course={course} />
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="mb-6">
                                <Link
                                    preserveState={true}
                                    href={route(
                                        "user_area.course_section.create",
                                        { course: course }
                                    )}
                                    className="btn btn-primary"
                                >
                                    <Plus size={16} />{" "}
                                    <span>Tambah Section Baru</span>
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                {course_sections.length > 0 ? (
                                    course_sections.map(
                                        (course_section, index) => {
                                            return (
                                                <div className="card card-side bg-base-100 border border-base-200 shadow-xl items-start">
                                                    <div className="card-body">
                                                        <div className="flex justify-between items-center mb-6">
                                                            <h2 className="card-title text-md text-primary text-md">
                                                                <Link href="#">
                                                                    {
                                                                        course_section.title
                                                                    }
                                                                </Link>
                                                            </h2>
                                                            <div className="flex gap-2">
                                                                <Link
                                                                    href={route(
                                                                        "user_area.course_section.edit",
                                                                        {
                                                                            course: course,
                                                                            course_section:
                                                                                course_section,
                                                                        }
                                                                    )}
                                                                    className="btn btn-xs min-h-7 px-2 btn-accent"
                                                                >
                                                                    <Edit
                                                                        size={
                                                                            16
                                                                        }
                                                                    />{" "}
                                                                    <span>
                                                                        Perbaharui
                                                                        Section
                                                                    </span>
                                                                </Link>

                                                                <button
                                                                    className="btn btn-xs min-h-7 px-2 btn-error"
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.preventDefault();

                                                                        if (
                                                                            confirm(
                                                                                "Apakah anda yakin ingin menghapus data section " +
                                                                                    course_section.title +
                                                                                    "?"
                                                                            )
                                                                        ) {
                                                                            router.delete(
                                                                                route(
                                                                                    "user_area.course_section.destroy",
                                                                                    {
                                                                                        course: course,
                                                                                        course_section:
                                                                                            course_section,
                                                                                    }
                                                                                ),
                                                                                {
                                                                                    preserveScroll: true,
                                                                                    preserveState: true,
                                                                                }
                                                                            );
                                                                        }
                                                                    }}
                                                                >
                                                                    <Trash
                                                                        size={
                                                                            16
                                                                        }
                                                                    />{" "}
                                                                    <span>
                                                                        Hapus
                                                                        Section
                                                                    </span>
                                                                </button>

                                                                <Link
                                                                    href={route(
                                                                        "user_area.course_lecture.create",
                                                                        {
                                                                            course: course,
                                                                            course_section:
                                                                                course_section,
                                                                        }
                                                                    )}
                                                                    className="btn btn-xs min-h-7 px-2 btn-secondary"
                                                                >
                                                                    <Plus
                                                                        size={
                                                                            16
                                                                        }
                                                                    />{" "}
                                                                    <span>
                                                                        Tambah
                                                                        Lecture
                                                                        Baru
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="pl-6 border-l-8 border-primary">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th></th>
                                                                        <th>
                                                                            Lectures
                                                                        </th>
                                                                        <th>
                                                                            Video
                                                                        </th>

                                                                        <th className="text-center">
                                                                            Video
                                                                            pratinjau
                                                                        </th>

                                                                        <th className="text-center">
                                                                            Video
                                                                            unggulan
                                                                            (hanya
                                                                            1)
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {course_section
                                                                        .course_lectures
                                                                        .length ? (
                                                                        course_section.course_lectures.map(
                                                                            (
                                                                                course_lecture,
                                                                                _index
                                                                            ) => (
                                                                                <tr
                                                                                    key={
                                                                                        _index
                                                                                    }
                                                                                >
                                                                                    <td className="whitespace-nowrap gap-2 flex w-auto">
                                                                                        <Link
                                                                                            href={route(
                                                                                                "user_area.course_lecture.edit",
                                                                                                {
                                                                                                    course: course,
                                                                                                    course_section:
                                                                                                        course_section,
                                                                                                    course_lecture:
                                                                                                        course_lecture,
                                                                                                }
                                                                                            )}
                                                                                            className="btn btn-xs min-h-7 px-2 btn-accent"
                                                                                        >
                                                                                            <Edit
                                                                                                size={
                                                                                                    16
                                                                                                }
                                                                                            />{" "}
                                                                                            <span>
                                                                                                Perbaharui
                                                                                                Lecture
                                                                                            </span>
                                                                                        </Link>

                                                                                        <button
                                                                                            className="btn btn-xs min-h-7 px-2 btn-error"
                                                                                            onClick={(
                                                                                                e
                                                                                            ) => {
                                                                                                e.preventDefault();

                                                                                                if (
                                                                                                    confirm(
                                                                                                        "Apakah anda yakin ingin menghapus data lecture " +
                                                                                                            course_lecture.title +
                                                                                                            "?"
                                                                                                    )
                                                                                                )
                                                                                                    router.delete(
                                                                                                        route(
                                                                                                            "user_area.course_lecture.destroy",
                                                                                                            {
                                                                                                                course: course,
                                                                                                                course_section:
                                                                                                                    course_section,
                                                                                                                course_lecture:
                                                                                                                    course_lecture,
                                                                                                            }
                                                                                                        ),
                                                                                                        {
                                                                                                            preserveScroll: true,
                                                                                                            preserveState: true,
                                                                                                        }
                                                                                                    );
                                                                                            }}
                                                                                        >
                                                                                            <Trash
                                                                                                size={
                                                                                                    16
                                                                                                }
                                                                                            />{" "}
                                                                                            <span>
                                                                                                Hapus
                                                                                                Lecture
                                                                                            </span>
                                                                                        </button>
                                                                                    </td>
                                                                                    <td>
                                                                                        {
                                                                                            course_lecture.title
                                                                                        }
                                                                                    </td>
                                                                                    <td>
                                                                                        <a
                                                                                            className="text-primary flex gap-2 items-center"
                                                                                            href={
                                                                                                course_lecture.video_url
                                                                                            }
                                                                                            target="_blank"
                                                                                        >
                                                                                            <Video
                                                                                                size={
                                                                                                    16
                                                                                                }
                                                                                            />
                                                                                            <span>
                                                                                                {
                                                                                                    course_lecture.video_duration_human_readable
                                                                                                }
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                    <td className="text-center">
                                                                                        <input
                                                                                            type="checkbox"
                                                                                            className="toggle toggle-primary toggle-xs"
                                                                                            checked={
                                                                                                course_lecture.set_as_preview
                                                                                            }
                                                                                            onChange={(
                                                                                                e
                                                                                            ) => {
                                                                                                console.log(
                                                                                                    e
                                                                                                        .target
                                                                                                        .value
                                                                                                );
                                                                                                console.log(
                                                                                                    e
                                                                                                        .target
                                                                                                        .checked
                                                                                                );

                                                                                                router.put(
                                                                                                    route(
                                                                                                        "user_area.course.set_as_preview",
                                                                                                        {
                                                                                                            course: course.id,
                                                                                                            course_section:
                                                                                                                course_section.id,
                                                                                                            course_lecture:
                                                                                                                course_lecture.id,
                                                                                                        }
                                                                                                    ),
                                                                                                    {
                                                                                                        set_as_preview:
                                                                                                            e
                                                                                                                .target
                                                                                                                .checked
                                                                                                                ? 1
                                                                                                                : 0,
                                                                                                    },
                                                                                                    {
                                                                                                        preserveScroll: true,
                                                                                                        preserveState: true,
                                                                                                    }
                                                                                                );
                                                                                            }}
                                                                                        />
                                                                                    </td>
                                                                                    <td className="text-center">
                                                                                        <input
                                                                                            type="checkbox"
                                                                                            className="toggle toggle-primary toggle-xs"
                                                                                            checked={
                                                                                                course_lecture.set_as_featured
                                                                                            }
                                                                                            onChange={(
                                                                                                e
                                                                                            ) => {
                                                                                                console.log(
                                                                                                    e
                                                                                                        .target
                                                                                                        .value
                                                                                                );
                                                                                                console.log(
                                                                                                    e
                                                                                                        .target
                                                                                                        .checked
                                                                                                );

                                                                                                router.put(
                                                                                                    route(
                                                                                                        "user_area.course.set_as_featured",
                                                                                                        {
                                                                                                            course: course.id,
                                                                                                            course_section:
                                                                                                                course_section.id,
                                                                                                            course_lecture:
                                                                                                                course_lecture.id,
                                                                                                        }
                                                                                                    ),
                                                                                                    {
                                                                                                        set_as_featured:
                                                                                                            e
                                                                                                                .target
                                                                                                                .checked
                                                                                                                ? 1
                                                                                                                : 0,
                                                                                                    },
                                                                                                    {
                                                                                                        preserveScroll: true,
                                                                                                        preserveState: true,
                                                                                                    }
                                                                                                );
                                                                                            }}
                                                                                        />
                                                                                    </td>
                                                                                </tr>
                                                                            )
                                                                        )
                                                                    ) : (
                                                                        <tr>
                                                                            <td
                                                                                colSpan={
                                                                                    5
                                                                                }
                                                                                className="text-center"
                                                                            >
                                                                                Belum
                                                                                ada
                                                                                data
                                                                                lecture
                                                                                <Link
                                                                                    href={route(
                                                                                        "user_area.course_lecture.create",
                                                                                        {
                                                                                            course: course,
                                                                                            course_section:
                                                                                                course_section,
                                                                                        }
                                                                                    )}
                                                                                    className="btn btn-link text-secondary px-2"
                                                                                >
                                                                                    Tambah
                                                                                    lecture
                                                                                    Baru
                                                                                </Link>
                                                                            </td>
                                                                        </tr>
                                                                    )}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )
                                ) : (
                                    <div className="text-center py-6 italic">
                                        <span>Belum ada data section </span>
                                        <Link
                                            href={route(
                                                "user_area.course_section.create",
                                                {
                                                    course: course.id,
                                                }
                                            )}
                                            className="btn btn-link px-0"
                                        >
                                            <span>Tambah Baru</span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserAreaLayout>
    );
}
