import { formatNumber, number_format, rupiah } from "@/bootstrap";
import CartItemCard from "@/Components/CartItemCard";
import CheckoutButton from "@/Components/CheckoutButton";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";

import React from "react";
import {
    FaCheck,
    FaHeart,
    FaShoppingCart,
    FaStar,
    FaTimes,
    FaTrash,
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function Cart({ cart }) {
    const page = usePage();

    const user = page.props.auth.user;

    const useCoinHandler = () => {
        router.post(
            route("cart.toggle_use_poin"),
            {},
            {
                preserveScroll: true,
                preserveState: true,
                async: true,
            }
        );
    };

    const { data, setData, post, processing, errors, clearErrors } = useForm({
        code: cart.voucher ? cart.voucher.code : "",
    });

    const onSubmitVoucher = (e) => {
        e.preventDefault();
        clearErrors();
        post(route("cart.set_voucher"), {
            preserveScroll: true,
            // preserveState: true,
            async: true,
        });
    };

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

                                                            <div className="text-xs mb-4 flex items-center gap-2">
                                                                Reviews:
                                                                <div className="flex gap-1 items-center">
                                                                    {Array.from(
                                                                        {
                                                                            length: Math.round(
                                                                                course.average_stars
                                                                            ),
                                                                        },
                                                                        (
                                                                            _,
                                                                            i
                                                                        ) => i
                                                                    ).map(
                                                                        (i) => {
                                                                            return (
                                                                                <FaStar
                                                                                    className={
                                                                                        i <=
                                                                                        course.average_stars
                                                                                            ? "text-yellow-500"
                                                                                            : ""
                                                                                    }
                                                                                />
                                                                            );
                                                                        }
                                                                    )}
                                                                    <span>
                                                                        (
                                                                        {
                                                                            course.average_stars
                                                                        }
                                                                        )
                                                                    </span>
                                                                </div>
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

                                                    <div className="w-1/4">
                                                        {course.discount_percentage ? (
                                                            <div className="block text-end justify-end items-center">
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
                                                            <div className="text-end">
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
                                <div className="card bg-base-100 mb-4">
                                    <div className="card-body">
                                        <form onSubmit={onSubmitVoucher}>
                                            <label className="form-control w-full">
                                                <div className="label">
                                                    <span className="label-text">
                                                        Gunakan Kode Voucher
                                                    </span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        disabled={cart.voucher}
                                                        placeholder="Kode Voucher"
                                                        className="input input-bordered w-full flex-1"
                                                        name="code"
                                                        value={data.code}
                                                        onChange={(e) => {
                                                            setData(
                                                                e.target.name,
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                    {cart.voucher ? (
                                                        <Link
                                                            href={route(
                                                                "cart.remove_voucher"
                                                            )}
                                                            method="DELETE"
                                                            preserveScroll={
                                                                true
                                                            }
                                                            className="btn btn-error"
                                                        >
                                                            <FaTimes
                                                                size={16}
                                                            />
                                                        </Link>
                                                    ) : (
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary"
                                                        >
                                                            <FaCheck
                                                                size={16}
                                                            />
                                                        </button>
                                                    )}
                                                </div>

                                                {cart.voucher ? (
                                                    <div className="label">
                                                        <span className="label-text-alt text-success">
                                                            Anda mendapatkan
                                                            voucher senilai{" "}
                                                            {cart.voucher
                                                                .type ===
                                                            "percentage"
                                                                ? cart.voucher
                                                                      .value +
                                                                  "%"
                                                                : ""}
                                                            {cart.voucher
                                                                .type ===
                                                            "nominal"
                                                                ? rupiah(
                                                                      cart
                                                                          .voucher
                                                                          .value
                                                                  )
                                                                : ""}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <></>
                                                )}

                                                {errors.code && (
                                                    <div className="label">
                                                        <span className="label-text-alt text-error">
                                                            {errors.code}
                                                        </span>
                                                    </div>
                                                )}
                                            </label>
                                        </form>
                                    </div>
                                </div>

                                {user.coin_balance > 0 ? (
                                    <div className="card bg-base-100 mb-4">
                                        <div className="card-body">
                                            <div className="form-control w-full">
                                                <label className="label cursor-pointer">
                                                    <span className="label-text">
                                                        <span className="text-warning font-bold">
                                                            Anda memiliki{" "}
                                                            {formatNumber(
                                                                user.coin_balance
                                                            )}{" "}
                                                            Coin
                                                        </span>
                                                        <br />
                                                        Gunakan Coin Sebagai
                                                        Potongan
                                                    </span>
                                                    <input
                                                        type="checkbox"
                                                        className="toggle toggle-warning"
                                                        checked={cart.use_poin}
                                                        onClick={useCoinHandler}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}

                                <div className="card bg-base-100">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="mb-6">
                                                {/* <h3 className="font-bold">
                                                    Total:
                                                </h3> */}
                                                <div className="flex justify-between mb-2">
                                                    <div className="text-sm">
                                                        Subtotal Produk
                                                    </div>
                                                    <div className="text-right">
                                                        {rupiah(
                                                            cart.sub_total_price
                                                        )}
                                                    </div>
                                                </div>

                                                {cart.voucher ? (
                                                    <div className="flex justify-between mb-2">
                                                        <div className="text-sm">
                                                            Potongan Voucher
                                                        </div>
                                                        <div className="text-right">
                                                            {rupiah(
                                                                -cart.voucher_discount
                                                            )}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <></>
                                                )}

                                                {cart.use_poin ? (
                                                    <div className="flex justify-between mb-2">
                                                        <div className="text-sm">
                                                            Potongan Coin
                                                        </div>
                                                        <div className="text-right">
                                                            {rupiah(
                                                                -cart.coin_discount
                                                            )}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <></>
                                                )}

                                                <div className="flex justify-between mb-2">
                                                    <div className="text-sm">
                                                        Biaya Layanan
                                                    </div>
                                                    <div className="text-right">
                                                        {rupiah(
                                                            cart.biaya_layanan
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="flex justify-between mb-2">
                                                    <div>
                                                        <h3 className="font-bold">
                                                            Total:
                                                        </h3>
                                                    </div>
                                                    <div className="text-right">
                                                        <h1 className="text-xl font-bold">
                                                            {rupiah(
                                                                cart.total_price
                                                            )}
                                                        </h1>
                                                    </div>
                                                </div>
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
