import React from "react";

import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { Link, usePage } from "@inertiajs/react";
import {
    BiCheck,
    BiHome,
    BiMoviePlay,
    BiQuestionMark,
    BiStar,
} from "react-icons/bi";
import { MdQuiz } from "react-icons/md";
import {
    FaCertificate,
    FaChevronDown,
    FaClock,
    FaRegQuestionCircle,
    FaStar,
} from "react-icons/fa";

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

export default function CourseNav({ course }) {
    return (
        <Accordion
            transition
            transitionTimeout={200}
            // popover="manual"
            allowMultiple={true}
        >
            {course.course_sections.map((course_section) => (
                <AccordionItem
                    key={"accordion-" + course_section.id}
                    header={course_section.title}
                    initialEntered={true}
                >
                    <ul className="">
                        {course_section.course_lectures.map(
                            (course_lecture) => (
                                <li
                                    key={course_lecture.id}
                                    className="py-[10px] border-b border-base-300 dark:border-gray-700"
                                >
                                    <Link
                                        preserveScroll={true}
                                        preserveState={true}
                                        href={route(
                                            "learning_area.course.course_section.course_lecture.show",
                                            {
                                                course: course.id,
                                                course_section:
                                                    course_section.id,
                                                course_lecture:
                                                    course_lecture.id,
                                            }
                                        )}
                                        className={`${
                                            course_lecture.done
                                                ? "text-success font-bold"
                                                : "text-gray-600 dark:text-white"
                                        } ${
                                            route().current(
                                                "learning_area.course.course_section.course_lecture.show",
                                                {
                                                    course: course.id,
                                                    course_section:
                                                        course_section.id,
                                                    course_lecture:
                                                        course_lecture.id,
                                                }
                                            )
                                                ? "!text-primary !font-bold"
                                                : ""
                                        } active:text-primary leading-1.8 flex gap-4 justify-between text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out`}
                                    >
                                        <div className="flex items-center gap-4">
                                            {course_lecture.done ? (
                                                <BiCheck size={22} />
                                            ) : (
                                                <BiMoviePlay size={22} />
                                            )}
                                            <span className="text-wrap">
                                                {course_lecture.title}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <FaClock /> <span>3.37</span>
                                        </div>
                                    </Link>
                                </li>
                            )
                        )}

                        {course_section.evaluation ? (
                            <li
                                key={course_section.evaluation.id}
                                className="py-[10px] border-b border-base-300 dark:border-gray-700"
                            >
                                <Link
                                    preserveScroll={true}
                                    preserveState={true}
                                    href={route(
                                        "learning_area.course.course_section.evaluation.index",
                                        {
                                            course: course.id,
                                            course_section: course_section.id,
                                        }
                                    )}
                                    className={`${
                                        course_section.evaluation.done
                                            ? "text-success font-bold"
                                            : "text-gray-600 dark:text-white"
                                    } ${
                                        route().current(
                                            "learning_area.course.course_section.evaluation.index",
                                            {
                                                course: course.id,
                                                course_section:
                                                    course_section.id,
                                            }
                                        )
                                            ? "!text-primary !font-bold"
                                            : ""
                                    } active:text-primary leading-1.8 flex gap-4 justify-between text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out`}
                                >
                                    <div className="flex items-center gap-4">
                                        <FaRegQuestionCircle size={22} />
                                        <span className="text-wrap">
                                            {course_section.evaluation.title}
                                        </span>
                                    </div>

                                    {/* <div className="flex items-center gap-2">
                                        <FaClock /> <span>3.37</span>
                                    </div> */}
                                </Link>
                            </li>
                        ) : (
                            <></>
                        )}
                    </ul>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
