import { rupiah } from "@/bootstrap";
import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

import { Edit, KeyRound, ListCollapse, Plus, Trash } from "lucide-react";
import { useRef, useState } from "react";
import { CourseDetail } from "./CourseCardDetail";
import BackendLayout from "@/Layouts/BackendLayout";

export default function Index({ request, courses }) {
    return (
        <BackendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Courses
                </h2>
            }
        >
            <Head title="Manajemen Kursus" />

            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-6">All Courses</h2>

                            <div className="overflow-x-auto">
                                <div className="mb-6 flex justify-between items-center">
                                    <div>
                                        <Link
                                            href={route(
                                                "backend.course.create"
                                            )}
                                            className="btn btn-primary"
                                        >
                                            <Plus size={16} />
                                            <span>Buat Kursus Baru</span>
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
                                                            page: 1,
                                                        },
                                                    })
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="overflow-x-auto">
                                        <table className="table">
                                            {/* head */}
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Judul</th>
                                                    <th>Level</th>
                                                    <th>Active</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {courses.data.length ? (
                                                    courses.data.map(
                                                        (course) => (
                                                            <tr className="hover">
                                                                <th>
                                                                    <Link
                                                                        href={route(
                                                                            "backend.course.edit",
                                                                            {
                                                                                course,
                                                                            }
                                                                        )}
                                                                        className="btn btn-secondary btn-sm"
                                                                    >
                                                                        Manage
                                                                    </Link>
                                                                </th>
                                                                <td>
                                                                    {
                                                                        course.title
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        course.level
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        course.status
                                                                    }
                                                                </td>
                                                            </tr>
                                                        )
                                                    )
                                                ) : (
                                                    <></>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <div></div>
                                    <div>
                                        <div className="join">
                                            {courses.links.map(
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
