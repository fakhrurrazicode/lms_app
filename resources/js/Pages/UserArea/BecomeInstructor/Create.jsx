import TiltElement from "@/Components/TiltElement";
import UserAreaLayout from "@/Layouts/UserAreaLayout";

import { Head, Link, useForm, usePage } from "@inertiajs/react";

import React from "react";
import { FiCheckSquare } from "react-icons/fi";

export default function Dashboard() {
    const { auth } = usePage().props;

    console.log("auth", auth);

    const { data, setData, post, errors, reset, processing, progress } =
        useForm({
            bio: "",
            id_card: "",
        });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route("user_area.become_instructor.store"), {
            // forceFormData: true,
            preserveScroll: true,
            preserveState: true,
        });
    };

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData(name, value);

        switch (name) {
            case "id_card":
                const file = e.target.files[0];

                if (file) {
                    const reader = new FileReader();

                    reader.onload = function (e) {
                        previewImageRef.current.src = e.target.result;
                    };

                    reader.readAsDataURL(file);
                } else {
                    previewImageRef.current.classList.add("hidden");
                    previewImageRef.current.src = "";
                }

                setData("id_card", file);
                break;
        }
    };

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
                    {auth.user.instructor_info ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="col-span-3">
                                <div className="card bg-base-100 py-6">
                                    <div className="card-body flex flex-col items-center">
                                        <div className="py-6">
                                            <FiCheckSquare className="text-success text-7xl" />
                                        </div>
                                        <h3 className="text-lg font-bold">
                                            Pengajuan Pendaftaran Sebagai
                                            Pengajar telah kami terima.
                                        </h3>
                                        <p className="mb-6">
                                            Harap menunggu proses evaluasi
                                            pengajuan anda.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            <div data-aos="fade-up">
                                <h6 className="font-semibold text-4xl mb-12 text-primary">
                                    Mendaftar Sebagai{" "}
                                    <span className="text-secondary font-bold">
                                        Instruktur
                                    </span>
                                </h6>
                                <TiltElement className="relative mb-12 w-3/4 mx-auto">
                                    <img
                                        className="z-10"
                                        src="/images/abouts/about_10.png"
                                        alt=""
                                    />
                                </TiltElement>

                                <p className="mb-6">
                                    Selamat datang di aplikasi LMS! Sebagai
                                    instruktur, Anda dapat mendaftar untuk
                                    mengajar kursus online dan berbagi
                                    pengetahuan dengan siswa. Silakan isi form
                                    registrasi berikut untuk memulai:
                                </p>

                                <h6 className="text-xl font-bold mb-6 text-secondary">
                                    Informasi Pribadi
                                </h6>

                                <ul className="list-disc ml-6 mb-6">
                                    <li>
                                        Nama Lengkap: Masukkan nama lengkap
                                        Anda.
                                    </li>
                                    <li>Username : Masukkan username Anda</li>
                                    <li>
                                        Email: Masukkan alamat email Anda yang
                                        aktif.
                                    </li>
                                    <li>Password : masukkan Password Anda</li>
                                    <li>
                                        Password Konfirmasi : Ulangi Password
                                        Anda{" "}
                                    </li>
                                    <li>
                                        Biografi Kamu : Masukkan Tentang
                                        Biografi Anda
                                    </li>
                                </ul>

                                <h6 className="text-xl text-secondary font-bold mb-6">
                                    Tombol Registrasi
                                </h6>

                                <p>
                                    Registrasi: Klik tombol "Registrasi" untuk
                                    menyelesaikan proses registrasi.
                                </p>
                            </div>

                            <div data-aos="fade-up">
                                <form
                                    onSubmit={onSubmitHandler}
                                    className="card bg-white dark:bg-slate-950 shadow-sm"
                                >
                                    <div className="card-body">
                                        <label className="form-control mb-6 col-span-12 md:col-span-4">
                                            <div className="label">
                                                <span className="label-text">
                                                    Upload KTP
                                                </span>
                                                <span className="label-text-alt">
                                                    JPG, JPEG, PNG
                                                </span>
                                            </div>
                                            <input
                                                type="file"
                                                className="file-input file-input-bordered"
                                                name="id_card"
                                                accept="image/*"
                                                onChange={inputChangeHandler}
                                                // value={data.image.toString()}
                                            />

                                            {errors.id_card && (
                                                <div className="label">
                                                    <span className="label-text-alt text-error">
                                                        {errors.id_card}
                                                    </span>
                                                </div>
                                            )}
                                        </label>

                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">
                                                    Your bio
                                                </span>
                                            </div>
                                            <textarea
                                                className="textarea textarea-bordered h-24"
                                                placeholder="Bio"
                                                name="bio"
                                                onChange={inputChangeHandler}
                                            >
                                                {data.bio}
                                            </textarea>
                                            {errors.bio && (
                                                <div className="label">
                                                    <span className="label-text-alt text-error">
                                                        {errors.bio}
                                                    </span>
                                                </div>
                                            )}
                                        </label>

                                        <label
                                            htmlFor="agree"
                                            className="flex items-center gap-2 py-6"
                                        >
                                            <input
                                                type="checkbox"
                                                className="checkbox checkbox-primary"
                                                name="agree"
                                            />
                                            <span>
                                                You agree to our friendly{" "}
                                                <span className="font-bold cursor-pointer">
                                                    Privacy policy.
                                                </span>
                                            </span>
                                        </label>
                                        <div>
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="btn btn-secondary w-full"
                                            >
                                                Update Info
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </UserAreaLayout>
    );
}
