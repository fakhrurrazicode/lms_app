import React from "react";

import { rupiah, stripHtml } from "@/bootstrap";
import HtmlRenderer from "@/Components/Custom/HtmlRenderer";
import LearningAreaLayout from "@/Layouts/LearningAreaLayout";
import { Link } from "@inertiajs/react";
import { GrPlay, GrResume } from "react-icons/gr";
import classNames from "classnames";

export default function Show({ course, forums }) {
    return (
        <LearningAreaLayout course={course}>
            <div className="card bg-base-100 py-8 mb-8 rounded-none">
                <div className="card-body py-0">
                    {forums.data.map((forum) => (
                        <>
                            <div className="grid grid-cols-12 gap-6 py-6 border-b border-base-300 last:border-b-0">
                                <div className="col-span-2 text-right">
                                    <div className="text-xs mb-2">
                                        0 Balasan
                                    </div>
                                    <div className="text-xs mb-2">0 Vote</div>
                                </div>
                                <div className="col-span-10">
                                    <h3 className="mb-2">
                                        <Link
                                            className="text-primary"
                                            href={route(
                                                "learning_area.course.forum.show",
                                                {
                                                    course: course.id,
                                                    forum: forum.id,
                                                }
                                            )}
                                        >
                                            {forum.title}
                                        </Link>
                                    </h3>

                                    <div className="text-xs mb-2">
                                        {stripHtml(forum.body).slice(0, 300)}
                                        ...
                                    </div>

                                    <div className="flex justify-end items-center gap-4 text-xs">
                                        <div className="flex gap-2 items-center">
                                            <div className="avatar">
                                                <div className="w-8 rounded-full">
                                                    <img
                                                        src={
                                                            forum.user.photo_url
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <span>{forum.user.name}</span>
                                        </div>

                                        <div className="flex gap-2 items-center">
                                            <span>
                                                {
                                                    forum.created_at_diff_for_humans
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </LearningAreaLayout>
    );
}
