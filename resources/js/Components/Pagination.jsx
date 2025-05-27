import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <div className="join mt-6 flex flex-wrap justify-center">
            {links.map((link, i) => (
                <Link
                    key={i}
                    href={link.url || ""}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={`join-item btn btn-sm ${
                        link.active ? "btn-primary" : ""
                    } ${!link.url ? "btn-disabled" : ""}`}
                />
            ))}
        </div>
    );
}
