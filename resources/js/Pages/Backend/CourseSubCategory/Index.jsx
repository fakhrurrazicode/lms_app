import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

import { Edit, KeyRound, Plus, Trash } from "lucide-react";
import { useState } from "react";

import CreateModal from "./CreateModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

export default function Index({
    request,
    courseSubCategories,
    courseCategories,
}) {
    const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [underEditingCourseSubCategory, setUnderEditingCourseSubCategory] =
        useState(null);

    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [underDeletingCourseSubCategory, setUnderDeletingCourseSubCategory] =
        useState(null);

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
                    Course Sub Categories
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-6">
                                All Course Sub Categories
                            </h2>

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
                                                data-columnname="email"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Slug
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
                                        {courseSubCategories.data.length > 0 ? (
                                            courseSubCategories.data.map(
                                                (courseSubCategory) => (
                                                    <tr
                                                        key={
                                                            courseSubCategory.id
                                                        }
                                                        className="hover"
                                                    >
                                                        <th>
                                                            <button
                                                                className="btn btn-accent btn-sm"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    console.log(
                                                                        "courseSubCategory",
                                                                        courseSubCategory
                                                                    );
                                                                    setUnderEditingCourseSubCategory(
                                                                        courseSubCategory
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
                                                                    setUnderDeletingCourseSubCategory(
                                                                        courseSubCategory
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
                                                        </th>

                                                        <td>
                                                            {
                                                                courseSubCategory.name
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                courseSubCategory.slug
                                                            }
                                                        </td>

                                                        <td>
                                                            {courseSubCategory.course_category
                                                                ? courseSubCategory
                                                                      .course_category
                                                                      .name
                                                                : "-"}
                                                        </td>

                                                        <td>
                                                            {
                                                                courseSubCategory.created_at
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                courseSubCategory.updated_at
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
                                            {courseSubCategories.links.map(
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
                courseCategories={courseCategories}
            />

            <EditModal
                isOpen={editModalIsOpen}
                setIsOpen={setEditModalIsOpen}
                courseSubCategory={underEditingCourseSubCategory}
                setCourseSubCategory={setUnderEditingCourseSubCategory}
                courseCategories={courseCategories}
            />

            <DeleteModal
                isOpen={deleteModalIsOpen}
                setIsOpen={setDeleteModalIsOpen}
                courseSubCategory={underDeletingCourseSubCategory}
                setCourseSubCategory={setUnderDeletingCourseSubCategory}
            />
        </AuthenticatedLayout>
    );
}
