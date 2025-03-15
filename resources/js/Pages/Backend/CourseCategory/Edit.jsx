import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import React from "react";
import slugify from "slugify";

export default function Edit({ course_category }) {
    const { data, setData, put, errors, reset } = useForm({
        name: course_category.name,
        slug: course_category.slug,
    });

    const submitHandler = (e) => {
        e.preventDefault();
        put(
            route("backend.course_category.update", {
                course_category: course_category,
            })
        );
    };
    return (
        <BackendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Course Categories
                </h2>
            }
        >
            <Head title="Course Categories" />

            <div className="flex justify-center sm:px-6 sm:py-8 lg:px-8 lg:py-8">
                <div className="w-1/2">
                    <form onSubmit={submitHandler}>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title mb-6">
                                    Edit Course Category
                                </h2>

                                <div className="mb-6">
                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Name
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="input input-bordered w-full"
                                            name="name"
                                            onChange={(e) => {
                                                setData(
                                                    e.target.name,
                                                    e.target.value
                                                );
                                                setData(
                                                    "slug",
                                                    slugify(
                                                        e.target.value
                                                    ).toLowerCase()
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
                                            <span className="label-text">
                                                Slug
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Slug"
                                            className="input input-bordered w-full"
                                            name="slug"
                                            onChange={(e) => {
                                                setData(
                                                    e.target.name,
                                                    e.target.value
                                                );
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

                                <div className="flex justify-end gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-accent"
                                    >
                                        <Save size={16} />
                                        <span>Update</span>
                                    </button>
                                    <Link
                                        href={route(
                                            "backend.course_category.index"
                                        )}
                                        className="btn btn-neutral"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </BackendLayout>
    );
}
