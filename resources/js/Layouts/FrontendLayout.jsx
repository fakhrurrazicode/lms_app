import { rupiah } from "@/bootstrap";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaCartArrowDown, FaTimes } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css"; // Import file CSS AOS
import { Bounce, ToastContainer } from "react-toastify";

export default function FrontendLayout({ header, children }) {
    const { user, role, cart } = usePage().props.auth;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gray-100/50 dark:bg-gray-900">
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
                                        Kursus
                                    </NavLink>

                                    <NavLink
                                        href={route("become_an_instructor")}
                                        active={route().current(
                                            "become_an_instructor"
                                        )}
                                    >
                                        Mendaftar Sebagai Instruktur
                                    </NavLink>
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
                                                        <div className="badge badge-secondary scale-75 absolute -top-1 -right-6 z-50 ">
                                                            {cart.items.length}
                                                        </div>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content width="80">
                                                <div>
                                                    {cart.items.map((item) => {
                                                        let itemable =
                                                            item.itemable;
                                                        return (
                                                            <div
                                                                key={item.id}
                                                                className="grid grid-cols-3 px-4 py-4 gap-4 relative hover:bg-base-100 transition-all ease-in-out"
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
                                                                        <img
                                                                            src={
                                                                                itemable.image_url
                                                                            }
                                                                        />
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
                                                                        className="text-primary font-bold"
                                                                    >
                                                                        {
                                                                            itemable.title
                                                                        }
                                                                    </Link>

                                                                    <div>
                                                                        <span className="block">
                                                                            {rupiah(
                                                                                itemable.price
                                                                            )}
                                                                        </span>
                                                                        {itemable.discount_percentage ? (
                                                                            <span className="block text-xs text-gray-500 font-semibold line-through">
                                                                                {rupiah(
                                                                                    itemable.real_price
                                                                                )}
                                                                            </span>
                                                                        ) : (
                                                                            <>

                                                                            </>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <Dropdown.Link
                                                    href={route("cart.index")}
                                                    as="button"
                                                >
                                                    View Cart
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
                                                        className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                                                    >
                                                        {user.name}

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
                                                        "user_area.profile.edit"
                                                    )}
                                                >
                                                    Profile
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
                        <div className="space-y-1 pb-3 pt-2">
                            <ResponsiveNavLink
                                href={route("backend.dashboard")}
                                active={route().current("backend.dashboard")}
                            >
                                Dashboard
                            </ResponsiveNavLink>
                        </div>

                        <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
                            <div className="px-4">
                                <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                                    {/* {user.name} */}
                                    user.name
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {/* {user.email} */}
                                    user.email
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                {children}

                <div className="bg-slate-950 text-white">
                    <div className="container mx-auto pt-[65px] pb-5 lg:pb-10">
                        <section>
                            <div className="grid grid-cols-12 gap-[30px] md:gap-y-5 lg:gap-y-0 pt-[60px] pb-50px md:pt-[30px] md:pb-[30px] lg:pt-[110px] lg:pb-20">
                                <div className="col-start-1 col-span-12 md:col-span-6 lg:col-span-4 mr-[30px]">
                                    <h4 className="text-xl font-bold dark:text-white mb-3">
                                        Tentang Kami
                                    </h4>
                                    <p className="text-base lg:text-sm 2xl:text-base text-white dark:dark:text-white mb-[30px] leading-1.8 2xl:leading-1.8">
                                        Selamat Datang di GuruTeknik! Kami
                                        adalah tim yang berdedikasi untuk
                                        membantu anda mencapai tujuan
                                        pembelajaran anda. Kami percaya bahwa
                                        pembelajaran haruslah menjadi pengalaman
                                        yang kolaboratif dan interaktif. Oleh
                                        karena itu, kami telah menciptakan LMS
                                        yang dirancang untuk membantu anda
                                        belajar dengan lebih baik dan lebih
                                        efektif
                                    </p>
                                    <div className="flex items-center">
                                        <div>
                                            <i className="icofont-clock-time text-3xl dark:text-white h-78px w-78px bg-primary leading-78px mr-22px block text-center"></i>
                                        </div>
                                        <div>
                                            <h6 className="text-lg dark:text-white font-medium leading-29px">
                                                OPENING HOURES
                                            </h6>
                                            <p className="text-sm dark:text-white text-opacity-60 mb-1">
                                                Mon - Sat(8.00 - 6.00)
                                            </p>
                                            <p className="text-sm dark:text-white text-opacity-60">
                                                Sunday - Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-start-1 col-span-12 md:col-start-7 lg:col-start-5 md:col-span-6 lg:col-span-2">
                                    <h4 className="text-xl font-bold dark:text-white mb-3">
                                        Usefull Links
                                    </h4>
                                    <ul className="flex flex-col gap-y-3">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-white dark:dark:text-white relative hover:text-primary after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primary hover:after:w-full after:bottom-0 after:left-0"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-white dark:dark:text-white relative hover:text-primary after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primary hover:after:w-full after:bottom-0 after:left-0"
                                            >
                                                Teachers
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-white dark:dark:text-white relative hover:text-primary after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primary hover:after:w-full after:bottom-0 after:left-0"
                                            >
                                                Partner
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-white dark:dark:text-white relative hover:text-primary after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primary hover:after:w-full after:bottom-0 after:left-0"
                                            >
                                                Room-Details
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-white dark:dark:text-white relative hover:text-primary after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primary hover:after:w-full after:bottom-0 after:left-0"
                                            >
                                                Gallery
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-start-1 col-span-12 md:col-start-1 lg:col-start-7 md:col-span-6 lg:col-span-3 pl-0 2xl:pl-[60px]">
                                    <h4 className="text-xl font-bold dark:text-white mb-3">
                                        Course
                                    </h4>
                                    <ul className="flex flex-col gap-y-3">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-white dark:dark:text-white relative hover:text-primary after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primary hover:after:w-full after:bottom-0 after:left-0"
                                            >
                                                Ui Ux Design
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-white dark:dark:text-white relative hover:text-primary after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primary hover:after:w-full after:bottom-0 after:left-0"
                                            >
                                                Web Development
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-white dark:dark:text-white relative hover:text-primary after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primary hover:after:w-full after:bottom-0 after:left-0"
                                            >
                                                Business Strategy
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-white dark:dark:text-white relative hover:text-primary after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primary hover:after:w-full after:bottom-0 after:left-0"
                                            >
                                                Softwere Development
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-white dark:dark:text-white relative hover:text-primary after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primary hover:after:w-full after:bottom-0 after:left-0"
                                            >
                                                Business English
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* <div className="col-start-1 col-span-12 md:col-start-7 lg:col-start-10 md:col-span-6 lg:col-span-3 pl-0 2xl:pl-50px">
                                    <h4 className="text-xl font-bold dark:text-white mb-3">
                                        Recent Post
                                    </h4>
                                    <ul className="flex flex-col gap-y-5">
                                        <li>
                                            <a className="flex items-center gap-3 group cursor-pointer">
                                                <div>
                                                    <img
                                                        src="/images/footer/footer__1.png"
                                                        alt=""
                                                        className="w-[61px] h-[54px]"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-white dark:dark:text-white mb-7px">
                                                        02 Apr 2024
                                                    </p>
                                                    <h6 className="text-size-15 dark:text-white font-bold group-hover:text-primary transition-all duration-300">
                                                        Best Your Business
                                                    </h6>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a className="flex items-center gap-3 group cursor-pointer">
                                                <div>
                                                    <img
                                                        src="/images/footer/footer__2.png"
                                                        alt=""
                                                        className="w-[61px] h-[54px]"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-white dark:dark:text-white mb-7px">
                                                        02 Apr 2024
                                                    </p>
                                                    <h6 className="text-size-15 dark:text-white font-bold group-hover:text-primary transition-all duration-300">
                                                        Keep Your Business
                                                    </h6>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="flex items-center gap-3 group cursor-pointer">
                                                <div>
                                                    <img
                                                        src="/images/footer/footer__3.png"
                                                        alt=""
                                                        className="w-[61px] h-[54px]"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-white dark:dark:text-white mb-7px">
                                                        02 Apr 2024
                                                    </p>
                                                    <h6 className="text-size-15 dark:text-white font-bold group-hover:text-primary transition-all duration-300">
                                                        Nice Your Business
                                                    </h6>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
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
