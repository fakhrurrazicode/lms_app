import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function TiltElement({ children, options, className }) {
    const tiltRef = useRef(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(
                tiltRef.current,
                options || {
                    max: 25,
                    speed: 400,
                    // glare: true,
                    // "max-glare": 0.5,
                }
            );
        }

        // Cleanup on unmount
        return () => {
            if (tiltRef.current?.vanillaTilt) {
                tiltRef.current.vanillaTilt.destroy();
            }
        };
    }, [options]);

    return (
        <div ref={tiltRef} className={className}>
            {children}
        </div>
    );
}
