import { Link, usePage } from "@inertiajs/react";
import classNames from "classnames";
import { ChevronLeft } from "lucide-react";
import React from "react";

export default function CourseManageTab({ course }) {
    return (
        <div>
            <div className="mb-6">
                <Link
                    className="btn btn-neutral"
                    href={route("user_area.course.index")}
                >
                    <ChevronLeft size={16} /> Kembali
                </Link>
            </div>
            <div className="flex justify-start">
                <Link
                    preserveScroll={true}
                    preserveState={true}
                    href={route("user_area.course.edit", {
                        course: course,
                    })}
                    className={classNames(
                        "bg-base-100/25 hover:bg-base-100/50 px-5 py-4 rounded-t-lg text-xs",
                        {
                            "!bg-base-100": route().current(
                                "user_area.course.edit",
                                {
                                    course: course,
                                }
                            ),
                        }
                    )}
                >
                    Informasi Kursus{" "}
                </Link>
                <Link
                    preserveScroll={true}
                    preserveState={true}
                    href={route(
                        "user_area.course.course_section.course_lectures",
                        {
                            course: course,
                        }
                    )}
                    className={classNames(
                        "bg-base-100/25 hover:bg-base-100/50 px-5 py-4 rounded-t-lg text-xs",
                        {
                            "!bg-base-100": route().current(
                                "user_area.course.course_section.course_lectures",
                                {
                                    course: course,
                                }
                            ),
                        }
                    )}
                >
                    Bagian & Pelajaran
                </Link>

                <Link
                    preserveScroll={true}
                    preserveState={true}
                    href={route("user_area.course.course_section.evaluations", {
                        course: course,
                    })}
                    className={classNames(
                        "bg-base-100/25 hover:bg-base-100/50 px-5 py-4 rounded-t-lg text-xs",
                        {
                            "!bg-base-100": route().current(
                                "user_area.course.course_section.evaluations",
                                {
                                    course: course,
                                }
                            ),
                        }
                    )}
                >
                    Evaluasi, Pertanyaan & Pilihan
                </Link>

                {/* <Link
                    preserveScroll={true}
                    preserveState={true}
                    href={route("user_area.course.course_lecture.index", {
                        course: course,
                    })}
                    className={classNames(
                        "bg-base-100/25 hover:bg-base-100/50 px-5 py-4 rounded-t-lg text-xs",
                        {
                            "!bg-base-100": route().current(
                                "user_area.course.course_lecture.index",
                                {
                                    course: course,
                                }
                            ),
                        }
                    )}
                >
                    Pelajaran
                </Link> */}

                {/* <Link
                    preserveScroll={true}
                    preserveState={true}
                    href={route("user_area.course.evaluation.index", {
                        course: course,
                    })}
                    className={classNames(
                        "bg-base-100/25 hover:bg-base-100/50 px-5 py-4 rounded-t-lg text-xs",
                        {
                            "!bg-base-100": route().current(
                                "user_area.course.evaluation.index",
                                {
                                    course: course,
                                }
                            ),
                        }
                    )}
                >
                    Evaluasi
                </Link> */}

                {/* <Link
                    preserveScroll={true}
                    preserveState={true}
                    href={route("user_area.course.evaluation.index", {
                        course: course,
                    })}
                    className={classNames(
                        "bg-base-100/25 hover:bg-base-100/50 px-5 py-4 rounded-t-lg text-xs",
                        {
                            "!bg-base-100": route().current(
                                "user_area.course.evaluation.index",
                                {
                                    course: course,
                                }
                            ),
                        }
                    )}
                >
                    Enrollments
                </Link> */}
            </div>
        </div>
    );
}
