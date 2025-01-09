import { useForm } from "@inertiajs/react";
import classNames from "classnames";
import { Save } from "lucide-react";
import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";
import Select from "react-select";

export default function ManagePermissionModal({
    isOpen,
    setIsOpen,
    role,
    setRole,
    permissions,
}) {
    const { data, setData, put, errors, reset } = useForm({
        permissions: role.permission_names,
    });

    console.log("role", role);
    console.log("permissions", permissions);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        put("/backend/role/" + role.id + "/set-permission", {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setIsOpen(false);
                reset();
                setRole(null);
            },
        });
    };

    return (
        <ReactModal
            closeTimeoutMS={200}
            isOpen={isOpen}
            contentLabel="Minimal Modal Example"
            overlayClassName="fixed inset-0 bg-base-200/70 overflow-y-auto"
            className="absolute mt-16 left-1/2 -translate-x-1/2  overflow-auto outline-none p-5 md:w-6/12 h-auto"
            ariaHideApp={false}
        >
            <div className="card bg-base-100 shadow-xl">
                <form onSubmit={onSubmitHandler} className="card-body">
                    <h2 className="card-title mb-6">Manage Role Permission</h2>
                    <div className="mb-6">
                        {role && (
                            <div className="mb-6">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Role Name</th>
                                            <th>Role Guard Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{role.name}</td>
                                            <td>{role.guard_name}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {permissions && (
                            <div className="mb-6">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-secondary checkbox-xs"
                                                />
                                            </th>
                                            <th>Permission Name</th>
                                            <th>Permission Guard Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {permissions.map((permission) => {
                                            return (
                                                <tr key={permission.id}>
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkbox checkbox-secondary checkbox-xs"
                                                            id={`permission-${permission.id}`}
                                                            value={
                                                                permission.name
                                                            }
                                                            checked={data.permissions.includes(
                                                                permission.name
                                                            )}
                                                            onChange={(e) => {
                                                                let updatedPermissions =
                                                                    data.permissions.includes(
                                                                        permission.name
                                                                    )
                                                                        ? data.permissions.filter(
                                                                              (
                                                                                  p
                                                                              ) =>
                                                                                  p !==
                                                                                  permission.name
                                                                          )
                                                                        : [
                                                                              ...data.permissions,
                                                                              permission.name,
                                                                          ];

                                                                setData(
                                                                    "permissions",
                                                                    updatedPermissions
                                                                );
                                                            }}
                                                        />
                                                    </td>
                                                    <td>{permission.name}</td>
                                                    <td>
                                                        {permission.guard_name}
                                                    </td>
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
                            <span>Update Role Permissions</span>
                        </button>
                        <a
                            className="btn btn-neutral"
                            onClick={(e) => {
                                e.preventDefault;
                                setRole(null);
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
