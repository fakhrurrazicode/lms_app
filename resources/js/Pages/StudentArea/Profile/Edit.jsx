import StudentLayout from "@/Layouts/StudentLayout";

import { Head, Link, usePage } from "@inertiajs/react";
import UpdateProfileInformation from "./Partials/UpdateProfileInformationForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import DeleteUserForm from "./Partials/DeleteUserForm";

export default function Edit({ mustVerifyEmail, status }) {
    const { user } = usePage().props.auth;

    return (
        <StudentLayout>
            <div className="">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 ">
                        <UpdateProfileInformation
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 ">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 ">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </StudentLayout>
    );
}
