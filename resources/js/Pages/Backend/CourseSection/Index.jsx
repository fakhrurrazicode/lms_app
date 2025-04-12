import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";
import CourseCardDetail from "../Course/CourseCardDetail";
import { FiArrowLeft } from "react-icons/fi";
import { Edit, Plus, Trash, Video } from "lucide-react";

export default function Index({ course, course_sections }) {
    return (
        <BackendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Courses Sections
                </h2>
            }
        >
            <Head title="Course Section" />
            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <Link
                            href={route("backend.course.index")}
                            preserveState={true}
                            className="btn btn-neutral"
                        >
                            <FiArrowLeft />
                            Back
                        </Link>
                    </div>
                    <div className="mb-6">
                        <CourseCardDetail course={course} />
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div>
                                <Link
                                    preserveState={true}
                                    href={route(
                                        "backend.course_section.create",
                                        { course: course }
                                    )}
                                    className="btn btn-primary"
                                >
                                    <Plus size={16} />{" "}
                                    <span>Add new Section</span>
                                </Link>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="whitespace-nowrap"></th>
                                            <th className="whitespace-nowrap">
                                                Sections/Lectures
                                            </th>
                                            <th className="whitespace-nowrap">
                                                Video
                                            </th>
                                            <th className="text-center">
                                                Tetapkan <br />
                                                sebagai <br />
                                                video <br />
                                                pratinjau
                                            </th>

                                            <th className="text-center">
                                                Tetapkan <br />
                                                sebagai <br />
                                                video unggulan <br />
                                                (hanya 1)
                                            </th>

                                            {/* <th>Dibuat di</th>
                                            <th>Diperbarui di</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {course_sections.length > 0 ? (
                                            course_sections.map(
                                                (course_section, index) => {
                                                    console.log(
                                                        "CourseSectionsTable.course_sections.course_lectures",
                                                        course_sections
                                                    );
                                                    return (
                                                        <React.Fragment
                                                            key={index}
                                                        >
                                                            <tr>
                                                                <td className="whitespace-nowrap gap-2 flex w-auto">
                                                                    <Link
                                                                        href={route(
                                                                            "backend.course_section.edit",
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
                                                                            Edit
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
                                                                                        "backend.course_section.destroy",
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
                                                                            Delete
                                                                            Section
                                                                        </span>
                                                                    </button>

                                                                    <Link
                                                                        href={route(
                                                                            "backend.course_lecture.create",
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
                                                                            Add
                                                                            new
                                                                            Lecture
                                                                        </span>
                                                                    </Link>
                                                                </td>
                                                                <td className="whitespace-nowrap">
                                                                    {
                                                                        course_section.title
                                                                    }
                                                                </td>
                                                                <td className="whitespace-nowrap"></td>
                                                                <td className="whitespace-nowrap"></td>
                                                                <td className="whitespace-nowrap"></td>
                                                                {/* <td className="whitespace-nowrap">
                                                                    {
                                                                        course_section.created_at
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {course_section.created_at !==
                                                                    course_section.updated_at
                                                                        ? course_section.updated_at
                                                                        : ""}
                                                                </td> */}
                                                            </tr>
                                                            {course_section.course_lectures &&
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
                                                                            <td className="whitespace-nowrap gap-2 flex w-auto !ps-16">
                                                                                <Link
                                                                                    href={route(
                                                                                        "backend.course_lecture.edit",
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
                                                                                        Edit
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
                                                                                                    "backend.course_lecture.destroy",
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
                                                                                        Delete
                                                                                        Lecture
                                                                                    </span>
                                                                                </button>
                                                                            </td>
                                                                            <td className="!ps-16">
                                                                                {
                                                                                    course_lecture.title
                                                                                }
                                                                            </td>
                                                                            <td>
                                                                                <a
                                                                                    className="text-primary"
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
                                                                                                "backend.course.set_as_preview",
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
                                                                                                "backend.course.set_as_featured",
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
                                                                            {/* <td>
                                                                                {
                                                                                    course_lecture.created_at
                                                                                }
                                                                            </td>
                                                                            <td>
                                                                                {course_lecture.created_at !==
                                                                                course_lecture.updated_at
                                                                                    ? course_lecture.updated_at
                                                                                    : ""}
                                                                            </td> */}
                                                                        </tr>
                                                                    )
                                                                )}
                                                        </React.Fragment>
                                                    );
                                                }
                                            )
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan={7}
                                                    className="py-2 text-center"
                                                >
                                                    No Data
                                                </td>
                                            </tr>
                                        )}
                                        {/* <tr className="hover">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td></td>
                            <td>Blue</td>
                        </tr>

                        <tr className="hover">
                            <th>2</th>
                            <td></td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>

                        <tr className="hover">
                            <th>3</th>
                            <td></td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BackendLayout>
    );
}
