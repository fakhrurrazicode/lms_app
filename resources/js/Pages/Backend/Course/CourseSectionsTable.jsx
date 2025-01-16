import { router, usePage } from "@inertiajs/react";
import { Edit, Plus, Trash } from "lucide-react";
import React, { useEffect } from "react";

export default function CourseSectionsTable({
    courseSections,
    setSelectedCourseSection,
    setEditCourseSectionModalIsOpen,
    setDeleteCourseSectionModalIsOpen,
    setCreateCourseLectureModalIsOpen,
}) {
    console.log("CourseSectionsTable.courseSections", courseSections);

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
                            courseSections.map((courseSection, index) => {
                                console.log(
                                    "CourseSectionsTable.courseSections.course_lectures",
                                    courseSections
                                );
                                return (
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
                                                        setEditCourseSectionModalIsOpen(
                                                            true
                                                        );
                                                    }}
                                                >
                                                    <Edit size={16} />{" "}
                                                    <span>Edit Section</span>
                                                </button>

                                                <button
                                                    className="btn btn-xs min-h-7 px-2 btn-error"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setSelectedCourseSection(
                                                            courseSection
                                                        );
                                                        setDeleteCourseSectionModalIsOpen(
                                                            true
                                                        );
                                                    }}
                                                >
                                                    <Trash size={16} />{" "}
                                                    <span>Delete Section</span>
                                                </button>

                                                <button
                                                    className="btn btn-xs min-h-7 px-2 btn-secondary"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setSelectedCourseSection(
                                                            courseSection
                                                        );
                                                        setCreateCourseLectureModalIsOpen(
                                                            true
                                                        );
                                                    }}
                                                >
                                                    <Plus size={16} />{" "}
                                                    <span>Add new Lecture</span>
                                                </button>
                                            </td>
                                            <td>{courseSection.title}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        {courseSection.course_lectures &&
                                            courseSection.course_lectures.map(
                                                (courseLecture, _index) => (
                                                    <tr key={_index}>
                                                        <td className="whitespace-nowrap gap-2 flex w-auto">
                                                            <button
                                                                className="btn btn-xs min-h-7 px-2 btn-accent"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    setSelectedCourseSection(
                                                                        courseSection
                                                                    );
                                                                    setEditCourseSectionModalIsOpen(
                                                                        true
                                                                    );
                                                                }}
                                                            >
                                                                <Edit
                                                                    size={16}
                                                                />{" "}
                                                                <span>
                                                                    Edit Lecture
                                                                </span>
                                                            </button>

                                                            <button
                                                                className="btn btn-xs min-h-7 px-2 btn-error"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    setSelectedCourseSection(
                                                                        courseSection
                                                                    );
                                                                    setDeleteCourseSectionModalIsOpen(
                                                                        true
                                                                    );
                                                                }}
                                                            >
                                                                <Trash
                                                                    size={16}
                                                                />{" "}
                                                                <span>
                                                                    Delete
                                                                    Lecture
                                                                </span>
                                                            </button>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            {
                                                                courseLecture.title
                                                            }
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                )
                                            )}
                                    </React.Fragment>
                                );
                            })
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
