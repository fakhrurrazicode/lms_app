import { rupiah } from "@/bootstrap";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import { Trash } from "lucide-react";

export default function Checkout({ auth, laravelVersion, phpVersion, cart }) {
    return (
        <GuestLayout>
            <section>
                <div className="bg-lightGrey10 dark:bg-lightGrey10-dark relative z-0 overflow-y-visible py-50px md:py-20 lg:py-30px">
                    <div>
                        <img
                            className="absolute left-0 bottom-0 md:left-[14px] lg:left-[50px] lg:bottom-[21px] 2xl:left-[165px] 2xl:bottom-[60px] animate-move-var z-10"
                            src="/assets/images/herobanner/herobanner__1.png"
                            alt=""
                        />
                        <img
                            className="absolute left-0 top-0 lg:left-[50px] lg:top-[100px] animate-spin-slow"
                            src="/assets/images/herobanner/herobanner__2.png"
                            alt=""
                        />
                        <img
                            className="absolute right-[30px] top-0 md:right-10 lg:right-[575px] 2xl:top-20 animate-move-var2 opacity-50 hidden md:block"
                            src="/assets/images/herobanner/herobanner__3.png"
                            alt=""
                        />

                        <img
                            className="absolute right-[30px] top-[212px] md:right-10 md:top-[157px] lg:right-[45px] lg:top-[100px] animate-move-hor"
                            src="/assets/images/herobanner/herobanner__5.png"
                            alt=""
                        />
                    </div>
                    <div className="container">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-size-40 2xl:text-size-55 font-bold text-blackColor dark:text-blackColor-dark mb-7 md:mb-6 pt-3">
                                Checkout
                            </h1>
                            <ul className="flex gap-1 justify-center">
                                <li>
                                    <a
                                        href="/index.html"
                                        className="text-lg text-blackColor2 dark:text-blackColor2-dark"
                                    >
                                        Home{" "}
                                        <i className="icofont-simple-right"></i>
                                    </a>
                                </li>
                                <li>
                                    <span className="text-lg text-blackColor2 dark:text-blackColor2-dark">
                                        Checkout
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-50px lg:py-60px 2xl:py-20 3xl:py-100px">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px">
                        <div>
                            <h4 className="text-xl text-blackColor dark:text-blackColor-dark font-bold pb-10px mb-5 border-b border-borderColor dark:border-borderColor-dark">
                                <span className="leading-1.2">
                                    Billing Details
                                </span>
                            </h4>
                            <form>
                                {/* <div className="grid grid-cols-1 xl:grid-cols-2 lg:gap-x-30px gap-y-5 mb-5">
                                    <div>
                                        <label className="text-sm text-blackColor dark:text-blackColor-dark mb-5px block">
                                            <span className="leading-1.8">
                                                Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="w-full h-50px leading-50px px-5 bg-transparent text-sm focus:outline-none text-blackColor dark:text-blackColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-blackColor dark:text-blackColor-dark mb-5px block">
                                            <span className="leading-1.8">
                                                Last Name*
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="w-full h-50px leading-50px px-5 bg-transparent text-sm focus:outline-none text-blackColor dark:text-blackColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80"
                                        />
                                    </div>
                                </div> */}
                                <div className="mb-5">
                                    <label className="text-sm text-blackColor dark:text-blackColor-dark mb-5px block">
                                        <span className="leading-1.8">
                                            Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        id="name"
                                        value={auth.user.name}
                                        className="w-full h-50px leading-50px px-5 bg-transparent text-sm focus:outline-none text-blackColor dark:text-blackColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80"
                                    />
                                </div>
                                <div className="grid grid-cols-1 xl:grid-cols-2 lg:gap-x-30px gap-y-5 mb-5">
                                    <div>
                                        <label className="text-sm text-blackColor dark:text-blackColor-dark mb-5px block">
                                            <span className="leading-1.8">
                                                Email Address*
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            value={auth.user.email}
                                            name="email"
                                            id="email"
                                            className="w-full h-50px leading-50px px-5 bg-transparent text-sm focus:outline-none text-blackColor dark:text-blackColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-blackColor dark:text-blackColor-dark mb-5px block">
                                            <span className="leading-1.8">
                                                Phone Number
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            value={auth.user.phone}
                                            name="phone"
                                            id="phone"
                                            className="w-full h-50px leading-50px px-5 bg-transparent text-sm focus:outline-none text-blackColor dark:text-blackColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80"
                                        />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="text-sm text-blackColor dark:text-blackColor-dark mb-5px block">
                                        <span className="leading-1.8">
                                            Address
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        value={auth.user.address}
                                        className="w-full h-50px leading-50px px-5 bg-transparent text-sm focus:outline-none text-blackColor dark:text-blackColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80"
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="p-10px lg:p-35px text-blackColor dark:text-blackColor-dark leading-1.8">
                            <h4 className="text-2xl text-blackColor dark:text-blackColor-dark font-bold mb-5">
                                <span className="leading-1.2">Your Order</span>
                            </h4>

                            <div className="overflow-auto">
                                <ul className="flex flex-col gap-y-5 pb-5 mb-30px border-b border-borderColor dark:border-borderColor-dark">
                                    {cart.items && cart.items.length > 0 ? (
                                        cart.items.map((item) => (
                                            <li
                                                key={item.id}
                                                className="relative flex gap-x-15px items-center"
                                            >
                                                <a href="#">
                                                    <img
                                                        src={
                                                            item.itemable
                                                                .image_url
                                                        }
                                                        alt="photo"
                                                        className="w-card-img py-[3px]"
                                                    />
                                                </a>
                                                <div
                                                    style={{
                                                        flex: "1",
                                                    }}
                                                >
                                                    <a
                                                        href="#"
                                                        className="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                                                    >
                                                        {item.itemable.title}
                                                    </a>
                                                    <p className="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                                                        1 x{" "}
                                                        <span className="text-secondaryColor">
                                                            {rupiah(
                                                                item.itemable
                                                                    .price
                                                            )}
                                                        </span>
                                                    </p>
                                                </div>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="relative flex gap-x-15px items-center">
                                            <span className="text-base-300">
                                                Belum ada produk terpilih.
                                                <a
                                                    href="/courses"
                                                    className="text-primaryColor text-bold"
                                                >
                                                    Lihat Produk
                                                </a>
                                            </span>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4">Order Summary</h3>
                                <hr className="mb-4" />
                                <div className="flex justify-between mb-4">
                                    <div>Original Price: </div>
                                    <div className="text-right">Rp. 0</div>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <div>Coupon Discount: </div>
                                    <div className="text-right">Rp. 0</div>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <div className="text-2xl font-bold">
                                        Total:{" "}
                                    </div>
                                    <div className="text-2xl font-bold">
                                        Rp. 0
                                    </div>
                                </div>
                            </div>

                            <div>
                                {/* <div className="flex gap-x-2 mb-10px items-center">
                                    <input
                                        type="radio"
                                        id="bank"
                                        name="ship"
                                        className="cursor-pointer"
                                    />
                                    <label
                                        htmlFor="bank"
                                        className="cursor-pointer"
                                    >
                                        Direct Bank Transfer
                                    </label>
                                </div>
                                <div className="flex gap-x-2 mb-10px items-center">
                                    <input
                                        type="radio"
                                        id="cheque"
                                        name="ship"
                                        className="cursor-pointer"
                                    />
                                    <label
                                        htmlFor="cheque"
                                        className="cursor-pointer"
                                    >
                                        Cheque Payment
                                    </label>
                                </div>
                                <div className="flex gap-x-2 mb-10px items-center">
                                    <input
                                        type="radio"
                                        id="cash"
                                        name="ship"
                                        className="cursor-pointer"
                                    />
                                    <label
                                        htmlFor="cash"
                                        className="cursor-pointer"
                                    >
                                        Cash on Delivery
                                    </label>
                                </div>
                                <div className="flex gap-x-2 mb-10px items-center">
                                    <input
                                        type="radio"
                                        id="paypal"
                                        name="ship"
                                        className="cursor-pointer"
                                    />
                                    <label
                                        htmlFor="paypal"
                                        className="cursor-pointer"
                                    >
                                        Paypal
                                    </label>
                                </div> */}

                                <div className="mt-30px">
                                    <button className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark">
                                        Place order
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
