import { Link, usePage } from "@inertiajs/react";

function NavLink({ href, children }) {
    const { url } = usePage();
    const isActive = url.startsWith(href); // or `url === href` for exact match

    return (
        <Link
            href={href}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
            }`}
        >
            {children}
        </Link>
    );
}

export default NavLink;
