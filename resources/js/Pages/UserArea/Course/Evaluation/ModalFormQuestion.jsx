import { Link, useForm } from "@inertiajs/react";
import React, { useEffect, useRef } from "react";

import { Save } from "lucide-react";
import ReactModal from "react-modal";
import { toast } from "react-toastify";
import classNames from "classnames";
import { FaPlus } from "react-icons/fa";
import ReactQuill from "react-quill";
import TinyEditor from "@/Components/Custom/TinyEditor";

export default function ModalFormQuestion({
    isOpen = false,
    setIsOpen,
    evaluation = null,
    question = null,
}) {
    const formRef = useRef(null);

    const { data, setData, post, put, errors, reset, clearErrors, processing } =
        useForm({
            evaluation_id: question
                ? question.evaluation_id
                : evaluation
                ? evaluation.id
                : null,
            question: question ? question.question : "",
            type: question ? question.type : "multiple_choice",
            items:
                question && question.choices && question.choices.length > 0
                    ? question.choices
                    : [
                          { text: "", is_correct: true },
                          { text: "", is_correct: false },
                          { text: "", is_correct: false },
                          { text: "", is_correct: false },
                      ],
        });

    console.log("question", question);

    useEffect(() => {
        setData({
            evaluation_id: question
                ? question.evaluation_id
                : evaluation
                ? evaluation.id
                : null,
            question: question ? question.question : "",
            type: question ? question.type : "multiple_choice",
            items:
                question && question.choices && question.choices.length > 0
                    ? question.choices
                    : [
                          { text: "", is_correct: true },
                          { text: "", is_correct: false },
                          { text: "", is_correct: false },
                          { text: "", is_correct: false },
                      ],
        });
    }, [evaluation, question, isOpen]);

    const addChoice = () => {
        setData("items", [
            ...(data.items || []),
            { text: "", is_correct: false },
        ]);
    };

    const removeChoice = (index) => {
        if (data.items.length <= 2) {
            toast.warning("Minimal dua pilihan diperlukan.");
            return;
        }
        const updated = [...data.items];
        updated.splice(index, 1);
        setData("items", updated);
    };

    const handleChoiceChange = (index, field, value) => {
        if (field === "is_correct") {
            const updated = data.items.map((item, i) => ({
                ...item,
                is_correct: i === index, // hanya satu yang true
            }));
            setData("items", updated);
        } else {
            const updated = [...data.items];
            updated[index][field] = value;
            setData("items", updated);
        }
    };

    useEffect(() => {
        if (isOpen == false) {
            reset();
            clearErrors();
            if (formRef.current) formRef.current.reset();
        }
    }, [isOpen]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (question) {
            put(
                route("user_area.question.update", {
                    question,
                }),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        toast.success("Question berhasil di ubah");
                        reset();
                        setIsOpen(false);
                    },
                    onError: () => {
                        toast.success("Question gagal di ubah");
                    },
                }
            );
        } else {
            console.log("data", data);
            post(
                route("user_area.evaluation.question.store", {
                    evaluation: evaluation,
                }),
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        toast.success("Question berhasil di simpan");
                        reset();
                        setIsOpen(false);
                    },
                    onError: () => {
                        toast.success("Question gagal di simpan");
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

                        {/* <textarea
                            className="textarea textarea-bordered h-24"
                            placeholder="Pertanyaan"
                            name="question"
                            onChange={inputChangeHandler}
                            value={data.question}
                        ></textarea> */}

                        {/* <ReactQuill
                            theme="snow"
                            value={data.question}
                            onChange={(value) => setData("question", value)}
                            className="input input-bordered"
                            style={{
                                height: "16rem",
                                marginBottom: "1rem",
                            }}
                        /> */}

                        <TinyEditor
                            value={data.question}
                            onChange={(value) => setData("question", value)}
                        />
                        {errors.question && (
                            <div className="label">
                                <span className="label-text-alt text-error">
                                    {errors.question}
                                </span>
                            </div>
                        )}
                    </label>

                    <div className="mb-6">
                        <div className="label">
                            <span className="label-text font-semibold">
                                Pilihan Jawaban
                            </span>
                        </div>
                        {data.items?.map((choice, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex justify-between items-center gap-6">
                                    {/* <input
                                        type="text"
                                        className={classNames(
                                            "input input-bordered w-full"
                                        )}
                                        placeholder={`Pilihan ${index + 1}`}
                                        value={choice.text}
                                        onChange={(e) =>
                                            handleChoiceChange(index, "text", e)
                                        }
                                    /> */}

                                    {/* <ReactQuill
                                        theme="snow"
                                        value={choice.text}
                                        onChange={(value) =>
                                            handleChoiceChange(
                                                index,
                                                "text",
                                                value
                                            )
                                        }
                                        className="input input-bordered"
                                        style={{
                                            width: "100%",
                                            height: "8rem",
                                            marginBottom: "1rem",
                                        }}
                                    /> */}
                                    <TinyEditor
                                        value={choice.text}
                                        onChange={(value) =>
                                            handleChoiceChange(
                                                index,
                                                "text",
                                                value
                                            )
                                        }
                                    />
                                    <label className="flex items-center gap-1">
                                        <input
                                            type="radio"
                                            name="is_correct"
                                            className="radio"
                                            checked={choice.is_correct}
                                            onChange={(e) =>
                                                handleChoiceChange(
                                                    index,
                                                    "is_correct",
                                                    e
                                                )
                                            }
                                        />
                                        <span className="text-sm">Benar</span>
                                    </label>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-error"
                                        onClick={() => removeChoice(index)}
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Tampilkan error jika ada */}
                                {errors[`items.${index}.text`] && (
                                    <div className="label">
                                        <span className="label-text-alt text-error">
                                            {errors[`items.${index}.text`]}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}

                        <button
                            type="button"
                            className="btn btn-sm btn-outline mt-2"
                            onClick={addChoice}
                        >
                            <FaPlus size={12} /> Tambah Pilihan
                        </button>
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
                            <span>{question ? "Ubah" : "Simpan"}</span>
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
