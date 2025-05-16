import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, usePage } from "@inertiajs/react";

import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import Form from "./Form";
import CourseManageTab from "./CourseManageTab";

export default function Edit({ course, course_categories }) {
    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Edit Kursus
                </h2>
            }
        >
            <Head title="Edit Kursus" />

            <div className="w-full">
                <CourseManageTab course={course} />

                <div className="card bg-base-100 shadow-xl rounded-t-none">
                    <Form
                        course={course}
                        course_categories={course_categories}
                    />
                </div>
            </div>
        </UserAreaLayout>
    );
}
