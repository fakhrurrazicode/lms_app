import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

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
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        forms,
        require("daisyui"),
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    "@screen sm": {
                        maxWidth: 640 - 150 + "px",
                    },
                    "@screen md": {
                        maxWidth: 768 - 150 + "px",
                    },
                    "@screen lg": {
                        maxWidth: 1280 - 150 + "px",
                    },
                    "@screen xl": {
                        maxWidth: 1400 - 150 + "px",
                    },
                },
            });
        },
    ],
};
