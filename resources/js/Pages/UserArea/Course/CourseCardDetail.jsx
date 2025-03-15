import { rupiah } from "@/bootstrap";
import React from "react";

export default function CourseCardDetail({ course }) {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <CourseDetail course={course} />
            </div>
        </div>
    );
}

export function CourseDetail({ course }) {
    return (
        <dl className="grid grid-cols-4 md:grid-cols-8 gap-2 text-xs">
            <dt className="col-span-1 font-bold">Title</dt>
            <dd className="col-span-3">{course.title}</dd>

            <dt className="col-span-1 font-bold">Slug</dt>
            <dd className="col-span-3">{course.slug}</dd>

            <dt className="col-span-1 font-bold">Description</dt>
            <dd className="col-span-3">{course.description}</dd>

            <dt className="col-span-1 font-bold">Prerequisites</dt>
            <dd className="col-span-3">{course.prerequisites}</dd>

            <dt className="col-span-1 font-bold">Goals</dt>
            <dd className="col-span-3">{course.goals}</dd>

            <dt className="col-span-1 font-bold">Duration</dt>
            <dd className="col-span-3">{course.duration} minutes</dd>

            <dt className="col-span-1 font-bold">Price</dt>
            <dd className="col-span-3">{rupiah(course.price)}</dd>

            <dt className="col-span-1 font-bold">Level</dt>
            <dd className="col-span-3">{course.level}</dd>
        </dl>
    );
}
