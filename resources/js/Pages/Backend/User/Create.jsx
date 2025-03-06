import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import React from "react";
import slugify from "slugify";

export default function Create({ roles }) {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        slug: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("backend.user.store"));
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
                                    Create new User
                                </h2>

                                <div className="mb-6">
                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Name
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="input input-bordered w-full"
                                            name="name"
                                            onChange={(e) => {
                                                setData(
                                                    e.target.name,
                                                    e.target.value
                                                );
                                            }}
                                            value={data.name}
                                        />
                                        {errors.name && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.name}
                                                </span>
                                            </div>
                                        )}
                                    </label>

                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Email
                                            </span>
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="input input-bordered w-full"
                                            name="email"
                                            onChange={(e) => {
                                                setData(
                                                    e.target.name,
                                                    e.target.value
                                                );
                                            }}
                                            value={data.email}
                                        />
                                        {errors.email && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.email}
                                                </span>
                                            </div>
                                        )}
                                    </label>

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
                                                Password
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

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">
                                                Role
                                            </span>
                                        </div>
                                        <select
                                            className="select select-bordered"
                                            name="role"
                                            onChange={(e) => {
                                                setData(
                                                    e.target.name,
                                                    e.target.value
                                                );
                                            }}
                                            value={data.role}
                                        >
                                            <option>:: Select Role ::</option>
                                            {roles.map((role) => (
                                                <option
                                                    key={role.id}
                                                    value={role.name}
                                                >
                                                    {role.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.role && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.role}
                                                </span>
                                            </div>
                                        )}
                                    </label>
                                </div>

                                <div className="flex justify-end gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        <Save size={16} />
                                        <span>Save</span>
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
