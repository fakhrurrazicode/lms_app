import { useForm } from "@inertiajs/react";
import classNames from "classnames";
import { Save } from "lucide-react";
import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";
import slugify from "slugify";

export default function CreateModal({ isOpen, setIsOpen }) {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        slug: "",
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post("/backend/course_category", {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setIsOpen(false);
                reset();
            },
        });
    };

    return (
        <ReactModal
            closeTimeoutMS={200}
            isOpen={isOpen}
            contentLabel="Minimal Modal Example"
            overlayClassName="fixed inset-0 bg-base-200/70"
            className="absolute mt-16 left-1/2 -translate-x-1/2  overflow-auto outline-none p-5 w-4/12 h-auto"
            ariaHideApp={false}
        >
            <div className="card bg-base-100 shadow-xl">
                <form onSubmit={onSubmitHandler} className="card-body">
                    <h2 className="card-title mb-6">
                        Create new Course Category
                    </h2>
                    <div className="mb-6">
                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full"
                                name="name"
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
                                    setData(
                                        "slug",
                                        slugify(e.target.value).toLowerCase()
                                    );
                                }}
                                value={data.name}
                            />
                            {errors.name && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.name}
                                    </span>
                                </div>
                            )}
                        </label>

                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Slug</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Slug"
                                className="input input-bordered w-full"
                                name="slug"
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
                                }}
                                value={data.slug}
                            />
                            {errors.slug && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.slug}
                                    </span>
                                </div>
                            )}
                        </label>
                    </div>
                    <div className="card-actions justify-end">
                        <button type="submit" className="btn btn-primary">
                            <Save size={16} />
                            <span>Save</span>
                        </button>
                        <a
                            className="btn btn-neutral"
                            onClick={(e) => {
                                e.preventDefault;
                                reset();
                                setIsOpen(false);
                            }}
                        >
                            Cancel
                        </a>
                    </div>
                </form>
            </div>
        </ReactModal>
    );
}
