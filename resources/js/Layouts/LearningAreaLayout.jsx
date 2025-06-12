import React from "react";
import FrontendLayout from "@/Layouts/FrontendLayout";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import {
    FaBook,
    FaCartPlus,
    FaChevronDown,
    FaParagraph,
    FaStar,
    FaTrash,
    FaUserAlt,
    FaClock,
    FaEye,
    FaLock,
    FaCertificate,
    FaFileAlt,
} from "react-icons/fa";
import HtmlRenderer from "@/Components/Custom/HtmlRenderer";
import CourseNav from "@/Pages/LearningArea/CourseNav";
import { rupiah } from "@/bootstrap";
import classNames from "classnames";

export default function LearningAreaLayout({ children, course }) {
    return (
        <FrontendLayout>
            <div className="mx-auto max-w-[100rem] space-y-6 px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="col-span-12 lg:col-span-8">
                        <div className="bg-base-100 h-[35px] w-full rounded-lg relative overflow-hidden mb-6">
                            <div
                                style={{
                                    width: course.progress_percentage + "%",
                                }}
                                className={classNames(
                                    " text-center absolute top-0 bottom-0 flex justify-center items-center",
                                    {
                                        "bg-primary":
                                            course.progress_percentage < 100,
                                        "bg-success":
                                            course.progress_percentage == 100,
                                    }
                                )}
                            >
                                <span className="text-white text-xs">
                                    {course.progress_percentage}%
                                </span>
                            </div>
                        </div>
                        <div className="mb-8">{children}</div>

                        <div>
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
                                        <FaFileAlt />
                                        <span>Gambaran Umum</span>
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
                                                <div className="mb-10">
                                                    <h3 className="text-3xl font-bold mb-4 text-primary">
                                                        Deskripsi
                                                    </h3>{" "}
                                                    <div>
                                                        <HtmlRenderer
                                                            htmlString={
                                                                course.description
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-10">
                                                    <h3 className="text-xl font-bold mb-4 text-primary">
                                                        Prasyarat
                                                    </h3>{" "}
                                                    <div>
                                                        <HtmlRenderer
                                                            htmlString={
                                                                course.prerequisites
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                <div className="mb-10">
                                                    <h3 className="text-xl font-bold mb-4 text-primary">
                                                        Tujuan
                                                    </h3>{" "}
                                                    <div>
                                                        <HtmlRenderer
                                                            htmlString={
                                                                course.goals
                                                            }
                                                        />
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
                                                <div className="flex gap-4">
                                                    <div className="avatar">
                                                        <div className="w-24 h-24 rounded-full">
                                                            <img
                                                                src={
                                                                    course
                                                                        .instructor
                                                                        .photo_url
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h3 className="mb-2 font-bold text-xl">
                                                            {
                                                                course
                                                                    .instructor
                                                                    .name
                                                            }
                                                        </h3>
                                                        <div className="text-sm">
                                                            {course.instructor
                                                                .instructor_info
                                                                ? course
                                                                      .instructor
                                                                      .instructor_info
                                                                      .bio
                                                                : ""}
                                                        </div>
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
                                                <div className="flex gap-4">
                                                    <div className="avatar">
                                                        <div className="w-24 h-24 rounded-full">
                                                            <img
                                                                src={
                                                                    course
                                                                        .instructor
                                                                        .photo_url
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h3 className="mb-2 font-bold text-xl">
                                                            {
                                                                course
                                                                    .instructor
                                                                    .name
                                                            }
                                                        </h3>
                                                        <div className="text-sm">
                                                            {course.instructor
                                                                .instructor_info
                                                                ? course
                                                                      .instructor
                                                                      .instructor_info
                                                                      .bio
                                                                : ""}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 hidden lg:block">
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
