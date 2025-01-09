import { router, useForm } from "@inertiajs/react";
import { Trash } from "lucide-react";
import React, { useEffect } from "react";
import ReactModal from "react-modal";

export default function DeleteModal({
    isOpen,
    setIsOpen,
    permission,
    setPermission,
}) {
    const { data, setData, put, errors, reset } = useForm({
        name: "",
    });

    console.log("permission", permission);

    useEffect(() => {
        setData({
            name: permission ? permission.name : "",
        });
    }, [permission]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        put("/backend/permission/" + permission.id, {
            onFinish: () => {
                setIsOpen(false);
                reset();
                setPermission(null);
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
                    <h2 className="card-title mb-6">Edit Permission</h2>
                    <div className="mb-6">
                        <p>are you sure you want to delete this data?</p>

                        {permission && (
                            <table className="table mb-6">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Guard Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{permission.name}</td>
                                        <td>{permission.guard_name}</td>
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
                                router.delete(
                                    "/backend/permission/" + permission.id,
                                    {
                                        preserveScroll: true,
                                        preserveState: true,
                                        onFinish: () => {
                                            setPermission(null);
                                            setIsOpen(false);
                                        },
                                    }
                                );
                            }}
                        >
                            <Trash size={16} />
                            <span>Delete</span>
                        </button>
                        <a
                            className="btn btn-neutral"
                            onClick={(e) => {
                                e.preventDefault;
                                reset();
                                setPermission(null);
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
