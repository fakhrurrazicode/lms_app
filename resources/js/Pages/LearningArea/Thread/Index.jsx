import FrontendLayout from "@/Layouts/FrontendLayout";
import React, { Children } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import CourseNav from "../CourseNav";
import { rupiah } from "@/bootstrap";
import {
    FaBook,
    FaCartPlus,
    FaChevronDown,
    FaParagraph,
    FaStar,
    FaTrash,
    FaUserAlt,
    FaClock,
    FaEye,
    FaLock,
    FaCertificate,
    FaFileAlt,
    FaPlay,
} from "react-icons/fa";
import HtmlRenderer from "@/Components/Custom/HtmlRenderer";
import LearningAreaLayout from "@/Layouts/LearningAreaLayout";
import { Link } from "@inertiajs/react";
import { GrPlay, GrResume } from "react-icons/gr";
import classNames from "classnames";

export default function Show({ course }) {
    return (
        <LearningAreaLayout course={course}>
            <div className="card bg-base-100 py-8 mb-8 rounded-none">
                <div className="card-body py-0">
                    <h3>Forum Page</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Error tempora cupiditate fugit reiciendis nesciunt
                        excepturi, placeat eum laborum iure corporis
                        perspiciatis modi laudantium inventore vero molestiae
                        dignissimos aliquam, adipisci ipsam!
                    </p>
                </div>
            </div>
        </LearningAreaLayout>
    );
}
