import React from "react";

import { rupiah, stripHtml } from "@/bootstrap";
import HtmlRenderer from "@/Components/Custom/HtmlRenderer";
import LearningAreaLayout from "@/Layouts/LearningAreaLayout";
import { Link, useForm } from "@inertiajs/react";
import { GrPlay, GrResume } from "react-icons/gr";
import classNames from "classnames";
import TinyEditor from "@/Components/Custom/TinyEditor";
import { FaPaperPlane } from "react-icons/fa";

export default function Create({ course }) {
    const { data, setData, post, errors, reset, processing, progress } =
        useForm({
            title: "",
            body: "",
        });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(
            route("learning_area.course.forum.store", {
                course: course.id,
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
                    <form className="mb-4" onSubmit={onSubmitHandler}>
                        <label className="form-control mb-6 col-span-12 md:col-span-10">
                            <div className="label">
                                <span className="label-text">Judul Forum</span>
                            </div>

                            <input
                                type="text"
                                placeholder="Judul Forum"
                                name="title"
                                value={data.title}
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
                                }}
                                className="input input-bordered w-full"
                            />

                            {errors.title && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.title}
                                    </span>
                                </div>
                            )}
                        </label>
                        <label className="form-control mb-6 col-span-12 md:col-span-10">
                            <div className="label">
                                <span className="label-text">Body</span>
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
                            <Link
                                href={route(
                                    "learning_area.course.forum.index",
                                    {
                                        course: course.id,
                                    }
                                )}
                                className="btn btn-neutral"
                            >
                                Batalkan
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="btn btn-primary"
                            >
                                <FaPaperPlane />
                                Publish Forum
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </LearningAreaLayout>
    );
}
