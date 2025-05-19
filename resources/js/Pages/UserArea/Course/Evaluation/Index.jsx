import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

import { Edit, Plus, Trash, Video } from "lucide-react";

import CourseManageTab from "../CourseManageTab";

import { toast } from "react-toastify";

import { AiOutlineEnter } from "react-icons/ai";
import ModalForm from "./ModalForm";
import ModalFormQuestion from "./ModalFormQuestion";

export default function Index({ course, course_sections }) {
    const [modalFormIsOpen, setModalFormIsOpen] = useState(false);
    const [modalFormQuestionIsOpen, setModalFormQuestionIsOpen] =
        useState(false);
    const [selectedCourseSection, setSelectedCourseSection] = useState(null);
    const [selectedEvaluation, setSelectedEvaluation] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const onEditHandler = (course_section, evaluation) => {
        setSelectedCourseSection(course_section);
        setSelectedEvaluation(evaluation);
        setModalFormIsOpen(true);
    };

    const onDeleteHandler = (evaluation) => {
        if (
            confirm(
                "Apakah anda yakin ingin menghapus data lecture " +
                    evaluation.title +
                    "?"
            )
        )
            router.delete(
                route("user_area.evaluation.destroy", {
                    evaluation,
                }),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onFinish: () => {
                        toast.success("Evaluation berhasil dihapus");
                    },
                    onError: () => {
                        toast.success("Evaluation gagal di hapus");
                    },
                }
            );
    };

    useEffect(() => {
        if (modalFormIsOpen == false) {
            setSelectedCourseSection(null);
            setSelectedEvaluation(null);
        }
    }, [modalFormIsOpen]);

    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Evaluation Kursus
                </h2>
            }
        >
            <Head title="Evaluation" />

            <ModalForm
                isOpen={modalFormIsOpen}
                setIsOpen={setModalFormIsOpen}
                course={course}
                course_section={selectedCourseSection}
                evaluation={selectedEvaluation}
            />

            <ModalFormQuestion
                isOpen={modalFormQuestionIsOpen}
                setIsOpen={setModalFormQuestionIsOpen}
                evaluation={selectedEvaluation}
                question={selectedQuestion}
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
                                        <span>Buat Evaluation Baru</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>Judul/Evaluation</th>
                                                <th>Instruksi</th>
                                                <th>Durasi</th>
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

                                                                <td className="flex gap-1"></td>
                                                            </tr>

                                                            {(() => {
                                                                let evaluation =
                                                                    course_section.evaluation;

                                                                return evaluation ? (
                                                                    <tr
                                                                        key={
                                                                            evaluation.id +
                                                                            "-" +
                                                                            index
                                                                        }
                                                                        className="hover"
                                                                    >
                                                                        <td className="pl-10">
                                                                            {
                                                                                evaluation.title
                                                                            }
                                                                        </td>

                                                                        <td>
                                                                            {
                                                                                evaluation.instructions
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                evaluation.duration
                                                                            }
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
                                                                                        evaluation
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
                                                                                        evaluation
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
                                                                            <button
                                                                                className="btn btn-info btn-xs"
                                                                                onClick={() => {
                                                                                    setSelectedEvaluation(
                                                                                        evaluation
                                                                                    );
                                                                                    setModalFormQuestionIsOpen(
                                                                                        true
                                                                                    );
                                                                                }}
                                                                            >
                                                                                <span>
                                                                                    Tambah
                                                                                    Pertanyaan
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
                                                                ) : (
                                                                    <></>
                                                                );
                                                            })()}
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
