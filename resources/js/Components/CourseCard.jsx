import { minutesToHumanReadable } from "@/bootstrap";
import React from "react";
import { FaBook, FaClock, FaHeart, FaStar } from "react-icons/fa";

export default function CourseCard({ course }) {
    return (
        <div className="card bg-base-100 w-full shadow-xl rounded-md">
            <a href="#" className="relative">
                <div className="absolute top-0 py-4 px-6 w-full flex justify-between items-center">
                    <a
                        href="#"
                        className="badge badge-primary font-bold py-3 px-4"
                    >
                        Technology
                    </a>

                    <a
                        href="#"
                        className="text-white bg-black/30 hover:bg-primary transition-all ease-in-out px-2 py-2 rounded-lg"
                    >
                        <FaHeart />
                    </a>
                </div>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                />
            </a>
            <div className="card-body px-6">
                <div className="flex justify-between mb-2">
                    <div className="flex justify-start items-center gap-2 text-xs">
                        <FaBook className="text-primary" />
                        <span>23 Lessons</span>
                    </div>

                    <div className="flex justify-start items-center gap-2 text-xs">
                        <FaClock className="text-primary" />
                        <span>{minutesToHumanReadable(course.duration)}</span>
                    </div>
                </div>
                <a href="#" className="card-title mb-2 text-lg">
                    {course.title}
                </a>
                <p className="mb-2 font-bold text-sm">
                    <span className="text-primary">$32.00</span>{" "}
                    <span className="text-gray-400">/ $67.00</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 pt-[15px] border-t border-borderColor">
                    <div>
                        {course.instructor ? (
                            <a
                                href="instructor-details.html"
                                className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                            >
                                <img
                                    className="w-[30px] h-[30px] rounded-full mr-[15px]"
                                    src="/images/grids/grid_small_1.jpg"
                                    alt=""
                                />
                                <span className="flex">
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
