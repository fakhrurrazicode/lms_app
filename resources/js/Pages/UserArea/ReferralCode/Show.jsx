import { rupiah } from "@/bootstrap";
import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router } from "@inertiajs/react";
import classNames from "classnames";
import { Plus } from "lucide-react";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

export default function Show({ order }) {
    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Order History Detail
                </h2>
            }
        >
            <Head title="Order History" />

            <div className="w-full">
                <div className="mb-6">
                    <Link
                        href={route("user_area.order.index")}
                        className="btn btn-neutral"
                    >
                        <FiArrowLeft /> Back
                    </Link>
                </div>
                <div className="card bg-base-100 shadow-xl mb-6">
                    <div className="card-body">
                        <dl className="grid grid-cols-4 md:grid-cols-8 gap-2 text-xs">
                            <dt className="col-span-1 font-bold">Order ID</dt>
                            <dd className="col-span-3">{order.order_id}</dd>

                            <dt className="col-span-1 font-bold">
                                Gross Amount
                            </dt>
                            <dd className="col-span-3">
                                {rupiah(order.gross_amount)}
                            </dd>

                            <dt className="col-span-1 font-bold">User</dt>
                            <dd className="col-span-3">{order.user_id}</dd>

                            <dt className="col-span-1 font-bold">
                                Transaction ID
                            </dt>
                            <dd className="col-span-3">
                                {order.transaction_id}
                            </dd>

                            <dt className="col-span-1 font-bold">
                                Transaction Status
                            </dt>
                            <dd className="col-span-3">
                                {order.transaction_status}
                            </dd>

                            <dt className="col-span-1 font-bold">Created at</dt>
                            <dd className="col-span-3">{order.created_at}</dd>

                            <dt className="col-span-1 font-bold">Updated at</dt>
                            <dd className="col-span-3">{order.updated_at}</dd>
                        </dl>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mb-6">Order Items</h2>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>Discount</th>
                                        <th>Price (After Discount)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.order_items.map((item) => {
                                        let itemable = item.itemable;
                                        return (
                                            <tr>
                                                <td></td>
                                                <td>{itemable.title} </td>
                                                <td>
                                                    {rupiah(item.real_price)}
                                                </td>
                                                <td>
                                                    {item.discount_percentage >
                                                    0
                                                        ? item.discount_percentage +
                                                          "%"
                                                        : ""}
                                                </td>
                                                <td>{rupiah(item.price)}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </UserAreaLayout>
    );
}
