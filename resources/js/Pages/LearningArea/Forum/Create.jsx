import React from "react";

import { rupiah, stripHtml } from "@/bootstrap";
import HtmlRenderer from "@/Components/Custom/HtmlRenderer";
import LearningAreaLayout from "@/Layouts/LearningAreaLayout";
import { Link, useForm } from "@inertiajs/react";
import { GrPlay, GrResume } from "react-icons/gr";
import classNames from "classnames";
import TinyEditor from "@/Components/Custom/TinyEditor";

export default function Create({ course }) {
    const { data, setData, post, errors, reset, processing, progress } =
        useForm({
            title: "",
            body: "",
        });

    return (
        <LearningAreaLayout course={course}>
            <div className="card bg-base-100 py-8 mb-8 rounded-none">
                <div className="card-body py-0">
                    <form className="mb-4">
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
                    </form>
                </div>
            </div>
        </LearningAreaLayout>
    );
}
