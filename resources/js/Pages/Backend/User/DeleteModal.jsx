import { router, useForm } from "@inertiajs/react";
import { Trash } from "lucide-react";
import React, { useEffect } from "react";
import ReactModal from "react-modal";

export default function DeleteModal({ isOpen, setIsOpen, user, setUser }) {
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
                <div className="card-body">
                    <h2 className="card-title mb-6">Delete User</h2>
                    <div className="mb-6">
                        <p className="mb-6">
                            Are you sure you want to delete this data?
                        </p>

                        {user && (
                            <table className="table mb-6">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                    <div className="card-actions justify-end">
                        <button
                            type="submit"
                            className="btn btn-error"
                            onClick={(e) => {
                                e.preventDefault();
                                router.delete("/backend/user/" + user.id, {
                                    preserveScroll: true,
                                    preserveState: true,
                                    onSuccess: () => {
                                        setUser(null);
                                        setIsOpen(false);
                                    },
                                });
                            }}
                        >
                            <Trash size={16} />
                            <span>Delete</span>
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
                </div>
            </div>
        </ReactModal>
    );
}
