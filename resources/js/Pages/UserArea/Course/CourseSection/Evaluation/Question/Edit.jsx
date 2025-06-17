import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import React from "react";
import { Save, X } from "lucide-react";
import { toast } from "react-toastify";
import TinyEditor from "@/Components/Custom/TinyEditor";
import { FaPlus } from "react-icons/fa";

export default function Create({
    course,
    course_section,
    evaluation,
    question,
}) {
    const { data, setData, put, errors, processing } = useForm({
        evaluation_id: evaluation.id,
        question: question.question,
        type: question.type || "multiple_choice",
        items: question.choices.map((choice) => ({
            id: choice.id,
            text: choice.text,
            is_correct: choice.is_correct,
        })),
    });

    const addChoice = () => {
        setData("items", [
            ...(data.items || []),
            { id: null, text: "", is_correct: false }, // id null untuk pilihan baru
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
        const updated = [...data.items];

        if (field === "is_correct") {
            const newItems = updated.map((item, i) => ({
                ...item,
                is_correct: i === index, // true jika dipilih
            }));
            setData("items", newItems);
        } else {
            updated[index] = {
                ...updated[index],
                [field]: value,
            };
            setData("items", updated);
        }
    };

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(name, value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const isValid = data.items.every((item) => item.text.trim() !== "");
        if (!isValid) {
            toast.error("Semua pilihan harus diisi.");
            return;
        }

        put(
            route(
                "user_area.course.course_section.evaluation.question.update",
                {
                    course: course.id,
                    course_section: course_section.id,
                    evaluation: evaluation.id,
                    question: question.id,
                }
            ),
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    toast.success("Pertanyaan berhasil diubah");
                    router.visit(
                        route("user_area.course.course_section.evaluations", {
                            course: course.id,
                        }),
                        {
                            preserveScroll: true,
                            preserveState: true,
                        }
                    );
                },
                onError: () => {
                    toast.error("Pertanyaan gagal disimpan");
                },
            }
        );
    };

    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Pertanyaan Evaluasi Bagian
                </h2>
            }
        >
            <Head title="Pertanyaan Evaluasi Bagian" />

            <div className="w-full">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="mb-6">
                            <h3 className="text-primary text-xl font-bold mb-2">
                                Ubah Pertanyaan Evaluasi
                            </h3>
                            <p className="text-sm">
                                Evaluasi ini mencakup berbagai jenis pertanyaan
                                yang bertujuan untuk menguji pengetahuan dan
                                keterampilan yang telah diperoleh. Peserta
                                diharapkan untuk menjawab pertanyaan dengan
                                benar dan reflektif, sehingga dapat
                                mengidentifikasi area yang perlu diperbaiki dan
                                memperdalam pemahaman mereka tentang materi
                                pembelajaran.
                            </p>
                        </div>

                        <form onSubmit={onSubmitHandler}>
                            <label className="form-control w-full mb-6">
                                <div className="label">
                                    <span className="label-text">
                                        Pertanyaan
                                    </span>
                                </div>

                                <TinyEditor
                                    value={data.question}
                                    onChange={(value) =>
                                        setData("question", value)
                                    }
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
                                            <TinyEditor
                                                value={choice.text}
                                                onChange={(value) =>
                                                    handleChoiceChange(
                                                        index,
                                                        "text",
                                                        value
                                                    )
                                                }
                                                init={{ height: 200 }}
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
                                                <span className="text-sm">
                                                    Benar
                                                </span>
                                            </label>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-error"
                                                onClick={() =>
                                                    removeChoice(index)
                                                }
                                            >
                                                ✕
                                            </button>
                                        </div>

                                        {errors[`items.${index}.text`] && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {
                                                        errors[
                                                            `items.${index}.text`
                                                        ]
                                                    }
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
                                    <span>Ubah</span>
                                </button>
                                <Link
                                    href={route(
                                        "user_area.course.course_section.evaluations",
                                        {
                                            course: course.id,
                                        }
                                    )}
                                    preserveScroll={true}
                                    preserveState={true}
                                    className="btn btn-neutral"
                                >
                                    Batalkan
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </UserAreaLayout>
    );
}
