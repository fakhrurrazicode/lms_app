import { useState } from "react";
import { Link } from "@inertiajs/react";
import { ChevronDown, ChevronRight } from "lucide-react";

const SidebarMenuItem = ({ item }) => {
    const [open, setOpen] = useState(false);

    const hasChildren = item.children && item.children.length > 0;

    const handleClick = (e) => {
        if (hasChildren) {
            e.preventDefault();
            setOpen(!open);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between p-2 cursor-pointer hover:bg-base-200 rounded-lg">
                <Link
                    href={item.href || "#"}
                    onClick={handleClick}
                    className="flex-1"
                >
                    {item.label}
                </Link>
                {hasChildren && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen(!open);
                        }}
                        className="p-1"
                    >
                        {open ? (
                            <ChevronDown size={16} />
                        ) : (
                            <ChevronRight size={16} />
                        )}
                    </button>
                )}
            </div>
            {hasChildren && open && (
                <div className="pl-4">
                    {item.children.map((child, idx) => (
                        <SidebarMenuItem key={idx} item={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default function DashboardLayout({ children }) {
    const menu = [
        { label: "Dashboard", href: "/dashboard" },
        {
            label: "Users",
            children: [
                { label: "All Users", href: "/users" },
                { label: "Add User", href: "/users/create" },
            ],
        },
        {
            label: "Settings",
            children: [
                { label: "Profile Settings", href: "/settings/profile" },
                {
                    label: "Advanced",
                    children: [
                        { label: "Security", href: "/settings/security" },
                        {
                            label: "Notifications",
                            href: "/settings/notifications",
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="flex min-h-screen bg-base-100">
            <aside className="w-64 bg-base-200 p-4 space-y-2 shadow-lg">
                {menu.map((item, idx) => (
                    <SidebarMenuItem key={idx} item={item} />
                ))}
            </aside>
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
    );
}
