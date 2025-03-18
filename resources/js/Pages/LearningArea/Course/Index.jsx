import LearningAreaLayout from "@/Layouts/LearningAreaLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Index() {
    return (
        <LearningAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Courses
                </h2>
            }
        >
            <Head title="Dashboard" />
        </LearningAreaLayout>
    );
}
