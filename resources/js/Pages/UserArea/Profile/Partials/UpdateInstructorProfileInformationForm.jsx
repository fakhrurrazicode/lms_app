import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import ReactQuill from "react-quill";

export default function UpdateInstructorProfileInformation({ className = "" }) {
    const instructor_info = usePage().props.auth.user.instructor_info;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            bio: instructor_info.bio,
            facebook_url: instructor_info.facebook_url,
            instagram_url: instructor_info.instagram_url,
            youtube_url: instructor_info.youtube_url,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("user_area.profile.update_instructor_info"), {
            preserveScroll: true,
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Informasi profil sebagai instruktur
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Perbarui Informasi Profil Akun Instruktur Anda
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="bio" value="Bio" className="mb-3" />

                    {/* <TextInput
                        id="bio"
                        className="mt-1 block w-full"
                        value={data.bio}
                        onChange={(e) => setData("bio", e.target.value)}
                        required
                        isFocused
                        autoComplete="bio"
                    /> */}

                    <ReactQuill
                        theme="snow"
                        value={data.bio}
                        onChange={(value) => setData("bio", value)}
                        className="input input-bordered rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600"
                        style={{
                            height: "16rem",
                            marginBottom: "1rem",
                        }}
                    />

                    <InputError className="mt-2" message={errors.bio} />
                </div>

                <div>
                    <InputLabel htmlFor="facebook_url" value="Facebook URL" />

                    <TextInput
                        id="facebook_url"
                        className="mt-1 block w-full"
                        value={data.facebook_url}
                        onChange={(e) =>
                            setData("facebook_url", e.target.value)
                        }
                        required
                        isFocused
                        autoComplete="facebook_url"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.facebook_url}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="instagram_url" value="Instagram URL" />

                    <TextInput
                        id="instagram_url"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.instagram_url}
                        onChange={(e) =>
                            setData("instagram_url", e.target.value)
                        }
                        required
                        autoComplete="username"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.instagram_url}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="youtube_url" value="Youtube URL" />

                    <TextInput
                        id="youtube_url"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.youtube_url}
                        onChange={(e) => setData("youtube_url", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.youtube_url} />
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
