import { router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function CheckoutButton() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const isProduction = import.meta.env.MIDTRANS_IS_PRODUCTION;
        const clientKey = import.meta.env.MIDTRANS_CLIENT_KEY;

        const midtransScriptUrl = isProduction
            ? "https://app.midtrans.com/snap/snap.js"
            : "https://app.sandbox.midtrans.com/snap/snap.js";

        let scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;
        scriptTag.setAttribute("data-client-key", clientKey);
        scriptTag.onload = () => {
            console.log("Midtrans Snap.js loaded successfully");
        };

        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);

    const handlePayment = async () => {
        setLoading(true);
        try {
            const response = await fetch("/midtrans/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document.querySelector(
                        'meta[name="csrf-token"]'
                    ).content,
                },
            });
            const data = await response.json();

            if (data.token) {
                window.snap.pay(data.token, {
                    onSuccess: function (result) {
                        console.log("Success:", result);
                        router.delete(route("cart.empty"), {
                            onFinish: () => {
                                router.get(route("payment.finish"), {
                                    order_id: result.order_id,
                                    transaction_status:
                                        result.transaction_status,
                                });
                            },
                        });
                    },
                    onPending: function (result) {
                        console.log("Pending:", result);
                        router.delete(route("cart.empty"), {
                            onFinish: () => {
                                router.get(route("payment.unfinish"), {
                                    order_id: result.order_id,
                                    transaction_status:
                                        result.transaction_status,
                                });
                            },
                        });
                    },
                    onError: function (result) {
                        console.log("Error:", result);
                        router.get(route("payment.error"), {
                            order_id: result.order_id,
                            transaction_status: result.transaction_status,
                        });
                    },
                    onClose: function () {
                        console.log("Close");
                        console.log(
                            "Customer closed the popup without finishing the payment"
                        );
                    },
                });
            } else {
                alert("Payment error: " + data.error);
            }
        } catch (error) {
            console.error("Payment error:", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <button
            onClick={handlePayment}
            disabled={loading}
            className="btn btn-primary"
        >
            <span>{loading ? "Processing..." : "Checkout"}</span>
            <FiArrowRight />

            <script
                src="https://app.sandbox.midtrans.com/snap/snap.js"
                data-client-key={import.meta.env.MIDTRANS_CLIENT_KEY}
            ></script>
        </button>
    );
}
