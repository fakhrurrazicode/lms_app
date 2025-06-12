import LearningAreaLayout from "@/Layouts/LearningAreaLayout";

import { Head, Link, useForm } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import {
    FaCheck,
    FaChevronLeft,
    FaChevronRight,
    FaPlay,
    FaSave,
} from "react-icons/fa";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
    PlyrLayout,
    plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
import HtmlRenderer from "@/Components/Custom/HtmlRenderer";

export default function Run({
    course,
    course_section,
    evaluation,
    evaluation_attempt,
    questions,
}) {
    const formRef = useRef(null);
    const [secondsLeft, setSecondsLeft] = useState(evaluation.duration);
    // const [answers, setAnswers] = useState({});
    const { data, setData, post, processing, errors } = useForm({
        answers: {},
    });

    useEffect(() => {
        if (secondsLeft <= 0) {
            // Auto-submit saat waktu habis
            formRef.current?.dispatchEvent(
                new Event("submit", { cancelable: true, bubbles: true })
            );
            return;
        }

        const interval = setInterval(() => {
            setSecondsLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [secondsLeft]);

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
            2,
            "0"
        )}`;
    };

    const handleAnswerChange = (questionId, choiceId) => {
        setData("answers", {
            ...data.answers,
            [questionId]: choiceId,
        });
    };

    // const handleSubmit = () => {
    //     Inertia.post(
    //         route("learning_area.course.course_section.evaluation.submit", {
    //             course: course,
    //             course_section: course_section,
    //             evaluation: evaluation,
    //             evaluation_attempt: evaluation_attempt,
    //         }),
    //         { answers: answers }
    //     );
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(
            route("learning_area.course.course_section.evaluation.submit", {
                course: course,
                course_section: course_section,
                evaluation: evaluation,
                evaluation_attempt: evaluation_attempt,
            })
        );
    };

    return (
        <LearningAreaLayout course={course}>
            <Head title="Dashboard" />

            <div className="card">
                <div className="card-body bg-base-100">
                    <div className="breadcrumbs text-sm mb-6">
                        <ul>
                            <li>
                                <Link
                                    href={route("learning_area.course.show", {
                                        course: course,
                                    })}
                                    className="gap-2 items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="h-4 w-4 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                        ></path>
                                    </svg>
                                    {course.title}
                                </Link>
                            </li>

                            <li>
                                <span className="inline-flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="h-4 w-4 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                        ></path>
                                    </svg>
                                    {evaluation.title}
                                </span>
                            </li>
                        </ul>
                    </div>

                    <h1 className="text-5xl font-bold mb-6">
                        {evaluation.title}
                    </h1>

                    <div className="mb-6">
                        <HtmlRenderer htmlString={evaluation.instructions} />
                    </div>

                    <form onSubmit={handleSubmit} ref={formRef}>
                        <div className="text-right text-lg font-bold text-red-500 mb-4">
                            Sisa waktu: {formatTime(secondsLeft)}
                        </div>
                        <div className="mb-12">
                            {questions.map((question) => (
                                <div className="card bg-base-200 mb-6">
                                    <div className="card-body">
                                        <div className="mb-6">
                                            <HtmlRenderer
                                                htmlString={question.question}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2">
                                            {question.choices.map((choice) => (
                                                <label className="mb-4 flex">
                                                    <input
                                                        type="radio"
                                                        name={`question-${question.id}`}
                                                        value={choice.id}
                                                        className="radio"
                                                        checked={
                                                            data.answers[
                                                                question.id
                                                            ] === choice.id
                                                        }
                                                        onChange={() =>
                                                            handleAnswerChange(
                                                                question.id,
                                                                choice.id
                                                            )
                                                        }
                                                    />
                                                    <span className="ml-6">
                                                        <HtmlRenderer
                                                            htmlString={
                                                                choice.text
                                                            }
                                                        />
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={processing}
                                >
                                    <FaSave className="mr-2" /> Submit Hasil
                                    Evaluasi
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </LearningAreaLayout>
    );
}
