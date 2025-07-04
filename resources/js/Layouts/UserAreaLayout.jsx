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
import { FaTicket } from "react-icons/fa6";
import { VscReferences } from "react-icons/vsc";

export default function UserAreaLayout({ children }) {
    const { auth } = usePage().props;

    // Fungsi untuk memeriksa apakah route aktif
    const isActive = (routeName) => route().current(routeName);

    // Fungsi styling link
    const navClass = (routeName) =>
        `leading-1.8 flex gap-3 text-nowrap items-center text-sm transition-all ease-in-out py-[10px] border-b border-base-300 dark:border-gray-700 ${
            isActive(routeName)
                ? "text-primary font-semibold"
                : "text-gray-600 dark:text-white hover:text-primary"
        }`;

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
                                    <h6>{auth.role.name}</h6>
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
                                    <li>
                                        <Link
                                            href={route("user_area.dashboard")}
                                            className={navClass(
                                                "user_area.dashboard"
                                            )}
                                        >
                                            <FiHome />
                                            <span>Dashboard</span>
                                        </Link>
                                    </li>

                                    {/* <li >
                                        <a
                                            href=""
                                            
                                        >
                                            <FiMessageSquare />
                                            <span>Pesan</span>
                                        </a>
                                    </li> */}
                                    <li>
                                        <Link
                                            href={route(
                                                "user_area.enrollment.index"
                                            )}
                                            className={navClass(
                                                "user_area.enrollment.index"
                                            )}
                                        >
                                            <FiBookmark />
                                            <span>Kursus terdaftar</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route(
                                                "user_area.wishlist.index"
                                            )}
                                            className={navClass(
                                                "user_area.wishlist.index"
                                            )}
                                        >
                                            <FiBookmark />
                                            <span>Daftar Keinginan</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route(
                                                "user_area.order.index"
                                            )}
                                            className={navClass(
                                                "user_area.order.index"
                                            )}
                                        >
                                            <FiShoppingBag />
                                            <span>Riwayat pesanan</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href={route(
                                                "user_area.ticket.index"
                                            )}
                                            className={navClass(
                                                "user_area.ticket.index"
                                            )}
                                        >
                                            <FaTicket />
                                            <span>Ticket Support</span>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <a
                                            href=""
                                            
                                        >
                                            <FiStar />
                                            <span>Ulasan</span>
                                        </a>
                                    </li> */}
                                </ul>

                                {auth.role.name == "instructor" ? (
                                    <ul className="mb-6">
                                        <li className="text-xs font-semibold mb-4">
                                            Pengajar
                                        </li>
                                        <li>
                                            <Link
                                                href={route(
                                                    "user_area.course.index"
                                                )}
                                                className={navClass(
                                                    "user_area.course.index"
                                                )}
                                            >
                                                <FiMonitor />
                                                <span>Managemen Kursus</span>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href={route(
                                                    "user_area.voucher.index"
                                                )}
                                                className={navClass(
                                                    "user_area.voucher.index"
                                                )}
                                            >
                                                <FaTicket />
                                                <span>Voucher Afiliasi</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route(
                                                    "user_area.referral_code.index"
                                                )}
                                                className={navClass(
                                                    "user_area.referral_code.index"
                                                )}
                                            >
                                                <VscReferences />
                                                <span>Kode Referral</span>
                                            </Link>
                                        </li>
                                    </ul>
                                ) : (
                                    <></>
                                )}

                                {auth.role.name == "student" ? (
                                    <ul className="mb-6">
                                        <li className="text-xs font-semibold mb-4">
                                            Pengajar
                                        </li>
                                        <li>
                                            <Link
                                                href={route(
                                                    "user_area.become_instructor.index"
                                                )}
                                                className={navClass(
                                                    "user_area.become_instructor.index"
                                                )}
                                            >
                                                <FiStar />
                                                <span>Menjadi Pengajar</span>
                                                {auth.user.instructor_info ? (
                                                    <>
                                                        {auth.user
                                                            .instructor_info
                                                            .status == 0 ? (
                                                            <div className="badge badge-warning text-[10px] absolute right-0">
                                                                Menunggu
                                                                Persetujuan
                                                            </div>
                                                        ) : (
                                                            <></>
                                                        )}

                                                        {auth.user
                                                            .instructor_info
                                                            .status == 2 ? (
                                                            <div className="badge badge-error text-[10px] absolute right-0">
                                                                Pengajuan
                                                                Ditolak
                                                            </div>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                            </Link>
                                        </li>
                                    </ul>
                                ) : (
                                    <></>
                                )}

                                <ul className="mb-6">
                                    <li className="text-xs font-semibold mb-4">
                                        Pengguna
                                    </li>
                                    <li>
                                        <Link
                                            href={route(
                                                "user_area.profile.edit"
                                            )}
                                            className={navClass(
                                                "user_area.profile.edit"
                                            )}
                                        >
                                            <FiSettings />
                                            <span>Pengaturan</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="text-gray-600  dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
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
