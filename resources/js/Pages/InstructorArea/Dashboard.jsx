import UserAreaLayout from "@/Layouts/UserAreaLayout";

import { Head } from "@inertiajs/react";
import React from "react";

export default function Dashboard() {
    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />
            <div className="card bg-base-100">
                <div className="card-body">
                    <h1 className="text-xl font-bold mb-4">Dashboard</h1>
                    <p>Instructor Area Dashboard and Statistics Here</p>
                </div>
            </div>
        </UserAreaLayout>
    );
}
