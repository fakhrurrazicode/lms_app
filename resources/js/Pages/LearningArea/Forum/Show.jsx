import React from "react";

import { rupiah, stripHtml } from "@/bootstrap";
import HtmlRenderer from "@/Components/Custom/HtmlRenderer";
import LearningAreaLayout from "@/Layouts/LearningAreaLayout";
import { Link } from "@inertiajs/react";
import { GrPlay, GrResume } from "react-icons/gr";
import classNames from "classnames";

export default function Show({ course, forum }) {
    return (
        <LearningAreaLayout course={course}>
            <div className="card bg-base-100 py-8 mb-8 rounded-none">
                <div className="card-body py-0">
                    <div className="mb-10">
                        <h1 className="text-2xl mb-2">
                            <Link
                                className="text-primary"
                                href={route("learning_area.course.forum.show", {
                                    course: course.id,
                                    forum: forum.id,
                                })}
                            >
                                {forum.title}
                            </Link>
                        </h1>

                        <div className="text-xs mb-4 flex gap-2">
                            <span>
                                <span className="text-primary">
                                    Created at:
                                </span>{" "}
                                <span>{forum.created_at_diff_for_humans}</span>
                            </span>
                            <span>
                                <span className="text-primary">
                                    Updated at:
                                </span>{" "}
                                <span>{forum.updated_at_diff_for_humans}</span>
                            </span>
                        </div>
                        <div className="text-xs mb-2">
                            <HtmlRenderer htmlString={forum.body} />
                        </div>

                        <div className="flex justify-end items-center gap-4 text-xs">
                            <div className="flex gap-2 items-center">
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={forum.user.photo_url} />
                                    </div>
                                </div>
                                <span>{forum.user.name}</span>
                            </div>

                            <div className="flex gap-2 items-center">
                                <span>{forum.created_at_diff_for_humans}</span>
                            </div>
                        </div>
                    </div>

                    {forum.replies.map((reply) => {
                        return (
                            <div className="card bg-base-200 mb-8 rounded-none">
                                <div className="card-body">
                                    <div>
                                        <div className="mb-4">
                                            <HtmlRenderer
                                                htmlString={reply.body}
                                            />
                                        </div>

                                        <div className="flex justify-end items-center gap-4 text-xs">
                                            <div className="flex gap-2 items-center">
                                                <div className="avatar">
                                                    <div className="w-8 rounded-full">
                                                        <img
                                                            src={
                                                                reply.user
                                                                    .photo_url
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <span>{reply.user.name}</span>
                                            </div>

                                            <div className="flex gap-2 items-center">
                                                <span>
                                                    {
                                                        reply.created_at_diff_for_humans
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </LearningAreaLayout>
    );
}
