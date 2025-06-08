import CourseCard from "@/Components/CourseCard";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import React from "react";
import CourseNav from "../CourseNav";

export default function Show({ course }) {
    return (
        <FrontendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Learning Area
                </h2>
            }
        >
            <Head title="Courses" />

            <section className="mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-4">
                    <div className="col-span-1 lg:col-span-8 xl:col-span-9">
                        <div className="mb-6">
                            <ul className="flex border-b">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-4 border-b"
                                    >
                                        Gambaran Umum
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-4">
                                        Ulasan
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-4">
                                        Pengumuman
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-4">
                                        Catatan
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptatem nobis totam, quibusdam
                            exercitationem beatae architecto ratione, possimus
                            quam voluptatum cumque praesentium alias officiis
                            accusamus dolorum expedita sunt eum doloremque
                            natus!
                        </p>
                        <p>
                            Alias rerum, odio et eum esse numquam, est
                            molestiae, ex libero repellendus non voluptatibus
                            facere rem voluptates natus. Quisquam commodi
                            laudantium cupiditate repudiandae voluptatibus? Vel
                            et cupiditate hic facere culpa.
                        </p>
                    </div>
                    <div className="hidden lg:col-span-4 lg:block xl:col-span-3">
                        <CourseNav course={course} />
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
