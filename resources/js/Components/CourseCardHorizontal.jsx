import { rupiah } from "@/bootstrap";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function CourseCardHorizontal({ course }) {
    const { auth } = usePage().props;

    console.log("auth", auth);
    return (
        <div key={course.id} className="w-full group grid-item rounded">
            <div className="tab-content-wrapper">
                <div className="p-15px lg:pr-30px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark flex flex-wrap md:flex-nowrap rounded">
                    <div className="relative overflow-hidden w-full md:w-2/5">
                        <a
                            href={"/course/" + course.id}
                            className="w-full overflow-hidden rounded"
                        >
                            <img
                                src={course.image_url}
                                alt=""
                                className="w-full transition-all duration-300 group-hover:scale-110 block"
                            />
                        </a>

                        <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                            <div>
                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-primaryColor rounded font-semibold capitalize">
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

                    <div className="w-full md:w-3/5">
                        <div className="pl-0 lg:pl-30px">
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
                            <a
                                href={"/course/" + course.id}
                                className="text-size-26 leading-30px font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                                {course.title}
                            </a>

                            <div className="text-lg font-semibold text-black-brerry-light font-inter mb-4">
                                {rupiah(course.price)}
                                <del className="text-sm text-lightGrey4 font-semibold">
                                    / $67.00
                                </del>
                                <span className="ml-6 text-base font-semibold text-greencolor2">
                                    Free.
                                </span>
                            </div>

                            <div className="flex flex-wrap justify-between sm:flex-nowrap items-center gap-y-2 pt-15px border-t border-borderColor">
                                <div className="flex items-center flex-wrap">
                                    <div>
                                        <a
                                            href="instructor-details.html"
                                            className="text-sm font-medium font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                        >
                                            <img
                                                className="w-[30px] h-[30px] rounded-full mr-15px"
                                                src="./assets/images/grid/grid_small_1.jpg"
                                                alt=""
                                            />
                                            <span className="flex">
                                                Micle john
                                            </span>
                                        </a>
                                    </div>
                                    <div className="text-start md:text-end ml-35px">
                                        <i className="icofont-star text-size-15 text-yellow"></i>
                                        <i className="icofont-star text-size-15 text-yellow"></i>
                                        <i className="icofont-star text-size-15 text-yellow"></i>
                                        <i className="icofont-star text-size-15 text-yellow"></i>

                                        <span className="text-xs text-lightGrey6">
                                            (44)
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <a
                                        className="text-sm lg:text-base text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                        href={"/course/" + course.id}
                                    >
                                        Know Details
                                        <i className="icofont-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
