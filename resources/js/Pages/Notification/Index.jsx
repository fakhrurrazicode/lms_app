import { rupiah } from "@/bootstrap";
import CartItemCard from "@/Components/CartItemCard";
import CheckoutButton from "@/Components/CheckoutButton";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link } from "@inertiajs/react";

import React from "react";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Index({ notifications }) {
    return (
        <FrontendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Pemberitahuan
                </h2>
            }
        >
            <Head title="Courses" />
            <section className="container mx-auto px-4 py-16">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Pemberitahuan</h1>
                </div>
                <div className="space-y-2">
                    {notifications && notifications.length > 0 ? (
                        <>
                            {notifications.map((notification) => {
                                return (
                                    <Link
                                        href={route(
                                            "notification.open_notification",
                                            {
                                                notification: notification.id,
                                            }
                                        )}
                                        className="card bg-base-100 hover:bg-base-200 transition-all ease-in-out"
                                    >
                                        <div className="card-body py-6">
                                            <div className="flex justify-between">
                                                <div className="text-sm">
                                                    {notification.data.message}
                                                </div>
                                                <div className="text-xs">
                                                    {dayjs(
                                                        notification.created_at
                                                    ).fromNow()}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
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
