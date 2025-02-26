import { Link, usePage } from "@inertiajs/react";
import { Trash } from "lucide-react";
import React from "react";

export default function AddCourseToCartButton({ course }) {
    const { auth } = usePage().props;

    const itemExists = cartItems.some((item) => {
        return (
            item.itemable_id == course.id &&
            item.itemable_type == "App\\Models\\Course"
        );
    });
    return itemExists ? (
        <Link
            method="DELETE"
            href="/remove-from-cart"
            preserveScroll={true}
            preserveState={true}
            data={{
                itemable_id: course.id,
                itemable_type: "App\\Models\\Course",
            }}
            type="submit"
            className="flex justify-center gap-2 w-full text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px mb-10px leading-1.8 border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor rounded group dark:hover:text-secondaryColor dark:hover:bg-whiteColor-dark"
        >
            <Trash /> <span>Hapus dari Keranjang</span>
        </Link>
    ) : (
        <Link
            method="POST"
            href="/add-to-cart"
            preserveScroll={true}
            preserveState={true}
            data={{
                itemable_id: course.id,
                itemable_type: "App\\Models\\Course",
            }}
            type="submit"
            className="w-full text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border mb-10px leading-1.8 border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
        >
            Tambahkan ke Keranjang
        </Link>
    );
}
