import { useForm } from "@inertiajs/react";
import classNames from "classnames";
import { Save } from "lucide-react";
import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";

export default function EditPasswordModal({
    isOpen,
    setIsOpen,
    user,
    setUser,
}) {
    console.log(user);
    const { data, setData, put, errors, reset } = useForm({
        password: "",
        password_confirmation: "",
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        put("/backend/user/" + user.id + "/update-password", {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setIsOpen(false);
                reset();
                setUser(null);
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
                    <h2 className="card-title mb-6">Edit Password User</h2>
                    <div className="mb-6">
                        {user && (
                            <div className="mb-6">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.roles ? user.roles[0].name : '-'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
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
                                <span className="label-text">
                                    Password Confimation
                                </span>
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
                    </div>
                    <div className="card-actions justify-end">
                        <button type="submit" className="btn btn-secondary">
                            <Save size={16} />
                            <span>Update Password</span>
                        </button>
                        <a
                            className="btn btn-neutral"
                            onClick={(e) => {
                                e.preventDefault;
                                setUser(null);
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
