import { rupiah } from "@/bootstrap";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link } from "@inertiajs/react";

import React from "react";
import { FaStar } from "react-icons/fa";

export default function Cart({ cart }) {
    return (
        <FrontendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Courses" />
            <section className="container mx-auto px-4 py-16">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Shopping Cart</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <div className="card bg-base-100">
                            <div className="card-body">
                                {cart.items.map((item) => {
                                    const itemable = item.itemable;

                                    return (
                                        <div className="grid grid-cols-12 gap-6 py-3 border-b border-base-300">
                                            <div className="col-span-3">
                                                <img
                                                    src={itemable.image_url}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="col-span-5">
                                                <Link className="text-md font-bold mb-2 block text-primary">
                                                    {itemable.title}
                                                </Link>
                                                <p className="text-sm mb-2">
                                                    Oleh:{" "}
                                                    <a
                                                        href="#"
                                                        className="text-primary"
                                                    >
                                                        Mina Farid
                                                    </a>
                                                </p>
                                                <div className="flex justify-start items-center gap-2 text-sm mb-2 text-yellow-700">
                                                    <span>4.4</span>
                                                    <div className="flex gap-1">
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 text-sm">
                                                    <div className="flex-1 text-left">
                                                        20 Total Jam
                                                    </div>
                                                    <div className="flex-1 text-left">
                                                        180 Pelajaran
                                                    </div>
                                                    <div className="flex-1 text-left">
                                                        Menengah
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-2 text-right">
                                                <Link
                                                    href="#"
                                                    className="text-error"
                                                >
                                                    Hapus
                                                </Link>
                                            </div>
                                            <div className="col-span-2">
                                                <p className="text-md font-bold text-secondary text-right">
                                                    {rupiah(itemable.price)}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="card bg-base-100">
                            <div className="card">
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Excepturi obcaecati
                                        inventore voluptates ratione quam sit
                                        quos doloremque dolorum repellendus, sed
                                        atque. Qui, voluptatibus rerum itaque
                                        adipisci explicabo laudantium temporibus
                                        veritatis!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
