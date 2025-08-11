import { useEffect } from "react";
import { router } from "@inertiajs/react";

export default function useMetaPixel() {
    useEffect(() => {
        // Track halaman pertama
        if (typeof fbq !== "undefined") {
            fbq("track", "PageView");
        }

        // Track saat Inertia pindah halaman
        router.on("navigate", () => {
            if (typeof fbq !== "undefined") {
                fbq("track", "PageView");
            }
        });
    }, []);
}
