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
    FiStar,
    FiUser,
} from "react-icons/fi";
export default function StudentAreaLayout({ children }) {
    return (
        <FrontendLayout>
            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="card bg-info text-white">
                        <div className="card-body">
                            <div className="block md:flex justify-between items-center">
                                <div className="flex">
                                    <div></div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">
                                            Hello, username
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
                                <div>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Officiis, enim.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            <div className="lg:col-start-1 lg:col-span-3">
                                <div className="card bg-base-100">
                                    <div className="card-body px-8">
                                        <ul>
                                            <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                                <a
                                                    href=""
                                                    className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                                >
                                                    <FiHome />
                                                    <span>Dashboard</span>
                                                </a>
                                            </li>
                                            <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                                <a
                                                    href=""
                                                    className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                                >
                                                    <FiUser />
                                                    <span>My Profile</span>
                                                </a>
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
                                                <a
                                                    href=""
                                                    className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                                >
                                                    <FiBookmark />
                                                    <span>Wishlist</span>
                                                </a>
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
