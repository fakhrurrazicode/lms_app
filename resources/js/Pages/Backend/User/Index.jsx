import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, router } from "@inertiajs/react";

import { Edit, KeyRound, Plus, Trash } from "lucide-react";
import { HiDotsVertical } from "react-icons/hi";

export default function Index({ request, users, roles }) {
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
                    Users
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-6">All Users</h2>

                            <div className="overflow-x-auto">
                                <div className="mb-6 flex justify-between items-center">
                                    <div>
                                        <Link
                                            href={route("backend.user.create")}
                                            className="btn btn-primary"
                                        >
                                            <Plus size={16} />
                                            <span>Create new</span>
                                        </Link>
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
                                            <th>Action</th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="name"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Name
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="username"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Username
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="email"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Email
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="email"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Role
                                            </th>

                                            <th
                                                className="cursor-pointer"
                                                data-columnname="email_verified_at"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Email verified at
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
                                        {users.data.length > 0 ? (
                                            users.data.map((user) => (
                                                <tr
                                                    key={user.id}
                                                    className="hover"
                                                >
                                                    <td>
                                                        <details className="dropdown">
                                                            <summary className="btn btn-sm btn-neutral m-1">
                                                                <HiDotsVertical />
                                                            </summary>
                                                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                                <li>
                                                                    <Link
                                                                        href={route(
                                                                            "backend.user.edit",
                                                                            user.id
                                                                        )}
                                                                    >
                                                                        <Edit
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                        <span>
                                                                            Edit
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={route(
                                                                            "backend.user.edit_password",
                                                                            user.id
                                                                        )}
                                                                    >
                                                                        <KeyRound
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                        <span>
                                                                            Edit
                                                                            Password
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            e.preventDefault();
                                                                            confirm(
                                                                                "Anda yakin ingin menghapus data " +
                                                                                    user.name +
                                                                                    "?"
                                                                            )
                                                                                ? router.delete(
                                                                                      route(
                                                                                          "backend.user.destroy",
                                                                                          {
                                                                                              user: user.id,
                                                                                          }
                                                                                      ),
                                                                                      {
                                                                                          preserveState: true,
                                                                                          preserveScroll: true,
                                                                                      }
                                                                                  )
                                                                                : null;
                                                                        }}
                                                                    >
                                                                        <Trash
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                        <span>
                                                                            Delete
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </details>
                                                    </td>
                                                    <td>{user.name}</td>
                                                    <td>{user.username}</td>
                                                    <td>{user.email}</td>
                                                    <td>
                                                        {user.roles.length
                                                            ? user.roles[0].name
                                                            : "-"}
                                                    </td>
                                                    <td>
                                                        {user.email_verified_at}
                                                    </td>
                                                    <td>{user.created_at}</td>
                                                    <td>{user.updated_at}</td>
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
                                            {users.links.map((link, index) =>
                                                link.url == null ? (
                                                    <></>
                                                ) : (
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
