import { rupiah } from "@/bootstrap";
import CourseCard from "@/Components/CourseCard";
import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link } from "@inertiajs/react";

import React from "react";
import { FaPlus, FaShoppingCart, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Index({ tickets }) {
    return (
        <UserAreaLayout>
            <Head title="Wishlist" />
            <div className="card bg-base-100">
                <div className="card-body">
                    <h1 className="text-xl font-bold mb-4">Ticket Support</h1>

                    {tickets.length ? (
                        <>
                            <div className="">
                                {tickets.map((ticket) => {
                                    return (
                                        <div
                                            key={ticket.id}
                                            className="card bg-base-100 shadow-md"
                                        >
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                    {ticket.subject}
                                                </h2>
                                                <p className="text-sm text-gray-600">
                                                    {ticket.description.substring(
                                                        0,
                                                        80
                                                    )}
                                                    ...
                                                </p>
                                                <div className="flex justify-between mt-2">
                                                    <span
                                                        className={`badge badge-${getPriorityColor(
                                                            ticket.priority
                                                        )}`}
                                                    >
                                                        {ticket.priority}
                                                    </span>
                                                    <span
                                                        className={`badge badge-outline`}
                                                    >
                                                        {ticket.status}
                                                    </span>
                                                </div>
                                                <div className="mt-2">
                                                    <Link
                                                        href={`/tickets/${ticket.id}`}
                                                        className="link link-primary text-sm"
                                                    >
                                                        Lihat Detail
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
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
                                Anda belum memulai ticket support apapun mulai
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </UserAreaLayout>
    );
}
