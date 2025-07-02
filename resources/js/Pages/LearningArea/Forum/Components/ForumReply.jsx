import HtmlRenderer from "@/Components/Custom/HtmlRenderer";
import TinyEditor from "@/Components/Custom/TinyEditor";
import { useForm } from "@inertiajs/react";
import classNames from "classnames";
import React, { useState } from "react";
import { FaPaperPlane, FaReply, FaTimes } from "react-icons/fa";

export default function ForumReply({ course, forum, forum_reply }) {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const { data, setData, post, errors, reset, processing, progress } =
        useForm({
            body: "",
            forum_reply_id: "",
        });

    const onSubmitHandler = (e) => {
        e.preventDefault();

        data.forum_reply_id = forum_reply.id;

        post(
            route("learning_area.course.forum.forum_reply.store", {
                course: course.id,
                forum: forum.id,
            }),
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    reset();
                    setShowReplyForm(false);
                },
            }
        );
    };
    return (
        <div className="card bg-base-200 mb-8 rounded-none">
            <div className="card-body">
                {forum_reply.forum_reply ? (
                    <div className="card bg-base-100 mb-8 rounded-none">
                        <div className="card-body italic">
                            Balasan untuk:
                            <HtmlRenderer
                                htmlString={forum_reply.forum_reply.body}
                            />
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                <div>
                    <div className="mb-4">
                        <p>id: {forum_reply.id}</p>
                        <HtmlRenderer htmlString={forum_reply.body} />
                    </div>

                    <div className="flex justify-between items-center gap-4 text-xs mb-6">
                        <div className="flex gap-4">
                            <div className="flex gap-2 items-center">
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={forum_reply.user.photo_url} />
                                    </div>
                                </div>
                                <span>{forum_reply.user.name}</span>
                            </div>

                            <div className="flex gap-2 items-center">
                                <span>
                                    {forum_reply.created_at_diff_for_humans}
                                </span>
                            </div>
                        </div>
                        <div>
                            {!showReplyForm ? (
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowReplyForm(true);
                                    }}
                                >
                                    <FaReply /> Balas
                                </button>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>

                    <div className={classNames({ hidden: !showReplyForm })}>
                        <form className="mb-4" onSubmit={onSubmitHandler}>
                            {/* <label className="form-control mb-6 col-span-12 md:col-span-10">
                                <div className="label">
                                    <span className="label-text">
                                        Forum Reply Id
                                    </span>
                                </div>

                                <input
                                    type="text"
                                    placeholder="Forum Reply Id"
                                    name="forum_reply_id"
                                    value={forum_reply.id}
                                    className="input input-bordered w-full"
                                />

                                {errors.forum_reply_id && (
                                    <div className="label">
                                        <span className="label-text-alt text-error">
                                            {errors.forum_reply_id}
                                        </span>
                                    </div>
                                )}
                            </label> */}
                            <label className="form-control mb-6 col-span-12 md:col-span-10">
                                <div className="label">
                                    <span className="label-text">
                                        Balasan Anda ({forum_reply.id})
                                    </span>
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
                                    className="btn btn-neutral"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowReplyForm(false);
                                        reset();
                                    }}
                                >
                                    <FaTimes /> Batalkan
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="btn btn-primary"
                                >
                                    <FaPaperPlane /> Kirim Balasan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
