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

export default function Show({ course, threads, request }) {
    return (
        <LearningAreaLayout course={course}>
            <div className="card bg-base-100 py-8 mb-8 rounded-none">
                <div className="card-body ">
                    <div className="lg:flex justify-between items-center mb-8 space-y-8 lg:space-y-0">
                        <h4 className="text-4xl font-bold">{course.title}</h4>
                    </div>

                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Topic</th>
                                        <th>Course</th>
                                        <th>Users</th>
                                        <th>Replies</th>
                                        <th>Views</th>
                                        <th>Activity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        <tr>
                                            <td>Topic</td>
                                            <td>Course</td>
                                            <td>Users</td>
                                            <td>Replies</td>
                                            <td>Views</td>
                                            <td>Activity</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </LearningAreaLayout>
    );
}
