import { number_format, rupiah } from "@/bootstrap";
import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import classNames from "classnames";
import { Plus } from "lucide-react";
import React, { useEffect } from "react";
import { FaShare } from "react-icons/fa";

export default function Index() {
    const { withdrawals, available_balance, errors } = usePage().props;
    const { data, setData, post, processing, reset } = useForm({ amount: "" });

    const submit = (e) => {
        e.preventDefault();
        post(route("user_area.withdrawal.store"), {
            onSuccess: () => reset(),
        });
    };
    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Withdrawal Anda
                </h2>
            }
        >
            <Head title="Withdrawal" />

            <div className="w-full">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mb-6">Withdrawal Anda</h2>

                        <div className="bg-base-100 shadow p-4">
                            <p className="mb-2 font-semibold">
                                Saldo Tersedia:{" "}
                                <span className="text-green-600">
                                    Rp {available_balance.toLocaleString()}
                                </span>
                            </p>

                            <form onSubmit={submit} className="space-y-3">
                                <input
                                    type="number"
                                    className="input input-bordered w-full"
                                    placeholder="Masukkan jumlah (min. Rp10.000)"
                                    value={data.amount}
                                    onChange={(e) =>
                                        setData("amount", e.target.value)
                                    }
                                />

                                {errors.amount && (
                                    <p className="text-red-600 text-sm">
                                        {errors.amount}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="btn btn-primary"
                                >
                                    Ajukan Penarikan
                                </button>
                            </form>
                        </div>

                        <div className="bg-base-100 p-4 ">
                            <h2 className="font-bold mb-2">
                                Riwayat Penarikan
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Tanggal</th>
                                            <th>Jumlah</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {withdrawals.length > 0 ? (
                                            withdrawals.map((item) => (
                                                <tr
                                                    className="hover"
                                                    key={item.id}
                                                >
                                                    <td className="p-2 border">
                                                        {new Date(
                                                            item.created_at
                                                        ).toLocaleDateString()}
                                                    </td>
                                                    <td className="p-2 border">
                                                        Rp{" "}
                                                        {parseInt(
                                                            item.amount
                                                        ).toLocaleString()}
                                                    </td>
                                                    <td className="p-2 border capitalize">
                                                        {item.status}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="3"
                                                    className="text-center py-4 italic"
                                                >
                                                    Belum ada data riwayat
                                                    penarikan
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserAreaLayout>
    );
}
