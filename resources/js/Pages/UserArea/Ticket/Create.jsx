// resources/js/Pages/Tickets/Create.jsx
import React from "react";
import { useForm, Link, Head } from "@inertiajs/react";
import UserAreaLayout from "@/Layouts/UserAreaLayout";
import ReactQuill from "react-quill";
import TinyEditor from "@/Components/Custom/TinyEditor";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        subject: "",
        description: "",
        priority: "medium",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("user_area.ticket.store"));
    }

    return (
        <UserAreaLayout>
            <Head title="Ticket" />
            <div className="card bg-base-100">
                <div className="card-body">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Buat Tiket Baru</h1>
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="mb-12">
                                <div>
                                    <label className="label">Subjek</label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full"
                                        value={data.subject}
                                        onChange={(e) =>
                                            setData("subject", e.target.value)
                                        }
                                    />
                                    {errors.subject && (
                                        <p className="text-error text-sm">
                                            {errors.subject}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="label">Deskripsi</label>
                                    {/* <textarea
                                        className="textarea textarea-bordered w-full h-32"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    /> */}
                                    {/* <ReactQuill
                                        theme="snow"
                                        value={data.description}
                                        onChange={(value) =>
                                            setData("description", value)
                                        }
                                        className="input input-bordered"
                                        style={{
                                            minHeight: "16rem",
                                            marginBottom: "1rem",
                                        }}
                                    /> */}
                                    <TinyEditor
                                        value={data.description}
                                        onChange={(value) =>
                                            setData("description", value)
                                        }
                                    />
                                    {errors.description && (
                                        <p className="text-error text-sm">
                                            {errors.description}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="label">Prioritas</label>
                                    <select
                                        className="select select-bordered w-full"
                                        value={data.priority}
                                        onChange={(e) =>
                                            setData("priority", e.target.value)
                                        }
                                    >
                                        <option value="low">Rendah</option>
                                        <option value="medium">Sedang</option>
                                        <option value="high">Tinggi</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2">
                                <button
                                    className="btn btn-primary"
                                    disabled={processing}
                                >
                                    Kirim
                                </button>
                                <Link
                                    href={route("user_area.ticket.index")}
                                    className="btn btn-neutral"
                                >
                                    Batal
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </UserAreaLayout>
    );
}
