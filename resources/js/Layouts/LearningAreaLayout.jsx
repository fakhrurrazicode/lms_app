import React from "react";
import FrontendLayout from "./FrontendLayout";
import { FaChevronDown, FaClock } from "react-icons/fa";

import { BiCheck, BiHome, BiMoviePlay } from "react-icons/bi";
import { Link, usePage } from "@inertiajs/react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

const AccordionItem = ({ header, ...rest }) => (
    <Item
        {...rest}
        header={({ state: { isEnter } }) => (
            <>
                {header}
                <FaChevronDown
                    className={`ml-auto transition-transform duration-200 ease-out ${
                        isEnter && "rotate-180"
                    }`}
                />
            </>
        )}
        className="border-0"
        buttonProps={{
            className: ({ isEnter }) =>
                `flex w-full p-4 text-left bg-indigo-500 text-white border-0 ${
                    isEnter && "bg-indigo-700"
                }`,
        }}
        contentProps={{
            className:
                "transition-height duration-200 ease-out border border-0",
        }}
        panelProps={{ className: "p-4" }}
    />
);

export default function LearningAreaLayout({ children }) {
    const { auth, course } = usePage().props;

    return (
        <FrontendLayout>
            <div className="mx-auto max-w-[100rem] space-y-6 sm:px-6 lg:px-8 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-4">
                        <div className="card shadow-lg bg-base-100 rounded-none">
                            <div className="card-body p-0 overflow-hidden">
                                <Link
                                    preserveScroll={true}
                                    preserveState={true}
                                    href={route("learning_area.course.index", {
                                        course: course.id,
                                    })}
                                    className="text-gray-600 py-4 px-4 dark:text-white leading-1.8 flex gap-4 justify-between text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                >
                                    <div className="flex items-center gap-4">
                                        <BiHome size={22} />
                                        <span>Home</span>
                                    </div>
                                </Link>
                                <Accordion
                                    transition
                                    transitionTimeout={200}
                                    // popover="manual"
                                    allowMultiple={true}
                                >
                                    {course.course_sections.map(
                                        (course_section) => (
                                            <AccordionItem
                                                header={course_section.title}
                                                initialEntered={true}
                                            >
                                                <ul className="">
                                                    {course_section.course_lectures.map(
                                                        (course_lecture) => (
                                                            <li
                                                                key={
                                                                    course_lecture.id
                                                                }
                                                                className="py-[10px] border-b border-base-300 dark:border-gray-700"
                                                            >
                                                                <Link
                                                                    preserveScroll={
                                                                        true
                                                                    }
                                                                    preserveState={
                                                                        true
                                                                    }
                                                                    href={route(
                                                                        "learning_area.course_lecture.show",
                                                                        {
                                                                            course: course.id,
                                                                            course_lecture:
                                                                                course_lecture.id,
                                                                        }
                                                                    )}
                                                                    className={`${
                                                                        course_lecture.course_track
                                                                            ? "text-success font-bold"
                                                                            : "text-gray-600 dark:text-white"
                                                                    } leading-1.8 flex gap-4 justify-between text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out`}
                                                                >
                                                                    <div className="flex items-center gap-4">
                                                                        {course_lecture.course_track ? (
                                                                            <BiCheck
                                                                                size={
                                                                                    22
                                                                                }
                                                                            />
                                                                        ) : (
                                                                            <BiMoviePlay
                                                                                size={
                                                                                    22
                                                                                }
                                                                            />
                                                                        )}
                                                                        <span>
                                                                            {
                                                                                course_lecture.title
                                                                            }
                                                                        </span>
                                                                    </div>

                                                                    <div className="flex items-center gap-2">
                                                                        <FaClock />{" "}
                                                                        <span>
                                                                            3.37
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </AccordionItem>
                                        )
                                    )}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        <p className="mb-3 font-bold">Progress</p>
                        <div className="bg-base-200 h-[35px] w-full rounded-lg relative overflow-hidden mb-6">
                            <div
                                className={
                                    "bg-primary w-[" +
                                    course.progress_percentage +
                                    "%] text-center absolute top-0 bottom-0 flex justify-center items-center"
                                }
                            >
                                <span className="text-white text-xs">
                                    {course.progress_percentage}%
                                </span>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
