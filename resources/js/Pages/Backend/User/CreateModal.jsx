import { useForm } from "@inertiajs/react";
import classNames from "classnames";
import { Save } from "lucide-react";
import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";

export default function CreateModal({ isOpen, setIsOpen, roles }) {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "",
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post("/backend/user", {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setIsOpen(false);
                reset();
            },
        });
    };

    return (
        <ReactModal
            closeTimeoutMS={200}
            isOpen={isOpen}
            contentLabel="Minimal Modal Example"
            overlayClassName="fixed inset-0 bg-base-200/70"
            className="absolute mt-16 left-1/2 -translate-x-1/2  overflow-auto outline-none p-5 w-4/12 h-auto"
            ariaHideApp={false}
        >
            <div className="card bg-base-100 shadow-xl">
                <form onSubmit={onSubmitHandler} className="card-body">
                    <h2 className="card-title mb-6">Create new Role</h2>
                    <div className="mb-6">
                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full"
                                name="name"
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
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
                                <span className="label-text">Email</span>
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full"
                                name="email"
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
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
                                <span className="label-text">Password</span>
                            </div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                name="password"
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
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
                                <span className="label-text">Password</span>
                            </div>
                            <input
                                type="password"
                                placeholder="Password Confirmation"
                                className="input input-bordered w-full"
                                name="password_confirmation"
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
                                }}
                                value={data.password_confirmation}
                            />
                            {errors.password_confirmation && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.password_confirmation}
                                    </span>
                                </div>
                            )}
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Role</span>
                            </div>
                            <select
                                className="select select-bordered"
                                name="role"
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
                                }}
                                value={data.role}
                            >
                                <option>:: Select Role ::</option>
                                {roles.map((role) => (
                                    <option key={role.id} value={role.name}>
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
                    <div className="card-actions justify-end">
                        <button type="submit" className="btn btn-primary">
                            <Save size={16} />
                            <span>Save</span>
                        </button>
                        <a
                            className="btn btn-neutral"
                            onClick={(e) => {
                                e.preventDefault;
                                reset();
                                setIsOpen(false);
                            }}
                        >
                            Cancel
                        </a>
                    </div>
                </form>
            </div>
        </ReactModal>
    );
}
