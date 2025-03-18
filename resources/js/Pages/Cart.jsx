import { rupiah } from "@/bootstrap";
import CartItemCard from "@/Components/CartItemCard";
import CheckoutButton from "@/Components/CheckoutButton";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link } from "@inertiajs/react";

import React from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

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
                    {cart && cart.items.length > 0 ? (
                        <>
                            <div className="col-span-2">
                                <div className="card bg-base-100">
                                    <div className="card-body">
                                        {cart.items.map((item) => (
                                            <CartItemCard cartItem={item} />
                                        ))}
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
