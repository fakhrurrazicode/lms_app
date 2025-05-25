import LearningAreaLayout from "@/Layouts/LearningAreaLayout";

import React from "react";

import CourseCard from "@/Components/CourseCard";
import CourseTab from "@/Components/CourseTab";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import "react-tabs/style/react-tabs.css";

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
} from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { itemIsExitsOnCart, minutesToHumanReadable, rupiah } from "@/bootstrap";
import { FiCheck } from "react-icons/fi";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
    PlyrLayout,
    plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
import { BiMoviePlay } from "react-icons/bi";

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
        className="shadow-md"
        buttonProps={{
            className: (param) => {
                return `flex w-full p-6 text-left bg-primary/90 text-white ${
                    param.isEnter && "bg-primary/100"
                }`;
            },
        }}
        contentProps={{
            className:
                "transition-height duration-200 ease-out bg-white dark:bg-base-200 px-6",
        }}
        panelProps={{ className: "p-4" }}
    />
);

export default function Show({ course }) {
    return (
        <LearningAreaLayout course={course}>
            <Head title="Dashboard" />
            <>
                {false ? (
                    <div className="mb-6">
                        <div role="alert" className="alert alert-success">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-14 w-14 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>
                                <span className="block mb-2">
                                    Selamat! Anda telah menyelesaikan kursus{" "}
                                    <b>{course.title}</b>. selanjutnya anda
                                    dapat mencetak sertifikat sebagai bukti anda
                                    telah menyelesaikan proses belajar.
                                </span>
                                <span className="block mb-2">
                                    Kami harap anda juga dapat meninggalkan{" "}
                                    <b>Review</b>, Review dan Komentar anda
                                    sangatlah berarti bagi kami untuk kemajuan
                                    di masa depan
                                </span>
                            </span>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                <div className="mb-6 flex justify-stretch">
                    {/* <Link href="#" className="btn btn-warning">
                        <FaStar />
                        <span>Review</span>
                    </Link> */}
                    {false ? (
                        <button className="btn btn-secondary">
                            <FaCertificate />
                            <span>Cetak Sertifikat</span>
                        </button>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="card bg-base-100 py-8">
                    <div className="card-body py-0">
                        <div>
                            <div className="flex items-center justify-between flex-wrap gap-6 mb-[30px]">
                                <div className="flex items-center gap-6">
                                    <span
                                        href="#"
                                        className="badge badge-primary font-bold py-3 px-4"
                                    >
                                        Technology
                                    </span>
                                </div>

                                <div>
                                    {course.created_at || course.updated_at ? (
                                        <p className="text-gray-600 font-semibold">
                                            Last Update:{" "}
                                            <span className="text-primary">
                                                {course.created_at ||
                                                    course.updated_at}
                                            </span>
                                        </p>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>

                            <h4 className="text-4xl font-bold mb-8">
                                {course.title}
                            </h4>

                            <div className="text-gray-800 dark:text-gray-200 font-normal text-lg mb-[30px]">
                                {course.description}
                            </div>

                            <div>
                                <h3 className="border-l-4 border-primary pl-3 mb-[30px]">
                                    Detail Kursus
                                </h3>
                                <div className="card bg-base-100 mb-[30px] grid grid-cols-1 md:grid-cols-2">
                                    <ul className="p-10px md:py-[55px] md:pl-[50px] md:pr-[70px] lg:py-[35px] lg:px-[30px] 2xl:py-[55px] 2xl:pl-[50px] 2xl:pr-[70px] border-r-2 border-base-200 space-y-[10px]">
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
                                                    {
                                                        course.course_lecture_count
                                                    }{" "}
                                                    Lectures
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                Durasi :
                                                <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                    {
                                                        course.total_lecture_duration
                                                    }
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                Jumlah Terdaftar :
                                                <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                    {course.enrollment_count}{" "}
                                                    students
                                                </span>
                                            </p>
                                        </li>
                                    </ul>

                                    <ul className="p-10px md:py-[55px] md:pl-[50px] md:pr-[70px] lg:py-[35px] lg:px-[30px] 2xl:py-[55px] 2xl:pl-[50px] 2xl:pr-[70px] border-r-2 border-base-200 space-y-[10px]">
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
                                                            {
                                                                course.discount_percentage
                                                            }
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

                            <Tabs>
                                <TabList className="w-full bg-white dark:bg-base-200 flex justify-between shadow-md">
                                    <Tab
                                        className="flex-1 flex justify-center items-center gap-2 text-center py-6 cursor-pointer focus-visible:outline-none transition-all ease-in-out hover:bg-primary hover:text-white"
                                        selectedClassName="border-none bg-primary text-white"
                                    >
                                        <FaParagraph />
                                        <span>Deskripsi</span>
                                    </Tab>
                                    <Tab
                                        className="flex-1 flex justify-center items-center gap-2 text-center py-6 cursor-pointer focus-visible:outline-none"
                                        selectedClassName="border-none bg-primary text-white"
                                    >
                                        <FaUserAlt />
                                        <span>Instruktur</span>
                                    </Tab>
                                </TabList>

                                <TabPanel>
                                    <div className="py-8">
                                        <div className="card bg-base-100 rounded-none">
                                            <div className="card-body">
                                                <div className="mb-10">
                                                    <h3 className="text-3xl font-bold mb-4 text-primary">
                                                        Deskripsi
                                                    </h3>{" "}
                                                    <div>
                                                        {course.description}
                                                    </div>
                                                </div>
                                                <div className="mb-10">
                                                    <h3 className="text-xl font-bold mb-4 text-primary">
                                                        Prasyarat
                                                    </h3>{" "}
                                                    <div>
                                                        {course.prerequisites}
                                                    </div>
                                                </div>

                                                <div className="mb-10">
                                                    <h3 className="text-xl font-bold mb-4 text-primary">
                                                        Tujuan
                                                    </h3>{" "}
                                                    <div>{course.goals}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="py-8">
                                        <div className="card bg-base-100 rounded-none">
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
                </div>
            </>
        </LearningAreaLayout>
    );
}
