import { X } from "lucide-react";
import React from "react";
import {
    FaFilePdf,
    FaFileWord,
    FaFileExcel,
    FaFileImage,
    FaFileAlt,
    FaFileArchive,
    FaFileVideo,
    FaFileAudio,
    FaFile,
} from "react-icons/fa";

export default function FileIconByType({
    filename,
    size = 24,
    className = "",
}) {
    if (!filename) {
        return <X />;
    }
    const extension = filename.split(".").pop().toLowerCase();

    let Icon;

    switch (extension) {
        case "pdf":
            Icon = FaFilePdf;
            break;
        case "doc":
        case "docx":
            Icon = FaFileWord;
            break;
        case "xls":
        case "xlsx":
            Icon = FaFileExcel;
            break;
        case "jpg":
        case "jpeg":
        case "png":
        case "gif":
        case "bmp":
        case "svg":
            Icon = FaFileImage;
            break;
        case "zip":
        case "rar":
        case "7z":
        case "tar":
        case "gz":
            Icon = FaFileArchive;
            break;
        case "mp4":
        case "avi":
        case "mkv":
        case "mov":
            Icon = FaFileVideo;
            break;
        case "mp3":
        case "wav":
        case "ogg":
            Icon = FaFileAudio;
            break;
        case "txt":
        case "md":
        case "log":
            Icon = FaFileAlt;
            break;
        default:
            Icon = FaFile;
    }

    return <Icon size={size} className={className} />;
}
