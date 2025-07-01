import React from "react";

import { rupiah, stripHtml } from "@/bootstrap";
import HtmlRenderer from "@/Components/Custom/HtmlRenderer";
import LearningAreaLayout from "@/Layouts/LearningAreaLayout";
import { Link, useForm } from "@inertiajs/react";
import { GrPlay, GrResume } from "react-icons/gr";
import classNames from "classnames";
import TinyEditor from "@/Components/Custom/TinyEditor";
import ForumReply from "./Components/ForumReply";
import { FaPaperPlane } from "react-icons/fa";

export default function Show({ course, forum, forum_replies }) {
    const { data, setData, post, errors, reset, processing, progress } =
        useForm({
            body: "",
        });

    const onSubmitHandler = (e) => {
        e.preventDefault();

        post(
            route("learning_area.course.forum.reply", {
                course: course.id,
                forum: forum.id,
            }),
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    reset();
                },
            }
        );
    };

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
                        <div className="text-xs mb-6">
                            <HtmlRenderer htmlString={forum.body} />
                        </div>

                        <div className="flex justify-start items-center gap-4 text-xs">
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

                    <form className="mb-4" onSubmit={onSubmitHandler}>
                        <label className="form-control mb-6 col-span-12 md:col-span-10">
                            <div className="label">
                                <span className="label-text">Balasan Anda</span>
                            </div>

                            <TinyEditor
                                value={data.body}
                                onChange={(value) => setData("body", value)}
                            />

                            {errors.body && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.body}
                                    </span>
                                </div>
                            )}
                        </label>

                        <div className="flex justify-end gap-2">
                            <button
                                type="submit"
                                disabled={processing}
                                className="btn btn-primary"
                            >
                                <FaPaperPlane /> Kirim Balasan
                            </button>
                        </div>
                    </form>

                    {forum_replies.data.map((forum_reply) => {
                        return <ForumReply forum_reply={forum_reply} />;
                    })}

                    <div className="flex justify-center">
                        <div className="join">
                            {forum_replies.links.map((link, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className="join-item btn"
                                    >
                                        {link.label
                                            .replace("&laquo; Previous", "<<")
                                            .replace("Next &raquo;", ">>")}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </LearningAreaLayout>
    );
}
