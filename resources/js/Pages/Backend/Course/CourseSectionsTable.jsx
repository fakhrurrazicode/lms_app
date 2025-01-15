import { router, usePage } from "@inertiajs/react";
import { Edit, Plus, Trash } from "lucide-react";
import React, { useEffect } from "react";

export default function CourseSectionsTable({
    courseSections,
    setSelectedCourseSection,
}) {
    console.log("courseSections", courseSections);

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sections</th>
                            <th>Lectures</th>
                            <th>Video</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseSections.length > 0 ? (
                            courseSections.map((courseSection, index) => (
                                <React.Fragment key={index}>
                                    <tr>
                                        <td className="whitespace-nowrap gap-2 flex w-auto">
                                            <button
                                                className="btn btn-xs min-h-7 px-2 btn-accent"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSelectedCourseSection(
                                                        courseSection
                                                    );
                                                }}
                                            >
                                                <Edit size={16} />{" "}
                                                <span>Edit</span>
                                            </button>

                                            <button className="btn btn-xs min-h-7 px-2 btn-error">
                                                <Trash size={16} />{" "}
                                                <span>Delete</span>
                                            </button>
                                        </td>
                                        <td>{courseSection.title}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    {courseSections.courseLectures &&
                                        courseLectures.map(
                                            (courseLecture, _index) => (
                                                <tr key={_index}>
                                                    <td className="whitespace-nowrap">
                                                        <button className="btn btn-accent">
                                                            <Edit size={16} />{" "}
                                                            <span>Edit</span>
                                                        </button>
                                                    </td>
                                                    <td></td>
                                                    <td>
                                                        {courseLecture.title}
                                                    </td>
                                                    <td></td>
                                                </tr>
                                            )
                                        )}
                                </React.Fragment>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="py-2 text-center">
                                    No Data
                                </td>
                            </tr>
                        )}
                        {/* <tr className="hover">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td></td>
                            <td>Blue</td>
                        </tr>

                        <tr className="hover">
                            <th>2</th>
                            <td></td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>

                        <tr className="hover">
                            <th>3</th>
                            <td></td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </>
    );
}
