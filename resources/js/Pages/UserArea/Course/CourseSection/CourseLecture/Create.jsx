import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

import { Save, X } from "lucide-react";
import { toast } from "react-toastify";
import TinyEditor from "@/Components/Custom/TinyEditor";
import FileIconByType from "@/Components/Custom/FileIconByType";

export default function Create({ course, course_section }) {
    const [videoPreview, setVideoPreview] = useState(null);
    const [attachmentPreviews, setAttachmentPreviews] = useState([]);
    const { data, setData, post, errors, reset, clearErrors, processing } =
        useForm({
            course_id: course.id,
            course_section_id: course_section.id,
            title: "",
            video: null,
            description: "",
            attachments: [],
        });

    useEffect(() => {
        return () => {
            if (videoPreview) {
                URL.revokeObjectURL(videoPreview);
            }
        };
    }, [videoPreview]);

    const inputChangeHandler = (e) => {
        const { name, value, type, files } = e.target;

        if (type === "file" && name === "video") {
            const file = files[0];
            setData("video", file);

            if (file) {
                const videoURL = URL.createObjectURL(file);
                setVideoPreview(videoURL);
            } else {
                setVideoPreview(null);
            }
        } else {
            setData(name, value);
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        post(
            route("user_area.course.course_section.course_lecture.store", {
                course: course.id,
                course_section: course_section.id,
            }),
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    toast.success("Pelajaran Kursus berhasil di simpan");
                    router.visit(
                        route(
                            "user_area.course.course_section.course_lectures",
                            {
                                course: course.id,
                            }
                        ),
                        {
                            preserveScroll: true,
                            preserveState: true,
                        }
                    );
                },
                onError: () => {
                    toast.error("Pelajaran Kursus gagal di simpan");
                },
            }
        );
    };
    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Pelajaran Kursus
                </h2>
            }
        >
            <Head title="Pelajaran Kursus" />

            <div className="w-full">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="mb-6">
                            <h3 className="text-primary text-xl font-bold mb-2">
                                Buat Pelajaran Baru
                            </h3>
                            <p className="text-sm">
                                Pelajaran Unit terkecil dalam struktur kursus
                                online yang berisi satu topik spesifik atau
                                materi pembelajaran. Setiap Pembelajaran Anda
                                dapat melakukan Upload Video, input teks, dan
                                attactment file yang dibutuhkan
                            </p>
                        </div>

                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-6">
                                <label className="form-control w-full mb-6">
                                    <div className="label">
                                        <span className="label-text">
                                            Pilih Bagian
                                        </span>
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
                                        <span className="label-text">
                                            Video Pelajaran
                                        </span>
                                        <span className="label-text-alt">
                                            {"Ukuran maksimal file <= 50MB"}
                                        </span>
                                    </div>

                                    <input
                                        type="file"
                                        accept="video/*"
                                        className="file-input file-input-bordered w-full"
                                        name="video"
                                        onChange={inputChangeHandler}
                                    />
                                    {errors.video && (
                                        <div className="label">
                                            <span className="label-text-alt text-error">
                                                {errors.video}
                                            </span>
                                        </div>
                                    )}

                                    {videoPreview && (
                                        <div className="mt-4">
                                            <video
                                                controls
                                                src={videoPreview}
                                                className="w-full max-h-96 rounded-lg shadow"
                                            />
                                        </div>
                                    )}
                                </label>

                                <label className="form-control w-full mb-6">
                                    <div className="label">
                                        <span className="label-text">
                                            Judul Pelajaran
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Judul Pelajaran"
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
                                            Deskripsi Pelajaran
                                        </span>
                                    </div>
                                    {/* <ReactQuill
                                                        theme="snow"
                                                        value={data.description}
                                                        onChange={(value) =>
                                                            setData("description", value)
                                                        }
                                                        className="input input-bordered"
                                                        style={{
                                                            minHeight: "16rem",
                                                            marginBottom: "1rem",
                                                        }}
                                                    /> */}
                                    <TinyEditor
                                        value={data.description}
                                        onChange={(value) =>
                                            setData("description", value)
                                        }
                                    />
                                    {errors.description && (
                                        <div className="label">
                                            <span className="label-text-alt text-error">
                                                {errors.description}
                                            </span>
                                        </div>
                                    )}
                                </label>

                                <label className="form-control w-full mb-6">
                                    <div className="label">
                                        <span className="label-text">
                                            Lampiran (opsional)
                                        </span>
                                        <span className="label-text-alt">
                                            Dapat Memilih lebih dari 1 file
                                        </span>
                                    </div>
                                    <input
                                        type="file"
                                        className="file-input file-input-bordered w-full"
                                        name="attachments"
                                        multiple
                                        onChange={(e) => {
                                            const files = Array.from(
                                                e.target.files
                                            );
                                            setAttachmentPreviews(files); // untuk preview
                                            setData("attachments", files); // untuk data form
                                        }}
                                    />

                                    {/* Menampilkan error general jika ada */}
                                    {errors.attachments &&
                                        typeof errors.attachments ===
                                            "string" && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.attachments}
                                                </span>
                                            </div>
                                        )}

                                    {/* Menampilkan error spesifik untuk setiap file */}
                                    {Object.keys(errors)
                                        .filter((key) =>
                                            key.startsWith("attachments.")
                                        )
                                        .map((key, idx) => (
                                            <div key={idx} className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors[key]}
                                                </span>
                                            </div>
                                        ))}
                                </label>
                                {attachmentPreviews.length > 0 && (
                                    <ul className="mt-4 space-y-2">
                                        {attachmentPreviews.map(
                                            (file, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center justify-between bg-base-200 p-2 rounded"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <FileIconByType
                                                            filename={file.name}
                                                            size={20}
                                                        />
                                                        <span className="truncate max-w-[200px] text-sm">
                                                            {file.name}
                                                        </span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            const newPreviews =
                                                                [
                                                                    ...attachmentPreviews,
                                                                ];
                                                            newPreviews.splice(
                                                                index,
                                                                1
                                                            );

                                                            const newAttachments =
                                                                [
                                                                    ...data.attachments,
                                                                ];
                                                            newAttachments.splice(
                                                                index,
                                                                1
                                                            );

                                                            setAttachmentPreviews(
                                                                newPreviews
                                                            );
                                                            setData(
                                                                "attachments",
                                                                newAttachments
                                                            );
                                                        }}
                                                        className="text-error hover:text-red-700"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
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
                                    href={route(
                                        "user_area.course.course_section.course_lectures",
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
