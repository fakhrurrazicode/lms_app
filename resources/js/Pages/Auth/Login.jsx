import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <main className="bg-transparent">
                <section className="relative">
                    <div className="container py-100px">
                        <div className=" md:w-2/3 mx-auto">
                            <div className="grid grid-cols-2 gap-11px text-blackColor text-lg lg:text-size-22 font-semibold font-hind mb-43px mt-30px md:mt-0">
                                <Link
                                    as="button"
                                    preserveScroll={true}
                                    href="/login"
                                    className="py-9px lg:py-6 hover:text-primaryColor dark:text-whiteColor dark:hover:text-primaryColor bg-white dark:bg-whiteColor-dark dark:hover:bg-whiteColor-dark hover:bg-white relative group/btn shadow-bottom hover:shadow-bottom dark:shadow-standard-dark disabled:cursor-pointer rounded-standard"
                                >
                                    <span className="absolute w-full h-1 bg-primaryColor top-0 left-0 group-hover/btn:w-full"></span>
                                    Login
                                </Link>
                                <Link
                                    as="button"
                                    preserveScroll={true}
                                    href="/register"
                                    className="py-9px lg:py-6 hover:text-primaryColor dark:hover:text-primaryColor dark:text-whiteColor bg-lightGrey7 dark:bg-lightGrey7-dark hover:bg-white dark:hover:bg-whiteColor-dark relative group/btn hover:shadow-bottom dark:shadow-standard-dark disabled:cursor-pointer rounded-standard"
                                >
                                    <span className="absolute w-0 h-1 bg-primaryColor top-0 left-0 group-hover/btn:w-full"></span>
                                    Sign up
                                </Link>
                            </div>

                            <div className="shadow-container bg-whiteColor dark:bg-whiteColor-dark pt-10px px-5 pb-10 md:p-50px md:pt-30px rounded-5px">
                                <div className="">
                                    <div className="block opacity-100 transition-opacity duration-150 ease-linear">
                                        <div className="text-center">
                                            <h3 className="text-size-32 font-bold text-blackColor dark:text-blackColor-dark mb-2 leading-normal">
                                                Login
                                            </h3>
                                            <p className="text-contentColor dark:text-contentColor-dark mb-15px">
                                                Don't have an account yet?
                                                <a
                                                    href="login.html"
                                                    className="hover:text-primaryColor relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-primaryColor after:transition-all after:duration-300 hover:after:w-full"
                                                >
                                                    Sign up for free
                                                </a>
                                            </p>
                                        </div>

                                        {status && (
                                            <div className="mb-4 text-sm font-medium text-green-600">
                                                {status}
                                            </div>
                                        )}

                                        <form
                                            className="pt-25px"
                                            onSubmit={submit}
                                        >
                                            <div className="mb-25px">
                                                <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={data.email}
                                                    // className="mt-1 block w-full"
                                                    autoComplete="username"
                                                    isfocused="true"
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                                                />

                                                <InputError
                                                    message={errors.email}
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div className="mb-25px">
                                                <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                                                    Password
                                                </label>
                                                <input
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    // className="mt-1 block w-full"
                                                    autoComplete="current-password"
                                                    onChange={(e) =>
                                                        setData(
                                                            "password",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                                                />

                                                <InputError
                                                    message={errors.password}
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div className="text-contentColor dark:text-contentColor-dark flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id="remember"
                                                        className="w-18px h-18px mr-2 block box-content"
                                                        name="remember"
                                                        checked={data.remember}
                                                        onChange={(e) =>
                                                            setData(
                                                                "remember",
                                                                e.target.checked
                                                            )
                                                        }
                                                    />
                                                    <label htmlFor="remember">
                                                        Remember me
                                                    </label>
                                                </div>

                                                {canResetPassword && (
                                                    <div>
                                                        <Link
                                                            href={route(
                                                                "password.request"
                                                            )}
                                                            className="hover:text-primaryColor relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-primaryColor after:transition-all after:duration-300 hover:after:w-full"
                                                        >
                                                            Forgot your
                                                            password?
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="my-25px text-center">
                                                <button
                                                    disabled={processing}
                                                    type="submit"
                                                    className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px w-full border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                                                >
                                                    Log in
                                                </button>
                                            </div>

                                            <div>
                                                <p className="text-contentColor dark:text-contentColor-dark text-center relative mb-15px before:w-2/5 before:h-1px before:bg-borderColor4 dark:before:bg-borderColor2-dark before:absolute before:left-0 before:top-4 after:w-2/5 after:h-1px after:bg-borderColor4 dark:after:bg-borderColor2-dark after:absolute after:right-0 after:top-4">
                                                    or Log-in with
                                                </p>
                                            </div>
                                            <div className="text-center flex gap-x-1 md:gap-x-15px lg:gap-x-25px gap-y-5 items-center justify-center flex-wrap">
                                                <button
                                                    type="submit"
                                                    className="text-size-15 text-whiteColor bg-primaryColor px-11 py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                                                >
                                                    <i className="icofont-facebook"></i>
                                                    Facebook
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="text-size-15 text-whiteColor bg-primaryColor px-11 py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                                                >
                                                    <i className="icofont-google-plus"></i>
                                                    Google
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img
                            loading="lazy"
                            className="absolute right-[14%] top-[30%] animate-move-var"
                            src="./assets/images/education/hero_shape2.png"
                            alt="Shape"
                        />
                        <img
                            loading="lazy"
                            className="absolute left-[5%] top-1/2 animate-move-hor"
                            src="./assets/images/education/hero_shape3.png"
                            alt="Shape"
                        />
                        <img
                            loading="lazy"
                            className="absolute left-1/2 bottom-[60px] animate-spin-slow"
                            src="./assets/images/education/hero_shape4.png"
                            alt="Shape"
                        />
                        <img
                            loading="lazy"
                            className="absolute left-1/2 top-10 animate-spin-slow"
                            src="./assets/images/education/hero_shape5.png"
                            alt="Shape"
                        />
                    </div>
                </section>
            </main>
        </GuestLayout>
    );
}
