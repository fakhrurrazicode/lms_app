import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";

export default function BecomeAnInstructor({
    auth,
    laravelVersion,
    phpVersion,
}) {
    return (
        <GuestLayout>
            <main class="bg-transparent">
                {/* <section>
                    <div class="bg-lightGrey10 dark:bg-lightGrey10-dark relative z-0 overflow-y-visible py-50px md:py-20 lg:py-100px 2xl:pb-150px 2xl:pt-40.5">
                        <div>
                            <img
                                class="absolute left-0 bottom-0 md:left-[14px] lg:left-[50px] lg:bottom-[21px] 2xl:left-[165px] 2xl:bottom-[60px] animate-move-var z-10"
                                src="../../assets/images/herobanner/herobanner__1.png"
                                alt=""
                            />
                            <img
                                class="absolute left-0 top-0 lg:left-[50px] lg:top-[100px] animate-spin-slow"
                                src="../../assets/images/herobanner/herobanner__2.png"
                                alt=""
                            />
                            <img
                                class="absolute right-[30px] top-0 md:right-10 lg:right-[575px] 2xl:top-20 animate-move-var2 opacity-50 hidden md:block"
                                src="../../assets/images/herobanner/herobanner__3.png"
                                alt=""
                            />

                            <img
                                class="absolute right-[30px] top-[212px] md:right-10 md:top-[157px] lg:right-[45px] lg:top-[100px] animate-move-hor"
                                src="../../assets/images/herobanner/herobanner__5.png"
                                alt=""
                            />
                        </div>
                        <div class="container">
                            <div class="text-center">
                                <h1 class="text-3xl md:text-size-40 2xl:text-size-55 font-bold text-blackColor dark:text-blackColor-dark mb-7 md:mb-6 pt-3">
                                    Become An Instructor
                                </h1>
                                <ul class="flex gap-1 justify-center">
                                    <li>
                                        <a
                                            href="../../index.html"
                                            class="text-lg text-blackColor2 dark:text-blackColor2-dark"
                                        >
                                            Home{" "}
                                            <i class="icofont-simple-right"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <span class="text-lg text-blackColor2 dark:text-blackColor2-dark">
                                            Become An Instructor
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section>
                    <div class="container pt-100px pb-100px">
                        <h3 class="text-size-32 font-bold text-blackColor dark:text-blackColor-dark leading-1.2 pb-15px border-b border-borderColor dark:border-borderColor-dark mb-10">
                            Apply As Instructor
                        </h3>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-30px">
                            <div>
                                <h6 class="text-2xl font-semibold text-blackColor dark:text-blackColor-dark leading-1.8 mb-15px">
                                    Become an Instructor
                                </h6>
                                <p class="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px mt-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Doloribus blanditiis
                                    officiis vero fugiat inventore voluptates
                                    sint magnam, accusantium cupiditate odio
                                    dolore ipsam ut, corrupti quisquam veritatis
                                    pariatur harum labore voluptatibus
                                    consectetur dolorem aliquid soluta.
                                </p>
                                <h6 class="text-2xl font-semibold text-blackColor dark:text-blackColor-dark leading-1.8 mb-15px">
                                    Instructor Rules
                                </h6>
                                <p class="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px mt-5">
                                    Various versions have evolved over the
                                    years, sometimes by accident, sometimes on
                                    purpose (injected humour and the like).
                                </p>

                                <ul class="mb-30px space">
                                    <li class="mt-5 flex items-center gap-5">
                                        <div class="h-25px w-25px">
                                            <img
                                                src="../../assets/images/dashbord/check__1.png"
                                                alt=""
                                                class="w-full"
                                            />
                                        </div>
                                        <p class="text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Basic knowledge and detailed
                                            understanding of CSS3 to create.
                                        </p>
                                    </li>
                                    <li class="mt-5 flex items-center gap-5">
                                        <div class="h-25px w-25px">
                                            <img
                                                src="../../assets/images/dashbord/check__1.png"
                                                alt=""
                                                class="w-full"
                                            />
                                        </div>
                                        <p class="text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Details Idea about HTMLS, Creating
                                            Basic Web Pages using HTMLS
                                        </p>
                                    </li>
                                    <li class="mt-5 flex items-center gap-5">
                                        <div class="h-25px w-25px">
                                            <img
                                                src="../../assets/images/dashbord/check__1.png"
                                                alt=""
                                                class="w-full"
                                            />
                                        </div>
                                        <p class="text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Web Page Layout Design and Slider
                                            Creation
                                        </p>
                                    </li>
                                    <li class="mt-5 flex items-center gap-5">
                                        <div class="h-25px w-25px">
                                            <img
                                                src="../../assets/images/dashbord/check__1.png"
                                                alt=""
                                                class="w-full"
                                            />
                                        </div>
                                        <p class="text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Image Insert method af web site
                                        </p>
                                    </li>
                                    <li class="mt-5 flex items-center gap-5">
                                        <div class="h-25px w-25px">
                                            <img
                                                src="../../assets/images/dashbord/check__1.png"
                                                alt=""
                                                class="w-full"
                                            />
                                        </div>
                                        <p class="text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Creating Styling Web Pages Using
                                            CSS3
                                        </p>
                                    </li>
                                </ul>
                                <h6 class="text-2xl font-semibold text-blackColor dark:text-blackColor-dark leading-1.8 mb-15px">
                                    Start With courses
                                </h6>
                                <p class="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px mt-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Numquam facilis inventore
                                    tempora maxime quibusdam cumque aperiam?
                                    Ducimus totam repellendus fugiat vel
                                    dolorum. Commodi, vel. Aliquid quia voluptas
                                    esse accusantium? Libero impedit, odit
                                    dolorum sint fugit error.
                                </p>

                                <ul class="mb-30px space">
                                    <li class="mt-5 flex items-center gap-5">
                                        <div class="h-25px w-25px">
                                            <img
                                                src="../../assets/images/dashbord/check__1.png"
                                                alt=""
                                                class="w-full"
                                            />
                                        </div>
                                        <p class="text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Basic knowledge and detailed
                                            understanding of CSS3 to create.
                                        </p>
                                    </li>
                                    <li class="mt-5 flex items-center gap-5">
                                        <div class="h-25px w-25px">
                                            <img
                                                src="../../assets/images/dashbord/check__1.png"
                                                alt=""
                                                class="w-full"
                                            />
                                        </div>
                                        <p class="text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Details Idea about HTMLS, Creating
                                            Basic Web Pages using HTMLS
                                        </p>
                                    </li>
                                    <li class="mt-5 flex items-center gap-5">
                                        <div class="h-25px w-25px">
                                            <img
                                                src="../../assets/images/dashbord/check__1.png"
                                                alt=""
                                                class="w-full"
                                            />
                                        </div>
                                        <p class="text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Web Page Layout Design and Slider
                                            Creation
                                        </p>
                                    </li>
                                </ul>
                                <p class="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px mt-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Officia, voluptas.
                                </p>
                            </div>

                            <div>
                                <form class="p-10px md:p-10 lg:p-5 2xl:p-10 mb-50px bg-darkdeep3 dark:bg-darkdeep3-dark text-sm text-blackColor dark:text-blackColor-dark leading-1.8">
                                    <div class="grid grid-cols-1 mb-15px gap-15px">
                                        <div>
                                            <label class="mb-3 block font-semibold">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="John"
                                                class="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                                            />
                                        </div>
                                        <div>
                                            <label class="mb-3 block font-semibold">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Due"
                                                class="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                                            />
                                        </div>
                                        <div>
                                            <label class="mb-3 block font-semibold">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                class="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                                            />
                                        </div>
                                        <div>
                                            <label class="mb-3 block font-semibold">
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="+8-333-555-6666"
                                                class="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                                            />
                                        </div>
                                    </div>
                                    <div class="mb-15px">
                                        <label class="mb-3 block font-semibold">
                                            Bio
                                        </label>
                                        <textarea
                                            placeholder="Type you comments...."
                                            class="w-full py-10px px-5 text-sm text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md"
                                            cols="30"
                                            rows="6"
                                        >
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit.
                                        </textarea>
                                    </div>

                                    <div>
                                        <input type="checkbox" />
                                        <span class="text-size-15 text-contentColor dark:text-contentColor-dark">
                                            You agree to our friendly
                                            <a
                                                href="#"
                                                class="text-base text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor font-bold leading-1 relative before:w-full before:h-1px before:bg-blackColor dark:before:bg-blackColor-dark before:absolute before:left-0 before:-bottom-0.5"
                                            >
                                                Privacy policy
                                            </a>
                                            .
                                        </span>
                                    </div>
                                    <div class="mt-15px">
                                        <button
                                            type="submit"
                                            class="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                                        >
                                            Update Info
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </GuestLayout>
    );
}
