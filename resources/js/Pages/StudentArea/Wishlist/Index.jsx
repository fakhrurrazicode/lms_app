import { rupiah } from "@/bootstrap";
import CourseCard from "@/Components/CourseCard";
import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link } from "@inertiajs/react";

import React from "react";

export default function Index({ wishlists }) {
    return (
        <UserAreaLayout>
            <Head title="Wishlist" />
            <div className="card bg-base-100">
                <div className="card-body">
                    <h1 className="text-xl font-bold mb-4">Wishlist</h1>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}

                            <tbody>
                                {wishlists.map((wishlist) => {
                                    if (
                                        wishlist.wishlistable_type ==
                                        "App\\Models\\Course"
                                    ) {
                                        const course = wishlist.wishlistable;
                                        return (
                                            <tr
                                                className="hover"
                                                key={wishlist.id}
                                            >
                                                <td>
                                                    <Link
                                                        href={route(
                                                            "student_area.wishlist.add-to-cart",
                                                            {
                                                                wishlist:
                                                                    wishlist,
                                                            }
                                                        )}
                                                        method="POST"
                                                        className="block text-start mb-1 text-primary"
                                                    >
                                                        Tambahkan ke keranjang
                                                    </Link>

                                                    <a
                                                        href="#"
                                                        className="block mb-1 text-error"
                                                    >
                                                        Hapus
                                                    </a>
                                                </td>
                                                <td>
                                                    <div className="grid grid-cols-4 gap-4">
                                                        <div className="col-span-1">
                                                            <img
                                                                src={
                                                                    course.image_url
                                                                }
                                                                className="w-full"
                                                            />
                                                        </div>
                                                        <div className="col-span-3">
                                                            <h1 className="text-md text-primary font-semibold mb-2">
                                                                <Link
                                                                    href={route(
                                                                        "course",
                                                                        {
                                                                            slug: course.slug,
                                                                        }
                                                                    )}
                                                                >
                                                                    {
                                                                        course.title
                                                                    }
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
                                                                <div className="text-xs mb-2">
                                                                    Price:{" "}
                                                                    <span className="text-primary">
                                                                        {rupiah(
                                                                            course.price
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    }
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px]"></div>
                </div>
            </div>
        </UserAreaLayout>
    );
}
