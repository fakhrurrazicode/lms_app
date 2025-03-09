import InstructorAreaLayout from "@/Layouts/InstructorAreaLayout";

import { Head } from "@inertiajs/react";
import React from "react";

export default function Dashboard() {
    return (
        <InstructorAreaLayout
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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum, illum! Debitis, vero ab omnis laudantium
                        tempora qui voluptates iusto exercitationem consequuntur
                        reprehenderit eveniet voluptate, corporis commodi!
                        Perspiciatis qui maiores deleniti?
                    </p>
                </div>
            </div>
        </InstructorAreaLayout>
    );
}
