import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

import { Edit, ListCheck, Plus, Trash } from "lucide-react";
import { useState } from "react";

export default function Index({ request, activity_logs }) {
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

                        return "asc";
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
                    Activity Logs
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-6">Activity Logs</h2>

                            <div className="overflow-x-auto">
                                <div className="mb-6 flex justify-between items-center">
                                    {/* <div>
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
                                    </div> */}
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
                                                data-columnname="id"
                                                onClick={orderByOnClickHandler}
                                            >
                                                id
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="log_name"
                                                onClick={orderByOnClickHandler}
                                            >
                                                log_name
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="description"
                                                onClick={orderByOnClickHandler}
                                            >
                                                description
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="subject_type"
                                                onClick={orderByOnClickHandler}
                                            >
                                                subject_type
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="event"
                                                onClick={orderByOnClickHandler}
                                            >
                                                event
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="subject_id"
                                                onClick={orderByOnClickHandler}
                                            >
                                                subject_id
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="causer_type"
                                                onClick={orderByOnClickHandler}
                                            >
                                                causer_type
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="causer_id"
                                                onClick={orderByOnClickHandler}
                                            >
                                                causer_id
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="properties"
                                                onClick={orderByOnClickHandler}
                                            >
                                                properties
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="batch_uuid"
                                                onClick={orderByOnClickHandler}
                                            >
                                                batch_uuid
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="created_at"
                                                onClick={orderByOnClickHandler}
                                            >
                                                created_at
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="updated_at"
                                                onClick={orderByOnClickHandler}
                                            >
                                                updated_at
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {activity_logs.data.length > 0 ? (
                                            activity_logs.data.map(
                                                (activity_log) => (
                                                    <tr
                                                        key={activity_log.id}
                                                        className="hover"
                                                    >
                                                        <th></th>
                                                        <td>
                                                            {activity_log.id}
                                                        </td>
                                                        <td>
                                                            {
                                                                activity_log.log_name
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                activity_log.description
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                activity_log.subject_type
                                                            }
                                                        </td>
                                                        <td>
                                                            {activity_log.event}
                                                        </td>
                                                        <td>
                                                            {
                                                                activity_log.subject_id
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                activity_log.causer_type
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                activity_log.causer_id
                                                            }
                                                        </td>
                                                        <td>
                                                            {JSON.stringify(
                                                                activity_log.properties
                                                            )}
                                                        </td>
                                                        <td>
                                                            {
                                                                activity_log.batch_uuid
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                activity_log.created_at
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                activity_log.updated_at
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            )
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
                                            {activity_logs.links.map(
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
        </AuthenticatedLayout>
    );
}
