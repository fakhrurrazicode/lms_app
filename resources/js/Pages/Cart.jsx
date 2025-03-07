import { rupiah } from "@/bootstrap";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link } from "@inertiajs/react";

import React from "react";
import { FaStar } from "react-icons/fa";

export default function Cart({ cart }) {
    console.log("cart", cart);
    console.log("cart.items.length", cart.items.length);
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
                    {cart && cart.items.length > 0 ? (
                        <>
                            <div className="col-span-2">
                                <div className="card bg-base-100">
                                    <div className="card-body">
                                        {cart.items.map((item) => {
                                            const itemable = item.itemable;

                                            return (
                                                <div className="grid grid-cols-12 gap-6 py-3 border-b border-base-300">
                                                    <div className="col-span-3">
                                                        <img
                                                            src={
                                                                itemable.image_url
                                                            }
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="col-span-5">
                                                        <Link
                                                            href={route(
                                                                "course",
                                                                {
                                                                    slug: itemable.slug,
                                                                }
                                                            )}
                                                            className="text-md font-bold mb-2 block text-primary"
                                                        >
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
                                                            href={route(
                                                                "cart.destroy"
                                                            )}
                                                            method="DELETE"
                                                            preserveScroll={
                                                                true
                                                            }
                                                            preserveState={true}
                                                            data={{
                                                                itemable_type:
                                                                    "App\\Models\\Course",
                                                                itemable_id:
                                                                    itemable.id,
                                                            }}
                                                            className="text-error"
                                                        >
                                                            Hapus
                                                        </Link>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <p className="text-md font-bold text-secondary text-right">
                                                            {rupiah(
                                                                itemable.price
                                                            )}
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
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Excepturi obcaecati inventore
                                                voluptates ratione quam sit quos
                                                doloremque dolorum repellendus,
                                                sed atque. Qui, voluptatibus
                                                rerum itaque adipisci explicabo
                                                laudantium temporibus veritatis!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="col-span-3">
                            <div className="card bg-base-100">
                                <div className="card-body flex flex-col items-center">
                                    <img
                                        src="/images/empty-cart.png"
                                        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-8"
                                    />
                                    <p className="mb-6">
                                        Keranjang Anda kosong. Teruskan belanja
                                        untuk menemukan kursus!
                                    </p>

                                    <div>
                                        <Link
                                            href={route("courses")}
                                            className="btn btn-primary"
                                        >
                                            Terus Belanja
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </FrontendLayout>
    );
}
