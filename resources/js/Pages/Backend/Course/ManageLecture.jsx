import { router, useForm, usePage } from "@inertiajs/react";
import classNames from "classnames";
import { Plus, Save } from "lucide-react";
import React, { useRef, useState } from "react";
import ReactModal from "react-modal";
import slugify from "slugify";
import CourseSectionsTable from "./CourseSectionsTable";
import CreateCourseSectionModal from "./CreateCourseSectionModal";
import EditCourseSectionModal from "./EditCourseSectionModal";

export default function ManageLecture({
    isOpen,
    setIsOpen,
    course,
    setCourse,
    courseSections,
}) {
    const previewImageRef = useRef(null);

    const {
        props: { courseCategories, courseSubCategories, instructors },
    } = usePage();

    const [createCourseSectionModalIsOpen, setCreateCourseSectionModalIsOpen] =
        useState(false);
    const [editCourseSectionModalIsOpen, setEditCourseSectionModalIsOpen] =
        useState(false);

    const [selectedCourseSection, setSelectedCourseSection] = useState(null);

    return (
        <>
            <ReactModal
                closeTimeoutMS={200}
                isOpen={isOpen}
                contentLabel="Minimal Modal Example"
                overlayClassName="fixed inset-0 bg-base-200/70 overflow-y-auto"
                className="absolute mt-16 left-1/2 -translate-x-1/2  overflow-auto outline-none p-5 w-full md:w-3/4 lg:w-10/12 h-auto"
                ariaHideApp={false}
            >
                <div className="card bg-base-100 shadow-xl">
                    <form className="card-body">
                        <h2 className="card-title mb-6">
                            Manage Sections and Lectures
                        </h2>
                        <div className="mb-6">
                            <div className="mb-6 flex">
                                <div className="flex w-full md:w-1/2 gap-2">
                                    <button
                                        className="btn btn-primary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCreateCourseSectionModalIsOpen(
                                                true
                                            );
                                        }}
                                    >
                                        <Plus size={16} />{" "}
                                        <span>Add new Section</span>
                                    </button>
                                    <button className="btn btn-primary">
                                        <Plus size={16} />{" "}
                                        <span>Add new Lecture</span>
                                    </button>
                                </div>
                            </div>
                            <CourseSectionsTable
                                courseSections={courseSections}
                                setSelectedCourseSection={(courseSection) => {
                                    setSelectedCourseSection(courseSection);
                                    setEditCourseSectionModalIsOpen(true);
                                }}
                            />
                        </div>

                        <div className="card-actions justify-end">
                            <button type="submit" className="btn btn-primary">
                                <Save size={16} />
                                <span>Save</span>
                            </button>
                            <a
                                className="btn btn-neutral"
                                onClick={(e) => {
                                    e.preventDefault;
                                    setIsOpen(false);
                                }}
                            >
                                Cancel
                            </a>
                        </div>
                    </form>
                </div>
            </ReactModal>

            <CreateCourseSectionModal
                isOpen={createCourseSectionModalIsOpen}
                setIsOpen={setCreateCourseSectionModalIsOpen}
                course={course}
            />

            <EditCourseSectionModal
                isOpen={editCourseSectionModalIsOpen}
                setIsOpen={setEditCourseSectionModalIsOpen}
                courseSection={selectedCourseSection}
            />
        </>
    );
}
