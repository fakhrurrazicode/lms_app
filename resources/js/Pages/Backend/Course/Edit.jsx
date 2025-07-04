import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, usePage } from "@inertiajs/react";

import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import Form from "./Form";
import CourseManageTab from "./CourseManageTab";
import BackendLayout from "@/Layouts/BackendLayout";

export default function Edit({ course, course_categories, instructors }) {
    return (
        <BackendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Edit Kursus
                </h2>
            }
        >
            <Head title="Edit Kursus" />

            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <CourseManageTab course={course} />

                    <div className="card bg-base-100 shadow-xl rounded-t-none">
                        <Form
                            course={course}
                            course_categories={course_categories}
                            instructors={instructors}
                        />
                    </div>
                </div>
            </div>
        </BackendLayout>
    );
}
