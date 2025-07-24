import CourseCard from "@/Components/CourseCard";
import TiltElement from "@/Components/TiltElement";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import { FaChartBar, FaChartLine } from "react-icons/fa6";
import { FiArrowLeft, FiArrowRight, FiBookOpen } from "react-icons/fi";
import { MdOutlineCheck } from "react-icons/md";
import { RiTriangleLine } from "react-icons/ri";

export default function Home({ latest_courses, course_categories }) {
    const page = usePage();

    return (
        <FrontendLayout>
            <Head title="Home" />

            <section id="hero" className="">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col justify-center h-full py-40 relative ">
                        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-[30px]">
                            <div className="p-6 md:col-start-1 md:col-span-12 lg:col-start-1 lg:col-span-8">
                                <h3 className="text-lg text-secondary uppercase font-semibold tracking-[.25em] mb-8">
                                    Solusi pendidikan
                                </h3>

                                <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
                                    Belajar Tanpa{" "}
                                    <span className="text-secondary">
                                        Batas
                                    </span>{" "}
                                    Mencapai Masa Depan
                                </h1>

                                <p className="mb-8 text-sm md:text-lg">
                                    Dengan LMS kami, anda dapat belajar kapan
                                    saja dan dimana saja, Akses ribuan kursus
                                    dan sumber daya pemebelajaran yang
                                    berkualitas tinggi, serta komunitas
                                    pemebelajaran yang aktif dan mendukung.
                                </p>

                                <div className="flex gap-6">
                                    <Link
                                        href={route("courses")}
                                        className="btn btn-primary btn-md"
                                    >
                                        Lihat Lebih Banyak Kursus
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6 md:col-start-1 md:col-span-8 lg:col-start-9 lg:col-span-4">
                                <div className="shadow-2xl shadow-primary/50">
                                    {latest_courses[0] ? (
                                        <CourseCard
                                            course={latest_courses[0]}
                                        />
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 shadow-xl mx-auto max-w-7xl sm:px-6 lg:px-8  py-6 w-full translate-y-[50%] z-50 absolute bottom-0 left-[50%] translate-x-[-50%] grid grid-cols-2 md:grid-cols-5 gap-6">
                            <div className="flex items-center py-2">
                                <img
                                    className="mx-auto"
                                    src="/images/brands/brand_1.png"
                                />
                            </div>
                            <div className="flex items-center py-2">
                                <img
                                    className="mx-auto"
                                    src="/images/brands/brand_2.png"
                                />
                            </div>
                            <div className="flex items-center py-2">
                                <img
                                    className="mx-auto"
                                    src="/images/brands/brand_3.png"
                                />
                            </div>
                            <div className="flex items-center py-2">
                                <img
                                    className="mx-auto"
                                    src="/images/brands/brand_4.png"
                                />
                            </div>
                            <div className="flex items-center py-2">
                                <img
                                    className="mx-auto"
                                    src="/images/brands/brand_5.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div
                className="
            bg-gradient-to-r from-fuchsia-100 from-0% via-slate-50 via-50% to-fuchsia-100 to-100%
            dark:bg-gradient-to-r dark:from-indigo-900/20 dark:from-0% dark:via-slate-900/20 dark:via-50% dark:to-indigo-900/20 dark:to-100%"
            >
                <section id="hero" className="pt-32 pb-0 overflow-hidden">
                    <div data-aos="fade-up" className="container mx-auto px-4">
                        <div className="flex flex-col justify-center h-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px]">
                                <div className="p-6">
                                    <div className=""></div>

                                    <TiltElement className="relative">
                                        <img
                                            className="absolute z-0 left-1/2 -translate-x-1/2"
                                            src="/images/abouts/about_12.png"
                                            alt=""
                                        />
                                        <img
                                            className="z-10"
                                            src="/images/abouts/about_13.png"
                                            alt=""
                                        />
                                    </TiltElement>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg text-secondary uppercase font-semibold tracking-[.25em] mb-8">
                                        Solusi pendidikan
                                    </h3>

                                    <h1 className="text-6xl font-extrabold mb-8">
                                        Selamat datang di{" "}
                                        <span className="text-secondary">
                                            GuruTeknik
                                        </span>{" "}
                                        LMS
                                    </h1>

                                    <div className="ps-6 border-l-4 border-secondary mb-8">
                                        <p>
                                            Dengan LMS kami, anda dapat belajar
                                            kapan saja dan dimana saja, Akses
                                            ribuan kursus dan sumber daya
                                            pemebelajaran yang berkualitas
                                            tinggi, serta komunitas
                                            pemebelajaran yang aktif dan
                                            mendukung.
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-4 mb-6 group">
                                            <div className="bg-indigo-500/20 p-2 group-hover:text-white group-hover:bg-indigo-500 transition-all">
                                                <MdOutlineCheck />
                                            </div>
                                            <p>
                                                Belajar dari pada ahli di
                                                bidangnya
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4 mb-6 group">
                                            <div className="bg-indigo-500/20 p-2 group-hover:text-white group-hover:bg-indigo-500 transition-all">
                                                <MdOutlineCheck />
                                            </div>
                                            <p>
                                                Jelajahi berbagai jenis keahlian
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="popular" className="py-32">
                    <div className="container mx-auto px-4">
                        <div className="lg:flex space-y-6 lg:space-x-6 justify-between items-center my-16">
                            <div className="lg:col-star-1 lg:col-span-4">
                                <span className="text-sm font-semibold bg-primary text-white px-6 py-[5px] mb-5 rounded-full inline-block">
                                    Course List
                                </span>
                                <h3 className="text-5xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 leading-10 md:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor dark:text-blackColor-dark">
                                    Kursus{" "}
                                    <span className="relative text-secondary">
                                        Terpopuler
                                    </span>
                                </h3>
                            </div>

                            <div className="lg:col-star-10 lg:col-span-3 flex lg:justify-end">
                                <div>
                                    <Link
                                        className="btn btn-secondary"
                                        href={route("courses")}
                                    >
                                        Semua Kategori
                                        <FiArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                            {course_categories.map((course_category, index) => (
                                <div data-aos="fade-up" key={index}>
                                    <div className="card dark:bg-slate-950 dark:text-white shadow-2xl shadow-indigo-600/50 transition-all ease-in-out duration-500 hover:-translate-y-2 hover:bg-indigo-700 hover:text-white group">
                                        <div className="card-body relative">
                                            <RiTriangleLine className="text-warning text-4xl absolute right-[15%] opacity-0 rotate-0 group-hover:opacity-80 group-hover:rotate-45 group-hover:transition-all duration-500 group-hover:ease-in-out" />
                                            <FiBookOpen className="text-primary text-3xl mb-4 group-hover:text-black transition-all ease-in-out duration-500" />
                                            <h3 className="text-xl font-bold text-inherit ">
                                                <Link
                                                    href={route("courses", {
                                                        course_category_ids: [
                                                            course_category.id,
                                                        ],
                                                    })}
                                                    className="hover:text-secondary"
                                                >
                                                    {course_category.name}
                                                </Link>
                                            </h3>
                                            {/* <p className="text-slate-500 group-hover:text-white transition-all ease-in-out duration-500">
                                        Business is success
                                    </p> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <section id="popular" className="py-32 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[30px] mb-6">
                        <div className="lg:col-start-1 lg:col-span-4">
                            <span className="text-sm font-semibold text-primary bg-white px-6 py-[5px] mb-5 rounded-full inline-block">
                                Daftar Kursus
                            </span>
                        </div>

                        <div className="lg:col-start-5 lg:col-span-5">
                            <p className="text-sm md:text-base text-gray-900 dark:text-white mb-[10px] 2xl:mb-[50px] 2xl:pl-[50px]"></p>
                        </div>

                        <div className="lg:col-star-10 lg:col-span-3 flex lg:justify-end">
                            <div>
                                <Link
                                    href={route("courses")}
                                    className="btn btn-secondary"
                                >
                                    Lihat Lebih Banyak
                                    <FiArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mb-16">
                        <h3 className="text-5xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 leading-10 md:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor dark:text-blackColor-dark">
                            Kursus Online Terbaik untuk Karier Anda
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                        {latest_courses.map((course, index) => (
                            <div data-aos="fade-up" key={index}>
                                <CourseCard key={course.id} course={course} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
