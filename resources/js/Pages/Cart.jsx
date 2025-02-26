import { rupiah } from "@/bootstrap";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import { Trash } from "lucide-react";

export default function Cart({ auth, laravelVersion, phpVersion, cartItems }) {
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
                                {cartItems.length > 0 ? (
                                    cartItems.map((cartItem) => {
                                        if (cartItem.itemable) {
                                            let itemable = cartItem.itemable;
                                            return (
                                                <tr
                                                    key={cartItem.id}
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
                            <button className="text-size-13 text-whiteColor dark:text-whiteColor-dark dark:hover:text-whiteColor leading-1 px-5 py-18px md:px-10 bg-blackColor dark:bg-blackColor-dark hover:bg-primaryColor dark:hover:bg-primaryColor">
                                Checkout
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-30px">
                        <div>
                            <div className="px-30px pt-45px pb-50px leading-1.8 border border-borderColor dark:border-borderColor-dark rounded-5px">
                                <div className="flex gap-x-4">
                                    <h3 className="text-lg whitespace-nowrap font-medium text-blackColor dark:text-blackColor-dark mb-22px">
                                        <span className="leading-1.2">
                                            Estimate Shipping And Tax
                                        </span>
                                    </h3>
                                    <div className="h-1px w-full bg-borderColor2 dark:bg-borderColor2-dark mt-2"></div>
                                </div>
                                <p className="text-contentColor dark:text-contentColor-dark mb-15px">
                                    Enter your destination to get a shipping
                                    estimate.
                                </p>

                                <form>
                                    <div className="mb-5">
                                        <label className="text-blackColor dark:text-blackColor-dark">
                                            * Country
                                        </label>
                                        <select className="text-xs text-blackColor py-9px px-15px w-full rounded box-border border border-blackColor dark:border-blackColor-dark">
                                            <option value="USA" selected="">
                                                USA
                                            </option>
                                            <option value=" UK">UK</option>
                                            <option value="Canada">
                                                Canada
                                            </option>
                                            <option value="Russia">
                                                Russia
                                            </option>
                                            <option value="price-ascending">
                                                China
                                            </option>
                                        </select>
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            className="text-blackColor dark:text-blackColor-dark"
                                            htmlFor="zip"
                                        >
                                            * Zip/Postal Code
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Zip/Postal Code"
                                            id="zip"
                                            className="text-xs text-blackColor py-11px px-15px w-full rounded box-border border border-borderColor dark:border-borderColor-dark focus:outline-none placeholder:text-placeholder placeholder:opacity-55"
                                        />
                                    </div>
                                    <div>
                                        <a
                                            href="create-course.html"
                                            className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor rounded group text-nowrap"
                                        >
                                            Calculate shipping
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="px-30px pt-45px pb-50px leading-1.8 border border-borderColor dark:border-borderColor-dark rounded-5px">
                                <div className="flex gap-x-4">
                                    <h3 className="text-lg whitespace-nowrap font-medium text-blackColor dark:text-blackColor-dark mb-22px">
                                        <span className="leading-1.2">
                                            Cart Note
                                        </span>
                                    </h3>
                                    <div className="h-1px w-full bg-borderColor2 dark:bg-borderColor2-dark mt-2"></div>
                                </div>
                                <p className="text-contentColor dark:text-contentColor-dark mb-15px">
                                    Special instructions for seller
                                </p>

                                <form>
                                    <div className="mb-5">
                                        <textarea
                                            className="text-xs text-blackColor py-11px px-15px w-full rounded box-border border border-borderColor2 dark:border-borderColor2-dark"
                                            cols="30"
                                            rows="4"
                                        ></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="px-30px pt-45px pb-50px leading-1.8 border border-borderColor dark:border-borderColor-dark rounded-5px">
                                <div className="flex gap-x-4">
                                    <h3 className="text-lg whitespace-nowrap font-medium text-blackColor dark:text-blackColor-dark mb-9">
                                        <span className="leading-1.2">
                                            Cart Total
                                        </span>
                                    </h3>
                                    <div className="h-1px w-full bg-borderColor2 dark:bg-borderColor2-dark mt-2"></div>
                                </div>
                                <h4 className="text-sm font-bold text-blackColor dark:text-blackColor-dark mb-5 flex justify-between items-center">
                                    <span className="leading-1.2">
                                        Cart Totals
                                    </span>
                                    <span className="leading-1.2 text-lg font-medium">
                                        $189.00
                                    </span>
                                </h4>
                                <div>
                                    <button className="text-size-13 text-whiteColor dark:text-whiteColor-dark dark:hover:text-whiteColor leading-1 w-full px-10px py-18px bg-blackColor dark:bg-blackColor-dark hover:bg-primaryColor dark:hover:bg-primaryColor">
                                        PROCEED TO CHECKOUT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
