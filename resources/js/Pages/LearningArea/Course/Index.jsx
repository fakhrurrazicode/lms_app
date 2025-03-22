import LearningAreaLayout from "@/Layouts/LearningAreaLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Index({ course }) {
    return (
        <LearningAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Courses
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="card">
                <div className="card-body py-0">
                    <h1 className="text-3xl font-bold mb-6 text-primary">
                        {course.title}
                    </h1>
                    <div className="mb-6">
                        <p>{course.description}</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-primary mb-3">
                            Goals
                        </h3>
                        <div>{course.goals}</div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-primary mb-3">
                            Prerequisites
                        </h3>
                        <div>{course.prerequisites}</div>
                    </div>
                </div>
            </div>
        </LearningAreaLayout>
    );
}
