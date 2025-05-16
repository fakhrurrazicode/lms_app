import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

import { Save } from "lucide-react";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import slugify from "slugify";
import "react-quill/dist/quill.snow.css"; // Impo
import Form from "./Form";

export default function Create({ course_categories }) {
    const { auth } = usePage().props;

    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Membuat Kursus
                </h2>
            }
        >
            <Head title="Create Course" />

            <div className="w-full">
                <div className="card bg-base-100 shadow-xl rounded-t-none">
                    <Form
                        // course={course}
                        course_categories={course_categories}
                    />
                </div>
            </div>
        </UserAreaLayout>
    );
}
