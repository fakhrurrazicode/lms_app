import React from "react";

import { rupiah, stripHtml } from "@/bootstrap";
import HtmlRenderer from "@/Components/Custom/HtmlRenderer";
import LearningAreaLayout from "@/Layouts/LearningAreaLayout";
import { Link, useForm, usePage } from "@inertiajs/react";
import { GrPlay, GrResume } from "react-icons/gr";
import classNames from "classnames";
import { FaPlus, FaStar } from "react-icons/fa";

export default function Index({ course, course_review }) {
    const { auth } = usePage().props;
    const { data, setData, post, errors, reset, clearErrors } = useForm({
        course_id: course.id,
        user_id: auth.user.id,
        comment: "",
        stars: 1,
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();

        post(
            route("learning_area.course.course_review.store", {
                course: course,
            }),
            {
                onError: (error) => {
                    console.log("error", error);
                },
                preserveScroll: true,
            }
        );
    };

    const inputChangeHandler = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setData(name, value);
    };

    return (
        <LearningAreaLayout course={course}>
            <div className="card bg-base-100 py-8 mb-8 rounded-none">
                <div className="card-body py-0">
                    <div>
                        <h4 className="text-4xl font-bold mb-8">
                            {course.title}
                        </h4>

                        {!course_review ? (
                            <>
                                <div className="text-gray-800 text-xl  dark:text-gray-200 mb-6">
                                    <h5 className="mb-4 font-semibold">
                                        ✨ Bagikan Pengalaman Belajar Anda!
                                    </h5>
                                    <p className="text-sm mb-4">
                                        Kami sangat menghargai setiap pendapat
                                        dari Anda. Setelah menyelesaikan kursus
                                        ini, bantu peserta lain dengan
                                        memberikan ulasan berdasarkan pengalaman
                                        belajar Anda.
                                    </p>

                                    <ul className="text-sm mb-4">
                                        <li>
                                            ✅ Apakah materi kursus sesuai
                                            dengan harapan?{" "}
                                        </li>
                                        <li>
                                            ✅ Apakah penyampaian instruktur
                                            mudah dipahami?{" "}
                                        </li>
                                        <li>
                                            ✅ Apa hal yang paling berkesan dari
                                            kursus ini?
                                        </li>
                                    </ul>

                                    <p className="mb-4 text-sm">
                                        Ulasan Anda akan membantu kami
                                        meningkatkan kualitas dan membantu calon
                                        peserta lainnya dalam memilih kursus
                                        yang tepat.
                                    </p>

                                    <p className="mb-4 text-sm">
                                        🎓 Mari berkontribusi membangun
                                        komunitas belajar yang lebih baik. Tulis
                                        ulasan Anda sekarang!
                                    </p>
                                </div>
                                <form
                                    onSubmit={onSubmitHandler}
                                    className="text-gray-800 dark:text-gray-200 font-normal text-lg mb-[30px]"
                                >
                                    <div className="mb-6">
                                        <label className="form-control">
                                            <div className="label">
                                                <span className="label-text">
                                                    Komentar
                                                </span>
                                                {/* <span className="label-text-alt">
                                                            Alt label
                                                        </span> */}
                                            </div>
                                            <textarea
                                                className="textarea textarea-bordered h-32"
                                                placeholder="Komentar"
                                                name="comment"
                                                onChange={inputChangeHandler}
                                                value={data.comment}
                                            ></textarea>
                                            {errors.comment && (
                                                <div className="label">
                                                    <span className="label-text-alt text-error">
                                                        {errors.comment}
                                                    </span>
                                                </div>
                                            )}
                                        </label>
                                    </div>

                                    <div className="flex justify-center py-6 mb-6">
                                        <div className="rating rating-lg gap-6">
                                            <input
                                                type="radio"
                                                name="stars"
                                                value={1}
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked={true}
                                                onClick={(e) => {
                                                    setData(
                                                        e.target.name,
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                            <input
                                                type="radio"
                                                name="stars"
                                                value={2}
                                                className="mask mask-star-2 bg-orange-400"
                                                onClick={(e) => {
                                                    setData(
                                                        e.target.name,
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                            <input
                                                type="radio"
                                                name="stars"
                                                value={3}
                                                className="mask mask-star-2 bg-orange-400"
                                                onClick={(e) => {
                                                    setData(
                                                        e.target.name,
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                            <input
                                                type="radio"
                                                name="stars"
                                                value={4}
                                                className="mask mask-star-2 bg-orange-400"
                                                onClick={(e) => {
                                                    setData(
                                                        e.target.name,
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                            <input
                                                type="radio"
                                                name="stars"
                                                value={5}
                                                className="mask mask-star-2 bg-orange-400"
                                                onClick={(e) => {
                                                    setData(
                                                        e.target.name,
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="btn btn-warning btn-lg"
                                        >
                                            <FaStar />
                                            Submit Review
                                        </button>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <div className="mt-12">
                                <div className="text-gray-800 text-center text-2xl font-bold dark:text-gray-200  mb-6">
                                    Terima kasih sudah tetap bersama kami,
                                </div>
                                <div className="text-gray-800 text-center text-xl font-normal dark:text-gray-200  mb-6">
                                    review dan komentar anda akan menjadi
                                    motivasi bagi kami untuk tetap memberikan
                                    yang terbaik
                                </div>

                                <hr className="border-base-300" />

                                <div className="flex gap-2 justify-center mb-6 mt-6">
                                    <div>Komentar:</div>
                                    <div>{course_review.comment}</div>
                                </div>
                                <div className="flex gap-2 justify-center items-center mb-6">
                                    <div>Bintang:</div>
                                    <div className="flex gap-2">
                                        <FaStar className="text-3xl text-warning" />
                                        <FaStar className="text-3xl text-warning" />
                                        <FaStar className="text-3xl text-warning" />
                                        <FaStar className="text-3xl text-warning" />
                                        <FaStar className="text-3xl text-warning" />
                                    </div>
                                </div>
                                <div className="text-center italic py-6">
                                    Terima Kasih telah memberikan review
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </LearningAreaLayout>
    );
}
