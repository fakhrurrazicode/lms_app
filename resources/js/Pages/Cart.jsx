import { rupiah } from "@/bootstrap";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import { Trash } from "lucide-react";

export default function Cart({ auth, laravelVersion, phpVersion }) {
    return (
        <GuestLayout>
            <section>
                <div className="container py-50px lg:py-60px 2xl:py-20 3xl:py-100px">
                    <div className="text-contentColor dark:text-contentColor-dark text-size-10 md:text-base overflow-auto">
                        <table className="table-fixed md:table-auto leading-1.8 text-center w-150 md:w-full overflow-auto border border-borderColor dark:border-borderColor-dark box-content md:box-border">
                            <thead>
                                <tr className="md:text-sm text-blackColor dark:text-blackColor-dark uppercase font-medium border-b border-borderColor dark:border-borderColor-dark">
                                    <th className="pt-13px pb-9px md:py-22px px-5 md:px-25px leading-1.8 max-w-25 whitespace-nowrap">
                                        Image
                                    </th>
                                    <th className="pt-13px pb-9px md:py-22px px-5 md:px-25px leading-1.8 max-w-25 whitespace-nowrap">
                                        Product
                                    </th>
                                    <th className="pt-13px pb-9px md:py-22px px-5 md:px-25px leading-1.8 max-w-25 whitespace-nowrap">
                                        Price
                                    </th>
                                    <th className="pt-13px pb-9px md:py-22px px-5 md:px-25px leading-1.8 max-w-25 whitespace-nowrap">
                                        Discount
                                    </th>
                                    <th className="pt-13px pb-9px md:py-22px px-5 md:px-25px leading-1.8 max-w-25 whitespace-nowrap">
                                        Total
                                    </th>
                                    <th className="pt-13px pb-9px md:py-22px px-5 md:px-25px leading-1.8 max-w-25 whitespace-nowrap">
                                        Remove
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {auth.cart.items.length > 0 ? (
                                    auth.cart.items.map((item) => {
                                        if (item.itemable) {
                                            let itemable = item.itemable;
                                            return (
                                                <tr
                                                    key={item.id}
                                                    className="border-b border-borderColor dark:border-borderColor-dark"
                                                >
                                                    <td className="py-15px md:py-5 border-r border-borderColor dark:border-borderColor-dark">
                                                        <a href="#">
                                                            <img
                                                                loading="lazy"
                                                                src={
                                                                    itemable.image_url
                                                                }
                                                                alt="product-1"
                                                                className="max-w-20 w-full"
                                                            />
                                                        </a>
                                                    </td>
                                                    <td className="py-15px md:py-5 border-r border-borderColor dark:border-borderColor-dark w-300px">
                                                        <Link
                                                            className="hover:text-primaryColor"
                                                            href={
                                                                "/course/" +
                                                                itemable.slug
                                                            }
                                                            target="_blank"
                                                        >
                                                            {itemable.title}
                                                        </Link>
                                                    </td>
                                                    <td className="py-15px md:py-5 border-r border-borderColor dark:border-borderColor-dark">
                                                        <span className="amount">
                                                            {rupiah(
                                                                itemable.price
                                                            )}
                                                        </span>
                                                    </td>

                                                    <td className="py-15px md:py-5 border-r border-borderColor dark:border-borderColor-dark">
                                                        -
                                                    </td>
                                                    <td className="py-15px md:py-5 border-r border-borderColor dark:border-borderColor-dark">
                                                        {rupiah(itemable.price)}
                                                    </td>
                                                    <td className="py-15px md:py-5">
                                                        <Link
                                                            method="DELETE"
                                                            href="/remove-from-cart"
                                                            preserveScroll={
                                                                true
                                                            }
                                                            preserveState={true}
                                                            data={{
                                                                itemable_id:
                                                                    itemable.id,
                                                                itemable_type:
                                                                    "App\\Models\\Course",
                                                            }}
                                                            type="submit"
                                                        >
                                                            <Trash />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    })
                                ) : (
                                    <tr className="py-12">
                                        <td
                                            colSpan={6}
                                            className="text-center py-12"
                                        >
                                            Belum ada produk yang di tambahkan
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-x-5 gap-y-10px pt-22px pb-9 md:pt-30px md:pb-55px">
                        <div>
                            <Link
                                href="/courses"
                                className="text-size-13 text-whiteColor dark:text-whiteColor-dark dark:hover:text-whiteColor leading-1 px-5 py-18px md:px-10 bg-blackColor dark:bg-blackColor-dark hover:bg-primaryColor dark:hover:bg-primaryColor"
                            >
                                Lihat Kursus Lain
                            </Link>
                        </div>
                        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-x-5 gap-y-10px">
                            <Link
                                href="/clear-cart"
                                method="DELETE"
                                className="text-size-13 text-whiteColor dark:text-whiteColor-dark dark:hover:text-whiteColor leading-1 px-5 py-18px md:px-10 bg-blackColor dark:bg-blackColor-dark hover:bg-primaryColor dark:hover:bg-primaryColor"
                            >
                                Bersihkan Keranjang
                            </Link>
                            <Link
                                href="/checkout"
                                className="text-size-13 text-whiteColor dark:text-whiteColor-dark dark:hover:text-whiteColor leading-1 px-5 py-18px md:px-10 bg-blackColor dark:bg-blackColor-dark hover:bg-primaryColor dark:hover:bg-primaryColor"
                            >
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
