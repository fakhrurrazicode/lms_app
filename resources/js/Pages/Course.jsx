import CourseCard from "@/Components/CourseCard";
import CourseTab from "@/Components/CourseTab";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import "react-tabs/style/react-tabs.css";
import React, { useRef, useState } from "react";
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
    FaTimes,
    FaFacebook,
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
    FaDoorOpen,
} from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import {
    addToCart,
    itemIsExitsOnCart,
    minutesToHumanReadable,
    removeFromCart,
    rupiah,
} from "@/bootstrap";
import { FiCheck } from "react-icons/fi";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
    PlyrLayout,
    plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
import { BiMoviePlay } from "react-icons/bi";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "@/Components/Modal";
import HtmlRenderer from "@/Components/Custom/HtmlRenderer";

const AccordionItem = ({ header, ...rest }) => (
    // const first = useRef(second);
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

export default function Course() {
    const { course, auth, more_courses } = usePage().props;

    const [showPreviewModal, setShowPreviewModal] = useState(false);

    const [previewCourseLecture, setPreviewCourseLecture] = useState(null);

    const onClosePreviewModalHandler = (e) => {
        e.preventDefault();
        setPreviewCourseLecture(null);
        setShowPreviewModal(false);
    };

    const addToCartHandler = (course_id) => {
        addToCart("App\\Models\\Course", course_id)
            .then((response) => {
                const { status, message } = response.data;

                if (status) {
                    toast.success(message);
                    router.reload();
                }
            })
            .catch((error) => console.error(error));
    };

    const removeFromCartHandler = (course_id) => {
        removeFromCart("App\\Models\\Course", course.id)
            .then((response) => {
                const { status, message } = response.data;

                if (status) {
                    toast.success(message);
                    router.reload();
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <FrontendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Course
                </h2>
            }
        >
            <Head title="Course" />

            <Modal
                show={showPreviewModal}
                closeable={true}
                onClose={onClosePreviewModalHandler}
            >
                <div className="p-6 relative pt-16">
                    <FaTimes
                        className="absolute top-6 right-6 cursor-pointer"
                        onClick={onClosePreviewModalHandler}
                    />

                    {previewCourseLecture ? (
                        <>
                            <div className="mb-6">
                                <MediaPlayer
                                    title={previewCourseLecture.title}
                                    src={previewCourseLecture.video_url}
                                >
                                    <MediaProvider />
                                    <PlyrLayout
                                        // thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
                                        icons={plyrLayoutIcons}
                                    />
                                </MediaPlayer>
                            </div>
                            <div className="mb-6">
                                <h3>
                                    <span className="font-bold text-secondary">
                                        Preview:
                                    </span>{" "}
                                    {previewCourseLecture.title}
                                </h3>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </Modal>

            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px]">
                    <div className="lg:col-start-1 lg:col-span-8 space-y-[35px]">
                        <div>
                            <img src={course.image_url} className="w-full" />
                        </div>

                        <div>
                            <div className="flex items-center justify-between flex-wrap gap-6 mb-6">
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

                            <div className="flex gap-5 flex-wrap items-center mb-[30px]">
                                {course.enrolled ? (
                                    <div className="text-xl font-bold text-success leading-[25px] flex items-center gap-2">
                                        <FiCheck />
                                        <span>Enrolled</span>
                                    </div>
                                ) : (
                                    <>
                                        {course.discount_percentage ? (
                                            <div className="text-xl font-bold text-primary leading-[25px]">
                                                <span>
                                                    {rupiah(
                                                        course.discounted_price
                                                    )}
                                                </span>
                                                <del className="text-sm text-gray-500 font-semibold">
                                                    / {rupiah(course.price)}
                                                </del>
                                            </div>
                                        ) : (
                                            <div className="text-3xl font-bold text-primary leading-[25px]">
                                                <span>
                                                    {rupiah(course.price)}
                                                </span>
                                            </div>
                                        )}
                                    </>
                                )}

                                <div className="flex items-center gap-2">
                                    <div>
                                        <FaBook className="text-primary" />
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-800 dark:text-gray-400">
                                            {course.course_lecture_count}{" "}
                                            Lecture
                                        </span>
                                    </div>
                                </div>
                                <div className="text-start md:text-end flex justify-end gap-1 items-center">
                                    {[...Array(5)].map((_, index) => {
                                        if (
                                            index + 1 <=
                                            course.course_review_recap.avg
                                        ) {
                                            return (
                                                <FaStar className="text-xs text-yellow-400" />
                                            );
                                        } else {
                                            return (
                                                <FaStar className="text-xs text-gray-700" />
                                            );
                                        }
                                    })}
                                    <span className="text-xs text-gray-300">
                                        ({course.course_review_recap.total})
                                    </span>
                                </div>
                            </div>

                            <div
                                dangerouslySetInnerHTML={{
                                    __html: course.description,
                                }}
                                className="text-gray-800 dark:text-gray-200 font-normal text-lg mb-[30px]"
                            ></div>

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
                                <TabList className="w-full bg-white dark:bg-base-100 flex justify-between shadow-md">
                                    <Tab
                                        className="flex-1 flex justify-center items-center gap-2 text-center py-6 cursor-pointer focus-visible:outline-none transition-all ease-in-out hover:bg-primary hover:text-white"
                                        selectedClassName="border-none bg-primary text-white"
                                    >
                                        <FaBook />
                                        <span>Kurikulum</span>
                                    </Tab>
                                    <Tab
                                        className="flex-1 flex justify-center items-center gap-2 text-center py-6 cursor-pointer focus-visible:outline-none transition-all ease-in-out hover:bg-primary hover:text-white"
                                        selectedClassName="border-none bg-primary text-white"
                                    >
                                        <FaParagraph />
                                        <span>Deskripsi</span>
                                    </Tab>
                                    <Tab
                                        className="flex-1 flex justify-center items-center gap-2 text-center py-6 cursor-pointer focus-visible:outline-none transition-all ease-in-out hover:bg-primary hover:text-white"
                                        selectedClassName="border-none bg-primary text-white"
                                    >
                                        <FaStar />
                                        <span>Ulasan</span>
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
                                        <Accordion
                                            transition
                                            transitionTimeout={200}
                                        >
                                            {course.course_sections.map(
                                                (course_section, index) => {
                                                    return (
                                                        <AccordionItem
                                                            header={
                                                                <span className="font-semibold">
                                                                    {
                                                                        course_section.title
                                                                    }
                                                                </span>
                                                            }
                                                            initialEntered={
                                                                index === 0
                                                            }
                                                            key={index}
                                                        >
                                                            {course_section.course_lectures.map(
                                                                (
                                                                    course_lecture
                                                                ) => (
                                                                    <div className="flex justify-between items-center py-4 border-b border-base-100 last:border-b-0 text-sm">
                                                                        <div className="flex justify-between items-center gap-4">
                                                                            <BiMoviePlay />
                                                                            <div>
                                                                                {
                                                                                    course_lecture.title
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                        {course_lecture.set_as_preview ? (
                                                                            <div className="flex justify-between gap-4">
                                                                                <div className="flex justify-between items-center gap-2">
                                                                                    <FaClock />
                                                                                    {course_lecture.video_duration
                                                                                        ? course_lecture.video_duration_human_readable
                                                                                        : 0}{" "}
                                                                                </div>
                                                                                <button
                                                                                    onClick={() => {
                                                                                        setPreviewCourseLecture(
                                                                                            course_lecture
                                                                                        );
                                                                                        setShowPreviewModal(
                                                                                            true
                                                                                        );
                                                                                    }}
                                                                                    className="btn btn-primary btn-sm"
                                                                                >
                                                                                    <FaEye />
                                                                                    <span>
                                                                                        Preview
                                                                                    </span>
                                                                                </button>
                                                                            </div>
                                                                        ) : (
                                                                            <div>
                                                                                <FaLock />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )
                                                            )}
                                                        </AccordionItem>
                                                    );
                                                }
                                            )}
                                        </Accordion>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="py-8">
                                        <div className="card bg-base-100 rounded-none">
                                            <div className="card-body">
                                                <div className="mb-10">
                                                    <h3 className="text-3xl font-bold mb-4 text-primary">
                                                        Deskripsi
                                                    </h3>{" "}
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: course.description,
                                                        }}
                                                        className="prose"
                                                    ></div>
                                                </div>
                                                <div className="mb-10">
                                                    <h3 className="text-xl font-bold mb-4 text-primary">
                                                        Prasyarat
                                                    </h3>{" "}
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: course.prerequisites,
                                                        }}
                                                        className="prose"
                                                    ></div>
                                                </div>

                                                <div className="mb-10">
                                                    <h3 className="text-xl font-bold mb-4 text-primary">
                                                        Tujuan
                                                    </h3>{" "}
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: course.goals,
                                                        }}
                                                        className="prose"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="py-8">
                                        <div className="card bg-base-100 rounded-none">
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
                                <TabPanel>
                                    <div className="py-8">
                                        <div className="card bg-base-100 rounded-none">
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-3xl font-bold">
                                    Kursus dari Instruktur{" "}
                                    {course.instructor.name}
                                </h3>
                                <div>
                                    <Link className="text-primary font-bold">
                                        Lebih Banyak...
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-[30px]">
                                    {more_courses.map((course) => (
                                        <CourseCard course={course} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-start-9 lg:col-span-4">
                        <div className="card bg-base-100 shadow-xl">
                            {!course.feature_course_lecture ? (
                                <></>
                            ) : (
                                <MediaPlayer
                                    title={course.feature_course_lecture.title}
                                    src={
                                        course.feature_course_lecture.video_url
                                    }
                                >
                                    <MediaProvider />
                                    <PlyrLayout
                                        // thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
                                        icons={plyrLayoutIcons}
                                    />
                                </MediaPlayer>
                            )}
                            <div className="card-body">
                                {course.enrolled ? (
                                    <div className="text-xl font-bold text-success leading-[25px] mb-6 flex items-center gap-2">
                                        <FiCheck />
                                        <span>Enrolled</span>
                                    </div>
                                ) : (
                                    <>
                                        {course.price == 0 ? (
                                            <>
                                                <div className="mb-6 flex justify-between">
                                                    <div className="text-3xl font-bold text-success leading-[25px]">
                                                        <span>Gratis</span>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                {course.discount_percentage ? (
                                                    <div className="mb-6 flex justify-between">
                                                        <div className="text-xl font-bold text-primary leading-[25px]">
                                                            <span>
                                                                {rupiah(
                                                                    course.discounted_price
                                                                )}
                                                            </span>{" "}
                                                            <span className="text-sm text-gray-500 font-semibold line-through">
                                                                /{" "}
                                                                {rupiah(
                                                                    course.price
                                                                )}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="bg-secondary text-xs rounded-full px-3 py-1 text-white">
                                                                {
                                                                    course.discount_percentage
                                                                }
                                                                % OFF
                                                            </span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="mb-6 flex justify-between">
                                                        <div className="text-3xl font-bold text-primary leading-[25px]">
                                                            <span>
                                                                {rupiah(
                                                                    course.price
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </>
                                )}

                                {auth.user ? (
                                    <div className="mb-6">
                                        {course.enrolled ? (
                                            <>
                                                <Link
                                                    href={route(
                                                        "learning_area.course.show",
                                                        {
                                                            course: course.id,
                                                        }
                                                    )}
                                                    preserveScroll={true}
                                                    preserveState={true}
                                                    className="btn flex justify-center items-center btn-success w-full mb-3"
                                                >
                                                    <FaBook />
                                                    <span>
                                                        Menuju Halaman
                                                        Pembelajaran
                                                    </span>
                                                </Link>
                                            </>
                                        ) : (
                                            <>
                                                {course.price == 0 ? (
                                                    <>
                                                        <button
                                                            onClick={(e) => {
                                                                e.preventDefault;
                                                                router.post(
                                                                    route(
                                                                        "join_course"
                                                                    ),
                                                                    {
                                                                        course_id:
                                                                            course.id,
                                                                    },
                                                                    {
                                                                        preserveState: true,
                                                                        preserveScroll: true,
                                                                        onError:
                                                                            (
                                                                                error
                                                                            ) => {
                                                                                toast.error(
                                                                                    error.course_id
                                                                                );
                                                                            },
                                                                        onSuccess:
                                                                            (
                                                                                error
                                                                            ) => {},
                                                                    }
                                                                );
                                                            }}
                                                            preserveState={true}
                                                            className="btn flex justify-center items-center btn-success w-full mb-3"
                                                        >
                                                            <FaDoorOpen />
                                                            <span>
                                                                Bergabung Ke
                                                                Dalam Kelas
                                                            </span>
                                                        </button>

                                                        <span className="join-course-valiation text-error"></span>
                                                    </>
                                                ) : (
                                                    <>
                                                        {!itemIsExitsOnCart(
                                                            course,
                                                            auth.cart
                                                        ) ? (
                                                            <Link
                                                                href={route(
                                                                    "cart.store"
                                                                )}
                                                                data={{
                                                                    itemable_type:
                                                                        "App\\Models\\Course",
                                                                    itemable_id:
                                                                        course.id,
                                                                }}
                                                                method="POST"
                                                                onSuccess={() => {
                                                                    toast.success(
                                                                        "Berhasil di tambahkan ke keranjang"
                                                                    );
                                                                }}
                                                                onError={() => {
                                                                    toast.error(
                                                                        "Gagal menambahkan ke keranjang"
                                                                    );
                                                                }}
                                                                preserveScroll={
                                                                    true
                                                                }
                                                                preserveState={
                                                                    true
                                                                }
                                                                className="btn flex justify-center items-center btn-primary w-full mb-3"
                                                            >
                                                                <FaCartPlus />
                                                                <span>
                                                                    Tambahkan ke
                                                                    keranjang
                                                                </span>
                                                            </Link>
                                                        ) : (
                                                            <Link
                                                                href={route(
                                                                    "cart.destroy"
                                                                )}
                                                                data={{
                                                                    itemable_type:
                                                                        "App\\Models\\Course",
                                                                    itemable_id:
                                                                        course.id,
                                                                }}
                                                                method="DELETE"
                                                                onSuccess={() => {
                                                                    toast.success(
                                                                        "Berhasil di hapus dari keranjang"
                                                                    );
                                                                }}
                                                                onError={() => {
                                                                    toast.error(
                                                                        "Gagal menghapus dari keranjang"
                                                                    );
                                                                }}
                                                                preserveScroll={
                                                                    true
                                                                }
                                                                preserveState={
                                                                    true
                                                                }
                                                                className="btn flex justify-center items-center btn-error w-full mb-3"
                                                            >
                                                                <FaTrash />
                                                                <span>
                                                                    Hapus Dari
                                                                    Keranjang
                                                                </span>
                                                            </Link>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </div>
                                ) : (
                                    <div className="mb-6">
                                        <Link
                                            href={route("login")}
                                            className="btn flex justify-center items-center btn-primary w-full"
                                        >
                                            <span>Login/Daftar</span>
                                        </Link>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <ul>
                                        <li className="flex text-gray-800 dark:text-gray-200 text-sm border-b border-gray-200 dark:border-gray-700 py-4 justify-between">
                                            <span>Instruktur:</span>
                                            <span className="bg-primary text-white text-xs rounded-full px-3 py-1">
                                                {course.instructor.name}
                                            </span>
                                        </li>
                                        <li className="flex text-gray-800 dark:text-gray-200 text-sm border-b border-gray-200 dark:border-gray-700 py-4 justify-between">
                                            <span>Total Durasi:</span>
                                            <span className="bg-primary text-white text-xs rounded-full px-3 py-1">
                                                {course.total_lecture_duration}
                                            </span>
                                        </li>
                                        <li className="flex text-gray-800 dark:text-gray-200 text-sm border-b border-gray-200 dark:border-gray-700 py-4 justify-between">
                                            <span>Jumlah Section:</span>
                                            <span className="bg-primary text-white text-xs rounded-full px-3 py-1">
                                                {course.course_section_count}
                                            </span>
                                        </li>
                                        <li className="flex text-gray-800 dark:text-gray-200 text-sm border-b border-gray-200 dark:border-gray-700 py-4 justify-between">
                                            <span>Jumlah Lecture:</span>
                                            <span className="bg-primary text-white text-xs rounded-full px-3 py-1">
                                                {course.course_lecture_count}
                                            </span>
                                        </li>
                                        <li className="flex text-gray-800 dark:text-gray-200 text-sm border-b border-gray-200 dark:border-gray-700 py-4 justify-between">
                                            <span>Level</span>
                                            <span className="bg-primary text-white text-xs rounded-full px-3 py-1">
                                                {course.level}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
