import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

import { Save } from "lucide-react";
import React, { useRef, useState } from "react";
import slugify from "slugify";

export default function Create({ course_categories }) {
    const { auth } = usePage().props;

    const previewImageRef = useRef(null);
    const { data, setData, post, errors, reset, processing, progress } =
        useForm({
            course_category_id: "",
            // course_sub_category_id: "",
            instructor_id: "",

            title: "",
            slug: "",
            image: "",
            description: "",
            prerequisites: "",
            goals: "",
            price: "",
            duration: "",
            discount_percentage: "",
            level: "",
            status: true,
        });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post("/user_area/course", {
            // forceFormData: true,
            preserveScroll: true,
            preserveState: true,
        });
    };

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData(name, value);

        switch (name) {
            case "title":
                setData("slug", slugify(e.target.value).toLowerCase());
                break;
            // case "course_category_id":
            //     reloadCourseSubCategories({
            //         course_categoryId: e.target.value,
            //     });

            // case "description":
            //     setData('description', )
            //     break;
            case "image":
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
        }
    };

    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Membuat Kursus
                </h2>
            }
        >
            <Head title="Create Course" />

            <div className="w-full">
                <div className="card bg-base-100 shadow-xl">
                    <form onSubmit={onSubmitHandler} className="card-body">
                        <h2 className="card-title mb-6">Buat Kursus Baru</h2>
                        <div className="mb-6">
                            <div className="grid grid-cols-12 gap-6">
                                <label className="form-control mb-6 col-span-12 md:col-span-6">
                                    <div className="label">
                                        <span className="label-text">
                                            Judul
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Judul"
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
                            </div>

                            <div className="grid grid-cols-12 gap-6">
                                <label className="form-control mb-6 col-span-12 md:col-span-6">
                                    <div className="label">
                                        <span className="label-text">Slug</span>
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

                            <div className="grid grid-cols-12 gap-6">
                                <label className="form-control mb-6 col-span-12 md:col-span-4">
                                    <div className="label">
                                        <span className="label-text">
                                            Kategori kursus
                                        </span>
                                    </div>
                                    <select
                                        className="select select-bordered"
                                        name="course_category_id"
                                        onChange={inputChangeHandler}
                                        value={data.course_category_id}
                                    >
                                        <option>
                                            :: Pilih Kategori kursus ::
                                        </option>

                                        {course_categories.map(
                                            (course_category) => (
                                                <option
                                                    key={course_category.id}
                                                    value={course_category.id}
                                                >
                                                    {course_category.name}
                                                </option>
                                            )
                                        )}
                                    </select>

                                    {errors.course_category_id && (
                                        <div className="label">
                                            <span className="label-text-alt text-error">
                                                {errors.course_category_id}
                                            </span>
                                        </div>
                                    )}
                                </label>

                                <label className="form-control mb-6 col-span-12 md:col-span-4">
                                    <div className="label">
                                        <span className="label-text">
                                            Level kursus
                                        </span>
                                    </div>
                                    <select
                                        className="select select-bordered"
                                        name="level"
                                        onChange={inputChangeHandler}
                                        value={data.level}
                                    >
                                        <option>
                                            :: Pilih Level kursus ::
                                        </option>
                                        {[
                                            "beginner",
                                            "intermediate",
                                            "advance",
                                        ].map((level) => (
                                            <option value={level}>
                                                {level}
                                            </option>
                                        ))}
                                    </select>

                                    {errors.level && (
                                        <div className="label">
                                            <span className="label-text-alt text-error">
                                                {errors.level}
                                            </span>
                                        </div>
                                    )}
                                </label>
                            </div>

                            <div className="grid grid-cols-12 gap-6">
                                <label className="form-control mb-6 col-span-12 md:col-span-10">
                                    <div className="label">
                                        <span className="label-text">
                                            Keterangan
                                        </span>
                                    </div>

                                    <textarea
                                        className="textarea textarea-bordered h-24"
                                        placeholder="Keterangan"
                                        name="description"
                                        value={data.description}
                                        onChange={inputChangeHandler}
                                    ></textarea>
                                    {errors.description && (
                                        <div className="label">
                                            <span className="label-text-alt text-error">
                                                {errors.description}
                                            </span>
                                        </div>
                                    )}
                                </label>
                            </div>

                            <div className="grid grid-cols-12 gap-6">
                                <label className="form-control mb-6 col-span-12 md:col-span-10">
                                    <div className="label">
                                        <span className="label-text">
                                            Prasyarat
                                        </span>
                                    </div>
                                    <textarea
                                        className="textarea textarea-bordered h-24"
                                        placeholder="Prerequisites"
                                        name="prerequisites"
                                        value={data.prerequisites}
                                        onChange={inputChangeHandler}
                                    ></textarea>
                                    {errors.prerequisites && (
                                        <div className="label">
                                            <span className="label-text-alt text-error">
                                                {errors.prerequisites}
                                            </span>
                                        </div>
                                    )}
                                </label>
                            </div>

                            <div className="grid grid-cols-12 gap-6">
                                <label className="form-control mb-6 col-span-12 md:col-span-10">
                                    <div className="label">
                                        <span className="label-text">
                                            Sasaran
                                        </span>
                                    </div>
                                    <textarea
                                        className="textarea textarea-bordered h-24"
                                        placeholder="Sasaran"
                                        name="goals"
                                        value={data.goals}
                                        onChange={inputChangeHandler}
                                    ></textarea>
                                    {errors.goals && (
                                        <div className="label">
                                            <span className="label-text-alt text-error">
                                                {errors.goals}
                                            </span>
                                        </div>
                                    )}
                                </label>
                            </div>

                            <div className="grid grid-cols-12 gap-6">
                                <label className="form-control mb-6 col-span-12 md:col-span-4">
                                    <div className="label">
                                        <span className="label-text">
                                            Harga
                                        </span>
                                        <span className="label-text-alt">
                                            Dalam Satuan Rupiah
                                        </span>
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="Harga"
                                        className="input input-bordered w-full"
                                        name="price"
                                        onChange={inputChangeHandler}
                                        value={data.price}
                                    />
                                    {errors.price && (
                                        <div className="label">
                                            <span className="label-text-alt text-error">
                                                {errors.price}
                                            </span>
                                        </div>
                                    )}
                                </label>

                                <label className="form-control mb-6 col-span-12 md:col-span-4">
                                    <div className="label">
                                        <span className="label-text">
                                            Persentase diskon
                                        </span>
                                        <span className="label-text-alt">
                                            0 - 100%
                                        </span>
                                    </div>
                                    <input
                                        type="number"
                                        min={0}
                                        max={100}
                                        placeholder="Persentase diskon"
                                        className="input input-bordered w-full"
                                        name="discount_percentage"
                                        onChange={inputChangeHandler}
                                        value={data.discount_percentage}
                                    />
                                    {errors.discount_percentage && (
                                        <div className="label">
                                            <span className="label-text-alt text-error">
                                                {errors.discount_percentage}
                                            </span>
                                        </div>
                                    )}
                                </label>
                            </div>

                            <div className="grid grid-cols-12 gap-6">
                                <label className="form-control mb-6 col-span-12 md:col-span-4">
                                    <div className="label">
                                        <span className="label-text">
                                            Gambar kursus
                                        </span>
                                        <span className="label-text-alt">
                                            JPG, JPEG, PNG
                                        </span>
                                    </div>
                                    <input
                                        type="file"
                                        className="file-input file-input-bordered"
                                        name="image"
                                        accept="image/*"
                                        onChange={inputChangeHandler}
                                        // value={data.image.toString()}
                                    />

                                    {errors.image && (
                                        <div className="label">
                                            <span className="label-text-alt text-error">
                                                {errors.image}
                                            </span>
                                        </div>
                                    )}
                                </label>

                                <div className="col-span-12 md:col-span-4">
                                    <img
                                        ref={previewImageRef}
                                        src=""
                                        alt=""
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-6 mb-6">
                                <div className="form-control py-6 col-span-8 md:col-span-6">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">
                                            Aktif?
                                        </span>
                                        <input
                                            type="checkbox"
                                            defaultChecked
                                            className="checkbox checkbox-primary"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={processing}
                            >
                                {processing ? (
                                    <span className="loading loading-spinner loading-md"></span>
                                ) : (
                                    <Save size={16} />
                                )}
                                <span>Simpan</span>
                            </button>
                            <Link
                                href={route("user_area.course.index")}
                                preserveState={true}
                                // preserveScroll={true}
                                className="btn btn-neutral"
                            >
                                Batalkan
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </UserAreaLayout>
    );
}
