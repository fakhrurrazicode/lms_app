import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const modules = {
    toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["blockquote", "code-block"],
        ["link", "image"],
        ["clean"],
    ],
};

const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "blockquote",
    "code-block",
    "link",
    "image",
];

export default function TinyEditor({ value, onChange, init = {} }) {
    return (
        <div className="rounded-xl shadow-sm p-2 ql-outer-container">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                className="min-h-[150px]"
            />
        </div>
    );
    return (
        <textarea
            className="textarea textarea-bordered"
            placeholder="Bio"
            onChange={(e) => {
                onChange(e.target.value);
            }}
            value={value}
        ></textarea>
    );
    // const [theme, setTheme] = useState("light");

    // // Deteksi dark mode dari OS atau Tailwind class
    // useEffect(() => {
    //     const checkDark = () => {
    //         const isDarkClass =
    //             document.documentElement.classList.contains("dark");
    //         const isDarkMedia = window.matchMedia(
    //             "(prefers-color-scheme: dark)"
    //         ).matches;
    //         setTheme(isDarkClass || isDarkMedia ? "dark" : "light");
    //     };

    //     checkDark();

    //     // Observer untuk mendeteksi perubahan class (Tailwind dark mode toggle)
    //     const observer = new MutationObserver(checkDark);
    //     observer.observe(document.documentElement, {
    //         attributes: true,
    //         attributeFilter: ["class"],
    //     });

    //     // Listener untuk prefers-color-scheme
    //     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    //     mediaQuery.addEventListener("change", checkDark);

    //     return () => {
    //         observer.disconnect();
    //         mediaQuery.removeEventListener("change", checkDark);
    //     };
    // }, []);

    // return (
    //     <Editor
    //         key={theme} // agar update saat theme berubah
    //         apiKey="ahque6vy85mpf1l6ep7io037qdl2oa0rztyw2bmhmmb3q43y" // opsional
    //         value={value}
    //         onEditorChange={onChange}
    //         init={{
    //             height: 400,
    //             menubar: false,
    //             skin: theme === "dark" ? "oxide-dark" : "oxide",
    //             content_css: theme === "dark" ? "dark" : "default",
    //             plugins: [
    //                 "advlist",
    //                 "autolink",
    //                 "lists",
    //                 "link",
    //                 "image",
    //                 "charmap",
    //                 "preview",
    //                 "anchor",
    //                 "searchreplace",
    //                 "visualblocks",
    //                 "code",
    //                 "fullscreen",
    //                 "insertdatetime",
    //                 "media",
    //                 "table",
    //                 "code",
    //                 "help",
    //                 "wordcount",
    //             ],
    //             toolbar:
    //                 "undo redo | blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image media | code preview",
    //             content_style:
    //                 "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
    //             ...init,
    //         }}
    //     />
    // );
}
