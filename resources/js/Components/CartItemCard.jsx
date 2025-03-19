import { Link } from "@inertiajs/react";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function CartItemCard({ cartItem }) {
    const itemable = cartItem.itemable;
    return (
        <div
            key={cartItem.id}
            className="grid grid-cols-12 gap-6 py-3 border-b border-base-300"
        >
            <div className="col-span-3">
                <img src={itemable.image_url} alt="" />
            </div>
            <div className="col-span-5">
                <Link
                    href={route("course", {
                        slug: itemable.slug,
                    })}
                    className="text-md font-bold mb-2 block text-primary"
                >
                    {itemable.title}
                </Link>
                <p className="text-sm mb-2">
                    Oleh:{" "}
                    <a href="#" className="text-primary">
                        {itemable.instructor
                            ? itemable.instructor.name
                            : "Unknown"}
                    </a>
                </p>
                <div className="flex justify-start items-center gap-2 text-sm mb-2 text-yellow-700">
                    <span>4.4</span>
                    <div className="flex gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className="flex gap-2 text-sm">
                    <div className="flex-1 text-left">
                        {itemable.duration} Menit
                    </div>
                    <div className="flex-1 text-left">180 Pelajaran</div>
                    <div className="flex-1 text-left">Menengah</div>
                </div>
            </div>
            <div className="col-span-2 ">
                <Link
                    href={route("cart.destroy")}
                    method="DELETE"
                    preserveScroll={true}
                    preserveState={true}
                    data={{
                        itemable_type: "App\\Models\\Course",
                        itemable_id: itemable.id,
                    }}
                    className="btn btn-error btn-sm"
                >
                    Hapus
                </Link>

                {/* <br /> */}

                <Link
                    href={route("cart.destroy")}
                    method="DELETE"
                    preserveScroll={true}
                    preserveState={true}
                    data={{
                        itemable_type: "App\\Models\\Course",
                        itemable_id: itemable.id,
                    }}
                    className="btn btn-primary btn-sm"
                >
                    Pindahkan ke Wishlist
                </Link>
            </div>
            <div className="col-span-2">
                <p className="text-md font-bold text-primary text-right">
                    <span className="block">{rupiah(itemable.price)}</span>
                    {itemable.discount_percentage ? (
                        <span className="block text-xs text-gray-500 font-semibold line-through">
                            {rupiah(itemable.real_price)}
                        </span>
                    ) : (
                        <></>
                    )}
                </p>
            </div>
        </div>
    );
}
