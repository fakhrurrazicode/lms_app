import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        // plugin(function ({ addBase }) {
        //     addBase({
        //         html: { fontSize: "9px" },
        //     });
        // }),
        forms,
        require("daisyui"),
    ],
};