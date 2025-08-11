import { useEffect } from "react";
import { router } from "@inertiajs/react";

export default function useGtagAuto() {
    useEffect(() => {
        // Track halaman pertama
        if (typeof gtag !== "undefined") {
            gtag("config", "AW-17006564055", {
                page_path: window.location.pathname + window.location.search,
            });
        }

        // Track setiap kali navigasi di Inertia
        router.on("navigate", (event) => {
            if (typeof gtag !== "undefined") {
                gtag("config", "AW-17006564055", {
                    page_path: event.detail.page.url,
                });
                console.log("Gtag: PageView", event.detail.page.url);
            }
        });

        if (typeof gtag !== "undefined") {
            gtag("event", "conversion", {
                send_to: "AW-17006564055/SuSaCJLfhdoaENelrq0_",
                transaction_id: "",
            });
        }

        router.on("navigate", (event) => {
            if (typeof gtag !== "undefined") {
                gtag("event", "conversion", {
                    send_to: "AW-17006564055/SuSaCJLfhdoaENelrq0_",
                    transaction_id: "",
                });
                console.log("Gtag: PageView", event.detail.page.url);
            }
        });
    }, []);
}
