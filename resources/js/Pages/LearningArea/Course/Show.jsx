import FrontendLayout from "@/Layouts/FrontendLayout";
import React, { Children } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import CourseNav from "../CourseNav";
import { rupiah } from "@/bootstrap";
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
    FaPlay,
} from "react-icons/fa";
import HtmlRenderer from "@/Components/Custom/HtmlRenderer";
import LearningAreaLayout from "@/Layouts/LearningAreaLayout";
import { Link } from "@inertiajs/react";
import { GrPlay, GrResume } from "react-icons/gr";

export default function Show({ course }) {
    return (
        <LearningAreaLayout course={course}>
            <div className="card bg-base-100 py-8 mb-8">
                <div className="card-body py-0">
                    <div className="flex items-center justify-between flex-wrap gap-6 mb-[30px]">
                        <div className="flex items-center gap-6">
                            <span
                                href="#"
                                className="badge badge-primary font-bold py-3 px-4"
                            >
                                {course.course_category.name}
                            </span>
                        </div>

                        <div>
                            {course.created_at || course.updated_at ? (
                                <p className="text-gray-600 font-semibold">
                                    Last Update:{" "}
                                    <span className="text-primary">
                                        {course.created_at || course.updated_at}
                                    </span>
                                </p>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>

                    <div className="lg:flex justify-between items-center mb-8 space-y-8 lg:space-y-0">
                        <h4 className="text-4xl font-bold">{course.title}</h4>
                        <Link
                            href={route("learning_area.course.start", {
                                course: course.id,
                            })}
                            className="btn btn-primary w-full lg:w-auto"
                        >
                            {course.course_tracks.length ? (
                                <>
                                    <GrResume />
                                    Lanjut Belajar
                                </>
                            ) : (
                                <>
                                    <GrPlay />
                                    Mulai Belajar
                                </>
                            )}
                        </Link>
                    </div>

                    <div className="text-gray-800 dark:text-gray-200 font-normal text-lg mb-[30px]">
                        <HtmlRenderer htmlString={course.description} />
                    </div>

                    <div>
                        <h3 className="border-l-4 border-primary pl-3 mb-[30px]">
                            Detail Kursus
                        </h3>
                        <div className="card bg-base-200 mb-[30px] grid grid-cols-1 md:grid-cols-2">
                            <ul className="p-[16px] md:py-[55px] md:pl-[50px] md:pr-[70px] lg:py-[35px] lg:px-[30px] 2xl:py-[55px] 2xl:pl-[50px] 2xl:pr-[70px] border-r-2 border-base-200 space-y-[10px]">
                                <li>
                                    <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                        Instruktur :
                                        <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                            {course.instructor
                                                ? course.instructor.name
                                                : "-"}
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                        Lectures :
                                        <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                            {course.course_lecture_count}{" "}
                                            Lectures
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                        Durasi :
                                        <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                            {course.total_lecture_duration}
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                        Jumlah Terdaftar :
                                        <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                            {course.enrollment_count} students
                                        </span>
                                    </p>
                                </li>
                            </ul>

                            <ul className="p-[16px] md:py-[55px] md:pl-[50px] md:pr-[70px] lg:py-[35px] lg:px-[30px] 2xl:py-[55px] 2xl:pl-[50px] 2xl:pr-[70px] border-r-2 border-base-200 space-y-[10px]">
                                <li>
                                    <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                        Tingkatan :
                                        <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                            {course.level}
                                        </span>
                                    </p>
                                </li>

                                <li>
                                    <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                        Harga Normal:
                                        <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                            {rupiah(course.price)}
                                        </span>
                                    </p>
                                </li>
                                {course.discount_percentage ? (
                                    <>
                                        <li>
                                            <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                Diskon :
                                                <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                    {course.discount_percentage}
                                                    %
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                Harga Setelah Diskon :
                                                <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                    {rupiah(
                                                        course.discounted_price
                                                    )}
                                                </span>
                                            </p>
                                        </li>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </LearningAreaLayout>
    );
}
