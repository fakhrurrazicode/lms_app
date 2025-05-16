import React from "react";

export default function CourseCard2({ course }) {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div className="max-w-[100px] overflow-x-hidden">
                <figure>
                    <img src={course.image_url} alt="Movie" />
                </figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
}
