import TiltElement from "@/Components/TiltElement";
import UserAreaLayout from "@/Layouts/UserAreaLayout";

import { Head, Link, useForm, usePage } from "@inertiajs/react";

import React from "react";
import { FaTimes } from "react-icons/fa";
import { FiCheckSquare, FiClock } from "react-icons/fi";

export default function Status({ instructor_info }) {
    const { auth } = usePage().props;

    return (
        <UserAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Status
                </h2>
            }
        >
            <Head title="Status" />
            <div className="card bg-base-100">
                <div className="card-body">
                    <>
                        {instructor_info.status == 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="col-span-3">
                                    <div className="card bg-base-100 py-6">
                                        <div className="card-body flex flex-col items-center">
                                            <div className="py-6">
                                                <FiClock className="text-warning text-7xl" />
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
                            <></>
                        )}

                        {instructor_info.status == 1 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="col-span-3">
                                    <div className="card bg-base-100 py-6">
                                        <div className="card-body flex flex-col items-center">
                                            <div className="py-6">
                                                <FiCheckSquare className="text-success text-7xl" />
                                            </div>
                                            <h3 className="text-lg font-bold">
                                                Pengajuan Pendaftaran Sebagai
                                                Pengajar telah disetujui
                                            </h3>
                                            <p className="mb-6">
                                                Anda dapat memulai mengelola
                                                kursus anda sendiri{" "}
                                                <Link
                                                    className="text-primary font-bold"
                                                    href={route(
                                                        "user_area.course.index"
                                                    )}
                                                >
                                                    disini
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        {instructor_info.status == 2 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="col-span-3">
                                    <div className="card bg-base-100 py-6">
                                        <div className="card-body flex flex-col items-center">
                                            <div className="py-6">
                                                <FaTimes className="text-error text-7xl" />
                                            </div>
                                            <h3 className="text-lg font-bold">
                                                Pengajuan Pendaftaran Sebagai
                                                Pengajar telah ditolak
                                            </h3>
                                            <p>
                                                dengan alasan:{" "}
                                                {
                                                    instructor_info.verification_message
                                                }
                                            </p>
                                            <p className="mb-6">
                                                Anda dapat mengulangi pengajuan
                                                kembali{" "}
                                                <Link
                                                    className="text-primary font-bold"
                                                    href={route(
                                                        "user_area.become_instructor.index"
                                                    )}
                                                >
                                                    disini
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </>
                </div>
            </div>
        </UserAreaLayout>
    );
}
