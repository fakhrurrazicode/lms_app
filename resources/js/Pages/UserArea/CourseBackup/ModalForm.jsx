import { useForm } from "@inertiajs/react";
import React from "react";

export default function ModalForm({ open, setOpen }) {
    const { data, setData, post, errors, reset, processing, progress } =
        useForm({
            course_category_id: "",
            // course_sub_category_id: "",
            instructor_id: "",

            title: "",
            slug: "",
            image: "",
            description: "",
            prerequisites: "",
            goals: "",
            price: "",
            duration: "",
            discount_percentage: "",
            level: "",
            status: true,
        });
    return (
        <div className="modal " id="my_modal_1" open={open}>
            <div className="modal-box w-11/12 max-w-7xl">
                <h3 className="font-bold text-lg"></h3>
                <p className="py-4">
                    Press ESC key or click the button below to close
                </p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn" onClick={() => setOpen(false)}>
                            Close
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
