import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function UpdatePhotoForm({ className = "" }) {
    const user = usePage().props.auth.user;

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            photo: null,
        });

    const [previewPhoto, setPreviewPhoto] = useState(user.photo_url);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setData("photo", file);

        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreviewPhoto(previewUrl);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("user_area.profile.update_photo"), {
            forceFormData: true,
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Photo Profile
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Update your account's profile photo
                </p>
            </header>

            <form
                onSubmit={submit}
                encType="multipart/form-data"
                className="mt-6 space-y-6"
            >
                <div>
                    <div className="mb-4">
                        <img
                            src={previewPhoto}
                            alt="Preview"
                            className="w-36 h-36 rounded-full object-cover border"
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="photo"
                            value="Photo"
                            className="mb-2"
                        />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            className="file-input file-input-bordered w-full"
                        />

                        <InputError className="mt-2" message={errors.photo} />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
