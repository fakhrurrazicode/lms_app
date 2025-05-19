import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

import { Edit, Plus, Trash, Video } from "lucide-react";

import CourseManageTab from "../CourseManageTab";

import { toast } from "react-toastify";

import { AiOutlineEnter } from "react-icons/ai";
import ModalForm from "./ModalForm";

export default function Index({ course, course_sections }) {
    const [modalFormIsOpen, setModalFormIsOpen] = useState(false);
    const [selectedCourseSection, setSelectedCourseSection] = useState(null);
    const [selectedCourseLecture, setSelectedCourseLecture] = useState(null);

    const onEditHandler = (course_section, course_lecture) => {
        setSelectedCourseSection(course_section);
        setSelectedCourseLecture(course_lecture);
        setModalFormIsOpen(true);
    };

    const onDeleteHandler = (course_lecture) => {
        if (
            confirm(
                "Apakah anda yakin ingin menghapus data lecture " +
                    course_lecture.title +
                    "?"
            )
        )
            router.delete(
                route("user_area.course_lecture.destroy", {
                    course_lecture,
                }),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onFinish: () => {
                        toast.success("Course Lecture berhasil dihapus");
                    },
                    onError: () => {
                        toast.success("Course Lecture gagal di hapus");
                    },
                }
            );
    };

    useEffect(() => {
        if (modalFormIsOpen == false) {
            setSelectedCourseSection(null);
            setSelectedCourseLecture(null);
        }
    }, [modalFormIsOpen]);

    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Lecture Kursus
                </h2>
            }
        >
            <Head title="Course Lecture" />

            <ModalForm
                isOpen={modalFormIsOpen}
                setIsOpen={setModalFormIsOpen}
                course={course}
                course_section={selectedCourseSection}
                course_lecture={selectedCourseLecture}
            />

            <div className="w-full">
                <CourseManageTab course={course} />

                <div className="card bg-base-100 shadow-xl rounded-t-none">
                    <div className="card-body">
                        <div className="overflow-x-auto">
                            <div className="mb-6">
                                <div>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => setModalFormIsOpen(true)}
                                    >
                                        <Plus size={16} />
                                        <span>Buat Lecture Baru</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>Judul/Lecture</th>
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
                                                <th></th>
                                            </tr>
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

                                                                <td className="flex gap-1">
                                                                    <button
                                                                        className="btn btn-info btn-xs"
                                                                        onClick={() => {
                                                                            setSelectedCourseSection(
                                                                                course_section
                                                                            );
                                                                            setModalFormIsOpen(
                                                                                true
                                                                            );
                                                                        }}
                                                                    >
                                                                        <span>
                                                                            Tambah
                                                                            Lecture
                                                                        </span>
                                                                        <AiOutlineEnter
                                                                            size={
                                                                                16
                                                                            }
                                                                            className="-rotate-90"
                                                                        />
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            {course_section.course_lectures.map(
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
                                                                        <td className="flex gap-1">
                                                                            <button
                                                                                className="btn btn-secondary btn-xs"
                                                                                onClick={(
                                                                                    e
                                                                                ) => {
                                                                                    e.preventDefault();
                                                                                    onEditHandler(
                                                                                        course_section,
                                                                                        course_lecture
                                                                                    );
                                                                                }}
                                                                            >
                                                                                <Edit
                                                                                    size={
                                                                                        16
                                                                                    }
                                                                                />
                                                                                <span>
                                                                                    Ubah
                                                                                </span>
                                                                            </button>
                                                                            <button
                                                                                className="btn btn-error btn-xs"
                                                                                onClick={(
                                                                                    e
                                                                                ) => {
                                                                                    e.preventDefault();
                                                                                    onDeleteHandler(
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
