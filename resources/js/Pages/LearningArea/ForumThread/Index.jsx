import FrontendLayout from "@/Layouts/FrontendLayout";
import React, { Children } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import CourseNav from "../CourseNav";
import { rupiah } from "@/bootstrap";
import {
    FaBook,
    FaCartPlus,
    FaChevronDown,
    FaParagraph,
    FaStar,
    FaTrash,
    FaUserAlt,
    FaClock,
    FaEye,
    FaLock,
    FaCertificate,
    FaFileAlt,
    FaPlay,
} from "react-icons/fa";
import HtmlRenderer from "@/Components/Custom/HtmlRenderer";
import LearningAreaLayout from "@/Layouts/LearningAreaLayout";
import { Link } from "@inertiajs/react";
import { GrPlay, GrResume } from "react-icons/gr";
import classNames from "classnames";
import { Plus } from "lucide-react";

export default function Show({ course, forum_threads, request }) {
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
        <LearningAreaLayout course={course}>
            <div className="card bg-base-100 py-8 mb-8 rounded-none">
                <div className="card-body">
                    <h2 className="card-title mb-6">Forum Thread</h2>

                    <div className="overflow-x-auto">
                        {forum_threads.data.length > 0 ? (
                            <>
                                <div className="mb-6 flex justify-between items-center">
                                    <div>
                                        {/* <Link
                                    href={route(
                                        "learning_area.course.forum_thread.create",
                                        { course: course.id }
                                    )}
                                    className="btn btn-primary"
                                >
                                    <Plus size={16} />
                                    <span>Create new</span>
                                </Link> */}
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
                                                Title
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="email"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Body
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="email"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Users
                                            </th>

                                            <th
                                                className="cursor-pointer"
                                                data-columnname="email"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Replies
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
                                        {forum_threads.data.map(
                                            (forum_thread) => (
                                                <tr
                                                    key={forum_thread.id}
                                                    className="hover"
                                                >
                                                    <th>
                                                        <Link
                                                            href={route(
                                                                "learning_area.course.forum_thread.edit",
                                                                forum_thread.id
                                                            )}
                                                            className="btn btn-accent btn-sm"
                                                        >
                                                            <Edit size={16} />
                                                            <span>Edit</span>
                                                        </Link>
                                                        <Link
                                                            href={route(
                                                                "learning_area.course.forum_thread.edit_password",
                                                                forum_thread.id
                                                            )}
                                                            className="btn btn-secondary btn-sm ml-1"
                                                        >
                                                            <KeyRound
                                                                size={16}
                                                            />
                                                            <span>
                                                                Edit Password
                                                            </span>
                                                        </Link>
                                                        <button
                                                            className="btn btn-error btn-sm ml-1"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                confirm(
                                                                    "Anda yakin ingin menghapus data " +
                                                                        forum_thread.name +
                                                                        "?"
                                                                )
                                                                    ? router.delete(
                                                                          route(
                                                                              "learning_area.course.forum_thread.destroy",
                                                                              {
                                                                                  user: forum_thread.id,
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
                                                            <Trash size={16} />
                                                            <span>Delete</span>
                                                        </button>
                                                    </th>
                                                    <td>{forum_thread.name}</td>
                                                    <td>
                                                        {forum_thread.email}
                                                    </td>
                                                    <td>
                                                        {forum_thread.roles
                                                            .length
                                                            ? forum_thread
                                                                  .roles[0].name
                                                            : "-"}
                                                    </td>
                                                    <td>
                                                        {
                                                            forum_thread.created_at
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            forum_thread.updated_at
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>

                                <div className="flex justify-between">
                                    <div></div>
                                    <div>
                                        <div className="join">
                                            {forum_threads.links.map(
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
                            </>
                        ) : (
                            <div className="py-6 text-center">
                                <p className="italic">
                                    Belum Tersedia Forum Pada Kursus ini
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </LearningAreaLayout>
    );
}
