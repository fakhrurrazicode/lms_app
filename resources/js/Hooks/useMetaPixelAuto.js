import { useEffect } from "react";
import { router, usePage } from "@inertiajs/react";

export default function useMetaPixelAuto() {
    const { url } = usePage();

    useEffect(() => {
        // Saat halaman pertama load
        if (typeof fbq !== "undefined") {
            fbq("track", "PageView");
        }

        // Saat pindah halaman via Inertia
        router.on("navigate", (event) => {
            if (typeof fbq !== "undefined") {
                fbq("track", "PageView");
                console.log("Meta Pixel: PageView", event.detail.page.url);
            }
        });
    }, []);
}
