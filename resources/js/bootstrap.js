import axios from "axios";
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

export const itemIsExitsOnCart = (item, cart) => {
    return cart.items.some((_item) => {
        return (
            _item.itemable_id == item.id &&
            _item.itemable_type == "App\\Models\\Course"
        );
    });
};
