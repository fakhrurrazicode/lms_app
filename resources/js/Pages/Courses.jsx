import CourseCard from "@/Components/CourseCard";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import React from "react";
import { FaBook, FaClock, FaHeart } from "react-icons/fa";

export default function Courses() {
    const { courses, course_categories, request } = usePage().props;
    return (
        <FrontendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Courses" />

            <section className="container mx-auto px-4 py-16">
                <div className="flex justify-between items-center py-6">
                    <div>
                        <p>
                            Showing {courses.from}–{courses.to} of{" "}
                            {courses.total} Results
                        </p>
                    </div>

                    <div className="flex items-center"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px]">
                    <div className="md:col-start-1 md:col-span-4 lg:col-span-3">
                        <div className="card bg-white dark:bg-slate-950 w-full shadow-xl rounded-md mb-6">
                            <div className="card-body px-6">
                                <h3 className="card-title mb-4 text-lg font-bold">
                                    Search here
                                </h3>
                                <input
                                    type="text"
                                    placeholder="Search Courses"
                                    className="input input-bordered w-full "
                                    onChange={(e) =>
                                        router.reload({
                                            preserveScroll: true,
                                            preserveState: true,
                                            data: {
                                                ...request,
                                                search: e.target.value,
                                                page: 1,
                                            },
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="card bg-white dark:bg-slate-950 w-full shadow-xl rounded-md mb-6">
                            <div className="card-body px-6">
                                <h3 className="card-title mb-4 text-lg font-bold">
                                    Categories
                                </h3>
                                <ul className="flex flex-col gap-y-4">
                                    {course_categories.map(
                                        (course_category) => (
                                            <li
                                                key={course_category.id}
                                                className={
                                                    request.course_category_ids &&
                                                    request.course_category_ids.includes(
                                                        course_category.id.toString()
                                                    )
                                                        ? "border border-2px dark:border-gray-800 rounded-md px-4 py-3 group bg-primary text-white transition-all ease-in-out text-sm"
                                                        : "border border-2px dark:border-gray-800 rounded-md px-4 py-3 group hover:bg-primary hover:text-white transition-all ease-in-out text-sm"
                                                }
                                            >
                                                <a
                                                    href="#"
                                                    className="flex justify-between items-center"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        let new_course_category_ids =
                                                            [];

                                                        if (
                                                            request.course_category_ids
                                                        ) {
                                                            if (
                                                                request.course_category_ids.includes(
                                                                    course_category.id.toString()
                                                                )
                                                            ) {
                                                                new_course_category_ids =
                                                                    request.course_category_ids.filter(
                                                                        (
                                                                            course_category_id
                                                                        ) =>
                                                                            course_category_id !==
                                                                            course_category.id.toString()
                                                                    );
                                                            } else {
                                                                new_course_category_ids =
                                                                    [
                                                                        ...request.course_category_ids,
                                                                        course_category.id.toString(),
                                                                    ];
                                                            }
                                                        } else {
                                                            new_course_category_ids.push(
                                                                course_category.id.toString()
                                                            );
                                                        }

                                                        router.get(
                                                            "/courses/",
                                                            {
                                                                ...request,
                                                                course_category_ids:
                                                                    new_course_category_ids,
                                                                page: 1,
                                                            },
                                                            {
                                                                preserveScroll: true,
                                                                preserveState: true,
                                                            }
                                                        );
                                                    }}
                                                >
                                                    <span>
                                                        {course_category.name}
                                                    </span>
                                                    <span>
                                                        {
                                                            course_category.course_count
                                                        }
                                                    </span>
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-start-5 md:col-span-8 lg:col-start-4 lg:col-span-9 space-y-[30px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                            {courses.data.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <div className="join">
                                {courses.links.map((link, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={link.url}
                                            className="join-item btn"
                                        >
                                            {link.label
                                                .replace(
                                                    "&laquo; Previous",
                                                    "<<"
                                                )
                                                .replace("Next &raquo;", ">>")}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
