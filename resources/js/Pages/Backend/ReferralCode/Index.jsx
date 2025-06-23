import { number_format } from "@/bootstrap";
import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, router } from "@inertiajs/react";

import { Edit, KeyRound, ListCollapse, Plus, Trash } from "lucide-react";
import { useRef, useState } from "react";
import { FaTicket } from "react-icons/fa6";

export default function Index({ request, referral_codes }) {
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
                    Referral Codes
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="w-full px-6 lg:px-8 mx-auto">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-6">
                                All Referral Codes
                            </h2>

                            <div className="overflow-x-auto">
                                <div className="mb-6 flex justify-between items-center">
                                    <div className="flex justify-start gap-2">
                                        <Link
                                            href={route(
                                                "backend.referral_code.create"
                                            )}
                                            className="btn btn-primary"
                                        >
                                            <Plus size={16} />
                                            <span>Create new</span>
                                        </Link>

                                        <Link
                                            href={route(
                                                "backend.referral_code.create_batch"
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
                                                    Customer
                                                    <br />
                                                    Coin
                                                    <br />
                                                    Reward
                                                </th>

                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="owner_coin_reward"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Owner
                                                    <br />
                                                    Coin
                                                    <br />
                                                    Reward
                                                </th>

                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="usage_limit"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Batas
                                                    <br />
                                                    Penggunaan
                                                </th>

                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="usage_limit"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Telah
                                                    <br />
                                                    Digunakan
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
                                                <th className="whitespace-nowrap"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {referral_codes.data.length > 0 ? (
                                                referral_codes.data.map(
                                                    (referral_code) => (
                                                        <tr
                                                            key={
                                                                referral_code.id
                                                            }
                                                            className="hover"
                                                        >
                                                            <td>
                                                                {
                                                                    referral_code.event_title
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    referral_code.owner_name
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    referral_code.code
                                                                }
                                                            </td>

                                                            <td>
                                                                {number_format(
                                                                    referral_code.customer_coin_reward
                                                                )}
                                                            </td>
                                                            <td>
                                                                {number_format(
                                                                    referral_code.owner_coin_reward
                                                                )}
                                                            </td>

                                                            <td>
                                                                {number_format(
                                                                    referral_code.usage_limit
                                                                )}
                                                            </td>
                                                            <td>
                                                                {number_format(
                                                                    referral_code.usage_count
                                                                )}
                                                            </td>

                                                            <td>
                                                                {
                                                                    referral_code.expires_at
                                                                }
                                                            </td>
                                                            <td className="whitespace-nowrap">
                                                                <Link
                                                                    href={route(
                                                                        "backend.referral_code.edit",
                                                                        referral_code.id
                                                                    )}
                                                                    className="btn btn-accent btn-xs"
                                                                >
                                                                    <Edit
                                                                        size={
                                                                            16
                                                                        }
                                                                    />
                                                                    <span>
                                                                        Edit
                                                                    </span>
                                                                </Link>

                                                                <button
                                                                    className="btn btn-error btn-xs ml-1"
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.preventDefault();

                                                                        if (
                                                                            confirm(
                                                                                "Anda yakin ingin menghapus data " +
                                                                                    referral_code.code +
                                                                                    " ?"
                                                                            )
                                                                        ) {
                                                                            router.delete(
                                                                                route(
                                                                                    "backend.referral_code.destroy",
                                                                                    referral_code.id
                                                                                ),
                                                                                {
                                                                                    preserveState: true,
                                                                                }
                                                                            );
                                                                        }
                                                                    }}
                                                                >
                                                                    <Trash
                                                                        size={
                                                                            16
                                                                        }
                                                                    />
                                                                    <span>
                                                                        Delete
                                                                    </span>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                )
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
                                            {referral_codes.links.map(
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
