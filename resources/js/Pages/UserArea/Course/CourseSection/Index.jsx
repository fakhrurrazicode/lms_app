import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router } from "@inertiajs/react";
import React, { useState } from "react";
import CourseCardDetail from "../../Course/CourseCardDetail";
import { FiArrowLeft } from "react-icons/fi";
import {
    ChevronLeft,
    ChevronRight,
    Edit,
    Plus,
    Trash,
    Video,
} from "lucide-react";
import { FaPlus, FaQuestion } from "react-icons/fa";
import CourseManageTab from "../CourseManageTab";
import ReactModal from "react-modal";
import Form from "./ModalForm";
import ModalForm from "./ModalForm";
import { toast } from "react-toastify";

import { AiOutlineEnter } from "react-icons/ai";
import ModalFormCourseLecture from "./ModalFormCourseLecture";

export default function Index({ course, course_sections }) {
    const [modalFormIsOpen, setModalFormIsOpen] = useState(false);
    const [modalFormCourseLectureIsOpen, setModalFormCourseLectureIsOpen] =
        useState(false);
    const [selectedCourseSection, setSelectedCourseSection] = useState(null);
    const [selectedCourseLecture, setSelectedCourseLecture] = useState(null);

    const courseSectionEditHandler = (course_section) => {
        setSelectedCourseSection(course_section);
        setModalFormIsOpen(true);
    };

    const courseLectureEditHandler = (course_section, course_lecture) => {
        setSelectedCourseSection(course_section);
        setSelectedCourseLecture(course_lecture);
        setModalFormCourseLectureIsOpen(true);
    };
    const courseSectionDeleteHandler = (course_section) => {
        if (
            confirm(
                "Apakah anda yakin ingin menghapus data section " +
                    course_section.title +
                    "?"
            )
        )
            router.delete(
                route("user_area.course_section.destroy", {
                    course_section,
                }),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onFinish: () => {
                        toast.success("Course Section berhasil dihapus");
                    },
                    onError: () => {
                        toast.success("Course Section gagal di hapus");
                    },
                }
            );
    };

    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Bagian Kursus
                </h2>
            }
        >
            <Head title="Bagian Kursus" />

            <ModalForm
                isOpen={modalFormIsOpen}
                setIsOpen={setModalFormIsOpen}
                course={course}
                course_section={selectedCourseSection}
            />

            <ModalFormCourseLecture
                isOpen={modalFormCourseLectureIsOpen}
                setIsOpen={setModalFormCourseLectureIsOpen}
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
                                <h3 className="text-primary text-xl font-bold mb-2">
                                    Bagian
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
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => setModalFormIsOpen(true)}
                                    >
                                        <Plus size={16} />
                                        <span>Buat Section Baru</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>Judul Section/Lecture</th>

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

                                                                <td className="flex gap-1">
                                                                    <button
                                                                        className="btn btn-secondary btn-xs"
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            e.preventDefault();
                                                                            courseSectionEditHandler(
                                                                                course_section
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
                                                                </td>
                                                            </tr>
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
