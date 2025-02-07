// import "../css/app.css";
import "./bootstrap";
import "../edurock/edurock/assets/css/icofont.min.css";
import "../edurock/edurock/assets/css/swiper-bundle.min.css";
import "../edurock/edurock/assets/css/video-modal.css";
import "../edurock/edurock/assets/css/aos.css";
import "../edurock/edurock/assets/css/style.css";

// import "../edurock/edurock/assets/js/swiper-bundle.min.js";
// import "../edurock/edurock/assets/js/isotope.pkgd.min.js";
// import "../edurock/edurock/assets/js/accordion.js";
// import "../edurock/edurock/assets/js/chart.js";
// import "../edurock/edurock/assets/js/count.js";
// import "../edurock/edurock/assets/js/countdown.js";
// import "../edurock/edurock/assets/js/counterup.js";
// import "../edurock/edurock/assets/js/dropdown.js";
// import "../edurock/edurock/assets/js/filter.js";
// import "../edurock/edurock/assets/js/mobileMenu.js";
// import "../edurock/edurock/assets/js/modal.js";
// import "../edurock/edurock/assets/js/popup.js";
// import "../edurock/edurock/assets/js/preloader.js";
// import "../edurock/edurock/assets/js/scrollUp.js";
// import "../edurock/edurock/assets/js/slider.js";
// import "../edurock/edurock/assets/js/smoothScroll.js";
// import "../edurock/edurock/assets/js/stickyHeader.js";
// import "../edurock/edurock/assets/js/tabs.js";
// import "../edurock/edurock/assets/js/theme.js";
// import "../edurock/edurock/assets/js/videoModal.js";
// import "../edurock/edurock/assets/js/vanilla-tilt.js";
// import "../edurock/edurock/assets/js/aos.js";
// import "../edurock/edurock/assets/js/main.js";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        console.log(name);
        return resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        );
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
