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
        <div className="grid md:grid-cols-8 gap-6">
            <div className="col-span-8 md:col-span-2">
                <img className="w-full" src={course.image_url} />
            </div>
            <dl className="col-span-8 md:col-span-6 grid grid-cols-4 md:grid-cols-8 gap-2 text-xs">
                <dt className="col-span-1 font-bold">Judul</dt>
                <dd className="col-span-3">{course.title}</dd>

                <dt className="col-span-1 font-bold">Slug</dt>
                <dd className="col-span-3">{course.slug}</dd>

                <dt className="col-span-1 font-bold">Keterangan</dt>
                <dd className="col-span-3">{course.description}</dd>

                <dt className="col-span-1 font-bold">Prasyarat</dt>
                <dd className="col-span-3">{course.prerequisites}</dd>

                <dt className="col-span-1 font-bold">Sasaran</dt>
                <dd className="col-span-3">{course.goals}</dd>

                <dt className="col-span-1 font-bold">Durasi</dt>
                <dd className="col-span-3">{course.duration} minutes</dd>

                <dt className="col-span-1 font-bold">Harga</dt>
                <dd className="col-span-3">{rupiah(course.price)}</dd>

                <dt className="col-span-1 font-bold">Level</dt>
                <dd className="col-span-3">{course.level}</dd>
            </dl>
        </div>
    );
}
