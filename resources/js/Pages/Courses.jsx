import CourseCard from "@/Components/CourseCard";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { FaBook, FaClock, FaHeart } from "react-icons/fa";

export default function Courses() {
    return (
        <GuestLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Courses" />

            <section className="container mx-auto px-4 py-16">
                <div className="flex justify-between items-center py-6">
                    <div>
                        <p>Showing 1–12 of 54 Results</p>
                    </div>

                    <div className="flex items-center"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px]">
                    <div className="md:col-start-1 md:col-span-4 lg:col-span-3">
                        <div className="card bg-base-100 w-full shadow-xl rounded-md mb-6">
                            <div className="card-body px-6">
                                <h3 className="card-title mb-4 text-lg font-bold">
                                    Search here
                                </h3>
                                <input
                                    type="text"
                                    placeholder="Search Courses"
                                    className="input input-bordered w-full "
                                />
                            </div>
                        </div>

                        <div className="card bg-base-100 w-full shadow-xl rounded-md mb-6">
                            <div className="card-body px-6">
                                <h3 className="card-title mb-4 text-lg font-bold">
                                    Categories
                                </h3>
                                <ul className="flex flex-col gap-y-4">
                                    <li className="border border-2px rounded-md px-4 py-3 group hover:bg-primary hover:text-white transition-all ease-in-out text-sm">
                                        <a
                                            href="#"
                                            className="flex justify-between items-center"
                                        >
                                            <span>Mobile Set</span>
                                            <span>03</span>
                                        </a>
                                    </li>

                                    <li className="border border-2px rounded-md px-4 py-3 group hover:bg-primary hover:text-white transition-all ease-in-out text-sm">
                                        <a
                                            href="#"
                                            className="flex justify-between items-center"
                                        >
                                            <span>Mobile Set</span>
                                            <span>03</span>
                                        </a>
                                    </li>

                                    <li className="border border-2px rounded-md px-4 py-3 group hover:bg-primary hover:text-white transition-all ease-in-out text-sm">
                                        <a
                                            href="#"
                                            className="flex justify-between items-center"
                                        >
                                            <span>Mobile Set</span>
                                            <span>03</span>
                                        </a>
                                    </li>

                                    <li className="border border-2px rounded-md px-4 py-3 group hover:bg-primary hover:text-white transition-all ease-in-out text-sm">
                                        <a
                                            href="#"
                                            className="flex justify-between items-center"
                                        >
                                            <span>Mobile Set</span>
                                            <span>03</span>
                                        </a>
                                    </li>

                                    <li className="border border-2px rounded-md px-4 py-3 group hover:bg-primary hover:text-white transition-all ease-in-out text-sm">
                                        <a
                                            href="#"
                                            className="flex justify-between items-center"
                                        >
                                            <span>Mobile Set</span>
                                            <span>03</span>
                                        </a>
                                    </li>

                                    <li className="border border-2px rounded-md px-4 py-3 group hover:bg-primary hover:text-white transition-all ease-in-out text-sm">
                                        <a
                                            href="#"
                                            className="flex justify-between items-center"
                                        >
                                            <span>Mobile Set</span>
                                            <span>03</span>
                                        </a>
                                    </li>

                                    <li className="border border-2px rounded-md px-4 py-3 group hover:bg-primary hover:text-white transition-all ease-in-out text-sm">
                                        <a
                                            href="#"
                                            className="flex justify-between items-center"
                                        >
                                            <span>Mobile Set</span>
                                            <span>03</span>
                                        </a>
                                    </li>

                                    <li className="border border-2px rounded-md px-4 py-3 group hover:bg-primary hover:text-white transition-all ease-in-out text-sm">
                                        <a
                                            href="#"
                                            className="flex justify-between items-center"
                                        >
                                            <span>Mobile Set</span>
                                            <span>03</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-start-5 md:col-span-8 lg:col-start-4 lg:col-span-9 space-y-[30px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                            <div>
                                <CourseCard />
                            </div>
                            <div>
                                <CourseCard />
                            </div>
                            <div>
                                <CourseCard />
                            </div>
                            <div>
                                <CourseCard />
                            </div>
                            <div>
                                <CourseCard />
                            </div>
                            <div>
                                <CourseCard />
                            </div>
                            <div>
                                <CourseCard />
                            </div>
                            <div>
                                <CourseCard />
                            </div>
                            <div>
                                <CourseCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
