import { number_format } from "@/bootstrap";
import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, router } from "@inertiajs/react";

import { Edit, KeyRound, ListCollapse, Plus, Trash } from "lucide-react";
import { useRef, useState } from "react";
import { FaTicket } from "react-icons/fa6";

export default function Index({ request, vouchers }) {
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
                    Vouchers
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="w-full px-6 lg:px-8 mx-auto">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-6">All Vouchers</h2>

                            <div className="overflow-x-auto">
                                <div className="mb-6 flex justify-between items-center">
                                    <div className="flex justify-start gap-2">
                                        <Link
                                            href={route(
                                                "backend.voucher.create"
                                            )}
                                            className="btn btn-primary"
                                        >
                                            <Plus size={16} />
                                            <span>Create new</span>
                                        </Link>

                                        <Link
                                            href={route(
                                                "backend.voucher.create_batch"
                                            )}
                                            className="btn btn-primary"
                                        >
                                            <Plus size={16} />
                                            <span>Create Batch</span>
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
                                                    data-columnname="events.title"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Event
                                                </th>

                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="users.name"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Owner
                                                </th>
                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="code"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Code
                                                </th>
                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="customer_coin_reward"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Customer Coin Reward
                                                </th>

                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="owner_coin_reward"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Owner Coin Reward
                                                </th>

                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="usage_limit"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Batas Penggunaan
                                                </th>

                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="usage_limit"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Telah Digunakan
                                                </th>
                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="expired_at"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Expired at
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
                                            {vouchers.data.length > 0 ? (
                                                vouchers.data.map((voucher) => (
                                                    <tr
                                                        key={voucher.id}
                                                        className="hover"
                                                    >
                                                        <th className="whitespace-nowrap">
                                                            <Link
                                                                href={route(
                                                                    "backend.voucher.edit",
                                                                    voucher.id
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
                                                                                voucher.title +
                                                                                " ?"
                                                                        )
                                                                    ) {
                                                                        router.delete(
                                                                            route(
                                                                                "backend.voucher.destroy",
                                                                                voucher.id
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
                                                        </th>

                                                        <td>
                                                            {
                                                                voucher.event_title
                                                            }
                                                        </td>
                                                        <td>
                                                            {voucher.owner_name}
                                                        </td>
                                                        <td>{voucher.code}</td>

                                                        <td>
                                                            {number_format(
                                                                voucher.customer_coin_reward
                                                            )}
                                                        </td>
                                                        <td>
                                                            {number_format(
                                                                voucher.owner_coin_reward
                                                            )}
                                                        </td>

                                                        <td>
                                                            {number_format(
                                                                voucher.usage_limit
                                                            )}
                                                        </td>
                                                        <td>
                                                            {number_format(
                                                                voucher.usage_count
                                                            )}
                                                        </td>

                                                        <td>
                                                            {voucher.expires_at}
                                                        </td>
                                                        <td>
                                                            {voucher.created_at}
                                                        </td>
                                                        <td>
                                                            {voucher.updated_at}
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
                                            {vouchers.links.map(
                                                (link, index) => (
                                                    <Link
                                                        preserveScroll={true}
                                                        preserveState={true}
                                                        key={index}
                                                        href={link.url}
                                                        className="join-item btn"
                                                    >
                                                        {link.label
                                                            .replace(
                                                                "&laquo;",
                                                                ""
                                                            )
                                                            .replace(
                                                                "&raquo;",
                                                                ""
                                                            )}
                                                    </Link>
                                                )
                                            )}
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
