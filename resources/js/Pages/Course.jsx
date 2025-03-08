import CourseCard from "@/Components/CourseCard";
import CourseTab from "@/Components/CourseTab";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import "react-tabs/style/react-tabs.css";
import React from "react";
import {
    FaBook,
    FaCartPlus,
    FaChevronDown,
    FaParagraph,
    FaStar,
    FaTrash,
    FaUserAlt,
} from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { itemIsExitsOnCart, minutesToHumanReadable, rupiah } from "@/bootstrap";

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
        className="border-b"
        buttonProps={{
            className: ({ isEnter }) =>
                `flex w-full p-4 text-left border bg-white ${
                    isEnter && "bg-slate-200"
                }`,
        }}
        contentProps={{
            className: "transition-height duration-200 ease-out border",
        }}
        panelProps={{ className: "p-4" }}
    />
);

export default function Course() {
    const { course, auth } = usePage().props;

    return (
        <FrontendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Course
                </h2>
            }
        >
            <Head title="Course" />

            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px]">
                    <div className="lg:col-start-1 lg:col-span-8 space-y-[35px]">
                        <div>
                            <img src={course.image_url} className="w-full" />
                        </div>

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

                            <div className="flex gap-5 flex-wrap items-center mb-[30px]">
                                <div className="text-xl font-medium text-primary leading-[25px]">
                                    {rupiah(course.price)}
                                    <del className="text-sm text-gray-500 font-semibold">
                                        / {rupiah(course.price)}
                                    </del>
                                </div>
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
                                    <FaStar className="text-xs text-yellow-400" />
                                    <FaStar className="text-xs text-yellow-400" />
                                    <FaStar className="text-xs text-yellow-400" />
                                    <FaStar className="text-xs text-yellow-400" />
                                    <FaStar className="text-xs text-yellow-400" />
                                    <span className="text-xs text-lightGrey6">
                                        (44)
                                    </span>
                                </div>
                            </div>

                            <div className="text-gray-800 dark:text-gray-200 font-normal text-lg mb-[30px]">
                                {course.description}
                            </div>

                            <div>
                                <h3 className="border-l-4 border-primary pl-3 mb-[30px]">
                                    Course Details
                                </h3>
                                <div className="card bg-base-100 mb-[30px] grid grid-cols-1 md:grid-cols-2">
                                    <ul className="p-10px md:py-[55px] md:pl-[50px] md:pr-[70px] lg:py-[35px] lg:px-[30px] 2xl:py-[55px] 2xl:pl-[50px] 2xl:pr-[70px] border-r-2 border-base-200 space-y-[10px]">
                                        <li>
                                            <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                Instructor :
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
                                                Duration :
                                                <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                    {minutesToHumanReadable(
                                                        course.duration
                                                    )}
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                Enrolled :
                                                <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                    2 students
                                                </span>
                                            </p>
                                        </li>
                                    </ul>

                                    <ul className="p-10px md:py-[55px] md:pl-[50px] md:pr-[70px] lg:py-[35px] lg:px-[30px] 2xl:py-[55px] 2xl:pl-[50px] 2xl:pr-[70px] border-r-2 border-base-200 space-y-[10px]">
                                        <li>
                                            <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                Course level :
                                                <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                    {course.level}
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                Price Discount :
                                                <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                    -20%
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                Regular Price :
                                                <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                    {rupiah(course.price)}
                                                </span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Tabs>
                                <TabList className="w-full bg-white dark:bg-base-100 flex justify-between">
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
                                            <AccordionItem
                                                header="What is Lorem Ipsum?"
                                                initialEntered
                                            >
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </AccordionItem>

                                            <AccordionItem header="Where does it come from?">
                                                Quisque eget luctus mi, vehicula
                                                mollis lorem. Proin fringilla
                                                vel erat quis sodales. Nam ex
                                                enim, eleifend venenatis lectus
                                                vitae.
                                            </AccordionItem>

                                            <AccordionItem header="Why do we use it?">
                                                Suspendisse massa risus, pretium
                                                id interdum in, dictum sit amet
                                                ante. Fusce vulputate purus sed
                                                tempus feugiat.
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="py-8">
                                        <h3 className="text-3xl font-bold mb-6">
                                            Experience is over the world visit
                                        </h3>{" "}
                                        <p className="mb-6">
                                            {" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Curabitur vulputate vestibulum
                                            Phasellus rhoncus, dolor eget
                                            viverra pretium, dolor tellus
                                            aliquet nunc, vitae ultricies erat
                                            elit eu lacus.
                                        </p>{" "}
                                        <p className="mb-6">
                                            Vestibulum non justo consectetur,
                                            cursus ante, tincidunt sapien. Nulla
                                            quis diam sit amet turpis interdum
                                            accumsan quis nec enim. Vivamus
                                            faucibus ex sed nibh egestas
                                            elementum. Mauris et bibendum dui.
                                        </p>{" "}
                                        <p className="mb-6">
                                            Aenean consequat pulvinar luctus We
                                            have covered many special events
                                            such as fireworks, fairs, parades,
                                            races, walks, awards ceremonies,
                                            fashion shows, sporting events, and
                                            even a memorial service. Lorem ipsum
                                            dolor sit amet, consectetur
                                            adipiscing elit.
                                        </p>{" "}
                                        <p className="mb-6">
                                            Curabitur vulputate vestibulum
                                            Phasellus rhoncus, dolor eget
                                            viverra pretium, dolor tellus
                                            aliquet nunc, vitae ultricies erat
                                            elit eu lacus. Vestibulum non justo
                                            consectetur, cursus ante, tincidunt
                                            sapien. Nulla quis diam sit amet
                                            turpis interdum accumsan quis nec
                                            enim. Vivamus faucibus ex sed nibh
                                            egestas elementum. Mauris et
                                            bibendum dui. Aenean consequat
                                            pulvinar luctus.
                                        </p>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="py-8">
                                        <div class="grid grid-cols-1 lg:grid-cols-12 items-center gap-x-30px gap-y-5">
                                            <div class="lg:col-start-1 lg:col-span-4 px-10px py-30px bg-whiteColor dark:bg-whiteColor-dark shadow-review text-center">
                                                <p class="text-7xl font-extrabold text-blackColor dark:text-blackColor-dark leading-90px">
                                                    5.0
                                                </p>
                                                <div class="text-secondary">
                                                    <FaStar className="inline-block" />
                                                    <FaStar className="inline-block" />
                                                    <FaStar className="inline-block" />
                                                    <FaStar className="inline-block" />
                                                    <FaStar className="inline-block" />
                                                </div>
                                                <p class="text-blackColor dark:text-blackColor-dark leading-26px font-medium">
                                                    (17 Reviews)
                                                </p>
                                            </div>

                                            <div class="lg:col-start-5 lg:col-span-8 px-15px">
                                                <ul class="flex flex-col gap-y-3">
                                                    <li class="flex items-center text-blackColor dark:text-blackColor-dark">
                                                        <div className="flex w-[10%] justify-between items-center gap-2">
                                                            <span>5</span>
                                                            <span>
                                                                <FaStar className="text-secondary" />
                                                            </span>
                                                        </div>
                                                        <div class="w-[80%] mx-6">
                                                            <progress
                                                                className="progress progress-secondary w-full"
                                                                value={100}
                                                                max="100"
                                                            ></progress>
                                                        </div>
                                                        <div className="w-[10%]">
                                                            <span className="text-end block w-full">
                                                                10
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li class="flex items-center text-blackColor dark:text-blackColor-dark">
                                                        <div className="flex w-[10%] justify-between items-center gap-2">
                                                            <span>4</span>
                                                            <span>
                                                                <FaStar className="text-secondary" />
                                                            </span>
                                                        </div>
                                                        <div class="w-[80%] mx-6">
                                                            <progress
                                                                className="progress progress-secondary w-full"
                                                                value={80}
                                                                max="100"
                                                            ></progress>
                                                        </div>
                                                        <div className="w-[10%]">
                                                            <span className="text-end block w-full">
                                                                5
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li class="flex items-center text-blackColor dark:text-blackColor-dark">
                                                        <div className="flex w-[10%] justify-between items-center gap-2">
                                                            <span>3</span>
                                                            <span>
                                                                <FaStar className="text-secondary" />
                                                            </span>
                                                        </div>
                                                        <div class="w-[80%] mx-6">
                                                            <progress
                                                                className="progress progress-secondary w-full"
                                                                value={60}
                                                                max="100"
                                                            ></progress>
                                                        </div>
                                                        <div className="w-[10%]">
                                                            <span className="text-end block w-full">
                                                                3
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li class="flex items-center text-blackColor dark:text-blackColor-dark">
                                                        <div className="flex w-[10%] justify-between items-center gap-2">
                                                            <span>2</span>
                                                            <span>
                                                                <FaStar className="text-secondary" />
                                                            </span>
                                                        </div>
                                                        <div class="w-[80%] mx-6">
                                                            <progress
                                                                className="progress progress-secondary w-full"
                                                                value={25}
                                                                max="100"
                                                            ></progress>
                                                        </div>
                                                        <div className="w-[10%]">
                                                            <span className="text-end block w-full">
                                                                2
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li class="flex items-center text-blackColor dark:text-blackColor-dark">
                                                        <div className="flex w-[10%] justify-between items-center gap-2">
                                                            <span>1</span>
                                                            <span>
                                                                <FaStar className="text-secondary" />
                                                            </span>
                                                        </div>
                                                        <div class="w-[80%] mx-6">
                                                            <progress
                                                                className="progress progress-secondary w-full"
                                                                value={20}
                                                                max="100"
                                                            ></progress>
                                                        </div>
                                                        <div className="w-[10%]">
                                                            <span className="text-end block w-full">
                                                                1
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="py-8">Instruktur</div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                    <div className="lg:col-start-9 lg:col-span-4">
                        <div className="card bg-base-100 shadow-xl">
                            <figure>
                                <img src={course.image_url} alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <div className="text-xl font-medium text-primary leading-[25px] mb-6">
                                    {rupiah(course.price)}
                                    <del className="text-sm text-gray-500 font-semibold">
                                        / {rupiah(course.price)}
                                    </del>
                                </div>

                                {auth.user ? (
                                    <div className="mb-6">
                                        {!itemIsExitsOnCart(
                                            course,
                                            auth.cart
                                        ) ? (
                                            <Link
                                                href={route("cart.store")}
                                                method="POST"
                                                preserveScroll={true}
                                                preserveState={true}
                                                data={{
                                                    itemable_type:
                                                        "App\\Models\\Course",
                                                    itemable_id: course.id,
                                                }}
                                                className="btn flex justify-center items-center btn-primary w-full mb-3"
                                            >
                                                <FaCartPlus />
                                                <span>Add to Cart</span>
                                            </Link>
                                        ) : (
                                            <Link
                                                href={route("cart.destroy")}
                                                method="DELETE"
                                                preserveScroll={true}
                                                preserveState={true}
                                                data={{
                                                    itemable_type:
                                                        "App\\Models\\Course",
                                                    itemable_id: course.id,
                                                }}
                                                className="btn flex justify-center items-center btn-error w-full mb-3"
                                            >
                                                <FaTrash />
                                                <span>Remove from Cart</span>
                                            </Link>
                                        )}
                                        <button className="btn flex justify-center items-center btn-secondary w-full">
                                            <span>Buy Now</span>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="mb-6">
                                        <Link
                                            href={route("login")}
                                            className="btn flex justify-center items-center btn-primary w-full"
                                        >
                                            <span>Sign in/Sign Up</span>
                                        </Link>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <ul>
                                        <li className="flex text-gray-800 dark:text-gray-200 text-sm border-b border-gray-200 dark:border-gray-700 py-4 justify-between">
                                            <span>Instruktur:</span>
                                            <span className="bg-gray-500 text-xs rounded-full px-3 py-1">
                                                D. William
                                            </span>
                                        </li>
                                        <li className="flex text-gray-800 dark:text-gray-200 text-sm border-b border-gray-200 dark:border-gray-700 py-4 justify-between">
                                            <span>Total Durasi:</span>
                                            <span className="bg-gray-500 text-xs rounded-full px-3 py-1">
                                                8Hrs 32Min
                                            </span>
                                        </li>
                                        <li className="flex text-gray-800 dark:text-gray-200 text-sm border-b border-gray-200 dark:border-gray-700 py-4 justify-between">
                                            <span>Jumlah Lecture:</span>
                                            <span className="bg-gray-500 text-xs rounded-full px-3 py-1">
                                                30
                                            </span>
                                        </li>
                                        <li className="flex text-gray-800 dark:text-gray-200 text-sm border-b border-gray-200 dark:border-gray-700 py-4 justify-between">
                                            <span>Level</span>
                                            <span className="bg-gray-500 text-xs rounded-full px-3 py-1">
                                                Basic
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
