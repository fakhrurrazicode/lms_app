import CourseCard from "@/Components/CourseCard";
import TiltElement from "@/Components/TiltElement";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function InstructorInfo() {
    const { auth, instructor } = usePage().props;

    return (
        <FrontendLayout>
            <Head title="InstructorInfo" />

            <section id="hero" className="">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 py-16">
                        <div className="col-span-1 relative mb-6">
                            <img
                                className=" absolute -left-6 -top-6"
                                src="/images/abouts/about_4.png"
                                alt=""
                            />
                            <div className="avatar w-full">
                                <div className="w-full rounded z-10">
                                    <img src={instructor.photo_url} />
                                </div>
                            </div>

                            {/* <div className="relative">
                                <img
                                    className="absolute z-10 left-1/2 -translate-x-1/2 w-full"
                                    src={instructor.photo_url}
                                    alt=""
                                />
                                <img
                                    className="absolute z-0 -left-6"
                                    src="/images/abouts/about_4.png"
                                    alt=""
                                />
                            </div> */}
                        </div>
                        <div className="col-span-2">
                            <div className="flex justify-between gap-2 items-center mb-6">
                                <div>
                                    <h3 className="font-bold text-4xl">
                                        {instructor.name}
                                    </h3>
                                    {/* <h5>Teches Interior marketer</h5> */}
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="">Reviews:</div>
                                    <div className="flex items-center gap-1 text-sm">
                                        {[...Array(5)].map((_, index) => {
                                            if (
                                                index + 1 <=
                                                instructor.instructor_info
                                                    .avg_reviews
                                            ) {
                                                return (
                                                    <FaStar className=" text-yellow-400" />
                                                );
                                            } else {
                                                return (
                                                    <FaStar className=" text-gray-700" />
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                                {/* <div>
                                    <div>Follows Us:</div>
                                </div>
                                <div>
                                    <button className="btn btn-primary">
                                        Follow
                                    </button>
                                </div> */}
                            </div>

                            <div className="divider"></div>

                            <div className="mb-6">
                                <h3 className="font-bold text-xl mb-6">
                                    Biografi
                                </h3>
                                <div>{instructor.instructor_info.bio}</div>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold text-3xl mb-6">
                                    Online Course
                                </h3>
                                {instructor.courses.length ? (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {instructor.courses.map((course) => (
                                            <CourseCard course={course} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="italic">
                                        Belum tersedia kursus pada instruktur
                                        ini
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
