import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, usePage } from "@inertiajs/react";
import React from "react";
import { MdOutlineCheck } from "react-icons/md";

export default function Home() {
    const page = usePage();
    console.log("page", page);
    return (
        <FrontendLayout>
            <Head title="Home" />

            <section id="hero" className="">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col justify-center h-full py-40 relative ">
                        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-[30px]">
                            <div className="p-6 md:col-start-1 md:col-span-12 lg:col-start-1 lg:col-span-8">
                                <h3 className="text-lg text-secondary uppercase font-semibold tracking-[.25em] mb-8">
                                    Education Solution
                                </h3>

                                <h1 className="text-7xl font-extrabold mb-8">
                                    Ignite Your{" "}
                                    <span className="text-primary">Career</span>{" "}
                                    with Learning the Largest{" "}
                                    <span className="text-secondary">
                                        Online
                                    </span>{" "}
                                    Platform.
                                </h1>

                                <p className="mb-8">
                                    Lorem Ipsum is simply dummy text of the
                                    printing typesetting industry. Lorem Ipsum
                                    has been
                                </p>

                                <div className="flex gap-6">
                                    <a
                                        href=""
                                        className="btn btn-primary btn-md"
                                    >
                                        View Courses
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-secondary btn-md"
                                    >
                                        Explore More
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 md:col-start-1 md:col-span-8 lg:col-start-9 lg:col-span-4 aos-init aos-animate">
                                <p>Slider Here</p>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Laborum molestiae pariatur
                                    saepe. Rem laborum, voluptate labore ipsum
                                    corporis quia doloremque ad, fuga, odio ab
                                    repellat nam qui recusandae. Eos, facilis!
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 shadow-xl mx-auto max-w-7xl sm:px-6 lg:px-8  py-6 w-full translate-y-[50%] z-50 absolute bottom-0 left-[50%] translate-x-[-50%] grid grid-cols-5 gap-6">
                            <div className="flex items-center">
                                <img
                                    className="mx-auto"
                                    src="/images/brands/brand_1.png"
                                />
                            </div>
                            <div className="flex items-center">
                                <img
                                    className="mx-auto"
                                    src="/images/brands/brand_2.png"
                                />
                            </div>
                            <div className="flex items-center">
                                <img
                                    className="mx-auto"
                                    src="/images/brands/brand_3.png"
                                />
                            </div>
                            <div className="flex items-center">
                                <img
                                    className="mx-auto"
                                    src="/images/brands/brand_4.png"
                                />
                            </div>
                            <div className="flex items-center">
                                <img
                                    className="mx-auto"
                                    src="/images/brands/brand_5.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="hero"
                className=" py-32 bg-purple-500/10 dark:bg-gray-800 overflow-hidden"
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col justify-center h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px]">
                            <div className="p-6">
                                <div>
                                    <img
                                        src="/images/abouts/about_12.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg text-secondary uppercase font-semibold tracking-[.25em] mb-8">
                                    Education Solution
                                </h3>

                                <h1 className="text-6xl font-extrabold mb-8">
                                    Welcome to the{" "}
                                    <span className="text-secondary">
                                        Online
                                    </span>{" "}
                                    Learning Center
                                </h1>

                                <div className="ps-6 border-l-4 border-secondary mb-8">
                                    <p>
                                        25+Contrary to popular belief, Lorem
                                        Ipsum is not simply random text roots in
                                        a piece of classical Latin literature
                                        from 45 BC
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-4 mb-6 group">
                                        <div className="bg-indigo-500/20 p-2 group-hover:text-white group-hover:bg-indigo-500 transition-all">
                                            <MdOutlineCheck />
                                        </div>
                                        <p>Lorem Ipsum is simply dummy</p>
                                    </div>
                                    <div className="flex items-center gap-4 mb-6 group">
                                        <div className="bg-indigo-500/20 p-2 group-hover:text-white group-hover:bg-indigo-500 transition-all">
                                            <MdOutlineCheck />
                                        </div>
                                        <p>
                                            Explore a variety of fresh
                                            educational teachy
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 mb-6 group">
                                        <div className="bg-indigo-500/20 p-2 group-hover:text-white group-hover:bg-indigo-500 transition-all">
                                            <MdOutlineCheck />
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
