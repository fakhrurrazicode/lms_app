// resources/js/Pages/Tickets/Show.jsx
import React from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import UserAreaLayout from "@/Layouts/UserAreaLayout";

export default function Show() {
    const { ticket, auth } = usePage().props;
    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        // post(`/tickets/${ticket.id}/reply`, {
        post(
            route("user_area.ticket_reply.store", {
                ticket,
            }),
            {
                preserveScroll: true,
                onSuccess: () => reset("message"),
            }
        );
    }

    return (
        <UserAreaLayout>
            <Head title="Ticket" />
            <div className="card bg-base-100">
                <div className="card-body">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">
                            Detail Tiket Baru
                        </h1>
                    </div>
                    <div className="space-y-6">
                        <div className="card bg-base-200 shadow">
                            <div className="card-body">
                                <h2 className="card-title">{ticket.subject}</h2>
                                <p>{ticket.description}</p>
                                <div className="mt-4 flex justify-between">
                                    <span
                                        className={`badge font-medium ${getPriorityColor(
                                            ticket.priority
                                        )}`}
                                    >
                                        {ticket.priority}
                                    </span>
                                    <span
                                        className={`badge font-medium ${getStatusColor(
                                            ticket.status
                                        )}`}
                                    >
                                        {ticket.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Balasan</h3>
                            {ticket.replies.map((reply) => (
                                <div
                                    key={reply.id}
                                    className="chat"
                                    style={{
                                        justifyContent:
                                            reply.user.id === auth.user.id
                                                ? "end"
                                                : "start",
                                    }}
                                >
                                    <div
                                        className={`chat-bubble ${
                                            reply.user.id === auth.user.id
                                                ? "chat-bubble-primary"
                                                : "chat-bubble-info"
                                        }`}
                                    >
                                        <p>{reply.message}</p>
                                        <div className="text-xs opacity-70">
                                            {reply.user.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {ticket.status !== "closed" && (
                            <form onSubmit={handleSubmit} className="space-y-2">
                                <textarea
                                    className="textarea textarea-bordered w-full"
                                    placeholder="Tulis balasan..."
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                />
                                {errors.message && (
                                    <p className="text-error text-sm">
                                        {errors.message}
                                    </p>
                                )}
                                <button
                                    className="btn btn-primary"
                                    disabled={processing}
                                >
                                    Kirim Balasan
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </UserAreaLayout>
    );
}

function getStatusColor(status) {
    return (
        {
            open: "badge-success",
            pending: "badge-warning",
            closed: "badge-neutral",
        }[status] || "badge-ghost"
    );
}

function getPriorityColor(priority) {
    return (
        {
            low: "badge-success",
            medium: "badge-warning",
            high: "badge-error",
        }[priority] || "badge-neutral"
    );
}
