import React from "react";

export default function HtmlRenderer({ htmlString }) {
    return (
        <div
            className="prose max-w-max"
            dangerouslySetInnerHTML={{ __html: htmlString }}
        />
    );
}
