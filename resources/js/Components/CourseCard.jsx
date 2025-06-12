import { minutesToHumanReadable, rupiah } from "@/bootstrap";
import { Link, router, usePage } from "@inertiajs/react";
import axios from "axios";
import React from "react";
import { FaBook, FaClock, FaHeart, FaStar } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { toast } from "react-toastify";

export default function CourseCard({ course }) {
    return (
        <div
            data-aos="fade-up"
            className="card bg-white dark:bg-slate-950 w-full shadow-xl rounded-md overflow-hidden"
        >
            <div className="relative">
                <div className="absolute z-50 top-0 py-4 px-4 w-full flex justify-between items-center">
                    <span
                        href="#"
                        className="badge badge-primary font-semibold text-xs py-3 px-4"
                    >
                        {course.course_category.name}
                    </span>

                    {course.enrolled ? (
                        <span
                            href="#"
                            className="badge badge-success font-semibold text-xs py-3 px-4"
                        >
                            Enrolled
                        </span>
                    ) : (
                        <>
                            {/* <Link
                                href={route("wishlist.toggle")}
                                method="POST"
                                data={{
                                    wishlistable_type: "App\\Models\\Course",
                                    wishlistable_id: course.id,
                                }}
                                className={
                                    course.is_on_wishlist
                                        ? "text-white bg-pink-600 ease-in-out px-2 py-2 rounded-lg"
                                        : "text-white bg-black/30 hover:bg-primary transition-all ease-in-out px-2 py-2 rounded-lg"
                                }
                                onSuccess={() =>
                                    toast(
                                        "Berhasil di tambahkan ke daftar keinginan"
                                    )
                                }
                            >
                                <FaHeart />
                            </Link> */}
                            <button
                                className={
                                    course.is_on_wishlist
                                        ? "text-white bg-pink-600 ease-in-out px-2 py-2 rounded-lg"
                                        : "text-white bg-black/30 hover:bg-primary transition-all ease-in-out px-2 py-2 rounded-lg"
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    axios
                                        .post(route("wishlist.toggle"), {
                                            wishlistable_type:
                                                "App\\Models\\Course",
                                            wishlistable_id: course.id,
                                        })
                                        .then((response) => {
                                            course.is_on_wishlist =
                                                !course.is_on_wishlist;
                                            toast.success(
                                                response.data.message
                                            );
                                            router.reload();
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                }}
                            >
                                <FaHeart />
                            </button>
                        </>
                    )}
                </div>
                <div className="overflow-hidden">
                    <Link
                        href={"/course/" + course.slug}
                        className="w-full h-[200px] block relative bg-cover hover:scale-[1.2] transition-all ease-in-out duration-500"
                        style={{
                            backgroundImage: `url('${course.image_url}')`,
                        }}
                    ></Link>
                </div>
            </div>
            <div className="card-body px-4">
                <div className="flex justify-between mb-2">
                    <div className="flex justify-start items-center gap-2 text-xs">
                        <FaBook className="text-primary" />
                        <span>{course.course_lecture_count} Lectures </span>
                    </div>

                    <div className="flex justify-start items-center gap-2 text-xs">
                        <FaClock className="text-primary" />
                        <span>{course.total_lecture_duration}</span>
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

                {course.enrolled ? (
                    <p className="mb-2 font-bold text-sm text-success flex items-center gap-2">
                        <FiCheck />
                        <span>Enrolled</span>
                    </p>
                ) : (
                    <p className="mb-2 font-bold text-sm">
                        {course.price == 0 ? (
                            <>
                                <span className="text-success text-xl">
                                    Gratis
                                </span>
                            </>
                        ) : (
                            <>
                                {course.discount_percentage ? (
                                    <>
                                        <span className="text-primary">
                                            {rupiah(course.discounted_price)}
                                        </span>{" "}
                                        <span className="text-gray-400 line-through">
                                            / {rupiah(course.price)}
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-primary">
                                        {rupiah(course.price)}
                                    </span>
                                )}
                            </>
                        )}
                    </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 pt-[15px] border-t border-gray-700">
                    <div>
                        {course.instructor ? (
                            <Link
                                href={route("instructor_info", {
                                    user: course.instructor.id,
                                })}
                                preserveState={true}
                                // preserveScroll={true}
                                className="text-base font-bold font-hind flex items-center hover:text-primary dark:text-blackColor-dark dark:hover:text-primary"
                            >
                                <img
                                    className="w-[30px] h-[30px] rounded-full mr-[15px]"
                                    src={course.instructor.photo_url}
                                    alt=""
                                />
                                <span className="flex text-sm">
                                    {course.instructor.name}
                                </span>
                            </Link>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="text-start md:text-end flex justify-end gap-1 items-center">
                        {[...Array(5)].map((_, index) => {
                            if (index + 1 <= course.course_review_recap.avg) {
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
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
}
