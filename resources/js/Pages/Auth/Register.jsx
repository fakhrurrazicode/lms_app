import ApplicationLogo from "@/Components/ApplicationLogo";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function Register({ referral_code }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        referral_code: referral_code ? referral_code : "",
    });

    const [agreed, setAgreed] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            preserveScroll: true,
            preserveState: true,
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <FrontendLayout>
            <Head title="Register" />

            <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="h-48 w-48 fill-current text-gray-500" />
                    </Link>
                </div>

                <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800 mb-16">
                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Nama" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="username" value="Username" />

                            <TextInput
                                id="username"
                                name="username"
                                value={data.username}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("username", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.username}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Alamat Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Kata Sandi" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Konfirmasi Kata Sandi"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="referral_code"
                                value="Kode Referral (Opsional)"
                            />

                            <div className="flex gap-2">
                                <TextInput
                                    id="referral_code"
                                    name="referral_code"
                                    value={data.referral_code}
                                    className="mt-1 block w-full"
                                    autoComplete="referral_code"
                                    onChange={(e) =>
                                        setData("referral_code", e.target.value)
                                    }
                                />
                            </div>

                            <InputError
                                message={errors.referral_code}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4 mb-6 flex items-center justify-end">
                            <Link
                                href={route("login")}
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                            >
                                Sudah terdaftar?
                            </Link>
                        </div>

                        <div className="mt-4 mb-6 flex gap-4">
                            <input
                                type="checkbox"
                                className="checkbox"
                                checked={agreed}
                                onChange={(e) => {
                                    setAgreed(e.target.checked);
                                }}
                            />
                            <p>
                                I have read and agreed{" "}
                                <a
                                    target="_blank"
                                    className="text-primary font-bold"
                                    href={route("terms_and_conditions")}
                                >
                                    Terms and Conditions
                                </a>{" "}
                                and{" "}
                                <a
                                    target="_blank"
                                    className="text-primary font-bold"
                                    href={route("refund_policy")}
                                >
                                    Refund Policy
                                </a>
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <button
                                type="submit"
                                disabled={processing || !agreed}
                                className="btn btn-primary"
                            >
                                Register
                            </button>
                            <a
                                href="/auth/google/redirect"
                                className="btn btn-neutral"
                            >
                                <img
                                    src="/images/google-icon-logo.svg"
                                    className="w-6"
                                />
                                <span>Login/Register with Google</span>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </FrontendLayout>
    );
}
