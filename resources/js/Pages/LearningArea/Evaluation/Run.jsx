import LearningAreaLayout from "@/Layouts/LearningAreaLayout";

import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";
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

export default function Run({
    course,
    course_section,
    evaluation,
    evaluation_attempt,
    questions,
}) {
    const [answers, setAnswers] = useState({});

    const handleAnswerChange = (questionId, choiceId) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: choiceId,
        }));
    };

    const handleSubmit = () => {
        Inertia.post(
            route("learning_area.course.course_section.evaluation.submit", {
                course: course,
                course_section: course_section,
                evaluation: evaluation,
            }),
            { answers: answers }
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

                    <div className="mb-6">{evaluation.instructions}</div>

                    <div className="mb-12">
                        {questions.map((question) => (
                            <div className="card bg-base-200 mb-6">
                                <div className="card-body">
                                    <div className="mb-6">
                                        {question.question}
                                    </div>

                                    <div className="grid grid-cols-2">
                                        {question.choices.map((choice) => (
                                            <label className="mb-4">
                                                <input
                                                    type="radio"
                                                    name={`question-${question.id}`} // agar unik per pertanyaan
                                                    value={choice.id}
                                                    className="radio"
                                                    onChange={(e) =>
                                                        handleAnswerChange(
                                                            question.id,
                                                            parseInt(
                                                                e.target.value
                                                            )
                                                        )
                                                    }
                                                />
                                                <span className="ml-6">
                                                    {choice.text}
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
                                onClick={handleSubmit}
                                className="btn btn-primary"
                            >
                                <FaSave /> Submit Hasil Evaluasi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </LearningAreaLayout>
    );
}
