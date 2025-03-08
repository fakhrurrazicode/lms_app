import { minutesToHumanReadable, rupiah } from "@/bootstrap";
import { Link } from "@inertiajs/react";
import React from "react";
import { FaBook, FaClock, FaHeart, FaStar } from "react-icons/fa";

export default function CourseCard({ course }) {
    return (
        <div className="card bg-base-100 w-full shadow-xl rounded-md overflow-hidden">
            <Link href={"/course/" + course.slug} className="relative">
                <div className="absolute top-0 py-4 px-4 w-full flex justify-between items-center">
                    <span
                        href="#"
                        className="badge badge-primary font-semibold text-xs py-3 px-4"
                    >
                        {course.course_category.name}
                    </span>

                    <span
                        href="#"
                        className="text-white bg-black/30 hover:bg-primary transition-all ease-in-out px-2 py-2 rounded-lg"
                    >
                        <FaHeart />
                    </span>
                </div>
                <img src={course.image_url} alt="Shoes" />
            </Link>
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
                <p className="mb-2 font-bold text-sm">
                    <span className="text-primary">{rupiah(course.price)}</span>{" "}
                    <span className="text-gray-400">
                        / {rupiah(course.price)}
                    </span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 pt-[15px] border-t border-gray-700">
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
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
}
