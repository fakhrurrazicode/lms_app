import { number_format, rupiah } from "@/bootstrap";
import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router } from "@inertiajs/react";
import classNames from "classnames";
import { Plus } from "lucide-react";
import React, { useEffect } from "react";
import { FaShare } from "react-icons/fa";

export default function Index({ referral_codes, request }) {
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
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Kode Referral Anda
                </h2>
            }
        >
            <Head title="Kode Referral" />

            <div className="w-full">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mb-6">Kode Referral Anda</h2>
                        <div className="overflow-x-auto">
                            <div className="mb-6 flex justify-between items-center">
                                <div></div>
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
                                                        perpage: e.target.value,
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
                                                        search: e.target.value,
                                                    },
                                                })
                                            }
                                        />
                                    </label>
                                </div>
                            </div>
                            <table className="table mb-6">
                                <thead>
                                    <tr>
                                        <th
                                            className="cursor-pointer"
                                            data-columnname="event_id"
                                            onClick={orderByOnClickHandler}
                                        >
                                            Event
                                        </th>

                                        <th
                                            className="cursor-pointer"
                                            data-columnname="code"
                                            onClick={orderByOnClickHandler}
                                        >
                                            Code
                                        </th>

                                        {/* <th
                                            className="cursor-pointer"
                                            data-columnname="type"
                                            onClick={orderByOnClickHandler}
                                        >
                                            Owner
                                        </th> */}
                                        <th
                                            className="cursor-pointer"
                                            data-columnname="value"
                                            onClick={orderByOnClickHandler}
                                        >
                                            Customer Coin Reward
                                        </th>
                                        <th
                                            className="cursor-pointer"
                                            data-columnname="max_discount"
                                            onClick={orderByOnClickHandler}
                                        >
                                            Owner Coin Reward
                                        </th>
                                        <th
                                            className="cursor-pointer"
                                            data-columnname="start_date"
                                            onClick={orderByOnClickHandler}
                                        >
                                            Usage Limit
                                        </th>
                                        <th
                                            className="cursor-pointer"
                                            data-columnname="end_date"
                                            onClick={orderByOnClickHandler}
                                        >
                                            Used Count
                                        </th>
                                        <th
                                            className="cursor-pointer"
                                            data-columnname="quota"
                                            onClick={orderByOnClickHandler}
                                        >
                                            Expires At
                                        </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {referral_codes.data.length > 0 ? (
                                        referral_codes.data.map(
                                            (referral_code) => (
                                                <tr key={referral_code.id}>
                                                    <td>
                                                        {
                                                            referral_code.event
                                                                .title
                                                        }
                                                    </td>
                                                    <td>
                                                        {referral_code.code}
                                                    </td>
                                                    {/* <td>
                                                        {referral_code.owner
                                                            ? referral_code
                                                                  .owner.name
                                                            : ""}
                                                    </td> */}
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
                                                        {
                                                            referral_code.usage_limit
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            referral_code.used_count
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            referral_code.expires_at
                                                        }
                                                    </td>
                                                    <td>
                                                        <div className="flex gap-2">
                                                            <button
                                                                className="btn btn-primary btn-xs"
                                                                onClick={async (
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();

                                                                    if (
                                                                        navigator.share
                                                                    ) {
                                                                        try {
                                                                            await navigator.share(
                                                                                {
                                                                                    title: " Referrral Code",
                                                                                    text: "Gunakan Referral Code ini dan dapat kan sejumlah koin untuk berbelanja",
                                                                                    url: referral_code.referral_url,
                                                                                }
                                                                            );
                                                                        } catch (error) {
                                                                            console.log(
                                                                                error
                                                                            );
                                                                        }
                                                                    } else {
                                                                        prompt(
                                                                            "Copy link ini dan share sebanyak-banyaknya: ",
                                                                            referral_code.referral_url
                                                                        );
                                                                    }
                                                                }}
                                                            >
                                                                <FaShare />{" "}
                                                                Share
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        )
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan={5}
                                                className="text-center text-xs italic"
                                            >
                                                No Data.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

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
                                                        .replace("&laquo;", "")
                                                        .replace("&raquo;", "")}
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
        </UserAreaLayout>
    );
}
