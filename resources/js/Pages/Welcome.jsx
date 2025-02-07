import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <GuestLayout>
            <section className="bg-gray-100 dark:bg-slate-800">
                <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-7xl py-48">
                    <div className="flex items-center gap-6">
                        <div className="flex-1 prose">
                            <h5 className="mb-6 text-secondary font-normal">
                                EDUCATION SOLUTION
                            </h5>
                            <h1 className="text-7xl font-extrabold mb-6">
                                Ignite Your{" "}
                                <span className="text-secondary">Career</span>{" "}
                                with Learning the Largest{" "}
                                <span className="text-secondary">Online</span>{" "}
                                Platform.
                            </h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                typesetting industry. Lorem Ipsum has been
                            </p>
                        </div>
                        <div className="flex-1">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptate dolorem iste eum.
                                Pariatur corrupti nesciunt id odio est. Et,
                                perferendis? Saepe fuga ipsam quo. Iste aut
                                praesentium quaerat fugiat tempore!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-7xl py-32">
                    <div className="flex items-center gap-6">
                        <div className="flex-1">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptate dolorem iste eum.
                                Pariatur corrupti nesciunt id odio est. Et,
                                perferendis? Saepe fuga ipsam quo. Iste aut
                                praesentium quaerat fugiat tempore!
                            </p>
                        </div>
                        <div className="flex-1 prose">
                            <h5 className="mb-6">EDUCATION SOLUTION</h5>
                            <h1 className="text-7xl font-extrabold mb-6">
                                Welcome to the{" "}
                                <span className="text-secondary">Online</span>{" "}
                                Learning Center
                            </h1>
                            <blockquote>
                                <p>
                                    25+Contrary to popular belief, Lorem Ipsum
                                    is not simply random text roots in a piece
                                    of classical Latin literature from 45 BC
                                </p>
                            </blockquote>

                            <ul>
                                <li>Lorem Ipsum is simply dummy</li>
                                <li>
                                    Explore a variety of fresh educational teach
                                </li>
                                <li>Lorem Ipsum is simply dummy text of</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 dark:bg-slate-800">
                <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-7xl py-20">
                    <div className="w-full flex gap-6 justify-between items-center">
                        <div>
                            <h2 className="text-5xl font-extrabold">
                                Popular{" "}
                                <span className="text-secondary">Subjects</span>
                            </h2>
                        </div>
                        <div>
                            <a href="" className="btn btn-secondary">
                                All Categories
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-6"></div>
                </div>
            </section>
        </GuestLayout>
    );
}
