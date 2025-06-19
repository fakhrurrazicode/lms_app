import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import React from "react";
import slugify from "slugify";

export default function EditPassword({ user }) {
    const { data, setData, put, errors, reset } = useForm({
        password: "",
        password_confirmation: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        put(route("backend.user.update_password", user.id));
    };
    return (
        <BackendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Users
                </h2>
            }
        >
            <Head title="Users" />

            <div className="flex justify-center sm:px-6 sm:py-8 lg:px-8 lg:py-8">
                <div className="w-1/2">
                    <form onSubmit={submitHandler}>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title mb-6">
                                    Edit User "{user.name}" Password
                                </h2>

                                <div className="mb-6">
                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Password
                                            </span>
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="input input-bordered w-full"
                                            name="password"
                                            onChange={(e) => {
                                                setData(
                                                    e.target.name,
                                                    e.target.value
                                                );
                                            }}
                                            value={data.password}
                                        />
                                        {errors.password && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.password}
                                                </span>
                                            </div>
                                        )}
                                    </label>

                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Password Confirmation
                                            </span>
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Password Confirmation"
                                            className="input input-bordered w-full"
                                            name="password_confirmation"
                                            onChange={(e) => {
                                                setData(
                                                    e.target.name,
                                                    e.target.value
                                                );
                                            }}
                                            value={data.password_confirmation}
                                        />
                                        {errors.password_confirmation && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {
                                                        errors.password_confirmation
                                                    }
                                                </span>
                                            </div>
                                        )}
                                    </label>
                                </div>

                                <div className="flex justify-end gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-secondary"
                                    >
                                        <Save size={16} />
                                        <span>Update Password</span>
                                    </button>
                                    <Link
                                        href={route("backend.user.index")}
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
