import React from "react";
import FrontendLayout from "@/Layouts/FrontendLayout";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import {
    FaStar,
    FaUserAlt,
    FaFileAlt,
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { GoCommentDiscussion } from "react-icons/go";
import HtmlRenderer from "@/Components/Custom/HtmlRenderer";
import CourseNav from "@/Pages/LearningArea/CourseNav";
import { rupiah } from "@/bootstrap";
import classNames from "classnames";
import { Link } from "@inertiajs/react";
import { GrCertificate } from "react-icons/gr";

export default function LearningAreaLayout({ children, course }) {
    return (
        <FrontendLayout>
            <div className="mx-auto max-w-[100rem] space-y-6 px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="col-span-12 lg:col-span-8">
                        <div
                            role="tablist"
                            className="tabs tabs-lifted overflow-x-scroll sm:overflow-auto"
                        >
                            <Link
                                href={route("learning_area.course.show", {
                                    course: course.id,
                                })}
                                role="tab"
                                className={classNames(
                                    "tab h-auto !py-4 flex gap-2 justify-center",
                                    {
                                        "tab-active": route().current(
                                            "learning_area.course.show",
                                            {
                                                course: course.id,
                                            }
                                        ),
                                    }
                                )}
                            >
                                <FaFileAlt size={16} />
                                <span className="font-bold">
                                    Tentang Kursus
                                </span>
                            </Link>
                            <Link
                                href={route(
                                    "learning_area.course.instructor_info",
                                    {
                                        course: course.id,
                                    }
                                )}
                                role="tab"
                                className={classNames(
                                    "tab h-auto !py-4 flex gap-2 justify-center",
                                    {
                                        "tab-active": route().current(
                                            "learning_area.course.instructor_info",
                                            {
                                                course: course.id,
                                            }
                                        ),
                                    }
                                )}
                            >
                                <GiTeacher size={16} />
                                <span className="font-bold">Instruktur</span>
                            </Link>

                            <Link
                                href={route(
                                    "learning_area.course.thread.index",
                                    {
                                        course: course.id,
                                    }
                                )}
                                role="tab"
                                className={classNames(
                                    "tab h-auto !py-4 flex gap-2 justify-center",
                                    {
                                        "tab-active": route().current(
                                            "learning_area.course.thread.index",
                                            {
                                                course: course.id,
                                            }
                                        ),
                                    }
                                )}
                            >
                                <GoCommentDiscussion size={16} />
                                <span className="font-bold">Forum/Diskusi</span>
                            </Link>
                            <a
                                role="tab"
                                className="tab h-auto !py-4 flex gap-2 justify-center"
                            >
                                <FaStar size={16} />
                                <span className="font-bold">Ulasan</span>
                            </a>
                            <a
                                role="tab"
                                className="tab h-auto !py-4 flex gap-2 justify-center"
                            >
                                <GrCertificate size={16} />
                                <span className="font-bold">Sertifikat</span>
                            </a>
                        </div>
                        <div className="mb-8">{children}</div>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="card shadow-lg bg-base-100 rounded-none">
                            <div className="card-body p-0 overflow-hidden">
                                <CourseNav course={course} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
