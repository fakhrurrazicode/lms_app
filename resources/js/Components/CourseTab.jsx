import classNames from "classnames";
import React, { useState } from "react";
import { FaBook, FaParagraph, FaStar, FaUserAlt } from "react-icons/fa";

export default function CourseTab({ tabContents }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <div className="flex justify-center mb-6">
                {tabContents.map((content, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={
                            index === activeIndex
                                ? "flex-1 flex justify-center items-center gap-2 py-4 cursor-pointer text-center bg-primary text-white hover:bg-primary hover:text-white transition-all ease-in-out"
                                : "flex-1 flex justify-center items-center gap-2 py-4 cursor-pointer text-center bg-base-100 dark:text-white text-gray-800 hover:bg-primary hover:text-white transition-all ease-in-out"
                        }
                    >
                        {content.link}
                    </div>
                ))}
            </div>

            <div>
                {tabContents.map((content, index) => (
                    <React.Fragment key={index}>
                        {content.content}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}
