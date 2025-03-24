import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import React, { useRef } from "react";
import slugify from "slugify";

export default function Edit({ course, instructors, course_categories }) {
    const previewImageRef = useRef(null);
    const { data, setData, post, errors, reset, processing, progress } =
        useForm({
            course_category_id: course.course_category_id,
            // course_sub_category_id: course.// course_sub_category_id,
            instructor_id: course.instructor_id,

            title: course.title,
            slug: course.slug,
            image: course.image,
            description: course.description,
            prerequisites: course.prerequisites,
            goals: course.goals,
            price: course.real_price,
            duration: course.duration,
            discount_percentage: course.discount_percentage,
            level: course.level,
            status: true,
        });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(
            route("backend.course.update", {
                course: course,
            }),
            {
                // forceFormData: true,
                preserveScroll: true,
                preserveState: true,
            }
        );
    };

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData(name, value);

        switch (name) {
            case "title":
                setData("slug", slugify(e.target.value).toLowerCase());
                break;
            case "course_category_id":
                reloadCourseSubCategories({
                    course_categoryId: e.target.value,
                });
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
        <BackendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Edit Courses
                </h2>
            }
        >
            <Head title="Edit Course" />

            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="card bg-base-100 shadow-xl">
                        <form onSubmit={onSubmitHandler} className="card-body">
                            <h2 className="card-title mb-6">Edit Course</h2>
                            <div className="mb-6">
                                <div className="grid grid-cols-12 gap-6">
                                    <label className="form-control mb-6 col-span-12 md:col-span-6">
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
                                </div>

                                <div className="grid grid-cols-12 gap-6">
                                    <label className="form-control mb-6 col-span-12 md:col-span-6">
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

                                <div className="grid grid-cols-12 gap-6">
                                    <label className="form-control mb-6 col-span-12 md:col-span-4">
                                        <div className="label">
                                            <span className="label-text">
                                                Instructor
                                            </span>
                                        </div>
                                        <select
                                            className="select select-bordered"
                                            name="instructor_id"
                                            onChange={inputChangeHandler}
                                            value={data.instructor_id}
                                        >
                                            <option>
                                                :: Select Instructor ::
                                            </option>

                                            {instructors.map((instructor) => (
                                                <option
                                                    key={instructor.id}
                                                    value={instructor.id}
                                                >
                                                    {instructor.name}
                                                </option>
                                            ))}
                                        </select>

                                        {errors.instructor_id && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.instructor_id}
                                                </span>
                                            </div>
                                        )}
                                    </label>
                                </div>

                                <div className="grid grid-cols-12 gap-6">
                                    <label className="form-control mb-6 col-span-12 md:col-span-4">
                                        <div className="label">
                                            <span className="label-text">
                                                Course Category
                                            </span>
                                        </div>
                                        <select
                                            className="select select-bordered"
                                            name="course_category_id"
                                            onChange={inputChangeHandler}
                                            value={data.course_category_id}
                                        >
                                            <option>
                                                :: Select Course Category ::
                                            </option>

                                            {course_categories.map(
                                                (course_category) => (
                                                    <option
                                                        key={course_category.id}
                                                        value={
                                                            course_category.id
                                                        }
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
                                                Course Level
                                            </span>
                                        </div>
                                        <select
                                            className="select select-bordered"
                                            name="level"
                                            onChange={inputChangeHandler}
                                            value={data.level}
                                        >
                                            <option>
                                                :: Select Course Level ::
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
                                                Description
                                            </span>
                                        </div>

                                        <textarea
                                            className="textarea textarea-bordered h-24"
                                            placeholder="Description"
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
                                                Prerequisites
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
                                                Goals
                                            </span>
                                        </div>
                                        <textarea
                                            className="textarea textarea-bordered h-24"
                                            placeholder="Goals"
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
                                                Price
                                            </span>
                                            <span className="label-text-alt">
                                                Dalam Satuan Rupiah
                                            </span>
                                        </div>
                                        <input
                                            type="number"
                                            placeholder="Price"
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
                                                Discount Percentage
                                            </span>
                                            <span className="label-text-alt">
                                                0 - 100%
                                            </span>
                                        </div>
                                        <input
                                            type="number"
                                            placeholder="Discount Percentage"
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
                                                Course Image
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
                                                Is active?
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
                                >
                                    <Save size={16} />
                                    <span>Save</span>
                                </button>
                                <Link
                                    href={route("backend.course.index")}
                                    preserveState={true}
                                    // preserveScroll={true}
                                    className="btn btn-neutral"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </BackendLayout>
    );
}
