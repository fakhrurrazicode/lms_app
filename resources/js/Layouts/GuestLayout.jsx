// import "../../css/app.css";
import "../../edurock/edurock/assets/css/icofont.min.css";
import "../../edurock/edurock/assets/css/swiper-bundle.min.css";
import "../../edurock/edurock/assets/css/video-modal.css";
import "../../edurock/edurock/assets/css/aos.css";
import "../../edurock/edurock/assets/css/style.css";

import appInit from "../../edurock/edurock/assets/js/main.js";

import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";

export default function GuestLayout({ children }) {
    useEffect(() => {
        const onPageChange = () => {
            console.log("Inertia page changed!");
            appInit();
        };

        document.addEventListener("inertia:finish", onPageChange);

        return () => {
            document.removeEventListener("inertia:finish", onPageChange);
        };
    }, []);

    return (
        <>
            {/* <div className="preloader flex fixed top-0 left-0 h-screen w-full items-center justify-center z-xxl bg-whiteColor opacity-100 visible transition-all duration-700">
                <div className="w-90px h-90px border-5px border-t-blue border-r-blue border-b-blue-light border-l-blue-light rounded-full animate-spin-infinit"></div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <img
                        src="./assets/images/pre.png"
                        alt="Preloader"
                        className="h-10 w-10 block"
                    />
                </div>
            </div> */}

            <div>
                <div className="fixed-shadow left-[-250px]"></div>
                <div className="fixed-shadow right-[-250px]"></div>
            </div>

            <div className="fixed top-[100px] 2xl:top-[300px] transition-all duration-300 right-[-50px] hover:right-0 z-xl">
                <button className="theme-controller w-90px h-10 bg-primaryColor dark:bg-whiteColor-dark rounded-l-lg2 text-whiteColor px-10px flex items-center dark:shadow-theme-controller">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-10px w-5 block dark:hidden"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        ></path>
                    </svg>
                    <span className="text-base block dark:hidden">Dark</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden mr-10px w-5 dark:block"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="32"
                            d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
                        ></path>
                        <circle
                            cx="256"
                            cy="256"
                            r="80"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="32"
                        ></circle>
                    </svg>
                    <span className="text-base hidden dark:block">Light</span>
                </button>
            </div>

            <div>
                <button className="scroll-up w-50px h-50px leading-50px text-center text-primaryColor bg-white hover:text-whiteColor hover:bg-primaryColor rounded-full fixed right-5 bottom-[60px] shadow-scroll-up z-medium text-xl dark:text-whiteColor dark:bg-primaryColor dark:hover:text-whiteColor-dark hidden">
                    <i className="icofont-rounded-up"></i>
                </button>
            </div>

            <header>
                <div className="bg-blackColor2 dark:bg-lightGrey10-dark hidden lg:block">
                    <div className="container 3xl:container2-lg 4xl:container mx-auto text-whiteColor text-size-12 xl:text-sm py-5px xl:py-9px">
                        <div className="flex justify-between items-center">
                            <div>
                                <p>
                                    Call Us: +1 800 123 456 789 - Mail Us:
                                    Itcroc@mail.com
                                </p>
                            </div>
                            <div className="flex gap-37px items-center">
                                <div>
                                    <p>
                                        <i className="icofont-location-pin text-primaryColor text-size-15 mr-5px"></i>
                                        <span>
                                            684 West College St. Sun City, USA
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <ul className="flex gap-13px text-size-15">
                                        <li>
                                            <a
                                                className="hover:text-primaryColor"
                                                href="#"
                                            >
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="hover:text-primaryColor"
                                                href="#"
                                            >
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="hover:text-primaryColor"
                                                href="#"
                                            >
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="hover:text-primaryColor"
                                                href="#"
                                            >
                                                <i className="icofont-youtube-play"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="transition-all duration-500 sticky-header z-medium dark:bg-whiteColor-dark">
                    <nav className="lg:container 3xl:container2-lg 4xl:container mx-auto relative">
                        <div className="hidden lg:grid grid-cols-12 py-5 px-15px items-center gap-30px border-b border-borderColor dark:border-borderColor-dark -mx-15px">
                            <div className="col-start-1 col-span-3">
                                <ul className="flex items-center nav-list">
                                    <li className="relative">
                                        <button className="text-contentColor dark:text-contentColor-dark pr-10px flex items-center">
                                            <img
                                                src="./assets/images/icon/flag1.webp"
                                                alt=""
                                                className="w-6 h-6 mr-1 rounded-lg2"
                                            />
                                            ENG
                                            <i className="icofont-rounded-down"></i>
                                        </button>

                                        <div
                                            className="dropdown absolute left-0 translate-y-10 z-medium hidden opacity-0"
                                            style={{ transition: "0.3s" }}
                                        >
                                            <div className="shadow-dropdown3 max-w-dropdown2 w-2000 rounded-standard bg-white dark:bg-whiteColor-dark">
                                                <ul>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="flex items-center text-size-13 text-blackColor p-10px transition duration-300 hover:bg-darkdeep4 hover:text-whiteColor dark:text-blackColor-dark dark:hover:text-whiteColor-dark dark:hover:bg-darkdeep4"
                                                        >
                                                            <img
                                                                src="./assets/images/icon/flag2.webp"
                                                                alt=""
                                                                className="w-18px h-18px rounded-lg mr-10px"
                                                            />
                                                            FR
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="flex items-center text-size-13 text-blackColor p-10px transition duration-300 hover:bg-darkdeep4 hover:text-whiteColor dark:text-blackColor-dark dark:hover:text-whiteColor-dark dark:hover:bg-darkdeep4"
                                                        >
                                                            <img
                                                                src="./assets/images/icon/flag3.webp"
                                                                alt=""
                                                                className="w-18px h-18px rounded-lg mr-10px"
                                                            />
                                                            DE
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="relative">
                                        <button className="text-contentColor dark:text-contentColor-dark pl-10px flex items-center">
                                            USD
                                            <i className="icofont-rounded-down"></i>
                                        </button>

                                        <div
                                            className="dropdown absolute left-0 translate-y-10 z-medium hidden opacity-0"
                                            style={{ transition: "0.3s" }}
                                        >
                                            <div className="shadow-dropdown3 max-w-dropdown2 w-2000 rounded-standard bg-white dark:bg-whiteColor-dark">
                                                <ul>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="w-full text-size-13 text-blackColor p-10px pl-5 transition duration-300 hover:bg-darkdeep4 hover:text-whiteColor dark:text-blackColor-dark dark:hover:text-whiteColor-dark dark:hover:bg-darkdeep4"
                                                        >
                                                            FR
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="w-full text-size-13 text-blackColor p-10px pl-5 transition duration-300 hover:bg-darkdeep4 hover:text-whiteColor dark:text-blackColor-dark dark:hover:text-whiteColor-dark dark:hover:bg-darkdeep4"
                                                        >
                                                            DE
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-start-4 col-span-6">
                                <form>
                                    <div className="text-blackColor dark:text-blackColor-dark py-2 pl-15px border border-borderColor dark:border-borderColor-dark relative rounded-full">
                                        <input
                                            type="text"
                                            placeholder="Search Course"
                                            className="w-full focus:outline-none bg-transparent placeholder:text-darkdeep4"
                                        />
                                        <button
                                            type="submit"
                                            className="absolute top-1/2 -translate-y-1/2 right-7"
                                        >
                                            <i className="icofont-search-1"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-start-10 col-span-3">
                                <ul className="relative nav-list flex justify-end items-center">
                                    <li className="px-5 lg:px-10px 2xl:px-5 group">
                                        <a href="#" className="relative block">
                                            <i className="icofont-cart-alt text-2xl text-blackColor group-hover:text-secondaryColor transition-all duration-300 dark:text-blackColor-dark"></i>
                                            <span className="absolute -top-1 2xl:-top-[5px] -right-[10px] lg:right-3/4 2xl:-right-[10px] text-[10px] font-medium text-white dark:text-whiteColor-dark bg-secondaryColor px-1 py-[2px] leading-1 rounded-full z-50 block">
                                                3
                                            </span>
                                        </a>

                                        <div
                                            className="dropdown absolute right-0 lg:right-8 translate-y-10 z-medium hidden opacity-0 pt-5px"
                                            style={{ transition: "0.3s" }}
                                        >
                                            <div className="shadow-dropdown-secodary max-w-dropdown3 w-2000 rounded-standard p-5 bg-white dark:bg-whiteColor-dark">
                                                <ul className="flex flex-col gap-y-5 pb-5 mb-30px border-b border-borderColor dark:border-borderColor-dark">
                                                    <li className="relative flex gap-x-15px items-center">
                                                        <a href="#">
                                                            <img
                                                                src="./assets/images/grid/cart1.jpg"
                                                                alt="photo"
                                                                className="w-card-img py-[3px]"
                                                            />
                                                        </a>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                                                            >
                                                                web dictionary
                                                            </a>
                                                            <p className="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                                                                1 x
                                                                <span className="text-secondaryColor">
                                                                    $ 80.00
                                                                </span>
                                                            </p>
                                                        </div>

                                                        <button className="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                                                            <i className="icofont-close-line"></i>
                                                        </button>
                                                    </li>
                                                    <li className="relative flex gap-x-15px items-center">
                                                        <a href="#">
                                                            <img
                                                                src="./assets/images/grid/cart2.jpg"
                                                                alt="photo"
                                                                className="w-card-img py-[3px]"
                                                            />
                                                        </a>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                                                            >
                                                                Design Minois
                                                            </a>
                                                            <p className="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                                                                1 x
                                                                <span className="text-secondaryColor">
                                                                    $ 60.00
                                                                </span>
                                                            </p>
                                                        </div>

                                                        <button className="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                                                            <i className="icofont-close-line"></i>
                                                        </button>
                                                    </li>
                                                    <li className="relative flex gap-x-15px items-center">
                                                        <a href="#">
                                                            <img
                                                                src="./assets/images/grid/cart3.jpg"
                                                                alt="photo"
                                                                className="w-card-img py-[3px]"
                                                            />
                                                        </a>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                                                            >
                                                                Crash Course
                                                            </a>
                                                            <p className="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                                                                1 x
                                                                <span className="text-secondaryColor">
                                                                    $ 70.00
                                                                </span>
                                                            </p>
                                                        </div>

                                                        <button className="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                                                            <i className="icofont-close-line"></i>
                                                        </button>
                                                    </li>
                                                </ul>

                                                <div>
                                                    <p className="text-size-17 text-contentColor dark:text-contentColor-dark pb-5 flex justify-between">
                                                        Total Price:
                                                        <span className="font-bold text-secondaryColor">
                                                            $ 210.00
                                                        </span>
                                                    </p>
                                                </div>

                                                <div className="flex flex-col gap-y-5">
                                                    <a
                                                        href="#"
                                                        className="text-sm font-bold text-contentColor dark:text-contentColor-dark hover:text-whiteColor hover:bg-secondaryColor text-center py-10px border border-secondaryColor"
                                                    >
                                                        View Cart
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="text-sm font-bold bg-darkblack dark:bg-darkblack-dark text-whiteColor dark:text-whiteColor-dark hover:bg-secondaryColor dark:hover:bg-secondaryColor text-center py-10px"
                                                    >
                                                        Checkout
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="hidden lg:block">
                                        <a
                                            href="login.html"
                                            className="text-size-12 2xl:text-size-15 px-15px py-2 text-blackColor hover:text-whiteColor bg-whiteColor block hover:bg-primaryColor border border-borderColor1 rounded-standard font-semibold dark:text-blackColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor dark:hover:border-primaryColor"
                                        >
                                            <i className="icofont-user-alt-5"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="py-15px lg:py-0 px-15px">
                            <div className="grid grid-cols-2 lg:grid-cols-12 items-center gap-15px -mx-15px">
                                <div className="lg:col-start-1 lg:col-span-2">
                                    <Link href="/" className="block">
                                        {/* <img
                                            src="./assets/images/logo/logo_1.png"
                                            alt="Logo"
                                            className="w-logo-sm lg:w-auto py-2"
                                        /> */}
                                        <ApplicationLogo className="block h-20 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                    </Link>
                                </div>

                                <div className="hidden lg:block lg:col-start-3 lg:col-span-7">
                                    <ul className="nav-list flex justify-center">
                                        <li className="nav-item group">
                                            <a
                                                href="#"
                                                className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                                            >
                                                Demos
                                                <i className="icofont-rounded-down"></i>
                                            </a>

                                            <div
                                                className="dropdown absolute left-0 translate-y-10 z-medium hidden opacity-0"
                                                style={{ transition: "0.3s" }}
                                            >
                                                <div className="tab container 3xl:container2-lg 4xl:container shadow-dropdown px-30px mx-auto xl:px-30px py-15px max-h-dropdown 3xl:h-2000 xl:overflow-y-scroll rounded-standard bg-white dark:bg-whiteColor-dark">
                                                    <div className="tab-links grid grid-cols-2 gap-22px text-blackColor text-lg font-semibold font-hind">
                                                        <button className="py-3 hover:text-primaryColor dark:text-whiteColor dark:hover:text-primaryColor bg-white dark:bg-whiteColor-dark dark:hover:bg-whiteColor-dark hover:bg-white relative group/btn shadow-bottom hover:shadow-bottom dark:shadow-standard-dark disabled:cursor-pointer rounded-standard">
                                                            <span className="absolute w-full h-1 bg-primaryColor top-0 left-0 group-hover/btn:w-full"></span>
                                                            Light
                                                        </button>
                                                        <button className="py-3 hover:text-primaryColor dark:hover:text-primaryColor dark:text-whiteColor bg-lightGrey7 dark:bg-lightGrey7-dark hover:bg-white dark:hover:bg-whiteColor-dark relative group/btn hover:shadow-bottom dark:shadow-standard-dark disabled:cursor-pointer rounded-standard">
                                                            <span className="absolute w-0 h-1 bg-primaryColor top-0 left-0 group-hover/btn:w-full"></span>
                                                            Dark
                                                        </button>
                                                    </div>

                                                    <div className="tab-contents">
                                                        <div
                                                            id="light-demos"
                                                            className="block opacity-100 transition-opacity duration-150 ease-linear"
                                                        >
                                                            <ul
                                                                id="light-list"
                                                                className="grid grid-cols-5 gap-30px pt-30px pb-15px"
                                                            >
                                                                <li>
                                                                    <a
                                                                        href="index.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-1.png"
                                                                            className="w-full"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Default)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-2.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-2.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Elegant)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-3.html"
                                                                        className="overflow-hidden group/light relative block box-border shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-3.png"
                                                                            alt="Mega Menu"
                                                                            className="w-full"
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Classic)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-4.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega//home-4.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Classic
                                                                            LMS)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-5.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega//home-5.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Online
                                                                            Course)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-6.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-5px"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-6.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                                                            New
                                                                        </span>
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Marketplace)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-7.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-7.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                                                            New
                                                                        </span>
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (University)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-8.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-8.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                                                            New
                                                                        </span>
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (eCommerce)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-9.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-9.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                                                            New
                                                                        </span>
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Kindergarten)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-10.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-10.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                                                            New
                                                                        </span>
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Machine
                                                                            Learning)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-11.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-11.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                                                            New
                                                                        </span>
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Single
                                                                            Course)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/coming.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Layout
                                                                            Coming
                                                                            Soon
                                                                            1
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/coming.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Layout
                                                                            Coming
                                                                            Soon
                                                                            2
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/coming.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Layout
                                                                            Coming
                                                                            Soon
                                                                            3
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/coming.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Layout
                                                                            Coming
                                                                            Soon
                                                                            4
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div
                                                            id="dark-demos"
                                                            className="hidden opacity-0 transition-opacity duration-150 ease-linear"
                                                        >
                                                            <ul
                                                                id="dark-list"
                                                                className="grid grid-cols-5 gap-30px pt-30px pb-15px"
                                                            >
                                                                <li>
                                                                    <a
                                                                        href="index-dark.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-1-dark.png"
                                                                            className="w-full"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Default)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-2-dark.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-2-dark.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Elegant)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-3-dark.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-3-dark.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Classic)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-4-dark.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-4-dark.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Classic
                                                                            LMS)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-5-dark.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-5-dark.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Online
                                                                            Course)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-6-dark.html"
                                                                        className="overflow-hidden group relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-5px"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-6-dark.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                                                            New
                                                                        </span>
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Marketplace)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-7-dark.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-7-dark.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                                                            New
                                                                        </span>
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (University)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-8-dark.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-8-dark.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                                                            New
                                                                        </span>
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (eCommerce)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-9-dark.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-9-dark.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                                                            New
                                                                        </span>
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Kindergarten)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-10-dark.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-10-dark.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                                                            New
                                                                        </span>
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Machine
                                                                            Learning)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-11-dark.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/home-11-dark.png"
                                                                            alt="Mega Menu"
                                                                        />
                                                                        <span className="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                                                            New
                                                                        </span>
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Home
                                                                            (Single
                                                                            Course)
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-11-dark.html"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/coming-dark.png"
                                                                            alt=""
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Layout
                                                                            Coming
                                                                            Soon
                                                                            1
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/coming-dark.png"
                                                                            alt=""
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Layout
                                                                            Coming
                                                                            Soon
                                                                            2
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/coming-dark.png"
                                                                            alt=""
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Layout
                                                                            Coming
                                                                            Soon
                                                                            3
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                                                    >
                                                                        <img
                                                                            src="./assets/images/mega/coming-dark.png"
                                                                            alt=""
                                                                        />
                                                                        <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                                                            Layout
                                                                            Coming
                                                                            Soon
                                                                            4
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item group">
                                            <a
                                                href="#"
                                                className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                                            >
                                                Pages
                                                <i className="icofont-rounded-down"></i>
                                            </a>

                                            <div
                                                className="dropdown absolute left-0 translate-y-10 z-medium hidden opacity-0"
                                                style={{ transition: "0.3s" }}
                                            >
                                                <div className="container 3xl:container2-lg 4xl:container w-2000 shadow-dropdown px-30px mx-auto xl:px-30px py-30px rounded-standard bg-white dark:bg-whiteColor-dark">
                                                    <div className="grid grid-cols-4 gap-x-30px">
                                                        <div>
                                                            <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                                                                Get Started 1
                                                            </h3>
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="about.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        About
                                                                        <span className="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                                                            Sale
                                                                            Everything
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="about-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        About
                                                                        (Dark)
                                                                        <span className="text-size-12 font-semibold text-secondaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                                                            New
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="blog.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Blog
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="blog-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Blog
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="blog-details.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Blog
                                                                        Details
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="blog-details-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Blog
                                                                        Details
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                                                                Get Started 2
                                                            </h3>
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="error.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Error
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="error-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Error
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="event-details.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Event
                                                                        Details
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/zoom/zoom-meetings.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Zoom
                                                                        <span className="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                                                            Online
                                                                            Call
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/zoom/zoom-meetings-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Zoom
                                                                        Meeting
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/zoom/zoom-meeting-details.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Zoom
                                                                        Meeting
                                                                        Details
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                                                                Get Started 3
                                                            </h3>
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="./pages/zoom/zoom-meeting-details-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Meeting
                                                                        Details
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="login.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Login
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="login-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Login
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="maintenance.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Maintenance
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="maintenance-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Maintenance
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Terms &
                                                                        Condition
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                                                                Get Started 4
                                                            </h3>
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Terms &
                                                                        Condition
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="contact.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Contact
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="contact-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Contact
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Success
                                                                        Stories
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Success
                                                                        Stories
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Work
                                                                        Policy
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="pt-30px">
                                                        <img
                                                            src="./assets/images/mega/mega_menu_2.png"
                                                            alt="Mega Menu"
                                                            className="w-full rounded-standard"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item group">
                                            <a
                                                href="#"
                                                className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                                            >
                                                Courses
                                                <i className="icofont-rounded-down"></i>
                                            </a>

                                            <div
                                                className="dropdown absolute left-0 translate-y-10 z-medium hidden opacity-0"
                                                style={{ transition: "0.3s" }}
                                            >
                                                <div className="container 3xl:container2-lg 4xl:container w-2000 shadow-dropdown px-30px mx-auto xl:px-30px py-30px rounded-standard bg-white dark:bg-whiteColor-dark">
                                                    <div className="grid grid-cols-4 gap-x-30px">
                                                        <div>
                                                            <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                                                                Get Started 1
                                                            </h3>
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="course.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Grid
                                                                        <span className="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                                                            All
                                                                            Courses
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Course
                                                                        Grid
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-grid.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Course
                                                                        Grid
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-grid-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Course
                                                                        Grid
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-list.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Course
                                                                        List
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-list-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Course
                                                                        List
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                                                                Get Started 2
                                                            </h3>
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="course-details.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Course
                                                                        Details
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-details-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Course
                                                                        Details
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-details-2.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Course
                                                                        Details
                                                                        2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-details-2-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Details
                                                                        2 (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-details-3.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Coures
                                                                        Details
                                                                        3
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-details-3-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Details
                                                                        3 (Dark)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                                                                Get Started 3
                                                            </h3>
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/become-an-instructor.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Become
                                                                        An
                                                                        Instructor
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/create-course.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Careate
                                                                        Course
                                                                        <span className="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px rounded">
                                                                            Career
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="instructor.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Instructor
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="instructor-dark.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Instructor
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="instructor-details.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Instructor
                                                                        Details
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="lesson.html"
                                                                        className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                    >
                                                                        Course
                                                                        Lesson
                                                                        <span className="text-size-12 font-semibold text-secondaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                                                            New
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <img
                                                                src="./assets/images/mega/mega_menu_1.png"
                                                                alt="Mega Menu"
                                                                className="w-full rounded-standard"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item group relative">
                                            <a
                                                href="./pages/dashboards/instructor-dashboard.html"
                                                className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                                            >
                                                Dashboard
                                                <i className="icofont-rounded-down"></i>
                                            </a>

                                            <div
                                                className="dropdown absolute left-0 translate-y-10 z-medium hidden opacity-0"
                                                style={{ transition: "0.3s" }}
                                            >
                                                <div className="shadow-dropdown max-w-dropdown2 w-2000 py-14px rounded-standard bg-white dark:bg-whiteColor-dark">
                                                    <ul>
                                                        <li className="relative group/nested">
                                                            <a
                                                                href="./pages/dashboards/admin-dashboard.html"
                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg flex justify-between items-center dark:bg-whiteColor-dark dark:text-contentColor-dark dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                            >
                                                                Admin
                                                                <i className="icofont-rounded-right"></i>
                                                            </a>

                                                            <div
                                                                className="nested-dropdown absolute left-full top-0 z-50 hidden opacity-0 group-hover/nested:block group-hover/nested:opacity-100"
                                                                style={{
                                                                    transition:
                                                                        "0.3s",
                                                                }}
                                                            >
                                                                <div className="shadow-dropdown max-w-dropdown2 w-2000 py-14px rounded-standard bg-white dark:bg-whiteColor-dark">
                                                                    <ul>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/admin-dashboard.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Admin
                                                                                Dashboard
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/admin-profile.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Admin
                                                                                Profile
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/admin-message.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Message
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/admin-course.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Courses
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/admin-reviews.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Review
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/admin-quiz-attempts.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Admin
                                                                                Quiz
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/admin-settings.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Setting
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="relative group/nested">
                                                            <a
                                                                href="./pages/dashboards/instructor-dashboard.html"
                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg flex justify-between items-center dark:bg-whiteColor-dark dark:text-contentColor-dark dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                            >
                                                                Instructor
                                                                <i className="icofont-rounded-right"></i>
                                                            </a>

                                                            <div
                                                                className="nested-dropdown absolute left-full top-0 z-50 hidden opacity-0 group-hover/nested:block group-hover/nested:opacity-100"
                                                                style={{
                                                                    transition:
                                                                        "0.3s",
                                                                }}
                                                            >
                                                                <div className="shadow-dropdown max-w-dropdown2 w-2000 py-14px rounded-standard bg-white dark:bg-whiteColor-dark">
                                                                    <ul>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/instructor-dashboard.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Ins.
                                                                                Dashboard
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/instructor-profile.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Ins.
                                                                                Profile
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/instructor-message.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Message
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/instructor-wishlist.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Wishlist
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/instructor-reviews.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Review
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/instructor-my-quiz-attempts.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                My
                                                                                Quiz
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/instructor-order-history.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Order
                                                                                History
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/instructor-course.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                My
                                                                                Courses
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/instructor-announcments.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Announcements
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/instructor-quiz-attempts.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Quiz
                                                                                Attempts
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/instructor-assignments.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Assignment
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/instructor-settings.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Settings
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="relative group/nested">
                                                            <a
                                                                href="./pages/dashboards/student-dashboard.html"
                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg flex justify-between items-center dark:bg-whiteColor-dark dark:text-contentColor-dark dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                            >
                                                                Student
                                                                <i className="icofont-rounded-right"></i>
                                                            </a>

                                                            <div
                                                                className="nested-dropdown absolute left-full top-0 z-50 hidden opacity-0 group-hover/nested:block group-hover/nested:opacity-100"
                                                                style={{
                                                                    transition:
                                                                        "0.3s",
                                                                }}
                                                            >
                                                                <div className="shadow-dropdown max-w-dropdown2 w-2000 py-14px rounded-standard bg-white dark:bg-whiteColor-dark">
                                                                    <ul>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/student-dashboard.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Dashboard
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/student-profile.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Profile
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/student-message.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Message
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/student-enrolled-courses.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Enrolled
                                                                                Courses
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/student-wishlist.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Wishlist
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/student-reviews.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Review
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/student-my-quiz-attempts.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                My
                                                                                Quiz
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/student-assignments.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Assignment
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="./pages/dashboards/student-settings.html"
                                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                                            >
                                                                                Setting
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item group relative">
                                            <a
                                                href="./pages/ecommerce/shop.html"
                                                className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                                            >
                                                eCommerce
                                                <i className="icofont-rounded-down"></i>
                                            </a>

                                            <div
                                                className="dropdown absolute left-0 translate-y-10 z-medium hidden opacity-0"
                                                style={{ transition: "0.3s" }}
                                            >
                                                <div className="shadow-dropdown max-w-dropdown2 w-2000 py-14px rounded-standard bg-white dark:bg-whiteColor-dark">
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="./pages/ecommerce/shop.html"
                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                            >
                                                                Shop
                                                                <span className="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px rounded">
                                                                    Online Store
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="./pages/ecommerce/product-details.html"
                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                            >
                                                                Product Details
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="./pages/ecommerce/cart.html"
                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                            >
                                                                Cart
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="./pages/ecommerce/checkout.html"
                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                            >
                                                                Checkout
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="./pages/ecommerce/wishlist.html"
                                                                className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                                            >
                                                                Wishlist
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="lg:col-start-10 lg:col-span-3">
                                    <ul className="relative nav-list flex justify-end items-center">
                                        <li className="px-5 lg:px-10px 2xl:px-5 group block lg:hidden">
                                            <a
                                                href="./pages/ecommerce/cart.html"
                                                className="relative block"
                                            >
                                                <i className="icofont-cart-alt text-2xl text-blackColor group-hover:text-secondaryColor transition-all duration-300 dark:text-blackColor-dark"></i>
                                                <span className="absolute -top-1 2xl:-top-[5px] -right-[10px] lg:right-3/4 2xl:-right-[10px] text-[10px] font-medium text-white dark:text-whiteColor-dark bg-secondaryColor px-1 py-[2px] leading-1 rounded-full z-50 block">
                                                    3
                                                </span>
                                            </a>

                                            <div
                                                className="dropdown absolute right-0 lg:right-8 translate-y-10 z-medium hidden opacity-0 pt-5px"
                                                style={{ transition: "0.3s" }}
                                            >
                                                <div className="shadow-dropdown-secodary max-w-dropdown3 w-2000 rounded-standard p-5 bg-white dark:bg-whiteColor-dark">
                                                    <ul className="flex flex-col gap-y-5 pb-5 mb-30px border-b border-borderColor dark:border-borderColor-dark">
                                                        <li className="relative flex gap-x-15px items-center">
                                                            <a href="#">
                                                                <img
                                                                    src="./assets/images/grid/cart1.jpg"
                                                                    alt="photo"
                                                                    className="w-card-img py-[3px]"
                                                                />
                                                            </a>
                                                            <div>
                                                                <a
                                                                    href="#"
                                                                    className="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                                                                >
                                                                    web
                                                                    dictionary
                                                                </a>
                                                                <p className="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                                                                    1 x
                                                                    <span className="text-secondaryColor">
                                                                        $ 80.00
                                                                    </span>
                                                                </p>
                                                            </div>

                                                            <button className="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                                                                <i className="icofont-close-line"></i>
                                                            </button>
                                                        </li>
                                                        <li className="relative flex gap-x-15px items-center">
                                                            <a href="#">
                                                                <img
                                                                    src="./assets/images/grid/cart2.jpg"
                                                                    alt="photo"
                                                                    className="w-card-img py-[3px]"
                                                                />
                                                            </a>
                                                            <div>
                                                                <a
                                                                    href="#"
                                                                    className="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                                                                >
                                                                    Design
                                                                    Minois
                                                                </a>
                                                                <p className="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                                                                    1 x
                                                                    <span className="text-secondaryColor">
                                                                        $ 60.00
                                                                    </span>
                                                                </p>
                                                            </div>

                                                            <button className="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                                                                <i className="icofont-close-line"></i>
                                                            </button>
                                                        </li>
                                                        <li className="relative flex gap-x-15px items-center">
                                                            <a href="#">
                                                                <img
                                                                    src="./assets/images/grid/cart3.jpg"
                                                                    alt="photo"
                                                                    className="w-card-img py-[3px]"
                                                                />
                                                            </a>
                                                            <div>
                                                                <a
                                                                    href="#"
                                                                    className="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                                                                >
                                                                    Crash Course
                                                                </a>
                                                                <p className="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                                                                    1 x
                                                                    <span className="text-secondaryColor">
                                                                        $ 70.00
                                                                    </span>
                                                                </p>
                                                            </div>

                                                            <button className="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                                                                <i className="icofont-close-line"></i>
                                                            </button>
                                                        </li>
                                                    </ul>

                                                    <div>
                                                        <p className="text-size-17 text-contentColor dark:text-contentColor-dark pb-5 flex justify-between">
                                                            Total Price:
                                                            <span className="font-bold text-secondaryColor">
                                                                $ 210.00
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-col gap-y-5">
                                                        <a
                                                            href="#"
                                                            className="text-sm font-bold text-contentColor dark:text-contentColor-dark hover:text-whiteColor hover:bg-secondaryColor text-center py-10px border border-secondaryColor"
                                                        >
                                                            View Cart
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="text-sm font-bold bg-darkblack dark:bg-darkblack-dark text-whiteColor dark:text-whiteColor-dark hover:bg-secondaryColor dark:hover:bg-secondaryColor text-center py-10px"
                                                        >
                                                            Checkout
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="hidden lg:block">
                                            <Link
                                                href="/login"
                                                className="text-size-12 2xl:text-size-15 text-whiteColor bg-primaryColor block border-primaryColor border hover:text-primaryColor hover:bg-white px-15px py-2 rounded-standard dark:hover:bg-whiteColor-dark dark: dark:hover:text-whiteColor"
                                            >
                                                Get Start Here
                                            </Link>
                                        </li>
                                        <li className="block lg:hidden">
                                            <button className="open-mobile-menu text-3xl text-darkdeep1 hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor">
                                                <i className="icofont-navigation-menu"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="mobile-menu w-mobile-menu-sm md:w-mobile-menu-lg fixed top-0 -right-[280px] md:-right-[330px] transition-all duration-500 w-mobile-menu h-full shadow-dropdown-secodary bg-whiteColor dark:bg-whiteColor-dark z-high block lg:hidden">
                    <button className="close-mobile-menu text-lg bg-darkdeep1 hover:bg-secondaryColor text-white px-[11px] py-[6px] absolute top-0 right-full hidden">
                        <i className="icofont icofont-close-line"></i>
                    </button>

                    <div className="px-5 md:px-30px pt-5 md:pt-10 pb-50px h-full overflow-y-auto">
                        <div className="pb-10 border-b border-borderColor dark:border-borderColor-dark">
                            <form className="flex justify-between items-center w-full bg-whitegrey2 dark:bg-whitegrey2-dark px-15px py-[11px]">
                                <input
                                    type="text"
                                    placeholder="Search entire store..."
                                    className="bg-transparent w-4/5 focus:outline-none text-sm text-darkdeep1 dark:text-blackColor-dark"
                                />
                                <button className="block text-lg text-darkdeep1 hover:text-secondaryColor dark:text-blackColor-dark dark:hover:text-secondaryColor">
                                    <i className="icofont icofont-search-2"></i>
                                </button>
                            </form>
                        </div>

                        <div className="pt-8 pb-6 border-b border-borderColor dark:border-borderColor-dark">
                            <ul className="accordion-container">
                                <li className="accordion">
                                    <div className="flex items-center justify-between">
                                        <a
                                            className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                            href="index.html"
                                        >
                                            Home
                                        </a>
                                        <button className="accordion-controller px-3 py-4">
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500"></span>
                                        </button>
                                    </div>

                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500">
                                        <div className="content-wrapper">
                                            <ul className="accordion-container">
                                                <li className="accordion">
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="index.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Home Light
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500"></span>
                                                        </button>
                                                    </div>

                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500">
                                                        <div className="content-wrapper">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="index.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Home
                                                                        (Default)
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a
                                                                        href="home-2.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Elegant
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-3.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Classic
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-4.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Classic
                                                                        LMS
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-5.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Online
                                                                        Course
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-6.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Marketplace
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-7.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        University
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-8.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        ECommerce
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-9.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Kindergarten
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-10.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Machine
                                                                        Learning
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-11.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Single
                                                                        Course
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="accordion">
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="index-dark.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Home Dark
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500"></span>
                                                        </button>
                                                    </div>

                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500">
                                                        <div className="content-wrapper">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="index-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Home
                                                                        Default
                                                                        (Dark)
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a
                                                                        href="home-2-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Elegant
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-3-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Classic
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-4-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Classic
                                                                        LMS
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-5-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Online
                                                                        Course
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-6-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Marketplace
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-7-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        University
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-8-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        ECommerce
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-9-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Kindergarten
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-10-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Machine
                                                                        Learning
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-11-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Single
                                                                        Course
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion">
                                    <div className="flex items-center justify-between">
                                        <a
                                            className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                            href="#"
                                        >
                                            Pages
                                        </a>
                                        <button className="accordion-controller px-3 py-4">
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500"></span>
                                        </button>
                                    </div>

                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500">
                                        <div className="content-wrapper">
                                            <ul className="accordion-container">
                                                <li className="accordion">
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Get Started 1
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                                                        </button>
                                                    </div>

                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="about.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        About
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a
                                                                        href="about-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        About
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="blog.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Block
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="blog-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Block
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="blog-details.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Block
                                                                        Details
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="blog-details-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Block
                                                                        Details
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Get Started 2
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                                                        </button>
                                                    </div>

                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="error.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Error
                                                                        404
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a
                                                                        href="error-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Error
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="event-details.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Event
                                                                        Details
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/zoom/zoom-meetings.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Zoom
                                                                        <span className="px-15px py-5px text-primaryColor bg-whitegrey3 text-xs rounded ml-5px">
                                                                            Online
                                                                            Call
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/zoom/zoom-meetings-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Zoom
                                                                        Meeting
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/zoom/zoom-meeting-details.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Zoom
                                                                        Meeting
                                                                        Details
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Get Started 3
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                                                        </button>
                                                    </div>

                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="./pages/zoom/zoom-meeting-details-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Meeting
                                                                        Details
                                                                        (Dark)
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a
                                                                        href="login.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Login
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="login-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Login
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="maintenance.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Maintenance
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="maintenance-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Maintenance
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Term &
                                                                        Condition
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Get Started 4
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                                                        </button>
                                                    </div>

                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Term &
                                                                        Condition
                                                                        (Dark)
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Privacy
                                                                        Policy
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Privacy
                                                                        Policy
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Success
                                                                        Stories
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Success
                                                                        Stories
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Work
                                                                        Policy
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="pl-15px pt-3 pb-7px"
                                                    >
                                                        <img
                                                            className="w-full"
                                                            src="./assets/images/mega/mega_menu_2.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion">
                                    <div className="flex items-center justify-between">
                                        <a
                                            className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                            href="course.html"
                                        >
                                            Courses
                                        </a>
                                        <button className="accordion-controller px-3 py-4">
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500"></span>
                                        </button>
                                    </div>

                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500">
                                        <div className="content-wrapper">
                                            <ul className="accordion-container">
                                                <li className="accordion">
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Get Started 1
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                                                        </button>
                                                    </div>

                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="course.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Grid
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a
                                                                        href="course-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course
                                                                        Grid
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course
                                                                        Grid
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-grid-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course
                                                                        Grid
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-list.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course
                                                                        List
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-list-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course
                                                                        List
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Get Started 2
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                                                        </button>
                                                    </div>

                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="course-details.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course
                                                                        Details
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a
                                                                        href="course-details-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course
                                                                        Details
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-details-2.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course
                                                                        Details
                                                                        2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-details-2-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Details
                                                                        2 (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-details-3.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course
                                                                        Details
                                                                        3
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-details-3-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Details
                                                                        3 (Dark)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Get Started 3
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                                                        </button>
                                                    </div>

                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/become-an-instructor.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Become
                                                                        An
                                                                        Instructor
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/create-course.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Create
                                                                        Course
                                                                        <span className="px-15px py-5px text-primaryColor bg-whitegrey3 text-xs rounded ml-5px">
                                                                            Career
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="instructor.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Instructor
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="instructor-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Instructor
                                                                        (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="instructor-details.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Instructor
                                                                        Details
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="lesson.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course
                                                                        Lesson
                                                                        <span className="px-15px py-5px text-secondaryColor bg-whitegrey3 text-xs rounded ml-5px">
                                                                            New
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <a
                                                        href="#"
                                                        className="pl-15px pt-3 pb-7px"
                                                    >
                                                        <img
                                                            className="w-full"
                                                            src="./assets/images/mega/mega_menu_1.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion">
                                    <div className="flex items-center justify-between">
                                        <a
                                            className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                            href="./pages/dashboards/instructor-dashboard.html"
                                        >
                                            Dashboard
                                        </a>
                                        <button className="accordion-controller px-3 py-4">
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500"></span>
                                        </button>
                                    </div>

                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500">
                                        <div className="content-wrapper">
                                            <ul className="accordion-container">
                                                <li className="accordion">
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/dashboards/admin-dashboard.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Admin
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                                                        </button>
                                                    </div>

                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/admin-dashboard.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Admin
                                                                        Dashboard
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/admin-profile.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Admin
                                                                        Profile
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/admin-message.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Message
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/admin-course.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Courses
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/admin-reviews.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Review
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/admin-quiz-attempts.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Admin
                                                                        Quiz
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/admin-settings.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Settings
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/dashboards/instructor-dashboard.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Instructor
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                                                        </button>
                                                    </div>

                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-dashboard.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Inst.
                                                                        Dashboard
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-profile.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Inst.
                                                                        Profile
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-message.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Message
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-wishlist.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Wishlist
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-reviews.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Review
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-my-quiz-attempts.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        My Quiz
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-order-history.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Order
                                                                        History
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-course.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        My
                                                                        Courses
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-announcments.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Announcements
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-quiz-attempts.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Quiz
                                                                        Attempts
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-assignments.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Assignments
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-settings.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Settings
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/dashboards/student-dashboard.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Student
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                                                        </button>
                                                    </div>

                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-dashboard.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Dashboard
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-profile.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Profile
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-message.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Message
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-enrolled-courses.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Enrolled
                                                                        Courses
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-wishlist.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Wishlist
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-reviews.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Review
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-my-quiz-attempts.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        My Quiz
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-assignments.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Assignment
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-settings.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Settings
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion">
                                    <div className="flex items-center justify-between">
                                        <a
                                            className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                            href="./pages/ecommerce/shop.html"
                                        >
                                            ECommerce
                                        </a>
                                        <button className="accordion-controller px-3 py-4">
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500"></span>
                                        </button>
                                    </div>

                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500">
                                        <div className="content-wrapper">
                                            <ul>
                                                <li>
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/ecommerce/shop.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Shop
                                                            <span className="px-15px py-5px text-primaryColor bg-whitegrey3 text-xs rounded ml-5px">
                                                                Online Store
                                                            </span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/ecommerce/product-details.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Product Details
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/ecommerce/cart.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Cart
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/ecommerce/checkout.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Checkout
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/ecommerce/wishlist.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Wishlist
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul className="accordion-container mt-9 mb-30px pb-9 border-b border-borderColor dark:border-borderColor-dark">
                                <li className="accordion group">
                                    <div className="accordion-controller flex items-center justify-between">
                                        <a
                                            className="leading-1 text-darkdeep1 font-medium group-hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                            href="#"
                                        >
                                            My Account
                                        </a>
                                        <button className="px-3 py-1">
                                            <i className="icofont-thin-down text-size-15 text-darkdeep1 group-hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                                        </button>
                                    </div>

                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500 shadow-standard">
                                        <div className="content-wrapper">
                                            <ul>
                                                <li>
                                                    <div className="flex items-center gap-1">
                                                        <a
                                                            href="login.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-30px pt-7 pb-3 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Login
                                                        </a>

                                                        <a
                                                            href="login.html"
                                                            className="leading-1 text-darkdeep1 text-sm pr-30px pt-7 pb-4 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            <span>/</span>{" "}
                                                            Create Account
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="login.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            My Account
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul className="flex gap-6 items-center mb-5">
                                <li>
                                    <a className="facebook" href="#">
                                        <i className="icofont icofont-facebook text-fb-color dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="twitter" href="#">
                                        <i className="icofont icofont-twitter text-twiter-color dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="pinterest" href="#">
                                        <i className="icofont icofont-pinterest dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="instagram" href="#">
                                        <i className="icofont icofont-instagram dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="google" href="#">
                                        <i className="icofont icofont-youtube-play dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            {children}

            <footer className="bg-darkblack">
                <div className="container-fluid-2 pt-65px pb-5 lg:pb-10">
                    <section>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-30px md:gap-y-0 items-center pb-45px border-b border-darkcolor">
                            <div>
                                <h4 className="text-4xl md:text-size-25 lg:text-size-40 font-bold text-whiteColor leading-50px md:leading-10 lg:leading-16">
                                    Still You Need Our
                                    <span className="text-primaryColor">
                                        Support
                                    </span>{" "}
                                    ?
                                </h4>
                                <p className="text-whiteColor text-opacity-65">
                                    Don’t wait make a smart & logical quote
                                    here. Its pretty easy.
                                </p>
                            </div>
                            <div>
                                <form className="max-w-form-xl md:max-w-form-md lg:max-w-form-lg xl:max-w-form-xl 2xl:max-w-form-2xl bg-deepgray ml-auto rounded relative">
                                    <input
                                        type="email"
                                        placeholder="Enter your email here"
                                        className="text-whiteColor h-62px pl-15px focus:outline-none border border-deepgray focus:border-whitegrey bg-transparent rounded w-full"
                                    />
                                    <button
                                        type="submit"
                                        className="px-3 md:px-10px lg:px-5 bg-primaryColor hover:bg-deepgray text-xs lg:text-size-15 text-whiteColor border border-primaryColor block rounded absolute right-0 top-0 h-full"
                                    >
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="grid grid-cols-12 gap-30px md:gap-y-5 lg:gap-y-0 pt-60px pb-50px md:pt-30px md:pb-30px lg:pt-110px lg:pb-20">
                            <div className="col-start-1 col-span-12 md:col-span-6 lg:col-span-4 mr-30px">
                                <h4 className="text-size-22 font-bold text-whiteColor mb-3">
                                    About us
                                </h4>
                                <p className="text-base lg:text-sm 2xl:text-base text-darkgray mb-30px leading-1.8 2xl:leading-1.8">
                                    orporate clients and leisure travelers has
                                    been relying on Groundlink for dependable
                                    safe, and professional chauffeured car end
                                    service in major cities across World.
                                </p>
                                <div className="flex items-center">
                                    <div>
                                        <i className="icofont-clock-time text-3xl text-whiteColor h-78px w-78px bg-primaryColor leading-78px mr-22px block text-center"></i>
                                    </div>
                                    <div>
                                        <h6 className="text-lg text-whiteColor font-medium leading-29px">
                                            OPENING HOURES
                                        </h6>
                                        <p className="text-sm text-whiteColor text-opacity-60 mb-1">
                                            Mon - Sat(8.00 - 6.00)
                                        </p>
                                        <p className="text-sm text-whiteColor text-opacity-60">
                                            Sunday - Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-start-1 col-span-12 md:col-start-7 lg:col-start-5 md:col-span-6 lg:col-span-2">
                                <h4 className="text-size-22 font-bold text-whiteColor mb-3">
                                    Usefull Links
                                </h4>
                                <ul className="flex flex-col gap-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                                        >
                                            Teachers
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                                        >
                                            Partner
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                                        >
                                            Room-Details
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                                        >
                                            Gallery
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-start-1 col-span-12 md:col-start-1 lg:col-start-7 md:col-span-6 lg:col-span-3 pl-0 2xl:pl-60px">
                                <h4 className="text-size-22 font-bold text-whiteColor mb-3">
                                    Course
                                </h4>
                                <ul className="flex flex-col gap-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                                        >
                                            Ui Ux Design
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                                        >
                                            Web Development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                                        >
                                            Business Strategy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                                        >
                                            Softwere Development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                                        >
                                            Business English
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-start-1 col-span-12 md:col-start-7 lg:col-start-10 md:col-span-6 lg:col-span-3 pl-0 2xl:pl-50px">
                                <h4 className="text-size-22 font-bold text-whiteColor mb-3">
                                    Recent Post
                                </h4>
                                <ul className="flex flex-col gap-y-5">
                                    <li>
                                        <a className="flex items-center gap-3 group cursor-pointer">
                                            <div>
                                                <img
                                                    src="./assets/images/footer/footer__1.png"
                                                    alt=""
                                                    className="w-61px h-54px"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-xs text-darkgray mb-7px">
                                                    02 Apr 2024
                                                </p>
                                                <h6 className="text-size-15 text-whiteColor font-bold group-hover:text-primaryColor transition-all duration-300">
                                                    Best Your Business
                                                </h6>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a className="flex items-center gap-3 group cursor-pointer">
                                            <div>
                                                <img
                                                    src="./assets/images/footer/footer__2.png"
                                                    alt=""
                                                    className="w-61px h-54px"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-xs text-darkgray mb-7px">
                                                    02 Apr 2024
                                                </p>
                                                <h6 className="text-size-15 text-whiteColor font-bold group-hover:text-primaryColor transition-all duration-300">
                                                    Keep Your Business
                                                </h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="flex items-center gap-3 group cursor-pointer">
                                            <div>
                                                <img
                                                    src="./assets/images/footer/footer__3.png"
                                                    alt=""
                                                    className="w-61px h-54px"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-xs text-darkgray mb-7px">
                                                    02 Apr 2024
                                                </p>
                                                <h6 className="text-size-15 text-whiteColor font-bold group-hover:text-primaryColor transition-all duration-300">
                                                    Nice Your Business
                                                </h6>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-30px pt-10 items-center">
                            <div className="lg:col-start-1 lg:col-span-3">
                                <a href="#">
                                    <img
                                        src="./assets/images/logo/logo_2.png"
                                        alt=""
                                    />
                                </a>
                            </div>

                            <div className="lg:col-start-4 lg:col-span-6">
                                <p className="text-whiteColor">
                                    Copyright ©
                                    <span className="text-primaryColor">
                                        2024{" "}
                                    </span>{" "}
                                    by edurock. All Rights Reserved.
                                </p>
                            </div>

                            <div className="lg:col-start-10 lg:col-span-3">
                                <ul className="flex gap-3 lg:gap-2 2xl:gap-3 lg:justify-end">
                                    <li>
                                        <a
                                            href="#"
                                            className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                                        >
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                                        >
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                                        >
                                            <i className="icofont-vimeo"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                                        >
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                                        >
                                            <i className="icofont-skype"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
