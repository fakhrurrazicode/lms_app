import { VideoPlayer } from "@graphland/react-video-player";
import React from "react";
import ReactModal from "react-modal";

export default function VideoPlayerModal({
    isOpen,
    setIsOpen,
    videoSource = null,
}) {
    return (
        <ReactModal
            closeTimeoutMS={200}
            isOpen={isOpen}
            contentLabel="Minimal Modal Example"
            overlayClassName="fixed inset-0 bg-base-200/70 overflow-y-auto"
            className="absolute mt-16 left-1/2 -translate-x-1/2  overflow-auto outline-none p-5 w-full md:w-3/4 lg:w-1/2 h-auto"
            ariaHideApp={false}
            shouldCloseOnEsc={true}
        >
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <VideoPlayer
                        {...{
                            theme: "city", // 'city', 'fantasy', 'forest', 'sea'
                            height: "auto",
                            autoPlay: false,
                            loop: false,
                            sources: [
                                {
                                    src: videoSource,
                                    type: "video/mp4",
                                },
                            ],
                            controlBar: {
                                skipButtons: {
                                    forward: 5,
                                    backward: 5,
                                },
                            },
                            playbackRates: [0.5, 1, 1.5, 2],
                            disablePictureInPicture: false,
                            onReady: () => {
                                console.log("Video player is ready!");
                            },
                            className: "video-player-modal",
                        }}
                    />
                    <div className="card-actions justify-end">
                        <a
                            className="btn btn-neutral"
                            onClick={(e) => {
                                e.preventDefault;
                                setIsOpen(false);
                            }}
                        >
                            Back
                        </a>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
}
