import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

import { Edit, Plus, Trash } from "lucide-react";
import { useState } from "react";

import CreateModal from "./CreateModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

export default function Index({ request, roles }) {
    const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [underEditingRole, setUnderEditingRole] = useState(null);

    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [underDeletingRole, setUnderDeletingRole] = useState(null);

    const orderByOnClickHandler = (e) =>
        router.reload({
            preserveScroll: true,
            preserveState: true,
            data: {
                ...request,
                orderby: e.target.getAttribute("data-columnname"),
                ordermethod: (() => {
                    if (request.ordermethod) {
                        if (request.ordermethod == "asc") return "desc";

                        if (request.ordermethod == "desc") return "asc";
                    } else {
                        return "desc";
                    }
                })(),
            },
        });
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Roles
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-6">All Roles</h2>

                            <div className="overflow-x-auto">
                                <div className="mb-6 flex justify-between items-center">
                                    <div>
                                        <button
                                            className="btn btn-primary"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setCreateModalIsOpen(true);
                                            }}
                                        >
                                            <Plus size={16} />
                                            <span>Create new</span>
                                        </button>
                                    </div>
                                    <div className="flex gap-2">
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text">
                                                    Entries per page
                                                </span>
                                            </div>
                                            <select
                                                name="perpage"
                                                className="select select-bordered"
                                                onChange={(e) =>
                                                    router.reload({
                                                        preserveScroll: true,
                                                        preserveState: true,
                                                        data: {
                                                            ...request,
                                                            perpage:
                                                                e.target.value,
                                                        },
                                                    })
                                                }
                                            >
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={50}>50</option>
                                                <option value={100}>100</option>
                                            </select>
                                        </label>
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text">
                                                    Search
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Search"
                                                className="input input-bordered w-full max-w-xs"
                                                onChange={(e) =>
                                                    router.reload({
                                                        preserveScroll: true,
                                                        preserveState: true,
                                                        data: {
                                                            ...request,
                                                            search: e.target
                                                                .value,
                                                        },
                                                    })
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                                <table className="table mb-6">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="name"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Name
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="guard_name"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Guard Name
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="created_at"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Created at
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="updated_at"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Updated at
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {roles.data.length > 0 ? (
                                            roles.data.map((role) => (
                                                <tr
                                                    key={role.id}
                                                    className="hover"
                                                >
                                                    <th>
                                                        <button
                                                            className="btn btn-accent btn-sm"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                setUnderEditingRole(
                                                                    role
                                                                );
                                                                setEditModalIsOpen(
                                                                    true
                                                                );
                                                            }}
                                                        >
                                                            <Edit size={16} />
                                                            <span>Edit</span>
                                                        </button>
                                                        <button
                                                            className="btn btn-error btn-sm ml-1"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                setUnderDeletingRole(
                                                                    role
                                                                );
                                                                setDeleteModalIsOpen(
                                                                    true
                                                                );
                                                            }}
                                                        >
                                                            <Trash size={16} />
                                                            <span>Delete</span>
                                                        </button>
                                                    </th>
                                                    <td>{role.name}</td>
                                                    <td>{role.guard_name}</td>
                                                    <td>{role.created_at}</td>
                                                    <td>{role.updated_at}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan={5}
                                                    className="text-center text-xs italic"
                                                >
                                                    No Data.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>

                                <div className="flex justify-between">
                                    <div></div>
                                    <div>
                                        <div className="join">
                                            {roles.links.map((link, index) => (
                                                <Link
                                                    preserveScroll={true}
                                                    preserveState={true}
                                                    key={index}
                                                    href={link.url}
                                                    className="join-item btn"
                                                >
                                                    {link.label
                                                        .replace("&laquo;", "")
                                                        .replace("&raquo;", "")}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CreateModal
                isOpen={createModalIsOpen}
                setIsOpen={setCreateModalIsOpen}
            />

            <EditModal
                isOpen={editModalIsOpen}
                setIsOpen={setEditModalIsOpen}
                role={underEditingRole}
                setRole={setUnderEditingRole}
            />

            <DeleteModal
                isOpen={deleteModalIsOpen}
                setIsOpen={setDeleteModalIsOpen}
                role={underDeletingRole}
                setRole={setUnderDeletingRole}
            />
        </AuthenticatedLayout>
    );
}
