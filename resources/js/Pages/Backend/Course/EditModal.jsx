import { router, useForm, usePage } from "@inertiajs/react";
import { Save } from "lucide-react";
import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";
import slugify from "slugify";

export default function EditModal({ isOpen, setIsOpen, course, setCourse }) {
    const previewImageRef = useRef(null);

    const {
        props: { courseCategories, courseSubCategories, instructors },
    } = usePage();

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

    useEffect(() => {
        setData({
            course_category_id: course ? course.course_category_id : "",
            course_sub_category_id: course ? course.course_sub_category_id : "",
            instructor_id: course ? course.instructor_id : "",

            title: course ? course.title : "",
            slug: course ? course.slug : "",
            image: course ? course.image : "",
            description: course ? course.description : "",
            prerequisites: course ? course.prerequisites : "",
            goals: course ? course.goals : "",
            duration: course ? course.duration : "",
            status: course ? course.status : true,
        });

        // router.reload({
        //     only: ["courseSubCategories"],
        //     data: {
        //         selected_course_category_id: course
        //             ? course.course_category_id
        //             : "",
        //     },
        // });
    }, [course]);

    // useEffect(() => {
    //     reloadCourseSubCategories({
    //         courseCategoryId: course ? course.course_category_id : "",
    //     });
    // }, [data.course_sub_category_id]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post("/backend/course/" + course.id, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setIsOpen(false);
                reset();
                setCourse(null);
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

                setData("image", e.target.files ? e.target.files[0] : "");
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
            onAfterOpen={() => {
                router.reload({
                    only: ["courseSubCategories"],
                    data: {
                        selected_course_category_id: course
                            ? course.course_category_id
                            : "",
                    },
                });
            }}
            contentLabel="Minimal Modal Example"
            overlayClassName="fixed inset-0 bg-base-200/70 overflow-y-auto"
            className="absolute mt-16 left-1/2 -translate-x-1/2  overflow-auto outline-none p-5 w-full md:w-3/4 lg:w-8/12 h-auto"
            ariaHideApp={false}
        >
            <div className="card bg-base-100 shadow-xl">
                <form onSubmit={onSubmitHandler} className="card-body">
                    <h2 className="card-title mb-6">Update Course</h2>
                    <div className="mb-6">
                        <div className="flex gap-6">
                            <label className="form-control mb-6 w-1/2">
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
                        </div>

                        <div className="flex gap-6">
                            <label className="form-control mb-6 w-1/2">
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

                        <div className="flex gap-6">
                            <label className="form-control mb-6 w-1/3">
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
                        </div>
                        <div className="flex gap-6">
                            <label className="form-control mb-6 w-1/3">
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

                            <label className="form-control mb-6 w-1/3">
                                <div className="label">
                                    <span className="label-text">
                                        Course Sub Category
                                    </span>
                                </div>
                                <select
                                    className="select select-bordered"
                                    name="course_sub_category_id"
                                    onChange={inputChangeHandler}
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

                        <div className="flex gap-6">
                            <label className="form-control mb-6 w-full">
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

                        <div className="flex gap-6">
                            <label className="form-control mb-6 w-full">
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

                        <div className="flex gap-6">
                            <label className="form-control mb-6 w-full">
                                <div className="label">
                                    <span className="label-text">Goals</span>
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

                        <div className="flex gap-6">
                            <label className="form-control mb-6 w-1/3">
                                <div className="label">
                                    <span className="label-text">Duration</span>
                                    <span className="label-text-alt">
                                        In minutes
                                    </span>
                                </div>
                                <input
                                    type="number"
                                    placeholder="Duration"
                                    className="input input-bordered w-full"
                                    name="duration"
                                    onChange={inputChangeHandler}
                                    value={data.duration}
                                />
                                {errors.duration && (
                                    <div className="label">
                                        <span className="label-text-alt text-error">
                                            {errors.duration}
                                        </span>
                                    </div>
                                )}
                            </label>
                        </div>

                        <div className="flex gap-6">
                            <label className="form-control mb-6 w-1/3">
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
                            <div className="w-1/3">
                                <img
                                    ref={previewImageRef}
                                    src={course && course.image_url}
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                        </div>

                        <div className="flex gap-6 mb-6">
                            <div className="form-control py-6 w-1/5">
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
                        <button type="submit" className="btn btn-accent">
                            <Save size={16} />
                            <span>Update</span>
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
