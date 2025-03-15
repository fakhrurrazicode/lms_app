import { rupiah } from "@/bootstrap";
import CheckoutButton from "@/Components/CheckoutButton";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link } from "@inertiajs/react";

import React from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

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
                                                <div
                                                    key={item.id}
                                                    className="grid grid-cols-12 gap-6 py-3 border-b border-base-300"
                                                >
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
                                                                {itemable.instructor
                                                                    ? itemable
                                                                          .instructor
                                                                          .name
                                                                    : "Unknown"}
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
                                                                {
                                                                    itemable.duration
                                                                }{" "}
                                                                Menit
                                                            </div>
                                                            <div className="flex-1 text-left">
                                                                180 Pelajaran
                                                            </div>
                                                            <div className="flex-1 text-left">
                                                                Menengah
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2 ">
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
                                                            className="btn btn-error btn-sm"
                                                        >
                                                            Hapus
                                                        </Link>

                                                        {/* <br /> */}

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
                                                            className="btn btn-primary btn-sm"
                                                        >
                                                            Pindahkan ke
                                                            Wishlist
                                                        </Link>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <p className="text-md font-bold text-primary text-right">
                                                            <span className="block">
                                                                {rupiah(
                                                                    itemable.price
                                                                )}
                                                            </span>
                                                            {itemable.discount_percentage ? (
                                                                <span className="block text-xs text-gray-500 font-semibold line-through">
                                                                    {rupiah(
                                                                        itemable.real_price
                                                                    )}
                                                                </span>
                                                            ) : (
                                                                <></>
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
                                            <div className="mb-6">
                                                <h3 className="font-bold">
                                                    Total:
                                                </h3>
                                                <h1 className="text-3xl font-bold">
                                                    {rupiah(cart.total_price)}
                                                </h1>
                                                <h3 className="line-through">
                                                    {rupiah(
                                                        cart.total_real_price
                                                    )}
                                                </h3>
                                                <p>
                                                    Diskon{" "}
                                                    {
                                                        cart.total_discount_percentage
                                                    }
                                                    %
                                                </p>
                                            </div>

                                            <CheckoutButton />

                                            <p className="text-xs">
                                                Anda belum dikenakan biaya
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
