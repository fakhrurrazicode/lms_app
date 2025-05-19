import { Link, useForm } from "@inertiajs/react";
import React, { useEffect, useRef } from "react";

import { Save } from "lucide-react";
import ReactModal from "react-modal";
import { toast } from "react-toastify";
import classNames from "classnames";
import { FaPlus } from "react-icons/fa";

export default function ModalFormQuestion({
    isOpen = false,
    setIsOpen,
    evaluation = null,
    question = null,
}) {
    const formRef = useRef(null);

    const { data, setData, post, errors, reset, clearErrors, processing } =
        useForm({
            evaluation_id: question
                ? question.evaluation_id
                : evaluation
                ? evaluation.id
                : null,
            question: question ? question.question : "",
            type: question ? question.type : "",
        });

    useEffect(() => {
        setData({
            evaluation_id: question
                ? question.evaluation_id
                : evaluation
                ? evaluation.id
                : null,
            question: question ? question.question : "",
            type: question ? question.type : "",
        });
    }, [evaluation, question, isOpen]);

    useEffect(() => {
        if (isOpen == false) {
            reset();
            clearErrors();
            if (formRef.current) formRef.current.reset();
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
            <div className="modal-box w-11/12 max-w-5xl">
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
                        <>Ubah Pertanyaan</>
                    ) : (
                        <>Buat Pertanyaan baru</>
                    )}
                </h3>

                <form onSubmit={onSubmitHandler}>
                    <label className="form-control w-full mb-6">
                        <div className="label">
                            <span className="label-text">Pertanyaan</span>
                        </div>

                        <textarea
                            className="textarea textarea-bordered h-24"
                            placeholder="Pertanyaan"
                            name="question"
                            onChange={inputChangeHandler}
                            value={data.question}
                        ></textarea>
                        {errors.question && (
                            <div className="label">
                                <span className="label-text-alt text-error">
                                    {errors.question}
                                </span>
                            </div>
                        )}
                    </label>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Answer</th>
                                    <th>is Correct?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <textarea
                                            className="textarea textarea-bordered w-full"
                                            placeholder="Bio"
                                        ></textarea>
                                    </td>
                                    <td className="w-32">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                    </td>
                                </tr>
                                <tr className="answer-action">
                                    <td className="col-span-2">
                                        <button className=" btn btn-link">
                                            <FaPlus />
                                            <span>Tambah Jawaban</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
