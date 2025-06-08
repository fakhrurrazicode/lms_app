import { rupiah } from "@/bootstrap";
import CourseCard from "@/Components/CourseCard";
import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link } from "@inertiajs/react";

import React from "react";
import { FaPlus, FaShoppingCart, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Index({ wishlists }) {
    return (
        <UserAreaLayout>
            <Head title="Wishlist" />
            <div className="card bg-base-100">
                <div className="card-body">
                    <h1 className="text-xl font-bold mb-4">Daftar Keinginan</h1>

                    {wishlists.length ? (
                        <>
                            <div className="">
                                {wishlists.map((wishlist) => {
                                    if (
                                        wishlist.wishlistable_type ==
                                        "App\\Models\\Course"
                                    ) {
                                        const course = wishlist.wishlistable;

                                        return course ? (
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
                                                                    "user_area.wishlist.add-to-cart",
                                                                    {
                                                                        wishlist:
                                                                            wishlist,
                                                                    }
                                                                )}
                                                                method="POST"
                                                                onSuccess={() => {
                                                                    toast.success(
                                                                        "Berhasil di pindahkan ke keranjang"
                                                                    );
                                                                }}
                                                                onError={() => {
                                                                    toast.error(
                                                                        "Gagal memindahkan ke keranjang"
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
                                                                <FaShoppingCart
                                                                    size={12}
                                                                />
                                                                <span>
                                                                    Tambah
                                                                    Keranjang
                                                                </span>
                                                            </Link>
                                                            <Link
                                                                href={route(
                                                                    "user_area.wishlist.destroy",
                                                                    {
                                                                        wishlist:
                                                                            wishlist.id,
                                                                    }
                                                                )}
                                                                method="DELETE"
                                                                onSuccess={() => {
                                                                    toast.success(
                                                                        "Berhasil di hapus dari wishlist"
                                                                    );
                                                                }}
                                                                onError={() => {
                                                                    toast.error(
                                                                        "Gagal menghapus dari wishlist"
                                                                    );
                                                                }}
                                                                preserveScroll={
                                                                    true
                                                                }
                                                                preserveState={
                                                                    true
                                                                }
                                                                className="btn btn-error btn-xs"
                                                            >
                                                                <FaTrash
                                                                    size={12}
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
                                        ) : (
                                            <></>
                                        );
                                    }
                                })}
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center">
                            <img
                                className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-12"
                                src="/images/undraw_no-data_ig65.svg"
                            />
                            <div className="mb-12 text-center">
                                Anda belum memulai daftar keinginan apapun.
                                mulai mencari kursus yang cocok dengan anda{" "}
                                <Link
                                    className="text-primary font-bold"
                                    href={route("courses")}
                                >
                                    disini
                                </Link>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px]"></div>
                </div>
            </div>
        </UserAreaLayout>
    );
}
