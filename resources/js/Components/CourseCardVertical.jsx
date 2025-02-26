import { rupiah } from "@/bootstrap";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function CourseCardVertical({ course }) {
    const { auth } = usePage().props;
    return (
        <div className="group">
            <div className="tab-content-wrapper">
                <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                    <div className="relative mb-4">
                        <Link
                            href={"/course/" + course.slug}
                            className="w-full overflow-hidden rounded"
                        >
                            <img
                                src={course.image_url}
                                alt=""
                                className="w-full transition-all duration-300 group-hover:scale-110"
                            />
                        </Link>
                        <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                            <div>
                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-primaryColor rounded font-semibold">
                                    {course.course_category.name}
                                </p>
                            </div>
                            {auth.user === null ? (
                                <Link
                                    href="/login"
                                    className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                >
                                    <i className="icofont-heart-alt text-base py-1 px-2"></i>
                                </Link>
                            ) : (
                                <Link
                                    method="POST"
                                    href="/toggle-wishlist"
                                    preserveScroll={true}
                                    preserveState={true}
                                    data={{
                                        wishlistable_type: "App\\Model\\Course",
                                        wishlistable_id: course.id,
                                        user_id: auth.user.id,
                                    }}
                                    className={
                                        course.is_on_wishlist
                                            ? "text-white rounded bg-primaryColor"
                                            : "text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                    }
                                >
                                    <i className="icofont-heart-alt text-base py-1 px-2"></i>
                                </Link>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-2 mb-15px">
                            <div className="flex items-center">
                                <div>
                                    <i className="icofont-book-alt pr-5px text-primaryColor text-lg"></i>
                                </div>
                                <div>
                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                        23 Lesson
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <i className="icofont-clock-time pr-5px text-primaryColor text-lg"></i>
                                </div>
                                <div>
                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                        1 hr 30 min
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Link
                            href={"/course/" + course.slug}
                            className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                        >
                            {course.title}
                        </Link>

                        <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                            {rupiah(course.price)}
                            <del className="text-sm text-lightGrey4 font-semibold">
                                / {rupiah(0)}
                            </del>
                            <span className="ml-6">
                                <del className="text-base font-semibold text-secondaryColor3">
                                    Free
                                </del>
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                            <div>
                                <a
                                    href="instructor-details.html"
                                    className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                >
                                    <img
                                        className="w-[30px] h-[30px] rounded-full mr-15px"
                                        src="./assets/images/grid/grid_small_1.jpg"
                                        alt=""
                                    />
                                    <span className="flex">
                                        {course.instructor.name}
                                    </span>
                                </a>
                            </div>
                            <div className="text-start md:text-end">
                                <i className="icofont-star text-size-15 text-yellow"></i>
                                <i className="icofont-star text-size-15 text-yellow"></i>
                                <i className="icofont-star text-size-15 text-yellow"></i>
                                <i className="icofont-star text-size-15 text-yellow"></i>
                                <i className="icofont-star text-size-15 text-yellow"></i>
                                <span className="text-xs text-lightGrey6">
                                    (44)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
