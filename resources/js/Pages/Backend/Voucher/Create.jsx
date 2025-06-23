import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import React, { useRef } from "react";
import slugify from "slugify";

export default function Create({ events }) {
    const { data, setData, post, errors, reset, processing, progress } =
        useForm({
            event_id: "",
            code: "",
            type: "nominal", // nominal or percentage
            value: 0,
            max_discount: 0,
            start_date: "",
            end_date: "",
            quota: 0,
        });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("backend.voucher.store"), {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            default:
                setData(name, value);
                break;
        }
    };

    return (
        <BackendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Voucher
                </h2>
            }
        >
            <Head title="Voucher" />

            <div className="py-12">
                <div className="w-full lg:w-3/4 xl:w-1/2 px-6 lg:px-8 mx-auto">
                    <form onSubmit={submitHandler}>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title mb-6">
                                    Create new Voucher
                                </h2>

                                <div className="mb-6">
                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Event
                                            </span>
                                        </div>

                                        <select
                                            className="select select-bordered"
                                            name="event_id"
                                            onChange={inputChangeHandler}
                                            value={data.event_id}
                                        >
                                            <option>Pilih Event</option>
                                            {events.map((event) => (
                                                <option value={event.id}>
                                                    {event.title} (
                                                    {event.start_date} -{" "}
                                                    {event.end_date})
                                                </option>
                                            ))}
                                        </select>
                                        {errors.event_id && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.event_id}
                                                </span>
                                            </div>
                                        )}
                                    </label>

                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Voucher Code
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Voucher Code"
                                            className="input input-bordered w-full"
                                            name="code"
                                            onChange={inputChangeHandler}
                                            value={data.code}
                                        />
                                        {errors.code && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.code}
                                                </span>
                                            </div>
                                        )}
                                    </label>

                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Type Voucher
                                            </span>
                                        </div>
                                        <div className="card bg-base-200">
                                            <div className="card-body !py-4">
                                                <div className="flex gap-4">
                                                    <div className="form-control">
                                                        <label className="label cursor-pointer gap-4">
                                                            <span className="label-text">
                                                                Nominal
                                                            </span>
                                                            <input
                                                                type="radio"
                                                                name="type"
                                                                className="radio"
                                                                value="nominal"
                                                                onChange={
                                                                    inputChangeHandler
                                                                }
                                                                checked={
                                                                    data.type ==
                                                                    "nominal"
                                                                }
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label cursor-pointer gap-4">
                                                            <span className="label-text">
                                                                Percentage
                                                            </span>
                                                            <input
                                                                type="radio"
                                                                name="type"
                                                                className="radio"
                                                                onChange={
                                                                    inputChangeHandler
                                                                }
                                                                value="percentage"
                                                                checked={
                                                                    data.type ==
                                                                    "percentage"
                                                                }
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {errors.type && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.type}
                                                </span>
                                            </div>
                                        )}
                                    </label>

                                    <div className="block lg:flex gap-2">
                                        <label className="form-control w-full mb-6">
                                            <div className="label">
                                                <span className="label-text">
                                                    Value
                                                </span>
                                            </div>
                                            <input
                                                type="number"
                                                // placeholder="Value"
                                                className="input input-bordered w-full"
                                                name="value"
                                                onChange={inputChangeHandler}
                                                value={data.value}
                                            />
                                            {errors.value && (
                                                <div className="label">
                                                    <span className="label-text-alt text-error">
                                                        {errors.value}
                                                    </span>
                                                </div>
                                            )}
                                        </label>

                                        <label className="form-control w-full mb-6">
                                            <div className="label">
                                                <span className="label-text">
                                                    Max Discount
                                                </span>
                                            </div>
                                            <input
                                                disabled={
                                                    data.type == "nominal"
                                                }
                                                type="number"
                                                // placeholder="Max Discount"
                                                className="input input-bordered w-full"
                                                name="max_discount"
                                                onChange={inputChangeHandler}
                                                value={data.max_discount}
                                            />
                                            {errors.max_discount && (
                                                <div className="label">
                                                    <span className="label-text-alt text-error">
                                                        {errors.max_discount}
                                                    </span>
                                                </div>
                                            )}
                                        </label>
                                    </div>

                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Mulai Dari Tanggal
                                            </span>
                                        </div>
                                        <input
                                            type="date"
                                            placeholder="Mulai Dari Tanggal"
                                            className="input input-bordered w-full"
                                            name="start_date"
                                            onChange={inputChangeHandler}
                                            value={data.start_date}
                                        />
                                        {errors.start_date && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.start_date}
                                                </span>
                                            </div>
                                        )}
                                    </label>

                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Berakhir Pada Tanggal
                                            </span>
                                        </div>
                                        <input
                                            type="date"
                                            placeholder="Berakhir Pada Tanggal"
                                            className="input input-bordered w-full"
                                            name="end_date"
                                            onChange={inputChangeHandler}
                                            value={data.end_date}
                                        />
                                        {errors.end_date && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.end_date}
                                                </span>
                                            </div>
                                        )}
                                    </label>

                                    <div className="grid grid-cols-1 gap-0 lg:gap-2 xl:gap-2 lg:grid-cols-2 xl:grid-cols-2">
                                        <label className="form-control w-full mb-6 col-span-1">
                                            <div className="label">
                                                <span className="label-text">
                                                    Batas Penggunaan
                                                </span>
                                            </div>
                                            <input
                                                type="number"
                                                // placeholder="Batas Penggunaan"
                                                className="input input-bordered w-full"
                                                name="quota"
                                                onChange={inputChangeHandler}
                                                value={data.quota}
                                            />
                                            {errors.quota && (
                                                <div className="label">
                                                    <span className="label-text-alt text-error">
                                                        {errors.quota}
                                                    </span>
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        <Save size={16} />
                                        <span>Simpan</span>
                                    </button>
                                    <Link
                                        href={route("backend.voucher.index")}
                                        className="btn btn-neutral"
                                    >
                                        Batalkan
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </BackendLayout>
    );
}
