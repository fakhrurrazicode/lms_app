import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import React, { useRef } from "react";
import slugify from "slugify";

export default function Create() {
    const previewImageRef = useRef(null);
    const { data, setData, post, errors, reset, processing, progress } =
        useForm({
            title: "",
            description: "",
            image: "",
            start_date: "",
            end_date: "",
        });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("backend.event.store"), {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case "image":
                console.log(e.target.files);
                const file = e.target.files[0];

                if (file) {
                    const reader = new FileReader();

                    reader.onload = function (e) {
                        previewImageRef.current.src = e.target.result;
                    };

                    reader.readAsDataURL(file);
                } else {
                    previewImageRef.current.classList.add("hidden");
                    previewImageRef.current.src = "";
                }

                setData("image", file);
                break;
            default:
                setData(name, value);
                break;
        }
    };

    return (
        <BackendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Events
                </h2>
            }
        >
            <Head title="Events" />

            <div className="py-12">
                <div className="w-full lg:w-3/4 xl:w-1/2 px-6 lg:px-8 mx-auto">
                    <form onSubmit={submitHandler}>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title mb-6">
                                    Create new Event
                                </h2>

                                <div className="mb-6">
                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Title
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Title"
                                            className="input input-bordered w-full"
                                            name="title"
                                            onChange={inputChangeHandler}
                                            value={data.title}
                                        />
                                        {errors.title && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.title}
                                                </span>
                                            </div>
                                        )}
                                    </label>

                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Description
                                            </span>
                                        </div>

                                        <textarea
                                            className="textarea textarea-bordered h-24"
                                            placeholder="Description"
                                            name="description"
                                            onChange={inputChangeHandler}
                                            value={data.description}
                                        ></textarea>
                                        {errors.description && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.description}
                                                </span>
                                            </div>
                                        )}
                                    </label>

                                    <div className="mb-6">
                                        <label className="form-control flex-1 mb-6">
                                            <div className="label">
                                                <span className="label-text">
                                                    Image
                                                </span>
                                            </div>

                                            <input
                                                type="file"
                                                placeholder="Image"
                                                className="file-input file-input-bordered w-full"
                                                name="image"
                                                accept="image/*"
                                                onChange={inputChangeHandler}
                                            />
                                            {errors.image && (
                                                <div className="label">
                                                    <span className="label-text-alt text-error">
                                                        {errors.image}
                                                    </span>
                                                </div>
                                            )}
                                        </label>
                                        <div className="w-full lg:w-1/4">
                                            <img
                                                ref={previewImageRef}
                                                src=""
                                                alt=""
                                                className="w-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="block lg:flex gap-2">
                                        <label className="form-control w-full mb-6">
                                            <div className="label">
                                                <span className="label-text">
                                                    Start Date
                                                </span>
                                            </div>
                                            <input
                                                type="date"
                                                placeholder="Start Date"
                                                className="input input-bordered w-full"
                                                name="start_date"
                                                onChange={(e) => {
                                                    setData(
                                                        e.target.name,
                                                        e.target.value
                                                    );
                                                }}
                                                value={data.start_date}
                                            />
                                            {errors.start_date && (
                                                <div className="label">
                                                    <span className="label-text-alt text-error">
                                                        {errors.start_date}
                                                    </span>
                                                </div>
                                            )}
                                        </label>

                                        <label className="form-control w-full mb-6">
                                            <div className="label">
                                                <span className="label-text">
                                                    End Date
                                                </span>
                                            </div>
                                            <input
                                                type="date"
                                                placeholder="End Date"
                                                className="input input-bordered w-full"
                                                name="end_date"
                                                onChange={(e) => {
                                                    setData(
                                                        e.target.name,
                                                        e.target.value
                                                    );
                                                }}
                                                value={data.end_date}
                                            />
                                            {errors.end_date && (
                                                <div className="label">
                                                    <span className="label-text-alt text-error">
                                                        {errors.end_date}
                                                    </span>
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        <Save size={16} />
                                        <span>Save</span>
                                    </button>
                                    <Link
                                        href={route("backend.event.index")}
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
