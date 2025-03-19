import { minutesToHumanReadable, rupiah } from "@/bootstrap";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { FaBook, FaClock, FaHeart, FaStar } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

export default function EnrolledCourseCard({ enrollment }) {
    const { course } = enrollment;
    return (
        <div className="card bg-white dark:bg-slate-950 w-full shadow-xl rounded-md overflow-hidden">
            <div className="relative">
                <div className="absolute top-0 py-4 px-4 w-full flex justify-between items-center">
                    <span
                        href="#"
                        className="badge badge-primary font-semibold text-xs py-3 px-4"
                    >
                        {course.course_category.name}
                    </span>
                </div>
                <Link href={"/course/" + course.slug}>
                    <img src={course.image_url} alt="Shoes" />
                </Link>
            </div>
            <div className="card-body px-4">
                <div className="flex justify-between mb-2">
                    <div className="flex justify-start items-center gap-2 text-xs">
                        <FaBook className="text-primary" />
                        <span>{course.course_lecture_count} Lectures </span>
                    </div>

                    <div className="flex justify-start items-center gap-2 text-xs">
                        <FaClock className="text-primary" />
                        <span>{minutesToHumanReadable(course.duration)}</span>
                    </div>
                </div>
                <a
                    href={route("course", {
                        slug: course.slug,
                    })}
                    className="card-title mb-2 text-lg"
                >
                    {course.title}
                </a>

                <div className="grid grid-cols-1 md:grid-cols-2 pt-[15px] border-t border-gray-700 mb-6">
                    <div>
                        {course.instructor ? (
                            <a
                                href="instructor-details.html"
                                className="text-base font-bold font-hind flex items-center hover:text-primary dark:text-blackColor-dark dark:hover:text-primary"
                            >
                                <img
                                    className="w-[30px] h-[30px] rounded-full mr-[15px]"
                                    src="/images/grids/grid_small_1.jpg"
                                    alt=""
                                />
                                <span className="flex text-sm">
                                    {course.instructor.name}
                                </span>
                            </a>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="text-start md:text-end flex justify-end gap-1 items-center">
                        <FaStar className="text-xs text-yellow-400" />
                        <FaStar className="text-xs text-yellow-400" />
                        <FaStar className="text-xs text-yellow-400" />
                        <FaStar className="text-xs text-yellow-400" />
                        <FaStar className="text-xs text-yellow-400" />
                        <span className="text-xs text-lightGrey6">(44)</span>
                    </div>
                </div>
                <div className="card-actions">
                    <div className="bg-base-200 h-[25px] w-full rounded-lg relative overflow-hidden mb-6">
                        <div
                            className={
                                "bg-primary w-[" +
                                enrollment.progress +
                                "%] text-center absolute top-0 bottom-0"
                            }
                        >
                            <span className="text-white text-xs">
                                {enrollment.progress}%
                            </span>
                        </div>
                    </div>

                    <Link
                        href={route("learning_area.course.index", {
                            course: course,
                        })}
                        className="btn btn-primary w-full"
                    >
                        <FaBook />
                        <span>Belajar Sekarang</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
