import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import React, { useRef } from "react";
import slugify from "slugify";

export default function Create({ events, owners }) {
    const { data, setData, post, errors, reset, processing, progress } =
        useForm({
            prefix_code: "",
            code: "",
            event_id: "",
            // owner_id: "",
            customer_coin_reward: 0,
            owner_coin_reward: 0,
            usage_limit: 0,
            used_count: "",
            expires_at: "",
        });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("backend.voucher.store_batch"), {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name, value);

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

                                    {/* <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Owner
                                            </span>
                                        </div>

                                        <select
                                            className="select select-bordered"
                                            name="owner_id"
                                            onChange={inputChangeHandler}
                                            value={data.owner_id}
                                        >
                                            <option>Pilih Owner</option>
                                            {owners.map((owner) => (
                                                <option value={owner.id}>
                                                    {owner.name} - (
                                                    {owner.email})
                                                </option>
                                            ))}
                                        </select>
                                        {errors.owner_id && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.owner_id}
                                                </span>
                                            </div>
                                        )}
                                    </label> */}

                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Voucher Prefix Code
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Voucher Prefix Code"
                                            className="input input-bordered w-full"
                                            name="prefix_code"
                                            onChange={inputChangeHandler}
                                            value={data.prefix_code}
                                        />
                                        {errors.prefix_code && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.prefix_code}
                                                </span>
                                            </div>
                                        )}
                                    </label>

                                    <div className="block lg:flex gap-2">
                                        <label className="form-control w-full mb-6">
                                            <div className="label">
                                                <span className="label-text">
                                                    Customer Coin Reward
                                                </span>
                                            </div>
                                            <input
                                                type="number"
                                                // placeholder="Customer Coin Reward"
                                                className="input input-bordered w-full"
                                                name="customer_coin_reward"
                                                onChange={inputChangeHandler}
                                                value={
                                                    data.customer_coin_reward
                                                }
                                            />
                                            {errors.customer_coin_reward && (
                                                <div className="label">
                                                    <span className="label-text-alt text-error">
                                                        {
                                                            errors.customer_coin_reward
                                                        }
                                                    </span>
                                                </div>
                                            )}
                                        </label>

                                        <label className="form-control w-full mb-6">
                                            <div className="label">
                                                <span className="label-text">
                                                    Owner Coin Reward
                                                </span>
                                            </div>
                                            <input
                                                type="number"
                                                // placeholder="Customer Coin Reward"
                                                className="input input-bordered w-full"
                                                name="owner_coin_reward"
                                                onChange={inputChangeHandler}
                                                value={data.owner_coin_reward}
                                            />
                                            {errors.owner_coin_reward && (
                                                <div className="label">
                                                    <span className="label-text-alt text-error">
                                                        {
                                                            errors.owner_coin_reward
                                                        }
                                                    </span>
                                                </div>
                                            )}
                                        </label>
                                    </div>

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
                                                name="usage_limit"
                                                onChange={inputChangeHandler}
                                                value={data.usage_limit}
                                            />
                                            {errors.usage_limit && (
                                                <div className="label">
                                                    <span className="label-text-alt text-error">
                                                        {errors.usage_limit}
                                                    </span>
                                                </div>
                                            )}
                                        </label>
                                    </div>

                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Tanggal Expired
                                            </span>
                                        </div>
                                        <input
                                            type="datetime-local"
                                            placeholder="Tanggal Expired"
                                            className="input input-bordered w-full"
                                            name="expires_at"
                                            onChange={inputChangeHandler}
                                            value={data.expires_at}
                                        />
                                        {errors.expires_at && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.expires_at}
                                                </span>
                                            </div>
                                        )}
                                    </label>
                                </div>

                                <div className="flex justify-end gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={processing}
                                    >
                                        <Save size={16} />
                                        <span>Save</span>
                                    </button>
                                    <Link
                                        disabled={processing}
                                        href={route("backend.voucher.index")}
                                        className="btn btn-neutral"
                                    >
                                        Cancel
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
