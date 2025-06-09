import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

import { Edit, Plus, Trash, Video } from "lucide-react";

import CourseManageTab from "../CourseManageTab";

import { toast } from "react-toastify";

import { AiOutlineEnter } from "react-icons/ai";
import ModalForm from "./ModalForm";
import ModalFormQuestion from "./ModalFormQuestion";
import classNames from "classnames";

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
                "Apakah anda yakin ingin menghapus data evaluasi " +
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

    const onDeleteQuestionHandler = (question) => {
        if (!confirm("Yakin ingin menghapus pertanyaan ini?")) return;

        router.delete(route("user_area.question.destroy", question.id), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Pertanyaan berhasil dihapus");
            },
            onError: () => {
                toast.error("Gagal menghapus pertanyaan");
            },
        });
    };

    useEffect(() => {
        if (modalFormIsOpen == false) {
            setSelectedCourseSection(null);
            setSelectedEvaluation(null);
        }
    }, [modalFormIsOpen]);

    useEffect(() => {
        if (modalFormQuestionIsOpen == false) {
            setSelectedCourseSection(null);
            setSelectedEvaluation(null);
            setSelectedQuestion(null);
        }
    }, [modalFormQuestionIsOpen]);

    return (
        <BackendLayout
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

            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <CourseManageTab course={course} />

                    <div className="card bg-base-100 shadow-xl rounded-t-none">
                        <div className="card-body">
                            <div className="overflow-x-auto">
                                <div className="mb-6">
                                    <div>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() =>
                                                setModalFormIsOpen(true)
                                            }
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
                                                    <th>
                                                        Judul Section/Evaluation
                                                    </th>
                                                    <th>Instruksi</th>
                                                    <th>Durasi</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {course_sections.length ? (
                                                    course_sections.map(
                                                        (
                                                            course_section,
                                                            index
                                                        ) => (
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
                                                                        <>
                                                                            <tr>
                                                                                <td
                                                                                    colSpan={
                                                                                        4
                                                                                    }
                                                                                    className="text-center italic bg-base-200"
                                                                                >
                                                                                    Evaluasi
                                                                                </td>
                                                                            </tr>
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

                                                                            {evaluation
                                                                                .questions
                                                                                ?.length >
                                                                                0 && (
                                                                                <>
                                                                                    <tr>
                                                                                        <td
                                                                                            colSpan={
                                                                                                4
                                                                                            }
                                                                                            className="text-center italic bg-base-200"
                                                                                        >
                                                                                            Pertanyaan
                                                                                        </td>
                                                                                    </tr>
                                                                                    {evaluation.questions.map(
                                                                                        (
                                                                                            question,
                                                                                            qIndex
                                                                                        ) => (
                                                                                            <tr>
                                                                                                <td className="pl-16">
                                                                                                    <div>
                                                                                                        {
                                                                                                            question.question
                                                                                                        }
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <ol
                                                                                                        type="A"
                                                                                                        className="list-decimal list-inside"
                                                                                                    >
                                                                                                        {question.choices.map(
                                                                                                            (
                                                                                                                choice,
                                                                                                                cIndex
                                                                                                            ) => (
                                                                                                                <li
                                                                                                                    key={
                                                                                                                        choice.id +
                                                                                                                        "-c-" +
                                                                                                                        cIndex
                                                                                                                    }
                                                                                                                    className={classNames(
                                                                                                                        {
                                                                                                                            "text-success font-semibold":
                                                                                                                                choice.is_correct
                                                                                                                                    ? true
                                                                                                                                    : false,
                                                                                                                        }
                                                                                                                    )}
                                                                                                                >
                                                                                                                    {
                                                                                                                        choice.text
                                                                                                                    }
                                                                                                                </li>
                                                                                                            )
                                                                                                        )}
                                                                                                    </ol>
                                                                                                </td>
                                                                                                <td></td>
                                                                                                <td className="flex gap-1">
                                                                                                    <button
                                                                                                        className="btn btn-xs btn-secondary"
                                                                                                        onClick={() => {
                                                                                                            setSelectedEvaluation(
                                                                                                                evaluation
                                                                                                            );
                                                                                                            setSelectedQuestion(
                                                                                                                question
                                                                                                            );
                                                                                                            setModalFormQuestionIsOpen(
                                                                                                                true
                                                                                                            );
                                                                                                        }}
                                                                                                    >
                                                                                                        <Edit
                                                                                                            size={
                                                                                                                14
                                                                                                            }
                                                                                                        />
                                                                                                        <span>
                                                                                                            Ubah
                                                                                                        </span>
                                                                                                    </button>

                                                                                                    <button
                                                                                                        className="btn btn-xs btn-error"
                                                                                                        onClick={() =>
                                                                                                            onDeleteQuestionHandler(
                                                                                                                question
                                                                                                            )
                                                                                                        }
                                                                                                    >
                                                                                                        <Trash
                                                                                                            size={
                                                                                                                14
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
                                                                            )}
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <tr className="hover">
                                                                                <td
                                                                                    className="text-center italic"
                                                                                    colSpan={
                                                                                        4
                                                                                    }
                                                                                >
                                                                                    Belum
                                                                                    memiliki
                                                                                    evaluasi
                                                                                </td>
                                                                            </tr>
                                                                        </>
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
            </div>
        </BackendLayout>
    );
}
