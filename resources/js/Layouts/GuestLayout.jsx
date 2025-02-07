import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-[100vh]">
            <div className="bg-base-200 ">
                <div className="navbar mx-auto w-full max-w-2xl px-6 lg:max-w-7xl py-6">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                <li>
                                    <a className="font-bold">Item 1</a>
                                </li>
                                <li>
                                    <a className="font-bold">Parent</a>
                                    <ul className="p-2">
                                        <li>
                                            <a className="font-bold">
                                                Submenu 1
                                            </a>
                                        </li>
                                        <li>
                                            <a className="font-bold">
                                                Submenu 2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="font-bold">Item 3</a>
                                </li>
                            </ul>
                        </div>
                        <a href="/">
                            <ApplicationLogo className="h-16" />
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <a className="font-bold">Item 1</a>
                            </li>
                            <li>
                                <details>
                                    <summary>Parent</summary>
                                    <ul className="p-2">
                                        <li>
                                            <a className="font-bold">
                                                Submenu 1
                                            </a>
                                        </li>
                                        <li>
                                            <a className="font-bold">
                                                Submenu 2
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <a className="font-bold">Item 3</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn btn-primary text-white">
                            Get Started Here
                        </a>
                    </div>
                </div>
            </div>

            {children}
        </div>
    );
}
