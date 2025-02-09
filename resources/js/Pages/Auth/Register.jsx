import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
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
                                    className="py-9px lg:py-6 hover:text-primaryColor dark:hover:text-primaryColor dark:text-whiteColor bg-lightGrey7 dark:bg-lightGrey7-dark hover:bg-white dark:hover:bg-whiteColor-dark relative group/btn hover:shadow-bottom dark:shadow-standard-dark disabled:cursor-pointer rounded-standard"
                                >
                                    <span className="absolute w-0 h-1 bg-primaryColor top-0 left-0 group-hover/btn:w-full"></span>
                                    Login
                                </Link>
                                <Link
                                    as="button"
                                    preserveScroll={true}
                                    href="/register"
                                    className="py-9px lg:py-6 hover:text-primaryColor dark:text-whiteColor dark:hover:text-primaryColor bg-white dark:bg-whiteColor-dark dark:hover:bg-whiteColor-dark hover:bg-white relative group/btn shadow-bottom hover:shadow-bottom dark:shadow-standard-dark disabled:cursor-pointer rounded-standard"
                                >
                                    <span className="absolute w-full h-1 bg-primaryColor top-0 left-0 group-hover/btn:w-full"></span>
                                    Sign up
                                </Link>
                            </div>

                            <div className="shadow-container bg-whiteColor dark:bg-whiteColor-dark pt-10px px-5 pb-10 md:p-50px md:pt-30px rounded-5px">
                                <div className="">
                                    <div className="block opacity-100 transition-opacity duration-150 ease-linear">
                                        <div className="text-center">
                                            <h3 className="text-size-32 font-bold text-blackColor dark:text-blackColor-dark mb-2 leading-normal">
                                                Sign Up
                                            </h3>
                                            <p className="text-contentColor dark:text-contentColor-dark mb-15px">
                                                Already have an account?
                                                <a
                                                    href="login.html"
                                                    className="hover:text-primaryColor relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-primaryColor after:transition-all after:duration-300 hover:after:w-full"
                                                >
                                                    Log In
                                                </a>
                                            </p>
                                        </div>

                                        <form className="pt-25px">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-30px gap-y-25px mb-25px">
                                                <div>
                                                    <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                                                        Name
                                                    </label>
                                                    <input
                                                        id="name"
                                                        name="name"
                                                        value={data.name}
                                                        // className="mt-1 block w-full"
                                                        autoComplete="name"
                                                        isFocused={true}
                                                        onChange={(e) =>
                                                            setData(
                                                                "name",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        type="text"
                                                        placeholder="Name"
                                                        className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                                                    />
                                                    <InputError
                                                        message={errors.name}
                                                        className="mt-2"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                                                        Username
                                                    </label>
                                                    <input
                                                        id="username"
                                                        name="username"
                                                        value={data.username}
                                                        // className="mt-1 block w-full"
                                                        autoComplete="username"
                                                        onChange={(e) =>
                                                            setData(
                                                                "username",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        placeholder="Your Email"
                                                        className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.username
                                                        }
                                                        className="mt-2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 lg:grid-cols-1 lg:gap-x-30px gap-y-25px mb-25px">
                                                <div>
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
                                                        onChange={(e) =>
                                                            setData(
                                                                "email",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        placeholder="Your Email"
                                                        className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                                                    />
                                                    <InputError
                                                        message={errors.email}
                                                        className="mt-2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-30px gap-y-25px mb-25px">
                                                <div>
                                                    <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                                                        Password
                                                    </label>
                                                    <input
                                                        id="password"
                                                        type="password"
                                                        name="password"
                                                        value={data.password}
                                                        // className="mt-1 block w-full"
                                                        autoComplete="new-password"
                                                        onChange={(e) =>
                                                            setData(
                                                                "password",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        placeholder="Password"
                                                        className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                                                    />

                                                    <InputError
                                                        message={
                                                            errors.password
                                                        }
                                                        className="mt-2"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                                                        Re-Enter Password
                                                    </label>
                                                    <input
                                                        id="password_confirmation"
                                                        type="password"
                                                        name="password_confirmation"
                                                        value={
                                                            data.password_confirmation
                                                        }
                                                        // className="mt-1 block w-full"
                                                        autoComplete="new-password"
                                                        onChange={(e) =>
                                                            setData(
                                                                "password_confirmation",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        placeholder="Re-Enter Password"
                                                        className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.password_confirmation
                                                        }
                                                        className="mt-2"
                                                    />
                                                </div>
                                            </div>

                                            <div className="text-contentColor dark:text-contentColor-dark flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="accept-pp"
                                                    className="w-18px h-18px mr-2 block box-content"
                                                />
                                                <label htmlFor="accept-pp">
                                                    Accept the Terms and Privacy
                                                    Policy
                                                </label>
                                            </div>
                                            <div className="mt-25px text-center">
                                                <button
                                                    type="submit"
                                                    className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px w-full border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                                                >
                                                    Sign Up
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
