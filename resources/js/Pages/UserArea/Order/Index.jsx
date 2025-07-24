import { rupiah } from "@/bootstrap";
import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router } from "@inertiajs/react";
import classNames from "classnames";
import { Plus } from "lucide-react";
import React, { useEffect } from "react";

export const ContinuePaymentButton = ({ order }) => {
    useEffect(() => {
        const midtransScriptUrl =
            "https://app.sandbox.midtrans.com/snap/snap.js";
        const clientKey = import.meta.env.MIDTRANS_CLIENT_KEY;

        let scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;
        scriptTag.setAttribute("data-client-key", clientKey);
        scriptTag.onload = () => {
            console.log("Midtrans Snap.js loaded successfully");
        };

        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);

    const handleContinue = () => {
        if (order.snap_token) {
            window.snap.pay(order.snap_token, {
                onSuccess: function (result) {
                    console.log("Success:", result);
                    router.get(route("payment.finish"), {
                        order_id: result.order_id,
                        transaction_status: result.transaction_status,
                    });
                },
                onPending: (result) => {
                    // handle pending
                    console.log("Pending:", result);
                    router.get(route("payment.unfinish"), {
                        order_id: result.order_id,
                        transaction_status: result.transaction_status,
                    });
                },
                onError: (error) => {
                    // handle error
                    console.error("Error:", error);
                    router.get(route("payment.error"), {
                        order_id: result.order_id,
                        transaction_status: result.transaction_status,
                    });
                },
                onClose: () => {
                    console.log("Close");
                    console.log(
                        "Customer closed the popup without finishing the payment"
                    );
                },
            });
        } else {
            alert("Payment error: " + data.error);
        }
    };

    return (
        <button onClick={handleContinue} className="btn btn-primary btn-xs">
            Lanjutkan Pembayaran
        </button>
    );
};

export default function Index({ orders, request }) {
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
                    Order History
                </h2>
            }
        >
            <Head title="Order History" />

            <div className="w-full">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mb-6">Order History</h2>
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
                                        <th></th>

                                        <th
                                            className="cursor-pointer"
                                            data-columnname="order_id"
                                            onClick={orderByOnClickHandler}
                                        >
                                            Order ID
                                        </th>

                                        <th
                                            className="cursor-pointer"
                                            data-columnname="created_at"
                                            onClick={orderByOnClickHandler}
                                        >
                                            Created at
                                        </th>
                                        <th
                                            className="cursor-pointer"
                                            data-columnname="gross_amount"
                                            onClick={orderByOnClickHandler}
                                        >
                                            Gross Amount
                                        </th>
                                        <th
                                            className="cursor-pointer"
                                            data-columnname="transaction_status"
                                            onClick={orderByOnClickHandler}
                                        >
                                            Transaction Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.data.length > 0 ? (
                                        orders.data.map((order) => (
                                            <tr
                                                key={order.id}
                                                className={classNames("hover", {
                                                    "text-error": [
                                                        "expire",
                                                    ].includes(
                                                        order.transaction_status
                                                    ),
                                                    "text-success": [
                                                        "settlement",
                                                    ].includes(
                                                        order.transaction_status
                                                    ),
                                                    "text-warning": [
                                                        "pending",
                                                    ].includes(
                                                        order.transaction_status
                                                    ),
                                                })}
                                            >
                                                <td>
                                                    <div className="flex gap-2">
                                                        <Link
                                                            href={route(
                                                                "user_area.order.show",
                                                                {
                                                                    order: order.id,
                                                                }
                                                            )}
                                                            className="btn btn-neutral btn-xs"
                                                        >
                                                            Order Details
                                                        </Link>

                                                        {order.transaction_status ===
                                                            "pending" &&
                                                        order.snap_token ? (
                                                            <ContinuePaymentButton
                                                                order={order}
                                                            />
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                </td>
                                                <td>{order.order_id}</td>
                                                <td>{order.created_at}</td>
                                                <td>
                                                    {rupiah(order.gross_amount)}
                                                </td>
                                                <td>
                                                    {order.transaction_status}
                                                </td>
                                            </tr>
                                        ))
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
                                        {orders.links.map((link, index) =>
                                            link.url == null ? (
                                                <></>
                                            ) : (
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
