import UserAreaLayout from "@/Layouts/UserAreaLayout";
import { Head, Link } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import UpdatePhotoForm from "./Partials/UpdatePhotoForm";
import UpdateInstructorProfileInformation from "./Partials/UpdateInstructorProfileInformationForm";
import classNames from "classnames";
import Tabs from "./Partials/Tabs";

export default function DeleteUser({ mustVerifyEmail, status }) {
    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="">
                <Tabs />
                <div className="mx-auto max-w-7xl space-y-6">
                    {/* <div className="p-4 shadow sm:rounded-lg sm:p-8 bg-base-100">
                        <UpdatePhotoForm className="max-w-xl" />
                    </div>
                    <div className="p-4 shadow sm:rounded-lg sm:p-8 bg-base-100">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 shadow sm:rounded-lg sm:p-8 bg-base-100">
                        <UpdateInstructorProfileInformation className="max-w-xl" />
                    </div>

                    <div className="p-4 shadow sm:rounded-lg sm:p-8 bg-base-100">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div> */}

                    <div className="p-4 shadow sm:rounded-lg sm:p-8 bg-base-100">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </UserAreaLayout>
    );
}
