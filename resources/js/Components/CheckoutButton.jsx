import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function CheckoutButton() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const midtransScriptUrl =
            "https://app.sandbox.midtrans.com/snap/snap.js";
        const clientKey = import.meta.env.MIDTRANS_CLIENT_KEY;

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
                window.snap.pay(data.token);
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
