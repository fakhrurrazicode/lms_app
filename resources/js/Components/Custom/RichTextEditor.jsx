// src/components/RichTextEditor.jsx
import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

const RichTextEditor = ({ content, onChange }) => {
    const [editorState, setEditorState] = useState(
        content
            ? EditorState.createWithContent(content)
            : EditorState.createEmpty()
    );

    const handleEditorChange = (newEditorState) => {
        setEditorState(newEditorState);

        // Mengambil konten dan mengubahnya menjadi plain text
        const plainText = newEditorState.getCurrentContent().getPlainText();

        // Memanggil onChange yang dipassing dari parent
        onChange({ target: { name: "bio", value: plainText } });
    };

    const toggleInlineStyle = (style) => {
        const newState = RichUtils.toggleInlineStyle(editorState, style);
        setEditorState(newState);
    };

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return "handled";
        }
        return "not-handled";
    };

    return (
        <div className="space-y-4">
            {/* Toolbar dengan tombol formatting */}
            <div className="flex space-x-2 mb-2">
                <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => toggleInlineStyle("BOLD")}
                >
                    B
                </button>
                <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => toggleInlineStyle("ITALIC")}
                >
                    I
                </button>
                <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => toggleInlineStyle("UNDERLINE")}
                >
                    U
                </button>
            </div>

            {/* Editor Draft.js */}
            <Editor
                editorState={editorState}
                onChange={handleEditorChange}
                handleKeyCommand={handleKeyCommand}
            />
        </div>
    );
};

export default RichTextEditor;
