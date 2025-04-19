import { rupiah } from "@/bootstrap";
import CartItemCard from "@/Components/CartItemCard";
import CheckoutButton from "@/Components/CheckoutButton";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link } from "@inertiajs/react";

import React from "react";
import { FaCheck, FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

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
                <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                    {cart && cart.items.length > 0 ? (
                        <>
                            <div className="col-span-2">
                                <div className="card bg-base-100">
                                    <div className="card-body">
                                        {cart.items.map((item) => {
                                            const course = item.itemable;
                                            return (
                                                <div className="flex gap-4 py-4 border-b-2 border-b-base-200">
                                                    <div className="avatar w-20 lg:w-28 self-start">
                                                        <div className="mask rounded-xl">
                                                            <img
                                                                className=""
                                                                src={
                                                                    course.image_url
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h1 className="text-primary text-xs lg:text-lg font-semibold mb-2">
                                                            <Link
                                                                href={route(
                                                                    "course",
                                                                    {
                                                                        slug: course.slug,
                                                                    }
                                                                )}
                                                            >
                                                                {course.title}
                                                            </Link>
                                                        </h1>
                                                        <div>
                                                            <div className="text-xs mb-2">
                                                                Instructor:{" "}
                                                                <span className="text-primary">
                                                                    {
                                                                        course
                                                                            .instructor
                                                                            .name
                                                                    }
                                                                </span>
                                                            </div>

                                                            <div className="text-xs mb-2 gap-2 flex flex-wrap">
                                                                <Link
                                                                    href={route(
                                                                        "cart.add_to_wishlist"
                                                                    )}
                                                                    method="POST"
                                                                    data={{
                                                                        itemable_type:
                                                                            item.itemable_type,
                                                                        itemable_id:
                                                                            item.itemable_id,
                                                                        cart_id:
                                                                            item.cart_id,
                                                                    }}
                                                                    onSuccess={() => {
                                                                        toast.success(
                                                                            "Berhasil di pindahkan ke wishlist"
                                                                        );
                                                                    }}
                                                                    onError={() => {
                                                                        toast.error(
                                                                            "Gagal memindahkan ke wishlist"
                                                                        );
                                                                    }}
                                                                    preserveScroll={
                                                                        true
                                                                    }
                                                                    preserveState={
                                                                        true
                                                                    }
                                                                    className="btn btn-secondary btn-xs"
                                                                >
                                                                    <FaHeart
                                                                        size={
                                                                            12
                                                                        }
                                                                    />
                                                                    <span>
                                                                        Pindahkan
                                                                        ke
                                                                        wishlist
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    href={route(
                                                                        "cart.destroy"
                                                                    )}
                                                                    method="DELETE"
                                                                    data={{
                                                                        itemable_type:
                                                                            item.itemable_type,
                                                                        itemable_id:
                                                                            item.itemable_id,
                                                                        cart_id:
                                                                            item.cart_id,
                                                                    }}
                                                                    preserveScroll={
                                                                        true
                                                                    }
                                                                    preserveState={
                                                                        true
                                                                    }
                                                                    onSuccess={() => {
                                                                        toast.success(
                                                                            "Berhasil di hapus dari keranjang"
                                                                        );
                                                                    }}
                                                                    className="btn btn-error btn-xs"
                                                                >
                                                                    <FaTrash
                                                                        size={
                                                                            12
                                                                        }
                                                                    />
                                                                    <span>
                                                                        Hapus
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-1/8 self-center">
                                                        {course.discount_percentage ? (
                                                            <div className="block md:flex md:gap-2 justify-end items-center">
                                                                <div className="text-primary font-bold">
                                                                    {rupiah(
                                                                        course.discounted_price
                                                                    )}
                                                                </div>

                                                                <div className="text-xs line-through">
                                                                    {rupiah(
                                                                        course.price
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <span className="text-primary font-bold">
                                                                    {rupiah(
                                                                        course.price
                                                                    )}
                                                                </span>
                                                            </div>
                                                        )}
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
                                                <label className="form-control w-full ">
                                                    <div className="label">
                                                        <span className="label-text">
                                                            Punya Kode Referral
                                                            ?
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between gap-2">
                                                        <input
                                                            type="text"
                                                            placeholder="Kode Referral"
                                                            className="input input-bordered w-full "
                                                        />
                                                        <button className="btn btn-primary">
                                                            <FaCheck />
                                                        </button>
                                                    </div>
                                                    <div className="label">
                                                        <span className="label-text-alt">
                                                            Bottom Left label
                                                        </span>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="mb-6">
                                                <h3 className="font-bold">
                                                    Total:
                                                </h3>
                                                <h1 className="text-3xl font-bold">
                                                    {rupiah(
                                                        cart.total_discounted_price
                                                    )}
                                                </h1>
                                                <h3 className="line-through">
                                                    {rupiah(cart.total_price)}
                                                </h3>
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
