import LearningAreaLayout from "@/Layouts/LearningAreaLayout";

import { Head, Link } from "@inertiajs/react";
import React from "react";
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
    PlyrLayout,
    plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

export default function Show({
    course,
    course_lecture,
    prev_course_lecture,
    next_course_lecture,
}) {
    return (
        <LearningAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Courses
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="card">
                <div className="card-body bg-base-100">
                    <div className="mb-6">
                        <div className="breadcrumbs text-sm mb-6">
                            <ul>
                                <li>
                                    <Link
                                        href={route(
                                            "learning_area.course.index",
                                            {
                                                course: course.id,
                                                course_lecture:
                                                    course_lecture.id,
                                            }
                                        )}
                                        className="gap-2 items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="h-4 w-4 stroke-current"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                            ></path>
                                        </svg>
                                        {course.title}
                                    </Link>
                                </li>

                                <li>
                                    <span className="inline-flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="h-4 w-4 stroke-current"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                            ></path>
                                        </svg>
                                        {course_lecture.title}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <h1 className="text-5xl font-bold mb-6">
                            {course_lecture.title}
                        </h1>
                    </div>
                    <div className="mb-6">
                        <MediaPlayer
                            title="Sprite Fight"
                            src={course_lecture.video_url}
                        >
                            <MediaProvider />
                            <PlyrLayout
                                // thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
                                icons={plyrLayoutIcons}
                            />
                        </MediaPlayer>
                    </div>

                    <div className="mb-6">{course_lecture.description}</div>

                    <div className="flex justify-between">
                        <div>
                            {prev_course_lecture ? (
                                <Link
                                    href={route(
                                        "learning_area.course_lecture.show",
                                        {
                                            course: prev_course_lecture.course_id,
                                            course_lecture:
                                                prev_course_lecture.id,
                                        }
                                    )}
                                    className="btn btn-accent"
                                >
                                    <FaChevronLeft />
                                    Sebelumnya
                                </Link>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div>
                            {/* {next_course_lecture ? (
                                <Link
                                    href={route(
                                        "learning_area.course_lecture.finish_lecture",
                                        {
                                            course: course.id,
                                            course_lecture: course_lecture.id,
                                        }
                                    )}
                                    // preserveScroll={true}
                                    preserveState={true}
                                    method="POST"
                                    className="btn btn-accent"
                                >
                                    Selanjutnya <FaChevronRight />
                                </Link>
                            ) : (
                                <Link
                                    href={route(
                                        "learning_area.course_lecture.finish_lecture",
                                        {
                                            course: course.id,
                                            course_lecture: course_lecture.id,
                                        }
                                    )}
                                    // preserveScroll={true}
                                    preserveState={true}
                                    method="POST"
                                    className="btn btn-accent"
                                >
                                    Selesai <FaCheck />
                                </Link>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </LearningAreaLayout>
    );
}
