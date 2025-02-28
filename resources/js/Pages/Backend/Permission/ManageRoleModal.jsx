import { useForm, usePage } from "@inertiajs/react";
import classNames from "classnames";
import { Save } from "lucide-react";
import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";

export default function ManageRoleModal({
    isOpen,
    setIsOpen,
    permission,
    setPermission,
}) {
    const {
        props: { roles },
    } = usePage();

    const { data, setData, put, errors, reset } = useForm({
        roles: [],
    });

    useEffect(() => {
        if (permission && permission.role_names) {
            setData("roles", permission.role_names);
        }
    }, [permission]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        put("/backend/permission/" + permission.id + "/set-role", {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
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
                    <h2 className="card-title mb-6">Manage Permission Roles</h2>
                    <div className="mb-6">
                        {permission && (
                            <div className="mb-6">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Permission Name</th>
                                            <th>Permission Guard Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{permission.name}</td>
                                            <td>{permission.guard_name}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {roles && (
                            <div className="mb-6">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Permission Name</th>
                                            <th>Permission Guard Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {roles.map((role) => {
                                            return (
                                                <tr key={role.id}>
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkbox checkbox-secondary checkbox-xs"
                                                            id={`role-${role.id}`}
                                                            value={role.name}
                                                            checked={data.roles.includes(
                                                                role.name
                                                            )}
                                                            onChange={(e) => {
                                                                let updatedRole =
                                                                    data.roles.includes(
                                                                        role.name
                                                                    )
                                                                        ? data.roles.filter(
                                                                              (
                                                                                  p
                                                                              ) =>
                                                                                  p !==
                                                                                  role.name
                                                                          )
                                                                        : [
                                                                              ...data.roles,
                                                                              role.name,
                                                                          ];

                                                                setData(
                                                                    "roles",
                                                                    updatedRole
                                                                );
                                                            }}
                                                        />
                                                    </td>
                                                    <td>{role.name}</td>
                                                    <td>{role.guard_name}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                    <div className="card-actions justify-end">
                        <button type="submit" className="btn btn-secondary">
                            <Save size={16} />
                            <span>Update Permission Role</span>
                        </button>
                        <a
                            className="btn btn-neutral"
                            onClick={(e) => {
                                e.preventDefault;
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
