import { router, useForm, usePage } from "@inertiajs/react";
import { Trash } from "lucide-react";
import React, { useEffect } from "react";
import ReactModal from "react-modal";

export default function DeleteCourseLectureModal({
    isOpen,
    setIsOpen,
    courseLecture,
    setCourseLecture,
}) {
    let {
        props: { request },
    } = usePage();
    return (
        <ReactModal
            closeTimeoutMS={200}
            isOpen={isOpen}
            contentLabel="Minimal Modal Example"
            overlayClassName="fixed inset-0 bg-base-200/70"
            className="absolute mt-16 left-1/2 -translate-x-1/2  overflow-auto outline-none p-5 w-4/12 h-auto"
            ariaHideApp={false}
        >
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mb-6">Delete Lecture</h2>
                    <div className="mb-6">
                        <p className="mb-6">
                            Are you sure you want to delete this data?
                        </p>

                        {courseLecture && (
                            <table className="table mb-6">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{courseLecture.title}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                    <div className="card-actions justify-end">
                        <button
                            type="submit"
                            className="btn btn-error"
                            onClick={(e) => {
                                e.preventDefault();

                                request.selected_course_id =
                                    courseLecture.course_id;

                                const query = new URLSearchParams(
                                    request
                                ).toString();

                                router.delete(
                                    `/backend/course_lecture/${courseLecture.id}?${query}`,
                                    {
                                        preserveScroll: true,
                                        preserveState: true,
                                        onSuccess: () => {
                                            setCourseLecture(null);
                                            setIsOpen(false);
                                        },
                                    }
                                );
                            }}
                        >
                            <Trash size={16} />
                            <span>Delete</span>
                        </button>
                        <a
                            className="btn btn-neutral"
                            onClick={(e) => {
                                e.preventDefault;
                                setCourseLecture(null);
                                setIsOpen(false);
                            }}
                        >
                            Cancel
                        </a>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
}
