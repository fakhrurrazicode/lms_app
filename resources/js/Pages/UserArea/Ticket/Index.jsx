import { rupiah } from "@/bootstrap";
import CourseCard from "@/Components/CourseCard";
import Pagination from "@/Components/Pagination";
import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link } from "@inertiajs/react";

import React from "react";
import { FaPlus, FaShoppingCart, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Index({ tickets }) {
    return (
        <UserAreaLayout>
            <Head title="Ticket" />
            <div className="card bg-base-100">
                <div className="card-body">
                    <div className="flex justify-between items-center mb-16">
                        <h1 className="text-2xl font-bold">Daftar Tiket</h1>
                        <Link
                            href={route("user_area.ticket.create")}
                            className="btn btn-primary btn-sm"
                        >
                            Buat Tiket
                        </Link>
                    </div>

                    {tickets.data.length ? (
                        <>
                            <div className="">
                                {tickets.data.map((ticket) => {
                                    return (
                                        <div
                                            key={ticket.id}
                                            className="card bg-base-200 shadow-md mb-6"
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
                                                        className={`badge font-medium ${getPriorityColor(
                                                            ticket.priority
                                                        )}`}
                                                    >
                                                        {ticket.priority}
                                                    </span>
                                                    <span
                                                        className={`badge font-medium ${getStatusColor(
                                                            ticket.status
                                                        )}`}
                                                    >
                                                        {ticket.status}
                                                    </span>
                                                </div>
                                                <div className="mt-2">
                                                    <Link
                                                        // href={`/tickets/${ticket.id}`}
                                                        href={route(
                                                            "user_area.ticket.show",
                                                            {
                                                                ticket,
                                                            }
                                                        )}
                                                        className="link link-primary text-sm"
                                                    >
                                                        Lihat Detail
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                <Pagination links={tickets.links} />
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

function getStatusColor(status) {
    return (
        {
            open: "badge-success",
            pending: "badge-warning",
            closed: "badge-neutral",
        }[status] || "badge-ghost"
    );
}

function getPriorityColor(priority) {
    return (
        {
            low: "badge-success",
            medium: "badge-warning",
            high: "badge-error",
        }[priority] || "badge-neutral"
    );
}
