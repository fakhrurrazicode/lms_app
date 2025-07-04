import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import React from "react";
import CourseManageTab from "../CourseManageTab";
import { Save } from "lucide-react";
import { toast } from "react-toastify";

export default function Create({ course }) {
    const { data, setData, post, errors, reset, clearErrors, processing } =
        useForm({
            course_id: course.id,
            title: "",
        });

    const inputChangeHandler = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setData(name, value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        post(
            route("backend.course.course_section.store", {
                course: course.id,
            }),
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    toast.success("Course Bagian berhasil di simpan");
                    router.visit(
                        route("backend.course.course_section.course_lectures", {
                            course: course.id,
                        }),
                        {
                            preserveScroll: true,
                            preserveState: true,
                        }
                    );
                },
                onError: () => {
                    toast.error("Course Bagian gagal di simpan");
                },
            }
        );
    };
    return (
        <BackendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Bagian Kursus
                </h2>
            }
        >
            <Head title="Bagian Kursus" />

            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="mb-6">
                                <h3 className="text-primary text-xl font-bold mb-2">
                                    Buat Bagian Baru
                                </h3>
                                <p className="text-sm">
                                    Pembagian materi kursus menjadi beberapa
                                    bagian atau modul yang lebih terstruktur.
                                    Setiap Bagian biasanya berisi sekelompok
                                    topik terkait yang membantu peserta kursus
                                    memahami materi secara bertahap.
                                </p>
                            </div>

                            <form onSubmit={onSubmitHandler}>
                                <div className="mb-6">
                                    <label className="form-control w-full mb-6">
                                        <div className="label">
                                            <span className="label-text">
                                                Judul Bagian
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Judul Bagian"
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
                                            "backend.course.course_section.course_lectures",
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
            </div>
        </BackendLayout>
    );
}
