import { rupiah } from "@/bootstrap";
import CheckoutButton from "@/Components/CheckoutButton";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link } from "@inertiajs/react";

import React from "react";
import { FaStar } from "react-icons/fa";
import {
    FiArrowRight,
    FiCheckSquare,
    FiClock,
    FiXCircle,
} from "react-icons/fi";

export default function Unfinish({ cart }) {
    return (
        <FrontendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Payment Error
                </h2>
            }
        >
            <Head title="Courses" />
            <section className="container mx-auto px-4 py-16">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Payment Error</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-3">
                        <div className="card bg-base-100 py-8">
                            <div className="card-body flex flex-col items-center">
                                <div className="py-6">
                                    <FiXCircle className="text-error text-7xl" />
                                </div>
                                <h3 className="text-lg font-bold">
                                    Pembayaran anda gagal
                                </h3>
                                <p className="mb-6">
                                    Mohon maaf pembayaran anda telah gagal,
                                    silahkan mencoba lagi
                                </p>

                                <div>
                                    <Link
                                        href={route("courses")}
                                        className="btn btn-primary"
                                    >
                                        Belanja kembali
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
