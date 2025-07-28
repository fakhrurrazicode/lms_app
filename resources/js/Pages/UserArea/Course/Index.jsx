import { rupiah, stripHtmlTags } from "@/bootstrap";
import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

import { Edit, KeyRound, ListCollapse, Plus, Trash } from "lucide-react";
import { useRef, useState } from "react";
import { CourseDetail } from "./CourseCardDetail";

export default function Index({ request, courses }) {
    const onStatusToggle = (e) => {};
    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Courses
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="w-full ">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mb-6">Manajemen Kursus</h2>

                        <div
                            role="alert"
                            className="alert alert-success text-sm border-[1.5px] border-dashed border-green-950 mb-6 items-start dark:text-base text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="h-6 w-6 shrink-0 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <div>
                                <p className="mb-3">
                                    Kamu punya keahlian di bidang teknik, IT,
                                    atau pelajaran sekolah? Sekarang waktunya
                                    berbagi ilmu sekaligus menghasilkan uang
                                    lewat Guruteknik.com!
                                </p>
                                <p className="mb-3">
                                    Aktifkan Kursus kamu, jika kursus kamu sudah
                                    layak untuk di publis
                                </p>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <div className="mb-6 flex justify-between items-center">
                                <div>
                                    <Link
                                        href={route("user_area.course.create")}
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
                                                        perpage: e.target.value,
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
                                                        search: e.target.value,
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
                                                <th>Deskripsi</th>
                                                <th>Tingkatan</th>
                                                <th>Harga</th>
                                                <th>Publis</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {courses.data.length ? (
                                                courses.data.map(
                                                    (course, index) => (
                                                        <tr
                                                            className="hover"
                                                            key={index}
                                                        >
                                                            <th>
                                                                <Link
                                                                    href={route(
                                                                        "user_area.course.edit",
                                                                        {
                                                                            course,
                                                                        }
                                                                    )}
                                                                    className="btn btn-secondary btn-sm"
                                                                >
                                                                    Atur Kursus
                                                                </Link>
                                                            </th>
                                                            <td>
                                                                {course.title}
                                                            </td>
                                                            <td>
                                                                {stripHtmlTags(
                                                                    course.description
                                                                ).slice(0, 150)}
                                                            </td>
                                                            <td>
                                                                {course.level}
                                                            </td>
                                                            <td>
                                                                {course.price ==
                                                                0 ? (
                                                                    <span className="text-success font-bold">
                                                                        Gratis
                                                                    </span>
                                                                ) : (
                                                                    rupiah(
                                                                        course.price
                                                                    )
                                                                )}
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle toggle-primary"
                                                                    checked={
                                                                        course.status
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        router.put(
                                                                            route(
                                                                                "user_area.course.toggle_active",
                                                                                {
                                                                                    course: course.id,
                                                                                }
                                                                            ),
                                                                            {},
                                                                            {
                                                                                preserveScroll: true,
                                                                                preserveState: true,
                                                                            }
                                                                        );
                                                                    }}
                                                                />
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
                                        {courses.links.map((link, index) =>
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
                                                        .replace("&laquo;", "")
                                                        .replace("&raquo;", "")}
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
        </UserAreaLayout>
    );
}
