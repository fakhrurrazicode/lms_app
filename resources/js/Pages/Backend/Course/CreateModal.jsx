import { router, useForm } from "@inertiajs/react";
import classNames from "classnames";
import { Save } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import slugify from "slugify";

export default function CreateModal({
    isOpen,
    setIsOpen,
    courseCategories,
    courseSubCategories,
    instructors,
}) {
    const { data, setData, post, errors, reset } = useForm({
        course_category_id: "",
        course_sub_category_id: "",
        instructor_id: "",

        title: "",
        slug: "",
        image: "",
        description: "",
        prerequisites: "",
        goals: "",
        duration: "",
        status: true,
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post("/backend/course", {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setIsOpen(false);
                reset();
                reloadCourseSubCategories({
                    courseCategoryId: null,
                });
            },
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
            case "course_category_id":
                reloadCourseSubCategories({
                    courseCategoryId: e.target.value,
                });
                break;
        }
    };

    const reloadCourseSubCategories = ({ courseCategoryId = null }) => {
        router.reload({
            only: ["courseSubCategories"],
            data: {
                selected_course_category_id: courseCategoryId,
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
                    <h2 className="card-title mb-6">Create new Course</h2>
                    <div className="mb-6">
                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Title</span>
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

                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Instructor</span>
                            </div>
                            <select
                                className="select select-bordered"
                                name="instructor_id"
                                onChange={inputChangeHandler}
                                value={data.instructor_id}
                            >
                                <option>:: Select Instructor ::</option>

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

                        <label className="form-control w-full mb-6">
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
                                    :: Select Sub Course Category ::
                                </option>

                                {courseCategories.map((courseCategory) => (
                                    <option
                                        key={courseCategory.id}
                                        value={courseCategory.id}
                                    >
                                        {courseCategory.name}
                                    </option>
                                ))}
                            </select>

                            {errors.course_category_id && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.course_category_id}
                                    </span>
                                </div>
                            )}
                        </label>

                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">
                                    Course Sub Category
                                </span>
                            </div>
                            <select
                                className="select select-bordered"
                                name="course_sub_category_id"
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
                                }}
                                value={data.course_sub_category_id}
                            >
                                <option>
                                    :: Select Course Sub Category ::
                                </option>

                                {courseSubCategories.map(
                                    (courseSubCategory) => (
                                        <option
                                            key={courseSubCategory.id}
                                            value={courseSubCategory.id}
                                        >
                                            {courseSubCategory.name}
                                        </option>
                                    )
                                )}
                            </select>
                            {errors.course_sub_category_id && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.course_sub_category_id}
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
                                reloadCourseSubCategories({
                                    courseCategoryId: null,
                                });
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
