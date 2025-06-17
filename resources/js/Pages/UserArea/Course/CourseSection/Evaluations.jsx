import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";
import { Edit, Plus, Trash, Video } from "lucide-react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

import CourseManageTab from "../CourseManageTab";

import { toast } from "react-toastify";
import {
    FaCheck,
    FaFile,
    FaQuestion,
    FaQuestionCircle,
    FaTimes,
} from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import FileIconByType from "@/Components/Custom/FileIconByType";
import HtmlRenderer from "@/Components/Custom/HtmlRenderer";

export default function Evaluations({ course, course_sections }) {
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

    const evaluationDeleteHandler = (evaluation) => {
        if (
            confirm(
                "Apakah anda yakin ingin menghapus data evaluasi " +
                    evaluation.title +
                    "?"
            )
        )
            router.delete(
                route("user_area.course.course_section.evaluation.destroy", {
                    course: course.id,
                    course_section: evaluation.course_section_id,
                    evaluation: evaluation.id,
                }),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onFinish: () => {
                        toast.success("Evaluasi Bagian berhasil dihapus");
                    },
                    onError: () => {
                        toast.success("Evaluasi Bagian gagal di hapus");
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

            <div className="w-full">
                <CourseManageTab course={course} />

                <div className="card bg-base-100 shadow-xl rounded-t-none">
                    <div className="card-body">
                        <div className="overflow-x-auto">
                            <div className="mb-6">
                                <h3 className="text-primary text-xl font-bold mb-2">
                                    Evaluasi dan Pertanyaan
                                </h3>
                                <p className="text-sm">
                                    Evaluasi ini mencakup berbagai jenis
                                    pertanyaan yang bertujuan untuk menguji
                                    pengetahuan dan keterampilan yang telah
                                    diperoleh. Peserta diharapkan untuk menjawab
                                    pertanyaan dengan benar dan reflektif,
                                    sehingga dapat mengidentifikasi area yang
                                    perlu diperbaiki dan memperdalam pemahaman
                                    mereka tentang materi pembelajaran
                                </p>
                            </div>

                            <div className="mb-6">
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>
                                                    Judul Section / Evaluation /
                                                    Pertanyaan / Pilihan
                                                </th>

                                                <th>Durasi</th>
                                                <th>
                                                    Sebagai <br />
                                                    Pilihan <br />
                                                    Benar
                                                </th>
                                                <th>Action</th>
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
                                                                <td>
                                                                    <Link
                                                                        disabled={
                                                                            course_section.evaluation
                                                                                ? true
                                                                                : false
                                                                        }
                                                                        href={route(
                                                                            "user_area.course.course_section.evaluation.create",
                                                                            {
                                                                                course: course_section.course_id,
                                                                                course_section:
                                                                                    course_section.id,
                                                                            }
                                                                        )}
                                                                        title="aksjdhkasjhdkjsa"
                                                                        className="btn btn-primary btn-xs"
                                                                    >
                                                                        <Plus
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                        <span>
                                                                            Tambah
                                                                            Evaluasi
                                                                        </span>
                                                                    </Link>
                                                                </td>
                                                            </tr>

                                                            {course_section.evaluation ? (
                                                                <>
                                                                    <tr className="hover">
                                                                        <td className="pl-8">
                                                                            <div className="flex gap-4">
                                                                                <MdChecklist
                                                                                    size={
                                                                                        20
                                                                                    }
                                                                                    className="text-primary"
                                                                                />
                                                                                <span>
                                                                                    {
                                                                                        course_section
                                                                                            .evaluation
                                                                                            .title
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td className="flex gap-1">
                                                                            <Link
                                                                                href={route(
                                                                                    "user_area.course.course_section.evaluation.edit",
                                                                                    {
                                                                                        course: course_section.course_id,
                                                                                        course_section:
                                                                                            course_section.id,
                                                                                        evaluation:
                                                                                            course_section
                                                                                                .evaluation
                                                                                                .id,
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
                                                                                    evaluationDeleteHandler(
                                                                                        course_section.evaluation
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
                                                                                    "user_area.course.course_section.evaluation.question.create",
                                                                                    {
                                                                                        course: course_section.course_id,
                                                                                        course_section:
                                                                                            course_section.id,
                                                                                        evaluation:
                                                                                            course_section
                                                                                                .evaluation
                                                                                                .id,
                                                                                    }
                                                                                )}
                                                                                preserveScroll={
                                                                                    true
                                                                                }
                                                                                preserveState={
                                                                                    true
                                                                                }
                                                                                className="btn btn-primary btn-xs"
                                                                            >
                                                                                <Plus
                                                                                    size={
                                                                                        16
                                                                                    }
                                                                                />
                                                                                <span>
                                                                                    Tambah
                                                                                    Pertanyaan
                                                                                </span>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>

                                                                    {course_section
                                                                        .evaluation
                                                                        .questions
                                                                        .length ? (
                                                                        course_section.evaluation.questions.map(
                                                                            (
                                                                                question,
                                                                                index
                                                                            ) => (
                                                                                <>
                                                                                    <tr className="hover">
                                                                                        <td className="pl-16">
                                                                                            <div className="flex gap-4">
                                                                                                <FaQuestion
                                                                                                    size={
                                                                                                        12
                                                                                                    }
                                                                                                    className="text-info"
                                                                                                />
                                                                                                <span>
                                                                                                    <HtmlRenderer
                                                                                                        htmlString={
                                                                                                            question.question
                                                                                                        }
                                                                                                    />
                                                                                                </span>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td className="flex gap-1">
                                                                                            <Link
                                                                                                href={route(
                                                                                                    "user_area.course.course_section.course_lecture.create",
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
                                                                                            <Link
                                                                                                href={route(
                                                                                                    "user_area.course.course_section.course_lecture.create",
                                                                                                    {
                                                                                                        course: course_section.course_id,
                                                                                                        course_section:
                                                                                                            course_section.id,
                                                                                                    }
                                                                                                )}
                                                                                                className="btn btn-error btn-xs"
                                                                                            >
                                                                                                <Edit
                                                                                                    size={
                                                                                                        16
                                                                                                    }
                                                                                                />
                                                                                                <span>
                                                                                                    Hapus
                                                                                                </span>
                                                                                            </Link>
                                                                                        </td>
                                                                                    </tr>

                                                                                    {question
                                                                                        .choices
                                                                                        .length ? (
                                                                                        question.choices.map(
                                                                                            (
                                                                                                choice,
                                                                                                index
                                                                                            ) => (
                                                                                                <>
                                                                                                    <tr className="hover">
                                                                                                        <td className="pl-24">
                                                                                                            <div className="flex gap-4">
                                                                                                                {choice.is_correct ? (
                                                                                                                    <FaCheck
                                                                                                                        size={
                                                                                                                            12
                                                                                                                        }
                                                                                                                        className="text-success"
                                                                                                                    />
                                                                                                                ) : (
                                                                                                                    <FaTimes
                                                                                                                        size={
                                                                                                                            12
                                                                                                                        }
                                                                                                                        className="text-error"
                                                                                                                    />
                                                                                                                )}
                                                                                                                <span>
                                                                                                                    <HtmlRenderer
                                                                                                                        htmlString={
                                                                                                                            choice.text
                                                                                                                        }
                                                                                                                    />
                                                                                                                </span>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td></td>
                                                                                                        <td>
                                                                                                            <input
                                                                                                                type="checkbox"
                                                                                                                className="toggle toggle-primary toggle-xs"
                                                                                                                checked={
                                                                                                                    // course_lecture.set_as_preview
                                                                                                                    choice.is_correct
                                                                                                                }
                                                                                                                onChange={(
                                                                                                                    e
                                                                                                                ) => {
                                                                                                                    // console.log(
                                                                                                                    //     e
                                                                                                                    //         .target
                                                                                                                    //         .value
                                                                                                                    // );
                                                                                                                    // console.log(
                                                                                                                    //     e
                                                                                                                    //         .target
                                                                                                                    //         .checked
                                                                                                                    // );
                                                                                                                    // router.put(
                                                                                                                    //     route(
                                                                                                                    //         "user_area.course.course_section.course_lecture.set_as_preview",
                                                                                                                    //         {
                                                                                                                    //             course: course.id,
                                                                                                                    //             course_section:
                                                                                                                    //                 course_section.id,
                                                                                                                    //             course_lecture:
                                                                                                                    //                 course_lecture.id,
                                                                                                                    //         }
                                                                                                                    //     ),
                                                                                                                    //     {
                                                                                                                    //         set_as_preview:
                                                                                                                    //             e
                                                                                                                    //                 .target
                                                                                                                    //                 .checked
                                                                                                                    //                 ? 1
                                                                                                                    //                 : 0,
                                                                                                                    //     },
                                                                                                                    //     {
                                                                                                                    //         preserveScroll: true,
                                                                                                                    //         preserveState: true,
                                                                                                                    //     }
                                                                                                                    // );
                                                                                                                }}
                                                                                                            />
                                                                                                        </td>
                                                                                                        <td></td>
                                                                                                    </tr>
                                                                                                </>
                                                                                            )
                                                                                        )
                                                                                    ) : (
                                                                                        <>

                                                                                        </>
                                                                                    )}
                                                                                </>
                                                                            )
                                                                        )
                                                                    ) : (
                                                                        <tr>
                                                                            <td
                                                                                colSpan={
                                                                                    4
                                                                                }
                                                                                className="pl-16 italic text-xs text-warning"
                                                                            >
                                                                                Belum
                                                                                Tersedia
                                                                                Pertanyaan
                                                                                Untuk
                                                                                Evaluasi
                                                                                ini,
                                                                                evaluasi
                                                                                tidak
                                                                                akan
                                                                                di
                                                                                tampilkan
                                                                                pada
                                                                                halaman
                                                                                pembelajaran
                                                                            </td>
                                                                        </tr>
                                                                    )}
                                                                </>
                                                            ) : (
                                                                <tr>
                                                                    <td
                                                                        colSpan={
                                                                            4
                                                                        }
                                                                        className="pl-8 italic text-xs text-warning"
                                                                    >
                                                                        Belum
                                                                        Tersedia
                                                                        Evaluasi
                                                                        Untuk
                                                                        Bagian
                                                                        ini
                                                                    </td>
                                                                </tr>
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
