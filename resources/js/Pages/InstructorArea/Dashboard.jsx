import InstructorLayout from "@/Layouts/InstructorLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Dashboard({ auth, laravelVersion, phpVersion }) {
    const { user } = usePage().props.auth;

    return (
        <InstructorLayout>
            <section>
                <div className="container-fluid-2">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px pt-30px pb-100px">
                        <div className="lg:col-start-1 lg:col-span-3">
                            <div className="p-30px pt-5 lg:p-5 2xl:p-30px 2xl:pt-5 rounded-lg2 shadow-accordion dark:shadow-accordion-dark bg-whiteColor dark:bg-whiteColor-dark">
                                <h5 className="text-sm leading-1 font-semibold uppercase text-contentColor dark:text-contentColor-dark bg-lightGrey5 dark:bg-whiteColor-dark p-10px pb-7px mt-5 mb-10px">
                                    WELCOME, {user.name}
                                </h5>
                                <ul>
                                    <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <a
                                            href="instructor-dashboard.html"
                                            className="text-primaryColor hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-home"
                                            >
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                            </svg>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <a
                                            href="instructor-profile.html"
                                            className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-user"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle
                                                    cx="12"
                                                    cy="7"
                                                    r="4"
                                                ></circle>
                                            </svg>
                                            My Profile
                                        </a>
                                    </li>
                                    <li className="py-10px border-b border-borderColor dark:border-borderColor-dark flex justify-between items-center">
                                        <a
                                            href="instructor-message.html"
                                            className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-book-open"
                                            >
                                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                            </svg>
                                            Message
                                        </a>
                                        <span className="text-size-10 font-medium text-whiteColor px-9px bg-primaryColor leading-14px rounded-2xl">
                                            12
                                        </span>
                                    </li>
                                    <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <a
                                            href="instructor-wishlist.html"
                                            className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-bookmark"
                                            >
                                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                            Wishlist
                                        </a>
                                    </li>
                                    <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <a
                                            href="instructor-reviews.html"
                                            className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-star"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            Reviews
                                        </a>
                                    </li>
                                    <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <a
                                            href="instructor-my-quiz-attempts.html"
                                            className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-help-circle"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                ></circle>
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                <line
                                                    x1="12"
                                                    y1="17"
                                                    x2="12.01"
                                                    y2="17"
                                                ></line>
                                            </svg>
                                            My Quiz Attempts
                                        </a>
                                    </li>
                                    <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <a
                                            href="instructor-order-history.html"
                                            className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-shopping-bag"
                                            >
                                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                                <line
                                                    x1="3"
                                                    y1="6"
                                                    x2="21"
                                                    y2="6"
                                                ></line>
                                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                                            </svg>
                                            Order History
                                        </a>
                                    </li>
                                </ul>

                                <h5 className="text-sm leading-1 font-semibold uppercase text-contentColor dark:text-contentColor-dark bg-lightGrey5 dark:bg-whiteColor-dark p-10px pb-7px mt-5 mb-10px">
                                    INSTRUCTOR
                                </h5>
                                <ul>
                                    <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <a
                                            href="instructor-course.html"
                                            className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-monitor"
                                            >
                                                <rect
                                                    x="2"
                                                    y="3"
                                                    width="20"
                                                    height="14"
                                                    rx="2"
                                                    ry="2"
                                                ></rect>
                                                <line
                                                    x1="8"
                                                    y1="21"
                                                    x2="16"
                                                    y2="21"
                                                ></line>
                                                <line
                                                    x1="12"
                                                    y1="17"
                                                    x2="12"
                                                    y2="21"
                                                ></line>
                                            </svg>
                                            My Course
                                        </a>
                                    </li>
                                    <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <a
                                            href="instructor-announcments.html"
                                            className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-volume-1"
                                            >
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                            </svg>
                                            Announcments
                                        </a>
                                    </li>

                                    <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <a
                                            href="instructor-quiz-attempts.html"
                                            className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-message-square"
                                            >
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                            Quiz Attempt
                                        </a>
                                    </li>
                                    <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <a
                                            href="instructor-assignments.html"
                                            className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-volume-1"
                                            >
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                            </svg>
                                            Assignments
                                        </a>
                                    </li>
                                </ul>

                                <h5 className="text-sm leading-1 font-semibold uppercase text-contentColor dark:text-contentColor-dark bg-lightGrey5 dark:bg-whiteColor-dark p-10px pb-7px mt-5 mb-10px">
                                    USER
                                </h5>
                                <ul>
                                    <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <a
                                            href="instructor-settings.html"
                                            className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-settings"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="3"
                                                ></circle>
                                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                            </svg>
                                            Settings
                                        </a>
                                    </li>

                                    <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <a
                                            href="#"
                                            className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-volume-1"
                                            >
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                            </svg>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-start-4 lg:col-span-9">
                            <div className="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5">
                                <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark">
                                    <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
                                        Dashboard
                                    </h2>
                                </div>

                                <div className="counter grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-30px gap-y-5 pb-5">
                                    <div className="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
                                        <div className="flex gap-4">
                                            <div>
                                                <img
                                                    src="../../assets/images/counter/counter__1.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                                                    <span data-countup-number="27">
                                                        {" "}
                                                        27
                                                    </span>
                                                    <span>+</span>
                                                </p>
                                                <p className="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                                                    Enrolled Courses
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
                                        <div className="flex gap-4">
                                            <div>
                                                <img
                                                    src="../../assets/images/counter/counter__2.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                                                    <span data-countup-number="8">
                                                        8
                                                    </span>
                                                    <span>+</span>
                                                </p>
                                                <p className="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                                                    Active Courses
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
                                        <div className="flex gap-4">
                                            <div>
                                                <img
                                                    src="../../assets/images/counter/counter__3.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                                                    <span data-countup-number="5">
                                                        5
                                                    </span>
                                                    <span>k</span>
                                                </p>
                                                <p className="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                                                    Complete Courses
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
                                        <div className="flex gap-4">
                                            <div>
                                                <img
                                                    src="../../assets/images/counter/counter__4.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                                                    <span data-countup-number="14">
                                                        14
                                                    </span>
                                                    <span>+</span>
                                                </p>
                                                <p className="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                                                    Total Courses
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
                                        <div className="flex gap-4">
                                            <div>
                                                <img
                                                    src="../../assets/images/counter/counter__3.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                                                    <span data-countup-number="10">
                                                        {" "}
                                                        10
                                                    </span>
                                                    <span>k</span>
                                                </p>
                                                <p className="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                                                    Total Students
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
                                        <div className="flex gap-4">
                                            <div>
                                                <img
                                                    src="../../assets/images/counter/counter__4.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                                                    <span data-countup-number="30">
                                                        30
                                                    </span>
                                                    <span>,000+</span>
                                                </p>
                                                <p className="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                                                    Total Earning
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5 max-h-137.5 overflow-auto">
                                <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark flex items-center justify-between gap-2 flex-wrap">
                                    <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
                                        Total Feedbacks
                                    </h2>
                                    <a
                                        href="../../course.html"
                                        className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8"
                                    >
                                        See More...
                                    </a>
                                </div>
                                <div className="overflow-auto">
                                    <table className="w-full text-left text-nowrap">
                                        <thead className="text-sm md:text-base text-blackColor dark:text-blackColor-dark bg-lightGrey5 dark:bg-whiteColor-dark leading-1.8 md:leading-1.8">
                                            <tr>
                                                <th className="px-5px py-10px md:px-5">
                                                    Course Name
                                                </th>
                                                <th className="px-5px py-10px md:px-5">
                                                    Enrolled
                                                </th>
                                                <th className="px-5px py-10px md:px-5">
                                                    Rating
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-size-13 md:text-base text-contentColor dark:text-contentColor-dark font-normal">
                                            <tr className="leading-1.8 md:leading-1.8">
                                                <th className="px-5px py-10px md:px-5 font-normal">
                                                    <p>Javascript</p>
                                                </th>
                                                <td className="px-5px py-10px md:px-5">
                                                    <p>1100</p>
                                                </td>
                                                <td className="px-5px py-10px md:px-5">
                                                    <div className="text-primaryColor">
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-star w-14px inline-block"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="leading-1.8 md:leading-1.8 bg-lightGrey5 dark:bg-whiteColor-dark">
                                                <th className="px-5px py-10px md:px-5 font-normal">
                                                    <p>PHP</p>
                                                </th>
                                                <td className="px-5px py-10px md:px-5">
                                                    <p>700</p>
                                                </td>
                                                <td className="px-5px py-10px md:px-5">
                                                    <div className="text-primaryColor">
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-star w-14px inline-block"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="leading-1.8 md:leading-1.8">
                                                <th className="px-5px py-10px md:px-5 font-normal">
                                                    <p>HTML</p>
                                                </th>
                                                <td className="px-5px py-10px md:px-5">
                                                    <p>1350</p>
                                                </td>
                                                <td className="px-5px py-10px md:px-5">
                                                    <div className="text-primaryColor">
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-star w-14px inline-block"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="leading-1.8 md:leading-1.8 bg-lightGrey5 dark:bg-whiteColor-dark">
                                                <th className="px-5px py-10px md:px-5 font-normal">
                                                    <p>Graphic</p>
                                                </th>
                                                <td className="px-5px py-10px md:px-5">
                                                    <p>1266</p>
                                                </td>
                                                <td className="px-5px py-10px md:px-5">
                                                    <div className="text-primaryColor">
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-star w-14px inline-block"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </InstructorLayout>
    );
}
