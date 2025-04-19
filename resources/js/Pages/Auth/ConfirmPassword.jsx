import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, useForm } from "@inertiajs/react";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.confirm"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <FrontendLayout>
            <Head title="Confirm Password" />
            <div className="container mx-auto px-4">
                <div className="py-40">
                    <div className="card bg-white dark:bg-slate-950 w-full shadow-xl rounded-md overflow-hidden">
                        <div className="card-body">
                            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                                This is a secure area of the application. Please
                                confirm your password before continuing.
                            </div>

                            <form onSubmit={submit}>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                    />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4 flex items-center justify-end">
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Confirm
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
