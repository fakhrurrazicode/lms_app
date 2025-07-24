import { formatNumber, number_format, rupiah } from "@/bootstrap";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import {
    FaCartArrowDown,
    FaMoneyBill,
    FaTimes,
    FaWhatsapp,
} from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { PiCoinDuotone } from "react-icons/pi";

import AOS from "aos";
import "aos/dist/aos.css"; // Import file CSS AOS
import { Bounce, toast, ToastContainer } from "react-toastify";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
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

import { FaTicket } from "react-icons/fa6";
import { VscReferences } from "react-icons/vsc";

dayjs.extend(relativeTime);

export default function UserAreaLayout({ header, children }) {
    console.log("usePage().props.auth", usePage().props.auth);
    const {
        user,
        role,
        cart,
        unread_notifications,
        unread_notifications_count,
        footer,
    } = usePage().props.auth;

    console.log(user, role);

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

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
        <>
            <div className="min-h-screen bg-gray-100/50 dark:bg-gray-900 relative">
                <a
                    href="https://wa.me/+6285129785115"
                    target="_blank"
                    className="btn btn-success rounded-full text-white fixed bottom-6 right-6 z-50"
                >
                    <FaWhatsapp size={27} />
                    <span>Hubungi Kami</span>
                </a>
                <header className="bg-white shadow dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <label className="input input-bordered flex items-center gap-2 rounded-full">
                            <input
                                type="text"
                                className="grow border-none rounded-full"
                                placeholder="Cari Materi Kursus"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </label>
                    </div>
                </header>

                <nav className="border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800 shadow-lg">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="flex shrink-0 items-center">
                                    <Link href="/">
                                        <ApplicationLogo className="block h-12 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                    </Link>
                                </div>

                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink
                                        href={route("home")}
                                        active={route().current("home")}
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        href={route("courses")}
                                        active={route().current("courses")}
                                    >
                                        Daftar Kursus
                                    </NavLink>

                                    {user ? (
                                        role.name == "student" ? (
                                            <></>
                                        ) : (
                                            <></>
                                        )
                                    ) : (
                                        <NavLink
                                            href={route("become_instructor")}
                                            active={route().current(
                                                "become_instructor"
                                            )}
                                        >
                                            <span className="text-secondary">
                                                Ingin Menjadi Pengajar?
                                            </span>
                                        </NavLink>
                                    )}
                                </div>
                            </div>

                            {!user ? (
                                <div className="flex">
                                    <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                        <NavLink
                                            href={route("login")}
                                            active={route().current("login")}
                                        >
                                            <span className="text-primary">
                                                Sign In
                                            </span>
                                        </NavLink>
                                        <NavLink
                                            href={route("register")}
                                            active={route().current("register")}
                                        >
                                            <span className="text-secondary">
                                                Sign Up
                                            </span>
                                        </NavLink>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}

                            {user ? (
                                <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                    <div className="py-[8px] px-[12px] ml-[12px] text-sm">
                                        {/* <div className="flex items-center gap-2">
                                            <PiCoinDuotone className="text-yellow-500 text-xl" />
                                            <span className="">Coins</span>
                                            <span className="font-bold text-yellow-500">
                                                {number_format(
                                                    user.coin_balance
                                                )}
                                            </span>
                                        </div> */}
                                        <button
                                            type="button"
                                            className="inline-flex relative items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                                        >
                                            <PiCoinDuotone
                                                className="text-yellow-500"
                                                size={22}
                                            />
                                            <div className="badge badge-warning scale-75 absolute -top-1 -right-2 z-50 ">
                                                {formatNumber(
                                                    user.coin_balance
                                                )}
                                            </div>
                                        </button>
                                    </div>
                                    <div className="relative ms-3">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex relative items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                                                    >
                                                        <FaCartArrowDown
                                                            size={22}
                                                        />
                                                        <div className="badge badge-primary scale-75 absolute -top-1 -right-2 z-50 ">
                                                            {cart.items.length}
                                                        </div>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content width="80">
                                                {cart.items.length ? (
                                                    <>
                                                        <div>
                                                            {cart.items.map(
                                                                (item) => {
                                                                    let itemable =
                                                                        item.itemable;
                                                                    return itemable ? (
                                                                        <div
                                                                            key={
                                                                                item.id
                                                                            }
                                                                            className="flex px-4 py-4 gap-4 relative hover:bg-base-100 transition-all ease-in-out"
                                                                        >
                                                                            <Link
                                                                                className="absolute right-0 top-0 m-4"
                                                                                href={route(
                                                                                    "cart.destroy"
                                                                                )}
                                                                                method="DELETE"
                                                                                preserveScroll={
                                                                                    true
                                                                                }
                                                                                preserveState={
                                                                                    true
                                                                                }
                                                                                data={{
                                                                                    itemable_type:
                                                                                        "App\\Models\\Course",
                                                                                    itemable_id:
                                                                                        itemable.id,
                                                                                }}
                                                                            >
                                                                                <FaTimes className="text-error" />
                                                                            </Link>
                                                                            <div>
                                                                                <Link
                                                                                    href={route(
                                                                                        "course",
                                                                                        {
                                                                                            slug: itemable.slug,
                                                                                        }
                                                                                    )}
                                                                                >
                                                                                    <div className="avatar w-20 lg:w-16 self-start">
                                                                                        <div className="mask rounded-xl">
                                                                                            <img
                                                                                                src={
                                                                                                    itemable.image_url
                                                                                                }
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-span-2 pr-4">
                                                                                <Link
                                                                                    href={route(
                                                                                        "course",
                                                                                        {
                                                                                            slug: itemable.slug,
                                                                                        }
                                                                                    )}
                                                                                    className="text-primary font-bold text-sm"
                                                                                >
                                                                                    {
                                                                                        itemable.title
                                                                                    }
                                                                                </Link>

                                                                                <div>
                                                                                    {itemable.discount_percentage ? (
                                                                                        <div className="flex items-end gap-1">
                                                                                            <span className="block text-sm">
                                                                                                {rupiah(
                                                                                                    itemable.discounted_price
                                                                                                )}
                                                                                            </span>

                                                                                            <span className="block text-xs text-gray-500 font-semibold line-through">
                                                                                                {rupiah(
                                                                                                    itemable.price
                                                                                                )}
                                                                                            </span>
                                                                                        </div>
                                                                                    ) : (
                                                                                        <span className="block text-sm">
                                                                                            {rupiah(
                                                                                                itemable.price
                                                                                            )}
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ) : (
                                                                        <></>
                                                                    );
                                                                }
                                                            )}
                                                        </div>
                                                        <Dropdown.Link
                                                            href={route(
                                                                "cart.index"
                                                            )}
                                                            as="button"
                                                            className="!text-center bg-primary hover:!bg-primary/80 !text-white text-xs font-bold"
                                                        >
                                                            View Cart
                                                        </Dropdown.Link>
                                                    </>
                                                ) : (
                                                    <div className="px-[16px] py-[8px] flex flex-col items-center gap-4 border-b border-b-base-100/30">
                                                        <img
                                                            className="w-1/2 py-4"
                                                            src="/images/undraw_empty-cart_574u.svg"
                                                        />
                                                        <p className="text-sm py-4">
                                                            Keranjang Masih
                                                            Kosong
                                                        </p>
                                                    </div>
                                                )}
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                    <div className="relative ms-3">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex relative items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                                                    >
                                                        <IoMdNotifications
                                                            size={22}
                                                        />
                                                        <div className="badge badge-secondary scale-75 absolute -top-1 -right-2 z-50 ">
                                                            {
                                                                unread_notifications_count
                                                            }
                                                        </div>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content width="80">
                                                {unread_notifications.length ? (
                                                    <>
                                                        <div className="divide-y-2 divide-gray-800/30">
                                                            {unread_notifications.map(
                                                                (
                                                                    notification
                                                                ) => {
                                                                    return (
                                                                        <div
                                                                            key={
                                                                                notification.id
                                                                            }
                                                                            className=" flex px-4 py-2 text-xs gap-4 relative hover:bg-base-100 transition-all ease-in-out"
                                                                        >
                                                                            <Link
                                                                                href={route(
                                                                                    "notification.open_notification",
                                                                                    {
                                                                                        notification:
                                                                                            notification.id,
                                                                                    }
                                                                                )}
                                                                                className="space-y-1"
                                                                            >
                                                                                <div className="font-bold">
                                                                                    {
                                                                                        notification
                                                                                            .data
                                                                                            .message
                                                                                    }
                                                                                </div>
                                                                                <div>
                                                                                    {dayjs(
                                                                                        notification.created_at
                                                                                    ).fromNow()}
                                                                                </div>
                                                                            </Link>
                                                                        </div>
                                                                    );
                                                                }
                                                            )}
                                                        </div>
                                                    </>
                                                ) : (
                                                    <div className="px-[16px] py-[8px] flex flex-col items-center gap-4 border-b border-b-base-100/30">
                                                        <img
                                                            className="w-1/2 py-4"
                                                            src="/images/undraw_empty-cart_574u.svg"
                                                        />
                                                        <p className="text-sm py-4">
                                                            Belum ada
                                                            pemberitahuan
                                                        </p>
                                                    </div>
                                                )}
                                                <Dropdown.Link
                                                    href={route(
                                                        "notification.index"
                                                    )}
                                                    as="button"
                                                    className="!text-center bg-secondary hover:!bg-secondary/80 !text-white text-xs font-bold"
                                                >
                                                    LIhat Semua Pemberitahuan
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>

                                    <div className="relative ms-3">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex gap-2 items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                                                    >
                                                        <div className="avatar">
                                                            <div className="w-6 rounded-full">
                                                                <img
                                                                    src={
                                                                        user.photo_url
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <span>{user.name}</span>

                                                        <svg
                                                            className="-me-0.5 ms-2 h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                {role.name == "instructor" ||
                                                role.name == "student" ? (
                                                    <Dropdown.Link
                                                        href={route(
                                                            "user_area.dashboard"
                                                        )}
                                                    >
                                                        Dashboard
                                                    </Dropdown.Link>
                                                ) : (
                                                    <></>
                                                )}

                                                {role.name ==
                                                "administrator" ? (
                                                    <Dropdown.Link
                                                        href={route(
                                                            "backend.dashboard"
                                                        )}
                                                    >
                                                        Dashboard
                                                    </Dropdown.Link>
                                                ) : (
                                                    <></>
                                                )}

                                                <Dropdown.Link
                                                    href={route(
                                                        "user_area.enrollment.index"
                                                    )}
                                                >
                                                    Kursus Terdaftar
                                                </Dropdown.Link>

                                                <Dropdown.Link
                                                    href={route(
                                                        "user_area.profile.edit"
                                                    )}
                                                >
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route(
                                                        "user_area.wishlist.index"
                                                    )}
                                                >
                                                    Daftar Keinginan
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}

                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
                            {user ? (
                                <div className="px-4 flex gap-2">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={user.photo_url} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                                            {user.name}
                                        </div>
                                        <div className="text-sm font-medium text-gray-500">
                                            {user.email}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}

                            <div className="mt-3 space-y-1">
                                <ul className="menu">
                                    <li>
                                        <Link href={route("home")}>Home</Link>
                                    </li>
                                    <li>
                                        <Link href={route("courses")}>
                                            Daftar Kursus
                                        </Link>
                                    </li>

                                    {!user ? (
                                        <>
                                            <li>
                                                <Link
                                                    href={route(
                                                        "become_instructor"
                                                    )}
                                                >
                                                    Ingin Menjadi Pengajar?
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route("login")}>
                                                    Sign in
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href={route("register")}>
                                                    Sign up
                                                </Link>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <Link
                                                    href={route("cart.index")}
                                                >
                                                    Keranjang Belanja
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={route(
                                                        "notification.index"
                                                    )}
                                                >
                                                    Pemberitahuan
                                                </Link>
                                            </li>

                                            <li>
                                                <details>
                                                    <summary>Menu User</summary>
                                                    <ul>
                                                        {role.name ===
                                                            "instructor" ||
                                                        role.name ===
                                                            "student" ? (
                                                            <li>
                                                                <Link
                                                                    href={route(
                                                                        "user_area.dashboard"
                                                                    )}
                                                                >
                                                                    Dashboard
                                                                </Link>
                                                            </li>
                                                        ) : (
                                                            <></>
                                                        )}

                                                        {role.name ===
                                                        "administrator" ? (
                                                            <li>
                                                                <Link
                                                                    href={route(
                                                                        "backend.dashboard"
                                                                    )}
                                                                >
                                                                    Dashboard
                                                                </Link>
                                                            </li>
                                                        ) : (
                                                            <></>
                                                        )}

                                                        <li>
                                                            <Link
                                                                href={route(
                                                                    "user_area.profile.edit"
                                                                )}
                                                            >
                                                                Kursus Terdaftar
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <Link
                                                                href={route(
                                                                    "user_area.wishlist.index"
                                                                )}
                                                            >
                                                                Daftar Keinginan
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <Link
                                                                href={route(
                                                                    "user_area.order.index"
                                                                )}
                                                            >
                                                                Riwayat Pesanan
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <Link
                                                                href={route(
                                                                    "user_area.ticket.index"
                                                                )}
                                                            >
                                                                Ticket Support
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>

                                            <li>
                                                <details>
                                                    <summary>
                                                        Menu Pengajar
                                                    </summary>
                                                    <ul>
                                                        {auth.role.name ==
                                                        "instructor" ? (
                                                            <>
                                                                <li>
                                                                    <Link
                                                                        href={route(
                                                                            "user_area.course.index"
                                                                        )}
                                                                    >
                                                                        Manajemen
                                                                        Kursus
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={route(
                                                                            "user_area.voucher.index"
                                                                        )}
                                                                    >
                                                                        Voucher
                                                                        Afiliasi
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link
                                                                        href={route(
                                                                            "user_area.referral_code.index"
                                                                        )}
                                                                    >
                                                                        Kode
                                                                        Referral
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link
                                                                        href={route(
                                                                            "user_area.withdrawal.index"
                                                                        )}
                                                                    >
                                                                        Withdrawal
                                                                    </Link>
                                                                </li>
                                                            </>
                                                        ) : (
                                                            <></>
                                                        )}

                                                        {auth.role.name ==
                                                        "student" ? (
                                                            <>
                                                                <li>
                                                                    <Link
                                                                        href={route(
                                                                            "user_area.become_instructor.index"
                                                                        )}
                                                                    >
                                                                        <span>
                                                                            Menjadi
                                                                            Pengajar
                                                                        </span>
                                                                        {auth
                                                                            .user
                                                                            .instructor_info ? (
                                                                            <>
                                                                                {auth
                                                                                    .user
                                                                                    .instructor_info
                                                                                    .status ==
                                                                                0 ? (
                                                                                    <div className="badge badge-warning text-[10px] absolute right-0">
                                                                                        Menunggu
                                                                                        Persetujuan
                                                                                    </div>
                                                                                ) : (
                                                                                    <>

                                                                                    </>
                                                                                )}

                                                                                {auth
                                                                                    .user
                                                                                    .instructor_info
                                                                                    .status ==
                                                                                2 ? (
                                                                                    <div className="badge badge-error text-[10px] absolute right-0">
                                                                                        Pengajuan
                                                                                        Ditolak
                                                                                    </div>
                                                                                ) : (
                                                                                    <>

                                                                                    </>
                                                                                )}
                                                                            </>
                                                                        ) : (
                                                                            <>

                                                                            </>
                                                                        )}
                                                                    </Link>
                                                                </li>
                                                            </>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </ul>
                                                </details>
                                            </li>

                                            <li>
                                                <Link
                                                    href={route(
                                                        "user_area.profile.edit"
                                                    )}
                                                >
                                                    Pengaturan
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    Log Out
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="mx-auto max-w-[100rem] space-y-6 px-6 lg:px-8 py-12">
                    <div className="card shadow-lg bg-info text-white">
                        <div className="card-body">
                            <div className="block md:flex justify-between items-center">
                                <div className="flex gap-6 items-center">
                                    <div>
                                        <div className="avatar">
                                            <div className="w-24 border-4 rounded-full">
                                                <img
                                                    src={auth.user.photo_url}
                                                />
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
                                            <div className="me-4">
                                                0 Sertifikat
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-start-1 lg:col-span-3 hidden sm:block">
                            <div className="card shadow-lg bg-base-100">
                                <div className="card-body px-8">
                                    <ul className="mb-6">
                                        <li className="text-xs font-semibold mb-4">
                                            Selamat datang, {auth.user.name}
                                        </li>
                                        <li>
                                            <Link
                                                href={route(
                                                    "user_area.dashboard"
                                                )}
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
                                                    <span>
                                                        Managemen Kursus
                                                    </span>
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
                                                    <span>
                                                        Voucher Afiliasi
                                                    </span>
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

                                            <li>
                                                <Link
                                                    href={route(
                                                        "user_area.withdrawal.index"
                                                    )}
                                                    className={navClass(
                                                        "user_area.withdrawal.index"
                                                    )}
                                                >
                                                    <FaMoneyBill />
                                                    <span>Withdrawal</span>
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
                                                    <span>
                                                        Menjadi Pengajar
                                                    </span>
                                                    {auth.user
                                                        .instructor_info ? (
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

                <div className="bg-slate-950 text-white">
                    <div className="container mx-auto pt-[65px] px-6 pb-5 lg:pb-10">
                        <section>
                            <div className="grid grid-cols-12 gap-6">
                                <div className="mb-6 col-span-12 sm:col-span-12 lg:col-span-6">
                                    <h4 className="text-xl font-bold dark:text-white mb-3">
                                        Tentang Kami
                                    </h4>

                                    <div>
                                        <h3 className="text-3xl font-bold mb-4 text-primary">
                                            PT Ayootech Indonesia Industry
                                        </h3>

                                        <p className="mb-4 text-sm">
                                            Didirikan pada tahun 2022 sebagai
                                            perusahaan Teknology, PT AYOOTECH
                                            INDONESIA INDUSTRY adalah IT
                                            bernilai tambah yang menyediakan
                                            perangkat keras, perangkat lunak,
                                            layanan, dan solusi untuk integrator
                                            antar perusahaan, didukung oleh
                                            teknisi yang terampil dan
                                            berpengetahuan luas telah
                                            memungkinkan kami untuk mencapai
                                            kepuasan pelanggan.
                                        </p>

                                        <p className="mb-4 text-sm">
                                            <b>Depok</b>
                                            <br />
                                            Alamat Jl Prindustrian Block C 183,
                                            RT.01/RW.25, Bakti Jaya, Kec.
                                            Sukmajaya, Kota Depok, Jawa Barat
                                            16418
                                        </p>

                                        <p className="mb-4 text-sm">
                                            <b>PIK2</b>
                                            <br />
                                            Alamat PIK2 Rukan Osaka OTPA No. 18
                                            Salembaran Jati, Kec. Kosambi,
                                            Kabupaten Tangerang, Banten 15214
                                            Kabupaten Banten, Jawa Barat 15214
                                        </p>

                                        <p className="text-sm">
                                            <b>Call Center/wa :</b>{" "}
                                            0851-2978-5115
                                        </p>
                                        <p className="text-sm">
                                            <b>Telepon :</b> 0881-0257-33655
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-6 col-span-12 sm:col-span-12 lg:col-span-3">
                                    <h4 className="text-xl font-bold dark:text-white mb-3">
                                        Usefull Links
                                    </h4>
                                    <ul className="flex flex-col gap-y-3">
                                        <li>
                                            <Link
                                                href={route("home")}
                                                className="text-white dark:dark:text-white relative hover:text-primary after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primary hover:after:w-full after:bottom-0 after:left-0"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("courses")}
                                                className="text-white dark:dark:text-white relative hover:text-primary after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primary hover:after:w-full after:bottom-0 after:left-0"
                                            >
                                                Daftar Kursus
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route(
                                                    "become_instructor"
                                                )}
                                                className="text-white dark:dark:text-white relative hover:text-primary after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primary hover:after:w-full after:bottom-0 after:left-0"
                                            >
                                                Ingin Menjadi Pengajar?
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-6 col-span-12 sm:col-span-12 lg:col-span-3">
                                    <h4 className="text-xl font-bold dark:text-white mb-3">
                                        Kategori Kursus
                                    </h4>
                                    <ul className="flex flex-col gap-y-3">
                                        {footer.course_categories.map(
                                            (course_category) => (
                                                <li>
                                                    <Link
                                                        href={route("courses", {
                                                            course_category_ids:
                                                                [
                                                                    course_category.id,
                                                                ],
                                                        })}
                                                        className="text-white dark:dark:text-white relative hover:text-primary after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primary hover:after:w-full after:bottom-0 after:left-0"
                                                    >
                                                        {course_category.name}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </>
    );
}
// import React from "react";
// import FrontendLayout from "./FrontendLayout";

// import {
//     FiBookmark,
//     FiHome,
//     FiLogOut,
//     FiMessageSquare,
//     FiMonitor,
//     FiSettings,
//     FiShoppingBag,
//     FiStar,
//     FiUser,
// } from "react-icons/fi";

// import { FaTicket } from "react-icons/fa6";
// import { VscReferences } from "react-icons/vsc";
// import { Link, usePage } from "@inertiajs/react";

// export default function UserAreaLayout({ children }) {
//     const { auth } = usePage().props;

//     // Fungsi untuk memeriksa apakah route aktif
//     const isActive = (routeName) => route().current(routeName);

//     // Fungsi styling link
//     const navClass = (routeName) =>
//         `leading-1.8 flex gap-3 text-nowrap items-center text-sm transition-all ease-in-out py-[10px] border-b border-base-300 dark:border-gray-700 ${
//             isActive(routeName)
//                 ? "text-primary font-semibold"
//                 : "text-gray-600 dark:text-white hover:text-primary"
//         }`;

//     console.log(auth);

//     return (
// <FrontendLayout>
//     <div className="mx-auto max-w-[100rem] space-y-6 px-6 lg:px-8 py-12">
//         <div className="card shadow-lg bg-info text-white">
//             <div className="card-body">
//                 <div className="block md:flex justify-between items-center">
//                     <div className="flex gap-6 items-center">
//                         <div>
//                             <div className="avatar">
//                                 <div className="w-24 border-4 rounded-full">
//                                     <img src={auth.user.photo_url} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <h6>{auth.role.name}</h6>
//                             <h3 className="text-xl font-bold mb-2">
//                                 Hello, {auth.user.name}
//                             </h3>
//                             <div className="flex">
//                                 <div className="me-4">
//                                     Terdaftar pada{" "}
//                                     {auth.user.enrollments.length}{" "}
//                                     Kursus
//                                 </div>
//                                 <div className="me-4">0 Sertifikat</div>
//                             </div>
//                         </div>
//                     </div>
//                     <div></div>
//                 </div>
//             </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//             <div className="lg:col-start-1 lg:col-span-3">
//                 <div className="card shadow-lg bg-base-100">
//                     <div className="card-body px-8">
//                         <ul className="mb-6">
//                             <li className="text-xs font-semibold mb-4">
//                                 Selamat datang, {auth.user.name}
//                             </li>
//                             <li>
//                                 <Link
//                                     href={route("user_area.dashboard")}
//                                     className={navClass(
//                                         "user_area.dashboard"
//                                     )}
//                                 >
//                                     <FiHome />
//                                     <span>Dashboard</span>
//                                 </Link>
//                             </li>

//                             {/* <li >
//                                 <a
//                                     href=""

//                                 >
//                                     <FiMessageSquare />
//                                     <span>Pesan</span>
//                                 </a>
//                             </li> */}
//                             <li>
//                                 <Link
//                                     href={route(
//                                         "user_area.enrollment.index"
//                                     )}
//                                     className={navClass(
//                                         "user_area.enrollment.index"
//                                     )}
//                                 >
//                                     <FiBookmark />
//                                     <span>Kursus terdaftar</span>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     href={route(
//                                         "user_area.wishlist.index"
//                                     )}
//                                     className={navClass(
//                                         "user_area.wishlist.index"
//                                     )}
//                                 >
//                                     <FiBookmark />
//                                     <span>Daftar Keinginan</span>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     href={route(
//                                         "user_area.order.index"
//                                     )}
//                                     className={navClass(
//                                         "user_area.order.index"
//                                     )}
//                                 >
//                                     <FiShoppingBag />
//                                     <span>Riwayat pesanan</span>
//                                 </Link>
//                             </li>

//                             <li>
//                                 <Link
//                                     href={route(
//                                         "user_area.ticket.index"
//                                     )}
//                                     className={navClass(
//                                         "user_area.ticket.index"
//                                     )}
//                                 >
//                                     <FaTicket />
//                                     <span>Ticket Support</span>
//                                 </Link>
//                             </li>
//                             {/* <li>
//                                 <a
//                                     href=""

//                                 >
//                                     <FiStar />
//                                     <span>Ulasan</span>
//                                 </a>
//                             </li> */}
//                         </ul>

//                         {auth.role.name == "instructor" ? (
//                             <ul className="mb-6">
//                                 <li className="text-xs font-semibold mb-4">
//                                     Pengajar
//                                 </li>
//                                 <li>
//                                     <Link
//                                         href={route(
//                                             "user_area.course.index"
//                                         )}
//                                         className={navClass(
//                                             "user_area.course.index"
//                                         )}
//                                     >
//                                         <FiMonitor />
//                                         <span>Managemen Kursus</span>
//                                     </Link>
//                                 </li>

//                                 <li>
//                                     <Link
//                                         href={route(
//                                             "user_area.voucher.index"
//                                         )}
//                                         className={navClass(
//                                             "user_area.voucher.index"
//                                         )}
//                                     >
//                                         <FaTicket />
//                                         <span>Voucher Afiliasi</span>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         href={route(
//                                             "user_area.referral_code.index"
//                                         )}
//                                         className={navClass(
//                                             "user_area.referral_code.index"
//                                         )}
//                                     >
//                                         <VscReferences />
//                                         <span>Kode Referral</span>
//                                     </Link>
//                                 </li>
//                             </ul>
//                         ) : (
//                             <></>
//                         )}

//                         {auth.role.name == "student" ? (
//                             <ul className="mb-6">
//                                 <li className="text-xs font-semibold mb-4">
//                                     Pengajar
//                                 </li>
//                                 <li>
//                                     <Link
//                                         href={route(
//                                             "user_area.become_instructor.index"
//                                         )}
//                                         className={navClass(
//                                             "user_area.become_instructor.index"
//                                         )}
//                                     >
//                                         <FiStar />
//                                         <span>Menjadi Pengajar</span>
//                                         {auth.user.instructor_info ? (
//                                             <>
//                                                 {auth.user
//                                                     .instructor_info
//                                                     .status == 0 ? (
//                                                     <div className="badge badge-warning text-[10px] absolute right-0">
//                                                         Menunggu
//                                                         Persetujuan
//                                                     </div>
//                                                 ) : (
//                                                     <></>
//                                                 )}

//                                                 {auth.user
//                                                     .instructor_info
//                                                     .status == 2 ? (
//                                                     <div className="badge badge-error text-[10px] absolute right-0">
//                                                         Pengajuan
//                                                         Ditolak
//                                                     </div>
//                                                 ) : (
//                                                     <></>
//                                                 )}
//                                             </>
//                                         ) : (
//                                             <></>
//                                         )}
//                                     </Link>
//                                 </li>
//                             </ul>
//                         ) : (
//                             <></>
//                         )}

//                         <ul className="mb-6">
//                             <li className="text-xs font-semibold mb-4">
//                                 Pengguna
//                             </li>
//                             <li>
//                                 <Link
//                                     href={route(
//                                         "user_area.profile.edit"
//                                     )}
//                                     className={navClass(
//                                         "user_area.profile.edit"
//                                     )}
//                                 >
//                                     <FiSettings />
//                                     <span>Pengaturan</span>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     href={route("logout")}
//                                     method="post"
//                                     as="button"
//                                     className="text-gray-600  dark:text-white leading-1.8 flex gap-3 text-nowrap items-center text-sm hover:text-primary transition-all ease-in-out"
//                                 >
//                                     <FiLogOut />
//                                     <span>Keluar</span>
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className="lg:col-start-4 lg:col-span-9">
//                 {children}
//             </div>
//         </div>
//     </div>
// </FrontendLayout>
//     );
// }
