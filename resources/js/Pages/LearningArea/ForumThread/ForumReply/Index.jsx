import FrontendLayout from "@/Layouts/FrontendLayout";
import React, { Children } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import HtmlRenderer from "@/Components/Custom/HtmlRenderer";
import LearningAreaLayout from "@/Layouts/LearningAreaLayout";
import { Link, router } from "@inertiajs/react";
import { GrPlay, GrResume } from "react-icons/gr";
import classNames from "classnames";
import { Edit, Plus, Trash } from "lucide-react";

export default function Index({
    course,
    forum_thread,
    forum_replies,
    request,
}) {
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
                                                },
                                            })
                                        }
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div></div>
                            <div>
                                <div className="join">
                                    {forum_replies.links.map((link, index) => (
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
        </LearningAreaLayout>
    );
}
