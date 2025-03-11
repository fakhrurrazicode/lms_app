import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router } from "@inertiajs/react";

import { Edit, KeyRound, ListCollapse, Plus, Trash } from "lucide-react";
import { useRef, useState } from "react";

export default function Index({
    request,
    courses,
    courseCategories,
    courseSubCategories,
    instructors,
    courseSections,
}) {
    console.log("courseSections", courseSections);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const [manageLectureIsOpen, setManageLectureIsOpen] = useState(false);

    const buttonOpenManageLectureRef = useRef(null);

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
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Courses
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="">
                <div className="w-full ">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-6">All Courses</h2>

                            <div className="overflow-x-auto">
                                <div className="mb-6 flex justify-between items-center">
                                    <div>
                                        <Link
                                            href={route(
                                                "user_area.course.create"
                                            )}
                                            className="btn btn-xs btn-primary"
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
                                                            page: 1,
                                                        },
                                                    })
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="overflow-x-scroll">
                                    <table className="table table-xs mb-6">
                                        <thead>
                                            <tr>
                                                <th className="whitespace-nowrap"></th>
                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="name"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Image
                                                </th>
                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="name"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Title
                                                </th>
                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="email"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Slug
                                                </th>
                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="email"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Instructor
                                                </th>
                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="email"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Category
                                                </th>

                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="created_at"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Created at
                                                </th>
                                                <th
                                                    className="cursor-pointer"
                                                    data-columnname="updated_at"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Updated at
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {courses.data.length > 0 ? (
                                                courses.data.map((course) => (
                                                    <tr
                                                        key={course.id}
                                                        className="hover"
                                                    >
                                                        <th className="whitespace-nowrap">
                                                            <Link
                                                                href={route(
                                                                    "user_area.course.edit",
                                                                    course.id
                                                                )}
                                                                className="btn btn-xs btn-accent"
                                                            >
                                                                <Edit
                                                                    size={16}
                                                                />
                                                                <span>
                                                                    Edit
                                                                </span>
                                                            </Link>

                                                            <button
                                                                className="btn btn-xs btn-error ml-1"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();

                                                                    if (
                                                                        confirm(
                                                                            "Anda yakin ingin menghapus data " +
                                                                                course.title +
                                                                                " ?"
                                                                        )
                                                                    ) {
                                                                        router.delete(
                                                                            route(
                                                                                "user_area.course.destroy",
                                                                                course.id
                                                                            ),
                                                                            {
                                                                                preserveState: true,
                                                                            }
                                                                        );
                                                                    }
                                                                }}
                                                            >
                                                                <Trash
                                                                    size={16}
                                                                />
                                                                <span>
                                                                    Delete
                                                                </span>
                                                            </button>

                                                            <Link
                                                                href={route(
                                                                    "user_area.course_section.index",
                                                                    {
                                                                        course: course,
                                                                    }
                                                                )}
                                                                className="btn btn-xs btn-secondary ml-1 mr-2"
                                                            >
                                                                <ListCollapse
                                                                    size={16}
                                                                />
                                                                <span>
                                                                    Sections &
                                                                    Lectures
                                                                </span>
                                                            </Link>
                                                        </th>
                                                        <td className="whitespace-nowrap">
                                                            {course.image_url !==
                                                            null ? (
                                                                <img
                                                                    src={
                                                                        course.image_url
                                                                    }
                                                                    className="w-32 px-4"
                                                                />
                                                            ) : (
                                                                "No Image"
                                                            )}
                                                        </td>
                                                        <td>{course.title}</td>
                                                        <td>{course.slug}</td>
                                                        <td>
                                                            {course.instructor
                                                                ? course
                                                                      .instructor
                                                                      .name
                                                                : "-"}
                                                        </td>
                                                        <td>
                                                            {
                                                                course
                                                                    .course_category
                                                                    .name
                                                            }
                                                        </td>

                                                        <td>
                                                            {course.created_at}
                                                        </td>
                                                        <td>
                                                            {course.updated_at}
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td
                                                        colSpan={9}
                                                        className="text-center text-xs italic"
                                                    >
                                                        <p className="py-4">
                                                            No Data.
                                                        </p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
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
        </UserAreaLayout>
    );
}
