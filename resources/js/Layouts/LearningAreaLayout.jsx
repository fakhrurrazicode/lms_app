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
                            <a
                                role="tab"
                                className="tab h-auto !py-4 flex gap-2 justify-center"
                            >
                                <GoCommentDiscussion size={16} />
                                <span className="font-bold">Forum/Diskusi</span>
                            </a>
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

                        <div className="hidden">
                            <Tabs>
                                <TabList className="w-auto flex">
                                    <Tab
                                        className="flex px-6 py-4 text-sm justify-center items-center gap-2 text-center cursor-pointer focus-visible:outline-none transition-all ease-in-out hover:bg-base-300 "
                                        selectedClassName="border-none bg-base-200"
                                    >
                                        <FaFileAlt />
                                        <span>Konten Kursus</span>
                                    </Tab>

                                    <Tab
                                        className="flex px-6 py-4 text-sm justify-center items-center gap-2 text-center cursor-pointer focus-visible:outline-none transition-all ease-in-out hover:bg-base-300 "
                                        selectedClassName="border-none bg-base-200"
                                    >
                                        <FaUserAlt />
                                        <span>Instruktur</span>
                                    </Tab>

                                    <Tab
                                        className="flex px-6 py-4 text-sm justify-center items-center gap-2 text-center cursor-pointer focus-visible:outline-none transition-all ease-in-out hover:bg-base-300 "
                                        selectedClassName="border-none bg-base-200"
                                    >
                                        <FaUserAlt />
                                        <span>Ulasan</span>
                                    </Tab>
                                </TabList>

                                <TabPanel className="">
                                    <div>
                                        <div className="card bg-base-200 rounded-none">
                                            <div className="card-body">
                                                <CourseNav course={course} />
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div>
                                        <div className="card bg-base-200 rounded-none">
                                            <div className="card-body">
                                                <div className="flex gap-6">
                                                    <div className="avatar">
                                                        <Link
                                                            href={route(
                                                                "instructor_info",
                                                                {
                                                                    user: course
                                                                        .instructor
                                                                        .id,
                                                                }
                                                            )}
                                                            className="w-24 h-24 rounded-full"
                                                        >
                                                            <img
                                                                src={
                                                                    course
                                                                        .instructor
                                                                        .photo_url
                                                                }
                                                            />
                                                        </Link>
                                                    </div>

                                                    <div>
                                                        <h3 className="font-bold text-xl mb-4">
                                                            <Link
                                                                href={route(
                                                                    "instructor_info",
                                                                    {
                                                                        user: course
                                                                            .instructor
                                                                            .id,
                                                                    }
                                                                )}
                                                            >
                                                                {
                                                                    course
                                                                        .instructor
                                                                        .name
                                                                }
                                                            </Link>
                                                        </h3>

                                                        <div className="flex gap-2 flex-wrap mb-6">
                                                            {course.instructor
                                                                .instructor_info &&
                                                            course.instructor
                                                                .instructor_info
                                                                .facebook_url ? (
                                                                <a
                                                                    target="_blank"
                                                                    href={
                                                                        course
                                                                            .instructor
                                                                            .instructor_info
                                                                            .facebook_url
                                                                    }
                                                                    className="btn btn-sm bg-blue-900 text-white"
                                                                >
                                                                    <FaFacebookSquare
                                                                        size={
                                                                            16
                                                                        }
                                                                    />{" "}
                                                                    Facebook
                                                                </a>
                                                            ) : (
                                                                ""
                                                            )}

                                                            {course.instructor
                                                                .instructor_info &&
                                                            course.instructor
                                                                .instructor_info
                                                                .instagram_url ? (
                                                                <a
                                                                    target="_blank"
                                                                    href={
                                                                        course
                                                                            .instructor
                                                                            .instructor_info
                                                                            .instagram_url
                                                                    }
                                                                    className="btn btn-sm bg-pink-800 text-white"
                                                                >
                                                                    <FaInstagramSquare
                                                                        size={
                                                                            16
                                                                        }
                                                                    />{" "}
                                                                    Instagram
                                                                </a>
                                                            ) : (
                                                                ""
                                                            )}

                                                            {course.instructor
                                                                .instructor_info &&
                                                            course.instructor
                                                                .instructor_info
                                                                .instagram_url ? (
                                                                <a
                                                                    target="_blank"
                                                                    href={
                                                                        course
                                                                            .instructor
                                                                            .instructor_info
                                                                            .instagram_url
                                                                    }
                                                                    className="btn btn-sm bg-red-900 text-white"
                                                                >
                                                                    <FaYoutubeSquare
                                                                        size={
                                                                            16
                                                                        }
                                                                    />{" "}
                                                                    YouTube
                                                                </a>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </div>

                                                        {course.instructor
                                                            .instructor_info ? (
                                                            <div className="mb-6">
                                                                <div className="mb-6 prose text-sm">
                                                                    <HtmlRenderer
                                                                        htmlString={
                                                                            course
                                                                                .instructor
                                                                                .instructor_info
                                                                                .bio
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div>
                                        <div className="card bg-base-200 rounded-none">
                                            <div className="card-body">
                                                <div class="grid grid-cols-1 lg:grid-cols-12 items-center gap-x-30px gap-y-5">
                                                    <div class="lg:col-start-1 lg:col-span-4 px-10px py-30px bg-whiteColor dark:bg-whiteColor-dark shadow-review text-center">
                                                        <p class="text-7xl font-extrabold text-blackColor dark:text-blackColor-dark leading-90px">
                                                            {
                                                                course
                                                                    .course_review_recap
                                                                    .avg
                                                            }
                                                        </p>
                                                        <div class="text-secondary">
                                                            <FaStar className="inline-block" />
                                                            <FaStar className="inline-block" />
                                                            <FaStar className="inline-block" />
                                                            <FaStar className="inline-block" />
                                                            <FaStar className="inline-block" />
                                                        </div>
                                                        <p class="text-blackColor dark:text-blackColor-dark leading-26px font-medium">
                                                            (
                                                            {
                                                                course
                                                                    .course_review_recap
                                                                    .total
                                                            }{" "}
                                                            Reviews)
                                                        </p>
                                                    </div>

                                                    <div class="lg:col-start-5 lg:col-span-8 px-15px">
                                                        <ul class="flex flex-col gap-y-3">
                                                            {[
                                                                5, 4, 3, 2, 1,
                                                            ].map((i) => {
                                                                let total =
                                                                    course
                                                                        .course_review_recap
                                                                        .total;
                                                                let star_counts =
                                                                    course.course_review_recap.star_counts.hasOwnProperty(
                                                                        i
                                                                    )
                                                                        ? course
                                                                              .course_review_recap
                                                                              .star_counts[
                                                                              i
                                                                          ]
                                                                        : 0;

                                                                let percentage =
                                                                    (star_counts /
                                                                        total) *
                                                                    100;

                                                                return (
                                                                    <li
                                                                        key={i}
                                                                        class="flex items-center text-blackColor dark:text-blackColor-dark"
                                                                    >
                                                                        <div className="flex w-[10%] justify-between items-center gap-2">
                                                                            <span>
                                                                                {
                                                                                    i
                                                                                }
                                                                            </span>
                                                                            <span>
                                                                                <FaStar className="text-secondary" />
                                                                            </span>
                                                                        </div>
                                                                        <div class="w-[80%] mx-6">
                                                                            <progress
                                                                                className="progress progress-secondary w-full"
                                                                                value={
                                                                                    percentage
                                                                                }
                                                                                max={
                                                                                    percentage
                                                                                }
                                                                            ></progress>
                                                                        </div>
                                                                        <div className="w-[10%]">
                                                                            <span className="text-end block w-full">
                                                                                {
                                                                                    star_counts
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
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
