import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Save, X } from "lucide-react";
import { toast } from "react-toastify";
import TinyEditor from "@/Components/Custom/TinyEditor";
import FileIconByType from "@/Components/Custom/FileIconByType";

export default function Edit({ course, course_section, course_lecture }) {
    const [videoPreview, setVideoPreview] = useState(null);
    const [attachmentPreviews, setAttachmentPreviews] = useState([]);
    const [existingAttachments, setExistingAttachments] = useState(
        course_lecture.attachments || []
    );

    useEffect(() => {
        console.log("existingAttachments", existingAttachments);
    }, [existingAttachments]);

    const [removedAttachmentIds, setRemovedAttachmentIds] = useState([]);

    const { data, setData, post, errors, processing } = useForm({
        course_id: course.id,
        course_section_id: course_section.id,
        title: course_lecture.title || "",
        video: null,
        description: course_lecture.description || "",
        attachments: [],
    });

    useEffect(() => {
        return () => {
            if (videoPreview) URL.revokeObjectURL(videoPreview);
        };
    }, [videoPreview]);

    const inputChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file" && name === "video") {
            const file = files[0];
            setData("video", file);
            if (file) setVideoPreview(URL.createObjectURL(file));
            else setVideoPreview(null);
        } else {
            setData(name, value);
        }
    };

    const handleRemoveExistingAttachment = (id) => {
        setExistingAttachments((prev) => prev.filter((a) => a.id !== id));
        setRemovedAttachmentIds((prev) => [...prev, id]);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        data["removed_attachment_ids"] = removedAttachmentIds;
        post(
            route("user_area.course.course_section.course_lecture.update", {
                course: course.id,
                course_section: course_section.id,
                course_lecture: course_lecture.id,
            }),
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    toast.success("Pelajaran Kursus berhasil disimpan");
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
                onError: () => toast.error("Pelajaran Kursus gagal disimpan"),
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
                                Ubah Pelajaran
                            </h3>
                            <p className="text-sm">
                                Pelajaran Unit terkecil dalam struktur kursus
                                online ...
                            </p>
                        </div>
                        <form onSubmit={onSubmitHandler}>
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
                                        (section, i) => (
                                            <option key={i} value={section.id}>
                                                {section.title}
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
                                        Ukuran maksimal file &lt;= 50MB
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
                                {course_lecture.youtube_video_id &&
                                    course_lecture.video_url && (
                                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow">
                                            <iframe
                                                className="w-full h-full"
                                                src={`https://www.youtube.com/embed/${course_lecture.youtube_video_id}`}
                                                title={lecture.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
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
                                    className="input input-bordered w-full"
                                    name="title"
                                    value={data.title}
                                    onChange={inputChangeHandler}
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

                            {existingAttachments.length > 0 && (
                                <div className="mb-6">
                                    <div className="label">
                                        <span className="label-text">
                                            Lampiran Lama
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {existingAttachments.map(
                                            (attachment) => (
                                                <li
                                                    key={attachment.id}
                                                    className="flex items-center justify-between bg-base-200 p-2 rounded"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <FileIconByType
                                                            filename={
                                                                attachment.filename
                                                            }
                                                            size={20}
                                                        />
                                                        <a
                                                            href={
                                                                attachment.file_url
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-sm text-primary hover:underline"
                                                        >
                                                            {
                                                                attachment.filename
                                                            }
                                                        </a>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleRemoveExistingAttachment(
                                                                attachment.id
                                                            )
                                                        }
                                                        className="text-error hover:text-red-700"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}

                            <label className="form-control w-full mb-6">
                                <div className="label">
                                    <span className="label-text">
                                        Lampiran Baru (Opsional)
                                    </span>
                                    <span className="label-text-alt">
                                        Dapat memilih lebih dari 1 file
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
                                {errors.attachments &&
                                    typeof errors.attachments === "string" && (
                                        <div className="label">
                                            <span className="label-text-alt text-error">
                                                {errors.attachments}
                                            </span>
                                        </div>
                                    )}
                                {Object.keys(errors)
                                    .filter((k) => k.startsWith("attachments."))
                                    .map((key, i) => (
                                        <div key={i} className="label">
                                            <span className="label-text-alt text-error">
                                                {errors[key]}
                                            </span>
                                        </div>
                                    ))}
                            </label>

                            {attachmentPreviews.length > 0 && (
                                <ul className="mt-4 space-y-2">
                                    {attachmentPreviews.map(
                                        (attachment, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center justify-between bg-base-200 p-2 rounded"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <FileIconByType
                                                        filename={
                                                            attachment.name
                                                        }
                                                        size={20}
                                                    />
                                                    <span className="truncate max-w-[200px] text-sm">
                                                        {attachment.name}
                                                    </span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const newPreviews = [
                                                            ...attachmentPreviews,
                                                        ];
                                                        newPreviews.splice(
                                                            index,
                                                            1
                                                        );

                                                        const newAttachments = [
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
                                        "user_area.course.course_section.course_lectures",
                                        { course: course.id }
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
