import React from "react";
import FrontendLayout from "./FrontendLayout";
import {
    FaAddressCard,
    FaHome,
    FaSignOutAlt,
    FaStar,
    FaTachometerAlt,
    FaUser,
    FaUserAlt,
} from "react-icons/fa";
import { FaBookmark, FaMessage } from "react-icons/fa6";
import {
    FiBookmark,
    FiHome,
    FiLogOut,
    FiMessageSquare,
    FiMonitor,
    FiSettings,
    FiStar,
    FiUser,
} from "react-icons/fi";
import { Link, usePage } from "@inertiajs/react";
export default function InstructorAreaLayout({ children }) {
    const { auth } = usePage().props;
    return (
        <FrontendLayout>
            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="card shadow-lg bg-info text-white">
                        <div className="card-body">
                            <div className="block md:flex justify-between items-center">
                                <div className="flex">
                                    <div></div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">
                                            Hello, {auth.user.name}
                                        </h3>
                                        <div className="flex">
                                            <div className="me-4">
                                                9 Course Enrolled
                                            </div>
                                            <div className="me-4">
                                                8 Certificate
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            <div className="lg:col-start-1 lg:col-span-3">
                                <div className="card shadow-lg bg-base-100">
                                    <div className="card-body px-8">
                                        <ul className="mb-6">
                                            <li className="text-xs font-semibold mb-4">
                                                Welcome, {auth.user.name}
                                            </li>
                                            <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                                <Link
                                                    href={route(
                                                        "student_area.dashboard"
                                                    )}
                                                    className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                                >
                                                    <FiHome />
                                                    <span>Dashboard</span>
                                                </Link>
                                            </li>

                                            <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                                <a
                                                    href=""
                                                    className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                                >
                                                    <FiMessageSquare />
                                                    <span>Message</span>
                                                </a>
                                            </li>
                                            <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                                <a
                                                    href=""
                                                    className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                                >
                                                    <FiBookmark />
                                                    <span>
                                                        Enrolled Courses
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                                <Link
                                                    href={route(
                                                        "student_area.wishlist.index"
                                                    )}
                                                    className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                                >
                                                    <FiBookmark />
                                                    <span>Wishlist</span>
                                                </Link>
                                            </li>
                                            <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                                <a
                                                    href=""
                                                    className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                                >
                                                    <FiStar />
                                                    <span>Reviews</span>
                                                </a>
                                            </li>
                                        </ul>

                                        <ul className="mb-6">
                                            <li className="text-xs font-semibold mb-4">
                                                Instructor
                                            </li>
                                            <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                                <Link
                                                    href={route(
                                                        "student_area.dashboard"
                                                    )}
                                                    className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                                >
                                                    <FiMonitor />
                                                    <span>My Courses</span>
                                                </Link>
                                            </li>
                                        </ul>

                                        <ul className="mb-6">
                                            <li className="text-xs font-semibold mb-4">
                                                User
                                            </li>
                                            <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                                <a
                                                    href=""
                                                    className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                                >
                                                    <FiSettings />
                                                    <span>Settings</span>
                                                </a>
                                            </li>
                                            <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                                <a
                                                    href=""
                                                    className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                                >
                                                    <FiLogOut />
                                                    <span>Logout</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-start-4 lg:col-span-9">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
