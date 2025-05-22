import { Link, useForm } from "@inertiajs/react";
import React, { useEffect, useRef } from "react";

import { Save } from "lucide-react";
import ReactModal from "react-modal";
import { toast } from "react-toastify";
import classNames from "classnames";

export default function ModalForm({
    isOpen = false,
    setIsOpen,
    course,
    course_section = null,
    evaluation = null,
}) {
    const formRef = useRef(null);
    const fileInputRef = useRef(null);

    const { data, setData, post, errors, reset, clearErrors, processing } =
        useForm({
            course_section_id: evaluation
                ? evaluation.course_section_id
                : course_section
                ? course_section.id
                : "",
            title: evaluation ? evaluation.title : "",
            instructions: evaluation ? evaluation.instructions : "",
            duration: evaluation ? evaluation.duration : "",
            passing_score: evaluation ? evaluation.passing_score : "",
        });

    // useEffect(() => {
    //     setData({
    //         course_section_id: evaluation
    //             ? evaluation.course_section_id
    //             : course_section
    //             ? course_section.id
    //             : "",
    //         title: evaluation ? evaluation.title : "",
    //         instructions: evaluation ? evaluation.instructions : "",
    //         duration: evaluation ? evaluation.duration : "",
    //         passing_score: evaluation ? evaluation.passing_score : "",
    //     });
    // }, [course, evaluation, course_section, isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        // Cegah reset kalau user sudah mulai isi data
        if (
            data.title ||
            data.instructions ||
            data.duration ||
            data.passing_score
        )
            return;

        setData({
            course_section_id: evaluation
                ? evaluation.course_section_id
                : course_section
                ? course_section.id
                : "",
            title: evaluation ? evaluation.title : "",
            instructions: evaluation ? evaluation.instructions : "",
            duration: evaluation ? evaluation.duration : "",
            passing_score: evaluation ? evaluation.passing_score : "",
        });
    }, [isOpen]);

    useEffect(() => {
        if (isOpen == false) {
            reset();
            clearErrors();
            if (formRef.current) formRef.current.reset();
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    }, [isOpen]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (evaluation) {
            post(
                route("user_area.evaluation.update", {
                    evaluation,
                }),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        toast.success("Evaluation berhasil di ubah");
                        reset();
                        setIsOpen(false);
                    },
                    onError: () => {
                        toast.success("Evaluation gagal di ubah");
                    },
                }
            );
        } else {
            console.log("data", data);
            post(
                route("user_area.course.evaluation.store", {
                    course: course,
                }),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        toast.success("Evaluation berhasil di simpan");
                        reset();
                        setIsOpen(false);
                    },
                    onError: () => {
                        toast.success("Evaluation gagal di simpan");
                    },
                }
            );
        }
    };

    const inputChangeHandler = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setData(name, value);
    };
    return (
        <dialog
            id="my_modal_3"
            className={classNames("modal", { "modal-open": isOpen })}
            open={isOpen}
        >
            <div className="modal-box">
                <form method="dialog" ref={formRef}>
                    {/* if there is a button in form, it will close the modal */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                        }}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg mb-6">
                    {evaluation ? (
                        <>Ubah Evaluation</>
                    ) : (
                        <>Buat Evaluation baru</>
                    )}
                </h3>

                <form onSubmit={onSubmitHandler}>
                    <label className="form-control w-full mb-6">
                        <div className="label">
                            <span className="label-text">Course Section</span>
                        </div>
                        <select
                            className="select select-bordered"
                            name="course_section_id"
                            onChange={inputChangeHandler}
                            value={data.course_section_id}
                        >
                            <option></option>
                            {course.course_sections.map(
                                (course_section, index) => (
                                    <option
                                        key={index}
                                        value={course_section.id}
                                    >
                                        {course_section.title}
                                    </option>
                                )
                            )}
                        </select>
                        {errors.course_section_id && (
                            <div className="label">
                                <span className="label-text-alt text-error">
                                    {errors.course_section_id}
                                </span>
                            </div>
                        )}
                    </label>

                    <label className="form-control w-full mb-6">
                        <div className="label">
                            <span className="label-text">Judul</span>
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

                    <label className="form-control w-full mb-6">
                        <div className="label">
                            <span className="label-text">Instruksi</span>
                        </div>
                        <textarea
                            className="textarea textarea-bordered h-64"
                            placeholder="Instruksi"
                            name="instructions"
                            onChange={inputChangeHandler}
                            value={data.instructions}
                        ></textarea>
                        {errors.instructions && (
                            <div className="label">
                                <span className="label-text-alt text-error">
                                    {errors.instructions}
                                </span>
                            </div>
                        )}
                    </label>

                    <label className="form-control w-full mb-6">
                        <div className="label">
                            <span className="label-text">Durasi</span>
                        </div>
                        <input
                            type="number"
                            placeholder="Durasi"
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

                    <label className="form-control w-full mb-6">
                        <div className="label">
                            <span className="label-text">Passing Skor</span>
                        </div>
                        <input
                            type="number"
                            placeholder="Passing Skor"
                            className="input input-bordered w-full"
                            name="passing_score"
                            onChange={inputChangeHandler}
                            value={data.passing_score}
                        />
                        {errors.passing_score && (
                            <div className="label">
                                <span className="label-text-alt text-error">
                                    {errors.passing_score}
                                </span>
                            </div>
                        )}
                    </label>

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
                            <span>{evaluation ? "Ubah" : "Simpan"}</span>
                        </button>
                        <button
                            className="btn btn-neutral"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(false);
                            }}
                        >
                            Batalkan
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    );
}
