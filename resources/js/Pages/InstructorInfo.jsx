import CourseCard from "@/Components/CourseCard";
import TiltElement from "@/Components/TiltElement";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function InstructorInfo() {
    const { auth, instructor_info } = usePage().props;

    return (
        <FrontendLayout>
            <Head title="InstructorInfo" />

            <section id="hero" className="">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-16">
                        <div className="col-span-1">
                            <div className="avatar">
                                <div className="w-full rounded">
                                    <img src={instructor_info.user.photo_url} />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex justify-between gap-2 items-center mb-6">
                                <div>
                                    <h3 className="font-bold text-4xl">
                                        Hillary One
                                    </h3>
                                    <h5>Teches Interior marketer</h5>
                                </div>
                                <div>
                                    <div>Reviews:</div>
                                    <div className="flex items-center gap-1 text-sm">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <span>(44)</span>
                                    </div>
                                </div>
                                <div>
                                    <div>Follows Us:</div>
                                </div>
                                <div>
                                    <button className="btn btn-primary">
                                        Follow
                                    </button>
                                </div>
                            </div>

                            <div className="divider"></div>

                            <div className="mb-6">
                                <h3 className="font-bold text-xl">Short Bio</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Adipisci voluptas rerum
                                    quibusdam atque cupiditate, dicta expedita
                                    non quam sint ipsa est quidem unde error
                                    veniam et autem quis, voluptate aperiam?
                                </p>
                            </div>

                            <div className="mb-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <CourseCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
