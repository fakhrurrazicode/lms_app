import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, router } from "@inertiajs/react";

import { Edit, Info, ListCheck, Plus, Trash } from "lucide-react";
import { useState } from "react";
import ModalForm from "./ModalForm";

export default function Index({ request, tickets, users }) {
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [modalFormIsOpen, setModalFormIsOpen] = useState(false);

    function generateStatusBadge(status) {
        let className = "badge ";

        switch (status) {
            case "open":
                className += "badge-success";
                break;
            case "pending":
                className += "badge-warning";
                break;
            case "closed":
                className += "badge-neutral";
                break;
        }
        return <span className={className}>{status}</span>;
    }

    function generatePriorityBadge(priority) {
        let className = "badge ";

        switch (priority) {
            case "low":
                className += "badge-success";
                break;
            case "medium":
                className += "badge-warning";
                break;
            case "high":
                className += "badge-error";
                break;
        }
        return <span className={className}>{priority}</span>;
    }

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
        <BackendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Tickets
                </h2>
            }
        >
            <Head title="Dashboard" />

            <ModalForm
                isOpen={modalFormIsOpen}
                setIsOpen={setModalFormIsOpen}
                ticket={selectedTicket}
            />

            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-6">All Tickets</h2>

                            <div className="overflow-x-auto">
                                <div className="mb-6 flex justify-between items-center">
                                    <div>
                                        <button
                                            className="btn btn-primary"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setModalFormIsOpen(true);
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
                                                Subject
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="guard_name"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Description
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="status"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Status
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="priority"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Priority
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tickets.data.length > 0 ? (
                                            tickets.data.map((ticket) => (
                                                <tr
                                                    key={ticket.id}
                                                    className="hover"
                                                >
                                                    <th className="flex gap-1">
                                                        <button
                                                            className="btn btn-accent btn-sm"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                setSelectedTicket(
                                                                    ticket
                                                                );
                                                                setModalFormIsOpen(
                                                                    true
                                                                );
                                                            }}
                                                        >
                                                            <Edit size={16} />
                                                            <span>Edit</span>
                                                        </button>

                                                        <button
                                                            className="btn btn-info btn-sm"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                setSelectedTicket(
                                                                    ticket
                                                                );
                                                                setModalFormIsOpen(
                                                                    true
                                                                );
                                                            }}
                                                        >
                                                            <Info size={16} />
                                                            <span>Show</span>
                                                        </button>

                                                        <button
                                                            className="btn btn-error btn-sm"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                // setUnderDeletingRole(
                                                                //     role
                                                                // );
                                                                // setDeleteModalIsOpen(
                                                                //     true
                                                                // );
                                                            }}
                                                        >
                                                            <Trash size={16} />
                                                            <span>Delete</span>
                                                        </button>
                                                    </th>
                                                    <td>{ticket.subject}</td>
                                                    <td>
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: ticket.description,
                                                            }}
                                                        ></div>
                                                    </td>
                                                    <td>
                                                        {generateStatusBadge(
                                                            ticket.status
                                                        )}
                                                    </td>
                                                    <td>
                                                        {generatePriorityBadge(
                                                            ticket.priority
                                                        )}
                                                    </td>
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
                                            {tickets.links.map(
                                                (link, index) => (
                                                    <Link
                                                        preserveScroll={true}
                                                        preserveState={true}
                                                        key={index}
                                                        href={link.url}
                                                        className="join-item btn"
                                                    >
                                                        {link.label
                                                            .replace(
                                                                "&laquo;",
                                                                ""
                                                            )
                                                            .replace(
                                                                "&raquo;",
                                                                ""
                                                            )}
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BackendLayout>
    );
}
