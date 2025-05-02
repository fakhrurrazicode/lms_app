import { rupiah } from "@/bootstrap";
import CheckoutButton from "@/Components/CheckoutButton";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link } from "@inertiajs/react";

import React from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowRight, FiCheckSquare } from "react-icons/fi";

export default function Finish({ cart }) {
    return (
        <FrontendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Payment Finished
                </h2>
            }
        >
            <Head title="Courses" />
            <section className="container mx-auto px-4 py-16">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Payment Finished</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-3">
                        <div className="card bg-base-100 py-8">
                            <div className="card-body flex flex-col items-center">
                                <div className="py-6">
                                    <FiCheckSquare className="text-success text-7xl" />
                                </div>
                                <h3 className="text-lg font-bold">
                                    Selamat, Pembayaran anda berhasil di proses
                                </h3>
                                <p className="mb-6">
                                    Anda dapat melihat history transaksi anda di
                                    bawah ini
                                </p>

                                <div>
                                    <Link
                                        href={route("user_area.order.index")}
                                        className="btn btn-primary"
                                    >
                                        Lihat Order
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
