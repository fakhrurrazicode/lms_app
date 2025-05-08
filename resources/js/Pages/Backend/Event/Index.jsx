import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, router } from "@inertiajs/react";

import { Edit, KeyRound, ListCollapse, Plus, Trash } from "lucide-react";
import { useRef, useState } from "react";
import { FaTicket } from "react-icons/fa6";

export default function Index({ request, events }) {
    const orderByOnClickHandler = (e) =>
        router.reload({
            preserveScroll: true,
            preserveState: true,
            data: {
                ...request,
                orderby: e.target.getAttribute("data-columnname"),
                ordermethod: (() => {
                    if (request.ordermethod) {
                        if (request.ordermethod == "asc") return "desc";

                        if (request.ordermethod == "desc") return "asc";
                    } else {
                        return "desc";
                    }
                })(),
            },
        });
    return (
        <BackendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Events
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="w-full px-6 lg:px-8 mx-auto">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-6">All Events</h2>

                            <div className="overflow-x-auto">
                                <div className="mb-6 flex justify-between items-center">
                                    <div>
                                        <Link
                                            href={route("backend.event.create")}
                                            className="btn btn-primary"
                                        >
                                            <Plus size={16} />
                                            <span>Create new</span>
                                        </Link>
                                    </div>
                                    <div className="flex gap-2">
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text">
                                                    Entries per page
                                                </span>
                                            </div>
                                            <select
                                                name="perpage"
                                                className="select select-bordered"
                                                onChange={(e) =>
                                                    router.reload({
                                                        preserveScroll: true,
                                                        preserveState: true,
                                                        data: {
                                                            ...request,
                                                            perpage:
                                                                e.target.value,
                                                        },
                                                    })
                                                }
                                            >
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={50}>50</option>
                                                <option value={100}>100</option>
                                            </select>
                                        </label>
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text">
                                                    Search
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Search"
                                                className="input input-bordered w-full max-w-xs"
                                                onChange={(e) =>
                                                    router.reload({
                                                        preserveScroll: true,
                                                        preserveState: true,
                                                        data: {
                                                            ...request,
                                                            search: e.target
                                                                .value,
                                                            page: 1,
                                                        },
                                                    })
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="table table-xs mb-6">
                                        <thead>
                                            <tr>
                                                <th className="whitespace-nowrap"></th>
                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="name"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Image
                                                </th>
                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="name"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Title
                                                </th>

                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="start_date"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Start Date
                                                </th>
                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="end_date"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    End Date
                                                </th>

                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="created_at"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Created at
                                                </th>
                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="updated_at"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Updated at
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {events.data.length > 0 ? (
                                                events.data.map((event) => (
                                                    <tr
                                                        key={event.id}
                                                        className="hover"
                                                    >
                                                        <th className="whitespace-nowrap">
                                                            <Link
                                                                href={route(
                                                                    "backend.event.edit",
                                                                    event.id
                                                                )}
                                                                className="btn btn-accent btn-sm"
                                                            >
                                                                <Edit
                                                                    size={16}
                                                                />
                                                                <span>
                                                                    Edit
                                                                </span>
                                                            </Link>

                                                            <button
                                                                className="btn btn-error btn-sm ml-1"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();

                                                                    if (
                                                                        confirm(
                                                                            "Anda yakin ingin menghapus data " +
                                                                                event.title +
                                                                                " ?"
                                                                        )
                                                                    ) {
                                                                        router.delete(
                                                                            route(
                                                                                "backend.event.destroy",
                                                                                event.id
                                                                            ),
                                                                            {
                                                                                preserveState: true,
                                                                            }
                                                                        );
                                                                    }
                                                                }}
                                                            >
                                                                <Trash
                                                                    size={16}
                                                                />
                                                                <span>
                                                                    Delete
                                                                </span>
                                                            </button>

                                                            {/* <button className="btn btn-info btn-sm ml-1">
                                                                <FaTicket />
                                                                <span>
                                                                    Kelola
                                                                    Voucher
                                                                </span>
                                                            </button> */}
                                                        </th>
                                                        <td className="whitespace-nowrap">
                                                            {event.image_url !==
                                                            null ? (
                                                                <img
                                                                    src={
                                                                        event.image_url
                                                                    }
                                                                    className="w-32 px-4"
                                                                />
                                                            ) : (
                                                                "No Image"
                                                            )}
                                                        </td>
                                                        <td>{event.title}</td>

                                                        <td>
                                                            {event.start_date}
                                                        </td>
                                                        <td>
                                                            {event.end_date}
                                                        </td>

                                                        <td>
                                                            {event.created_at}
                                                        </td>
                                                        <td>
                                                            {event.updated_at}
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td
                                                        colSpan={9}
                                                        className="text-center text-xs italic"
                                                    >
                                                        <p className="py-4">
                                                            No Data.
                                                        </p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="flex justify-between">
                                    <div></div>
                                    <div>
                                        <div className="join">
                                            {events.links.map((link, index) => (
                                                <Link
                                                    preserveScroll={true}
                                                    preserveState={true}
                                                    key={index}
                                                    href={link.url}
                                                    className="join-item btn"
                                                >
                                                    {link.label
                                                        .replace("&laquo;", "")
                                                        .replace("&raquo;", "")}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BackendLayout>
    );
}
