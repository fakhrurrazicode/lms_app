import { router } from "@inertiajs/react";
import axios from "axios";
import { toast } from "react-toastify";

window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

export function minutesToHumanReadable(minutes) {
    const days = Math.floor(minutes / 1440); // 1 hari = 1440 menit
    const hours = Math.floor((minutes % 1440) / 60);
    const mins = minutes % 60;

    let result = [];
    if (days > 0) result.push(`${days} hari`);
    if (hours > 0) result.push(`${hours} jam`);
    if (mins > 0) result.push(`${mins} menit`);

    return result.join(" ");
}

export const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(number);
};

export const number_format = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "decimal",
        maximumFractionDigits: 0,
    }).format(number);
};

export const itemIsExitsOnCart = (item, cart) => {
    return cart.items.some((_item) => {
        return (
            _item.itemable_id == item.id &&
            _item.itemable_type == "App\\Models\\Course"
        );
    });
};

export const addToCart = async (itemable_type, itemable_id) => {
    return axios.post(route("cart.store"), {
        itemable_type,
        itemable_id,
    });
};

export const removeFromCart = async (itemable_type, itemable_id) => {
    return axios.delete(route("cart.destroy"), {
        data: {
            itemable_type,
            itemable_id,
        },
    });
};

export const generateSingkatan = (name, minLength = 2) => {
    const words = name.trim().split(/\s+/);
    let singkatan = words.map((word) => word[0].toUpperCase()).join("");

    if (words.length === 1) {
        singkatan = words[0].substring(0, minLength).toUpperCase();
    }

    return singkatan;
};

export const formatNumber = (num) => {
    if (num >= 1_000_000)
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
    return num.toString();
};

export const stripHtml = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
};

export const stripHtmlTags = (htmlString) => {
    // Regular expression to match HTML tags: < followed by any character not >, then >
    // The 'g' flag ensures all occurrences are replaced, not just the first.
    // The 'i' flag ensures case-insensitive matching (e.g., <P> and <p> are treated the same).
    return htmlString.replace(/<[^>]*>/gi, "");
};
