import PrimaryButton from "@/Components/PrimaryButton";

import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <FrontendLayout>
            <Head title="Email Verification" />

            <div className="container mx-auto px-4">
                <div className="py-40">
                    <div className="card bg-white dark:bg-slate-950 w-full shadow-xl rounded-md overflow-hidden">
                        <div className="card-body">
                            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                                Terima kasih telah mendaftar! Sebelum memulai,
                                Bisakah Anda memverifikasi alamat email Anda
                                dengan mengklik Di tautan yang baru saja kami
                                kirimi email kepada Anda?Jika Anda tidak
                                menerima email, kami dengan senang hati akan
                                mengirim kamu yang lain.
                            </div>

                            {status === "verification-link-sent" && (
                                <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                                    Tautan verifikasi baru telah dikirim ke
                                    Alamat email yang Anda berikan selama
                                    pendaftaran.
                                </div>
                            )}

                            <form onSubmit={submit}>
                                <div className="mt-4 flex items-center justify-between">
                                    <PrimaryButton disabled={processing}>
                                        Kirim ulang email verifikasi
                                    </PrimaryButton>

                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                                    >
                                        Log Out
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
