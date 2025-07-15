import { Link } from "@inertiajs/react";
import classNames from "classnames";

import React from "react";

export default function Tabs() {
    return (
        <div className="flex justify-start">
            <Link
                preserveScroll={true}
                preserveState={true}
                href={route("user_area.profile.edit")}
                className={classNames(
                    "bg-base-100/25 hover:bg-base-100/50 px-5 py-4 rounded-t-lg text-xs",
                    {
                        "!bg-base-100": route().current(
                            "user_area.profile.edit"
                        ),
                    }
                )}
            >
                Edit Profile
            </Link>

            <Link
                preserveScroll={true}
                preserveState={true}
                href={route("user_area.profile.edit_photo")}
                className={classNames(
                    "bg-base-100/25 hover:bg-base-100/50 px-5 py-4 rounded-t-lg text-xs",
                    {
                        "!bg-base-100": route().current(
                            "user_area.profile.edit_photo"
                        ),
                    }
                )}
            >
                Edit Photo
            </Link>

            <Link
                preserveScroll={true}
                preserveState={true}
                href={route("user_area.profile.edit_structor_info")}
                className={classNames(
                    "bg-base-100/25 hover:bg-base-100/50 px-5 py-4 rounded-t-lg text-xs",
                    {
                        "!bg-base-100": route().current(
                            "user_area.profile.edit_structor_info"
                        ),
                    }
                )}
            >
                Edit Profile Instruktur
            </Link>

            <Link
                preserveScroll={true}
                preserveState={true}
                href={route("user_area.profile.edit_password")}
                className={classNames(
                    "bg-base-100/25 hover:bg-base-100/50 px-5 py-4 rounded-t-lg text-xs",
                    {
                        "!bg-base-100": route().current(
                            "user_area.profile.edit_password"
                        ),
                    }
                )}
            >
                Edit Password
            </Link>

            <Link
                preserveScroll={true}
                preserveState={true}
                href={route("user_area.profile.delete_user")}
                className={classNames(
                    "bg-base-100/25 hover:bg-base-100/50 px-5 py-4 rounded-t-lg text-xs text-error",
                    {
                        "!bg-base-100": route().current(
                            "user_area.profile.delete_user"
                        ),
                    }
                )}
            >
                Delete User
            </Link>
        </div>
    );
}
