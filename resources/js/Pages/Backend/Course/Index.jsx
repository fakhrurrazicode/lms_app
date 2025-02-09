import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

import { Edit, KeyRound, ListCollapse, Plus, Trash } from "lucide-react";
import { useRef, useState } from "react";

import CreateModal from "./CreateModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import ManageLecture from "./ManageLecture";

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

    const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
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
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Courses
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-6">All Courses</h2>

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
                                <div className="overflow-x-auto">
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
                                                    data-columnname="email"
                                                    onClick={
                                                        orderByOnClickHandler
                                                    }
                                                >
                                                    Sub Category
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
                                                            <button
                                                                className="btn btn-accent btn-sm"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    setSelectedCourse(
                                                                        course
                                                                    );
                                                                    setEditModalIsOpen(
                                                                        true
                                                                    );
                                                                }}
                                                            >
                                                                <Edit
                                                                    size={16}
                                                                />
                                                                <span>
                                                                    Edit
                                                                </span>
                                                            </button>

                                                            <button
                                                                className="btn btn-error btn-sm ml-1"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    setSelectedCourse(
                                                                        course
                                                                    );
                                                                    setDeleteModalIsOpen(
                                                                        true
                                                                    );
                                                                }}
                                                            >
                                                                <Trash
                                                                    size={16}
                                                                />
                                                                <span>
                                                                    Delete
                                                                </span>
                                                            </button>

                                                            <button
                                                                className="btn btn-secondary btn-sm ml-1 mr-2"
                                                                ref={
                                                                    buttonOpenManageLectureRef
                                                                }
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    setSelectedCourse(
                                                                        course
                                                                    );
                                                                    router.reload(
                                                                        {
                                                                            only: [
                                                                                "courseSections",
                                                                            ],
                                                                            data: {
                                                                                selected_course_id:
                                                                                    course.id,
                                                                            },
                                                                            onFinish:
                                                                                () => {
                                                                                    setManageLectureIsOpen(
                                                                                        true
                                                                                    );
                                                                                },
                                                                        }
                                                                    );
                                                                }}
                                                            >
                                                                <ListCollapse
                                                                    size={16}
                                                                />
                                                                <span>
                                                                    Sections &
                                                                    Lectures
                                                                </span>
                                                            </button>
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
                                                            {
                                                                course
                                                                    .instructor
                                                                    .name
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                course
                                                                    .course_category
                                                                    .name
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                course
                                                                    .course_sub_category
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

            <CreateModal
                isOpen={createModalIsOpen}
                setIsOpen={setCreateModalIsOpen}
            />

            <EditModal
                isOpen={editModalIsOpen}
                setIsOpen={setEditModalIsOpen}
                course={selectedCourse}
                setCourse={setSelectedCourse}
            />

            <DeleteModal
                isOpen={deleteModalIsOpen}
                setIsOpen={setDeleteModalIsOpen}
                course={selectedCourse}
                setCourse={setSelectedCourse}
            />

            <ManageLecture
                courseSections={courseSections}
                isOpen={manageLectureIsOpen}
                setIsOpen={setManageLectureIsOpen}
                course={selectedCourse}
                setCourse={setSelectedCourse}
            />
        </AuthenticatedLayout>
    );
}
