import CourseCard from "@/Components/CourseCard";
import TinyEditor from "@/Components/Custom/TinyEditor";
import TiltElement from "@/Components/TiltElement";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { useState } from "react";
import { FaChartBar, FaChartLine } from "react-icons/fa6";
import { FiArrowLeft, FiArrowRight, FiBookOpen } from "react-icons/fi";
import { MdOutlineCheck } from "react-icons/md";
import { RiTriangleLine } from "react-icons/ri";

export default function BecomeInstructor({}) {
    const { auth } = usePage().props;

    const [agreed, setAgreed] = useState(false);

    let formField = {
        name: auth.user ? auth.user.name : "",
        username: auth.user ? auth.user.username : "",
        email: auth.user ? auth.user.email : "",
        phone_number: "",
        bio: "",
        id_card: "",
    };

    if (auth.user) {
        formField.password = "";
        formField.password_confirmation = "";
    }

    const { data, setData, post, errors, reset, processing } =
        useForm(formField);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route("submit_become_instructor"), {
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
        <FrontendLayout>
            <Head title="BecomeInstructor" />

            <section id="hero" className="">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] py-16">
                        <div data-aos="fade-up">
                            <h6 className="font-semibold text-4xl mb-12 text-primary">
                                Mendaftar Sebagai{" "}
                                <span className="text-secondary font-bold">
                                    Pengajar
                                </span>
                            </h6>
                            {/* <TiltElement className="relative mb-12 w-3/4 mx-auto">
                                <img
                                    className="z-10"
                                    src="/images/abouts/about_10.png"
                                    alt=""
                                />
                            </TiltElement> */}

                            <div class="video-responsive mb-6">
                                <iframe
                                    src="https://www.youtube.com/embed/YNN1SKC1Xv0"
                                    title="YouTube Shorts video"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                            </div>

                            <p className="mb-6">
                                Selamat datang di aplikasi LMS! Sebagai
                                instruktur, Anda dapat mendaftar untuk mengajar
                                kursus online dan berbagi pengetahuan dengan
                                siswa. Silakan isi form registrasi berikut untuk
                                memulai:
                            </p>

                            <h6 className="text-xl font-bold mb-6 text-secondary">
                                Informasi Pribadi
                            </h6>

                            <ul className="list-disc ml-6 mb-6">
                                <li>
                                    Nama Lengkap: Masukkan nama lengkap Anda.
                                </li>
                                <li>Username : Masukkan username Anda</li>
                                <li>
                                    Email: Masukkan alamat email Anda yang
                                    aktif.
                                </li>
                                <li>Password : masukkan Password Anda</li>
                                <li>
                                    Password Konfirmasi : Ulangi Password Anda{" "}
                                </li>
                                <li>
                                    Biografi Kamu : Masukkan Tentang Biografi
                                    Anda
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
                                    {/* <h2 className="card-title">Card Title</h2> */}
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">
                                                Nama
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Nama"
                                            className="input input-bordered w-full"
                                            name="name"
                                            onChange={inputChangeHandler}
                                            value={data.name}
                                        />
                                        {errors.name && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.name}
                                                </span>
                                            </div>
                                        )}
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">
                                                Username
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            className="input input-bordered w-full"
                                            name="username"
                                            onChange={inputChangeHandler}
                                            value={data.username}
                                        />
                                        {errors.username && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.username}
                                                </span>
                                            </div>
                                        )}
                                    </label>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">
                                                Email
                                            </span>
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="input input-bordered w-full"
                                            name="email"
                                            onChange={inputChangeHandler}
                                            value={data.email}
                                        />
                                        {errors.email && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.email}
                                                </span>
                                            </div>
                                        )}
                                    </label>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">
                                                Password
                                            </span>
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="input input-bordered w-full"
                                            name="password"
                                            onChange={inputChangeHandler}
                                            value={data.password}
                                        />
                                        {errors.password && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.password}
                                                </span>
                                            </div>
                                        )}
                                    </label>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">
                                                Password Confirmation
                                            </span>
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Password Confirmation"
                                            className="input input-bordered w-full"
                                            name="password_confirmation"
                                            onChange={inputChangeHandler}
                                            value={data.password_confirmation}
                                        />
                                        {errors.password_confirmation && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {
                                                        errors.password_confirmation
                                                    }
                                                </span>
                                            </div>
                                        )}
                                    </label>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">
                                                No Handphone
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="No Handphone"
                                            className="input input-bordered w-full"
                                            name="phone_number"
                                            onChange={inputChangeHandler}
                                            value={data.phone_number}
                                        />
                                        {errors.phone_number && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.phone_number}
                                                </span>
                                            </div>
                                        )}
                                    </label>

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
                                        {/* <textarea
                                            className="textarea textarea-bordered h-24"
                                            placeholder="Bio"
                                            name="bio"
                                            onChange={inputChangeHandler}
                                        >
                                            {data.bio}
                                        </textarea> */}
                                        {/* <ReactQuill
                                            theme="snow"
                                            value={data.bio}
                                            onChange={(value) =>
                                                setData("bio", value)
                                            }
                                            className="input input-bordered"
                                            style={{
                                                height: "16rem",
                                                marginBottom: "1rem",
                                            }}
                                        /> */}
                                        <TinyEditor
                                            value={data.bio}
                                            onChange={(value) =>
                                                setData("bio", value)
                                            }
                                        />
                                        {errors.bio && (
                                            <div className="label">
                                                <span className="label-text-alt text-error">
                                                    {errors.bio}
                                                </span>
                                            </div>
                                        )}
                                    </label>

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
                                                href={route(
                                                    "terms_and_conditions"
                                                )}
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
                                            disabled={processing || !agreed}
                                            className="btn btn-secondary w-full"
                                        >
                                            Daftar Sebagai Pengajar
                                        </button>
                                        <a
                                            href="/auth/google/redirect/1"
                                            // disabled={processing}
                                            className="btn btn-neutral "
                                        >
                                            <img
                                                src="/images/google-icon-logo.svg"
                                                className="w-6"
                                            />
                                            <span>
                                                Daftar Sebagai Pengajar dengan
                                                Google
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
