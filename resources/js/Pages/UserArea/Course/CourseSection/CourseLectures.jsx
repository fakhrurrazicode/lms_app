import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";
import { Edit, Plus, Trash, Video } from "lucide-react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

import CourseManageTab from "../CourseManageTab";

import { toast } from "react-toastify";
import { FaArrowDown, FaArrowUp, FaFile } from "react-icons/fa";
import FileIconByType from "@/Components/Custom/FileIconByType";

export default function CourseLectures({ course, course_sections }) {
    const courseSectionDeleteHandler = (course_section) => {
        if (
            confirm(
                "Apakah anda yakin ingin menghapus data bagian " +
                    course_section.title +
                    "?"
            )
        )
            router.delete(
                route("user_area.course.course_section.destroy", {
                    course: course_section.course_id,
                    course_section: course_section.id,
                }),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onFinish: () => {
                        toast.success("Bagian Kursus berhasil dihapus");
                    },
                    onError: () => {
                        toast.success("Bagian Kursus gagal di hapus");
                    },
                }
            );
    };

    const courseLectureDeleteHandler = (course_lecture) => {
        if (
            confirm(
                "Apakah anda yakin ingin menghapus data pelajaran " +
                    course_lecture.title +
                    "?"
            )
        )
            router.delete(
                route(
                    "user_area.course.course_section.course_lecture.destroy",
                    {
                        course: course_lecture.course_id,
                        course_section: course_lecture.course_section_id,
                        course_lecture: course_lecture.id,
                    }
                ),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onFinish: () => {
                        toast.success("Pelajaran Kursus berhasil dihapus");
                    },
                    onError: () => {
                        toast.success("Pelajaran Kursus gagal di hapus");
                    },
                }
            );
    };

    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Bagian dan Pelajaran Kursus
                </h2>
            }
        >
            <Head title="Bagian Kursus" />

            <div className="w-full">
                <CourseManageTab course={course} />

                <div className="card bg-base-100 shadow-xl rounded-t-none">
                    <div className="card-body">
                        <div className="overflow-x-auto">
                            <div className="mb-6">
                                <h3 className="text-primary text-xl font-bold mb-2">
                                    Bagian dan Pelajaran
                                </h3>
                                <p className="text-sm">
                                    Pembagian materi kursus menjadi beberapa
                                    bagian atau modul yang lebih terstruktur.
                                    Setiap Bagian biasanya berisi sekelompok
                                    topik terkait yang membantu peserta kursus
                                    memahami materi secara bertahap.
                                </p>
                            </div>
                            <div className="mb-6">
                                <div>
                                    <Link
                                        href={route(
                                            "user_area.course.course_section.create",
                                            {
                                                course: course.id,
                                            }
                                        )}
                                        className="btn btn-primary"
                                    >
                                        <Plus size={16} />
                                        <span>Buat Bagian Baru</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <th>Judul</th>
                                            <th>Video</th>
                                            <th>
                                                Sebagai
                                                <br />
                                                Video
                                                <br />
                                                pratinjau
                                            </th>
                                            <th>
                                                Sebagai
                                                <br />
                                                Video
                                                <br />
                                                unggulan
                                                <br />
                                                (hanya 1)
                                            </th>
                                            <th>Lampiran</th>
                                            <th>Urutkan</th>
                                            <th>Action</th>
                                        </thead>
                                        <tbody>
                                            {course_sections.length ? (
                                                course_sections.map(
                                                    (course_section, index) => (
                                                        <>
                                                            <tr
                                                                key={
                                                                    course_section.id +
                                                                    "-" +
                                                                    index
                                                                }
                                                                className="hover"
                                                            >
                                                                <td className="font-bold">
                                                                    {
                                                                        course_section.title
                                                                    }
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td>
                                                                    <div className="flex gap-1">
                                                                        <button
                                                                            className="btn btn-success btn-xs"
                                                                            disabled={
                                                                                index ==
                                                                                0
                                                                            }
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                e.preventDefault();

                                                                                router.post(
                                                                                    route(
                                                                                        "user_area.course.course_section.move_order_up",
                                                                                        {
                                                                                            course: course.id,
                                                                                            course_section:
                                                                                                course_section.id,
                                                                                        }
                                                                                    ),
                                                                                    null,
                                                                                    {
                                                                                        preserveScroll: true,
                                                                                        preserveState: true,
                                                                                    }
                                                                                );
                                                                            }}
                                                                        >
                                                                            <FaArrowUp />
                                                                        </button>
                                                                        <button
                                                                            className="btn btn-error btn-xs"
                                                                            disabled={
                                                                                index +
                                                                                    1 ==
                                                                                course_sections.length
                                                                            }
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                e.preventDefault();

                                                                                router.post(
                                                                                    route(
                                                                                        "user_area.course.course_section.move_order_down",
                                                                                        {
                                                                                            course: course.id,
                                                                                            course_section:
                                                                                                course_section.id,
                                                                                        }
                                                                                    ),
                                                                                    null,
                                                                                    {
                                                                                        preserveScroll: true,
                                                                                        preserveState: true,
                                                                                    }
                                                                                );
                                                                            }}
                                                                        >
                                                                            <FaArrowDown />
                                                                        </button>
                                                                    </div>
                                                                </td>

                                                                <td className="flex gap-1">
                                                                    <Link
                                                                        href={route(
                                                                            "user_area.course.course_section.edit",
                                                                            {
                                                                                course: course_section.course_id,
                                                                                course_section:
                                                                                    course_section.id,
                                                                            }
                                                                        )}
                                                                        className="btn btn-info btn-xs"
                                                                    >
                                                                        <Edit
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                        <span>
                                                                            Ubah
                                                                        </span>
                                                                    </Link>
                                                                    <button
                                                                        className="btn btn-error btn-xs"
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            e.preventDefault();
                                                                            courseSectionDeleteHandler(
                                                                                course_section
                                                                            );
                                                                        }}
                                                                    >
                                                                        <Trash
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                        <span>
                                                                            Hapus
                                                                        </span>
                                                                    </button>
                                                                    <Link
                                                                        href={route(
                                                                            "user_area.course.course_section.course_lecture.create",
                                                                            {
                                                                                course: course_section.course_id,
                                                                                course_section:
                                                                                    course_section.id,
                                                                            }
                                                                        )}
                                                                        className="btn btn-primary btn-xs"
                                                                    >
                                                                        <Edit
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                        <span>
                                                                            Tambah
                                                                            Pelajaran
                                                                        </span>
                                                                    </Link>
                                                                </td>
                                                            </tr>

                                                            {course_section
                                                                .course_lectures
                                                                .length ? (
                                                                course_section.course_lectures.map(
                                                                    (
                                                                        course_lecture,
                                                                        index
                                                                    ) => (
                                                                        <tr
                                                                            key={
                                                                                course_lecture.id +
                                                                                "-" +
                                                                                index
                                                                            }
                                                                            className="hover"
                                                                        >
                                                                            <td className="pl-10">
                                                                                <div className="flex gap-4">
                                                                                    <MdOutlineSubdirectoryArrowRight
                                                                                        size={
                                                                                            16
                                                                                        }
                                                                                    />
                                                                                    <span>
                                                                                        {
                                                                                            course_lecture.title
                                                                                        }
                                                                                    </span>
                                                                                </div>
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
                                                                            <td>
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
                                                                                                "user_area.course.course_section.course_lecture.set_as_preview",
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
                                                                            <td>
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
                                                                                                "user_area.course.course_section.course_lecture.set_as_featured",
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
                                                                            <td className="">
                                                                                <ul className="flex gap-2">
                                                                                    {course_lecture
                                                                                        .attachments
                                                                                        .length >
                                                                                    0 ? (
                                                                                        <>
                                                                                            {course_lecture.attachments.map(
                                                                                                (
                                                                                                    attachment
                                                                                                ) => (
                                                                                                    <li className="">
                                                                                                        <a
                                                                                                            target="_blank"
                                                                                                            className="text-primary"
                                                                                                            title={
                                                                                                                attachment.filename
                                                                                                            }
                                                                                                            href={
                                                                                                                attachment.file_url
                                                                                                            }
                                                                                                        >
                                                                                                            <FileIconByType
                                                                                                                filename={
                                                                                                                    attachment.filename
                                                                                                                }
                                                                                                                size={
                                                                                                                    24
                                                                                                                }
                                                                                                                className="text-primary"
                                                                                                            />
                                                                                                        </a>
                                                                                                    </li>
                                                                                                )
                                                                                            )}
                                                                                        </>
                                                                                    ) : (
                                                                                        <>

                                                                                        </>
                                                                                    )}
                                                                                </ul>
                                                                            </td>
                                                                            <td>
                                                                                <div className="flex gap-1">
                                                                                    <button
                                                                                        className="btn btn-success btn-xs"
                                                                                        disabled={
                                                                                            index ==
                                                                                            0
                                                                                        }
                                                                                        onClick={(
                                                                                            e
                                                                                        ) => {
                                                                                            e.preventDefault();

                                                                                            router.post(
                                                                                                route(
                                                                                                    "user_area.course.course_section.course_lecture.move_order_up",
                                                                                                    {
                                                                                                        course: course.id,
                                                                                                        course_section:
                                                                                                            course_section.id,
                                                                                                        course_lecture:
                                                                                                            course_lecture.id,
                                                                                                    }
                                                                                                ),
                                                                                                null,
                                                                                                {
                                                                                                    preserveScroll: true,
                                                                                                    preserveState: true,
                                                                                                }
                                                                                            );
                                                                                        }}
                                                                                    >
                                                                                        <FaArrowUp />
                                                                                    </button>
                                                                                    <button
                                                                                        className="btn btn-error btn-xs"
                                                                                        disabled={
                                                                                            index +
                                                                                                1 ==
                                                                                            course_section
                                                                                                .course_lectures
                                                                                                .length
                                                                                        }
                                                                                        onClick={(
                                                                                            e
                                                                                        ) => {
                                                                                            e.preventDefault();

                                                                                            router.post(
                                                                                                route(
                                                                                                    "user_area.course.course_section.course_lecture.move_order_down",
                                                                                                    {
                                                                                                        course: course.id,
                                                                                                        course_section:
                                                                                                            course_section.id,
                                                                                                        course_lecture:
                                                                                                            course_lecture.id,
                                                                                                    }
                                                                                                ),
                                                                                                null,
                                                                                                {
                                                                                                    preserveScroll: true,
                                                                                                    preserveState: true,
                                                                                                }
                                                                                            );
                                                                                        }}
                                                                                    >
                                                                                        <FaArrowDown />
                                                                                    </button>
                                                                                </div>
                                                                            </td>
                                                                            <td className="flex gap-1">
                                                                                <Link
                                                                                    href={route(
                                                                                        "user_area.course.course_section.course_lecture.edit",
                                                                                        {
                                                                                            course: course_lecture.course_id,
                                                                                            course_section:
                                                                                                course_lecture.course_section_id,
                                                                                            course_lecture:
                                                                                                course_lecture.id,
                                                                                        }
                                                                                    )}
                                                                                    className="btn btn-info btn-xs"
                                                                                >
                                                                                    <Edit
                                                                                        size={
                                                                                            16
                                                                                        }
                                                                                    />
                                                                                    <span>
                                                                                        Ubah
                                                                                    </span>
                                                                                </Link>
                                                                                <button
                                                                                    className="btn btn-error btn-xs"
                                                                                    onClick={(
                                                                                        e
                                                                                    ) => {
                                                                                        e.preventDefault();
                                                                                        courseLectureDeleteHandler(
                                                                                            course_lecture
                                                                                        );
                                                                                    }}
                                                                                >
                                                                                    <Trash
                                                                                        size={
                                                                                            16
                                                                                        }
                                                                                    />
                                                                                    <span>
                                                                                        Hapus
                                                                                    </span>
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                )
                                                            ) : (
                                                                <></>
                                                            )}
                                                        </>
                                                    )
                                                )
                                            ) : (
                                                <></>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserAreaLayout>
    );
}
