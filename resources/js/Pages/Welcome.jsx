import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <GuestLayout>
            <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-7xl py-32">
                <div className="flex items-center gap-6">
                    <div className="flex-1">
                        <h5 className="mb-6">EDUCATION SOLUTION</h5>
                        <h1 className="text-7xl font-extrabold mb-6">
                            Ignite Your{" "}
                            <span className="text-secondary">Career</span> with
                            Learning the Largest{" "}
                            <span className="text-secondary">Online</span>{" "}
                            Platform.
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing
                            typesetting industry. Lorem Ipsum has been
                        </p>
                    </div>
                    <div className="flex-1">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptate dolorem iste eum. Pariatur corrupti
                            nesciunt id odio est. Et, perferendis? Saepe fuga
                            ipsam quo. Iste aut praesentium quaerat fugiat
                            tempore!
                        </p>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
