import React from "react";
import FrontendLayout from "./FrontendLayout";

import {
    FiBookmark,
    FiHome,
    FiLogOut,
    FiMessageSquare,
    FiMonitor,
    FiSettings,
    FiShoppingBag,
    FiStar,
    FiUser,
} from "react-icons/fi";
import { Link, usePage } from "@inertiajs/react";
export default function UserAreaLayout({ children }) {
    const { auth } = usePage().props;

    console.log(auth);

    return (
        <FrontendLayout>
            <div className="mx-auto max-w-[100rem] space-y-6 px-6 lg:px-8 py-12">
                <div className="card shadow-lg bg-info text-white">
                    <div className="card-body">
                        <div className="block md:flex justify-between items-center">
                            <div className="flex gap-6 items-center">
                                <div>
                                    <div className="avatar">
                                        <div className="w-24 border-4 rounded-full">
                                            <img src={auth.user.photo_url} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Hello, {auth.user.name}
                                    </h3>
                                    <div className="flex">
                                        <div className="me-4">
                                            Terdaftar pada{" "}
                                            {auth.user.enrollments.length}{" "}
                                            Kursus
                                        </div>
                                        <div className="me-4">0 Sertifikat</div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-start-1 lg:col-span-3">
                        <div className="card shadow-lg bg-base-100">
                            <div className="card-body px-8">
                                <ul className="mb-6">
                                    <li className="text-xs font-semibold mb-4">
                                        Selamat datang, {auth.user.name}
                                    </li>
                                    <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                        <Link
                                            href={route("user_area.dashboard")}
                                            className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                        >
                                            <FiHome />
                                            <span>Dashboard</span>
                                        </Link>
                                    </li>

                                    {/* <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                        <a
                                            href=""
                                            className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                        >
                                            <FiMessageSquare />
                                            <span>Pesan</span>
                                        </a>
                                    </li> */}
                                    <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                        <Link
                                            href={route(
                                                "user_area.enrollment.index"
                                            )}
                                            className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                        >
                                            <FiBookmark />
                                            <span>Kursus terdaftar</span>
                                        </Link>
                                    </li>
                                    <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                        <Link
                                            href={route(
                                                "user_area.wishlist.index"
                                            )}
                                            className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                        >
                                            <FiBookmark />
                                            <span>Daftar Keinginan</span>
                                        </Link>
                                    </li>
                                    <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                        <Link
                                            href={route(
                                                "user_area.order.index"
                                            )}
                                            className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                        >
                                            <FiShoppingBag />
                                            <span>Riwayat pesanan</span>
                                        </Link>
                                    </li>
                                    <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                        <a
                                            href=""
                                            className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                        >
                                            <FiStar />
                                            <span>Ulasan</span>
                                        </a>
                                    </li>
                                </ul>

                                {auth.role.name == "instructor" ? (
                                    <ul className="mb-6">
                                        <li className="text-xs font-semibold mb-4">
                                            Pengajar
                                        </li>
                                        <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                            <Link
                                                href={route(
                                                    "user_area.course.index"
                                                )}
                                                className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                            >
                                                <FiMonitor />
                                                <span>Managemen Kursus</span>
                                            </Link>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul className="mb-6">
                                        <li className="text-xs font-semibold mb-4">
                                            Pengajar
                                        </li>
                                        <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                            <Link
                                                href={route(
                                                    "user_area.become_instructor.index"
                                                )}
                                                className="text-primary dark:text-secondary relative leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                            >
                                                <FiStar />
                                                <span>Menjadi Pengajar</span>
                                                <div className="badge badge-warning text-[10px] absolute right-0">
                                                    Menunggu Persetujuan
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                )}

                                <ul className="mb-6">
                                    <li className="text-xs font-semibold mb-4">
                                        Pengguna
                                    </li>
                                    <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                        <Link
                                            href={route(
                                                "user_area.profile.edit"
                                            )}
                                            className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                        >
                                            <FiSettings />
                                            <span>Pengaturan</span>
                                        </Link>
                                    </li>
                                    <li className="py-[10px] border-b border-base-300 dark:border-gray-700">
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="text-gray-600 dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
                                        >
                                            <FiLogOut />
                                            <span>Keluar</span>
                                        </Link>
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
        </FrontendLayout>
    );
}
