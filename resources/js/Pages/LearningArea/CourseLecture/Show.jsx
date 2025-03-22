import LearningAreaLayout from "@/Layouts/LearningAreaLayout";

import { Head } from "@inertiajs/react";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
    PlyrLayout,
    plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

export default function Show({ course, course_lecture }) {
    return (
        <LearningAreaLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Courses
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="card">
                <div className="card-body bg-base-100">
                    <div className="mb-6">
                        <h2 className="text-white text-2xl font-bold mb-6">
                            {course.title}
                        </h2>
                        <h1 className="text-primary text-5xl font-bold mb-6">
                            {course_lecture.title}
                        </h1>
                    </div>
                    <div className="mb-6">
                        <MediaPlayer
                            title="Sprite Fight"
                            src={course_lecture.video_url}
                        >
                            <MediaProvider />
                            <PlyrLayout
                                // thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
                                icons={plyrLayoutIcons}
                            />
                        </MediaPlayer>
                    </div>

                    <div className="mb-6">{course_lecture.description}</div>

                    <div className="flex justify-between">
                        <div>
                            <button className="btn btn-accent">
                                <FaChevronLeft />
                                Prev
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-accent">
                                Next <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </LearningAreaLayout>
    );
}
