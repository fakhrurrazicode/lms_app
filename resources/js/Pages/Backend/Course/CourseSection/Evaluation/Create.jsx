import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

import { Save, X } from "lucide-react";
import { toast } from "react-toastify";
import TinyEditor from "@/Components/Custom/TinyEditor";
import FileIconByType from "@/Components/Custom/FileIconByType";

export default function Create({ course, course_section }) {
    const { data, setData, post, errors, reset, clearErrors, processing } =
        useForm({
            course_section_id: course_section.id,
            title: "",
            duration: 60,
            passing_score: 0,
        });

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        post(
            route("backend.course.course_section.evaluation.store", {
                course: course.id,
                course_section: course_section.id,
            }),
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    toast.success("Evaluasi Bagian Kursus berhasil di simpan");
                    router.visit(
                        route("backend.course.course_section.evaluations", {
                            course: course.id,
                        }),
                        {
                            preserveScroll: true,
                            preserveState: true,
                        }
                    );
                },
                onError: () => {
                    toast.error("Evaluasi Bagian Kursus gagal di simpan");
                },
            }
        );
    };
    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Evaluasi Bagian Kursus
                </h2>
            }
        >
            <Head title="Evaluasi Bagian Kursus" />

            <div className="w-full">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="mb-6">
                            <h3 className="text-primary text-xl font-bold mb-2">
                                Buat Evaluasi Baru
                            </h3>
                            <p className="text-sm">
                                Evaluasi ini mencakup berbagai jenis pertanyaan
                                yang bertujuan untuk menguji pengetahuan dan
                                keterampilan yang telah diperoleh. Peserta
                                diharapkan untuk menjawab pertanyaan dengan
                                benar dan reflektif, sehingga dapat
                                mengidentifikasi area yang perlu diperbaiki dan
                                memperdalam pemahaman mereka tentang materi
                                pembelajaran
                            </p>
                        </div>

                        <form onSubmit={onSubmitHandler}>
                            <label className="form-control w-full mb-6">
                                <div className="label">
                                    <span className="label-text">
                                        Bagian Kursus
                                    </span>
                                </div>
                                <select
                                    className="select select-bordered "
                                    name="course_section_id"
                                    // onChange={inputChangeHandler}
                                    value={data.course_section_id}
                                    disabled={true}
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
                                    <span className="label-text">
                                        Judul Evaluasi
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

                            {/* <label className="form-control w-full mb-6">
                                <div className="label">
                                    <span className="label-text">
                                        Instruksi
                                    </span>
                                </div>

                                <TinyEditor
                                    value={data.instructions}
                                    onChange={(value) =>
                                        setData("instructions", value)
                                    }
                                />

                                {errors.instructions && (
                                    <div className="label">
                                        <span className="label-text-alt text-error">
                                            {errors.instructions}
                                        </span>
                                    </div>
                                )}
                            </label> */}

                            <label className="form-control w-full mb-6">
                                <div className="label">
                                    <span className="label-text">Durasi</span>
                                    <span className="label-text-alt">
                                        Dalam Satuan Menit
                                    </span>
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
                                    <span className="label-text">
                                        Passing Skor
                                    </span>
                                    <span className="label-text-alt">
                                        Harus Lebih Kecil atau sama dengan dari
                                        Jumlah Pertanyaan
                                    </span>
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
                                    <span>Simpan</span>
                                </button>
                                <Link
                                    href={route(
                                        "backend.course.course_section.evaluations",
                                        {
                                            course: course.id,
                                        }
                                    )}
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
