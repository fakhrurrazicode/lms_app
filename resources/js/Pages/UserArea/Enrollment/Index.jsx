import CourseCard from "@/Components/CourseCard";
import EnrolledCourseCard from "@/Components/EnrolledCourseCard";
import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Index({ enrollments }) {
    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Order History
                </h2>
            }
        >
            <Head title="Enrollments" />

            <div className="w-full">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mb-6">Enrollments</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {enrollments.map((enrollment) => (
                                <EnrolledCourseCard enrollment={enrollment} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </UserAreaLayout>
    );
}
