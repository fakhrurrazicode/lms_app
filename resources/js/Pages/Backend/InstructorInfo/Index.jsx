import Modal from "@/Components/Modal";
import BackendLayout from "@/Layouts/BackendLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

import { Edit, KeyRound, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { FaCheck, FaClock, FaImage, FaTimes } from "react-icons/fa";

export default function Index({ request, instructor_infos }) {
    const [showPreviewImageModal, setShowPreviewImageModal] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    const [showRejectModal, setShowRejectModal] = useState(false);

    const [selectedInstructorInfo, setSelectedInstructorInfo] = useState(null);

    const { data, setData, put, errors, reset, processing, progress } = useForm(
        {
            verification_message: "",
        }
    );

    const orderByOnClickHandler = (e) =>
        router.reload({
            preserveScroll: true,
            preserveState: true,
            data: {
                ...request,
                orderby: e.target.getAttribute("data-columnname"),
                ordermethod: (() => {
                    if (request.ordermethod) {
                        if (request.ordermethod == "asc") return "desc";

                        if (request.ordermethod == "desc") return "asc";
                    } else {
                        return "desc";
                    }
                })(),
            },
        });

    const onClosePreviewImageModalHandler = (e) => {
        e.preventDefault();
        setPreviewImage(null);
        setShowPreviewImageModal(false);
    };

    const onUnverifySubmitHandler = (e) => {
        e.preventDefault();
        put(
            route("backend.instructor_info.reject", {
                instructor_info: selectedInstructorInfo,
            }),
            {
                // forceFormData: true,
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    setShowRejectModal(false);
                    reset();
                },
            }
        );
    };
    return (
        <BackendLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Pengelolaan Instructor
                </h2>
            }
        >
            <Head title="Dashboard" />

            <Modal
                show={showPreviewImageModal}
                closeable={true}
                onClose={onClosePreviewImageModalHandler}
            >
                <div className="p-6 relative pt-16">
                    <FaTimes
                        className="absolute top-6 right-6 cursor-pointer"
                        onClick={onClosePreviewImageModalHandler}
                    />

                    {previewImage ? (
                        <img src={previewImage} className="w-full" />
                    ) : (
                        <></>
                    )}
                </div>
            </Modal>

            <Modal
                show={showRejectModal}
                closeable={true}
                onClose={() => {
                    setShowRejectModal(false);
                }}
            >
                <form
                    onSubmit={onUnverifySubmitHandler}
                    className="p-6 relative pt-16"
                >
                    <FaTimes
                        className="absolute top-6 right-6 cursor-pointer"
                        onClick={onClosePreviewImageModalHandler}
                    />
                    <div className="mb-6">
                        <h3 className="font-bold text-2xl">
                            Penolakan Pengajuan Menjadi Pengajar{" "}
                        </h3>
                    </div>
                    <div className="mb-6">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">
                                    Alasan Penolakan
                                </span>
                            </div>
                            <textarea
                                className="textarea textarea-bordered h-24"
                                placeholder="Alasan Penolakan"
                                name="verification_message"
                                onChange={(e) => {
                                    setData(e.target.name, e.target.value);
                                }}
                                value={data.verification_message}
                            ></textarea>
                            {errors.verification_message && (
                                <div className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.verification_message}
                                    </span>
                                </div>
                            )}
                        </label>
                    </div>

                    <div className="flex justify-end gap-2">
                        <button
                            className="btn btn-neutral"
                            onClick={(e) => {
                                setShowRejectModal(false);
                            }}
                        >
                            Batal
                        </button>
                        <button type="submit" className="btn btn-error">
                            Tolak
                        </button>
                    </div>
                </form>
            </Modal>

            <div className="py-12">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-6">All Instructor</h2>

                            <div className="overflow-x-auto">
                                <div className="mb-6 flex justify-between items-center">
                                    {/* <div>
                                        <Link
                                            href={route("backend.instructor_info.create")}
                                            className="btn btn-primary"
                                        >
                                            <Plus size={16} />
                                            <span>Create new</span>
                                        </Link>
                                    </div> */}
                                    <div className="flex gap-2">
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text">
                                                    Entries per page
                                                </span>
                                            </div>
                                            <select
                                                name="perpage"
                                                className="select select-bordered"
                                                onChange={(e) =>
                                                    router.reload({
                                                        preserveScroll: true,
                                                        preserveState: true,
                                                        data: {
                                                            ...request,
                                                            perpage:
                                                                e.target.value,
                                                        },
                                                    })
                                                }
                                            >
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={50}>50</option>
                                                <option value={100}>100</option>
                                            </select>
                                        </label>
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text">
                                                    Search
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Search"
                                                className="input input-bordered w-full max-w-xs"
                                                onChange={(e) =>
                                                    router.reload({
                                                        preserveScroll: true,
                                                        preserveState: true,
                                                        data: {
                                                            ...request,
                                                            search: e.target
                                                                .value,
                                                        },
                                                    })
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                                <table className="table mb-6">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="user_id"
                                                onClick={orderByOnClickHandler}
                                            >
                                                User
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="user_id"
                                                onClick={orderByOnClickHandler}
                                            >
                                                Verifed as Instructor
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="id_card"
                                                onClick={orderByOnClickHandler}
                                            >
                                                ID Card
                                            </th>
                                            <th
                                                className="cursor-pointer"
                                                data-columnname="bio"
                                                onClick={orderByOnClickHandler}
                                            >
                                                BIO
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {instructor_infos.data.length > 0 ? (
                                            instructor_infos.data.map(
                                                (instructor_info) => (
                                                    <tr
                                                        key={instructor_info.id}
                                                        className="hover"
                                                    >
                                                        <td>
                                                            {instructor_info.status ==
                                                            0 ? (
                                                                <>
                                                                    <button
                                                                        className="btn btn-success btn-sm ml-1"
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            e.preventDefault();
                                                                            confirm(
                                                                                "Anda yakin ingin menyetujui user " +
                                                                                    instructor_info
                                                                                        .user
                                                                                        .name +
                                                                                    " menjadi pengajar ?"
                                                                            )
                                                                                ? router.put(
                                                                                      route(
                                                                                          "backend.instructor_info.approve",
                                                                                          {
                                                                                              instructor_info:
                                                                                                  instructor_info,
                                                                                          }
                                                                                      ),
                                                                                      {
                                                                                          preserveState: true,
                                                                                          preserveScroll: true,
                                                                                      }
                                                                                  )
                                                                                : null;
                                                                        }}
                                                                    >
                                                                        <FaCheck
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                        <span>
                                                                            Approve
                                                                        </span>
                                                                    </button>
                                                                    <button
                                                                        className="btn btn-error btn-sm ml-1"
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            setSelectedInstructorInfo(
                                                                                instructor_info
                                                                            );
                                                                            setShowRejectModal(
                                                                                true
                                                                            );
                                                                        }}
                                                                    >
                                                                        <FaTimes
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                        <span>
                                                                            Reject
                                                                        </span>
                                                                    </button>
                                                                </>
                                                            ) : (
                                                                <>-</>
                                                            )}
                                                        </td>
                                                        <td>
                                                            {
                                                                instructor_info
                                                                    .user.email
                                                            }
                                                        </td>
                                                        <td className="max-w-16">
                                                            {instructor_info.status ==
                                                            0 ? (
                                                                <div className="flex items-center gap-1 text-warning">
                                                                    <FaClock
                                                                        size={
                                                                            16
                                                                        }
                                                                    />
                                                                    <span>
                                                                        Pending
                                                                    </span>
                                                                </div>
                                                            ) : (
                                                                <></>
                                                            )}

                                                            {instructor_info.status ==
                                                            1 ? (
                                                                <div className="flex items-center gap-1 text-success">
                                                                    <FaCheck
                                                                        size={
                                                                            16
                                                                        }
                                                                    />
                                                                    <span>
                                                                        Approved
                                                                    </span>
                                                                </div>
                                                            ) : (
                                                                <></>
                                                            )}

                                                            {instructor_info.status ==
                                                            2 ? (
                                                                <div>
                                                                    <div className="flex items-center gap-1 text-error">
                                                                        <FaTimes
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                        <span>
                                                                            Rejected
                                                                        </span>
                                                                    </div>

                                                                    <div>
                                                                        Alasan :{" "}
                                                                        {
                                                                            instructor_info.verification_message
                                                                        }
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <></>
                                                            )}
                                                        </td>
                                                        <td>
                                                            <a
                                                                href="#"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    setPreviewImage(
                                                                        instructor_info.id_card_url
                                                                    );
                                                                    setShowPreviewImageModal(
                                                                        true
                                                                    );
                                                                }}
                                                                className="btn btn-ghost  flex items-center gap-2"
                                                            >
                                                                <FaImage />{" "}
                                                                <span>
                                                                    View ID Card
                                                                </span>
                                                            </a>
                                                        </td>
                                                        <td className="max-w-64">
                                                            {
                                                                instructor_info.bio
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan={5}
                                                    className="text-center text-xs italic"
                                                >
                                                    No Data.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>

                                <div className="flex justify-between">
                                    <div></div>
                                    <div>
                                        <div className="join">
                                            {instructor_infos.links.map(
                                                (link, index) => (
                                                    <Link
                                                        preserveScroll={true}
                                                        preserveState={true}
                                                        key={index}
                                                        href={link.url}
                                                        className="join-item btn"
                                                    >
                                                        {link.label
                                                            .replace(
                                                                "&laquo;",
                                                                ""
                                                            )
                                                            .replace(
                                                                "&raquo;",
                                                                ""
                                                            )}
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BackendLayout>
    );
}
