"use client";

import { useRef, useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";

const AboutVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <section className="py-12 px-4 md:py-20 md:px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-center text-2xl md:text-6xl uppercase font-bold text-blue-font tracking-[2px] mb-10 md:mb-16 font-[family-name:var(--font-noto-serif-tc-nf)]">
                    Chi siamo
                </h2>
                <div className="w-16 h-1 bg-blue-link mx-auto -mt-8 mb-10 md:-mt-14 md:mb-16 rounded-full" />

                <div className="relative w-full md:w-[80%] mx-auto cursor-pointer">
                    <video
                        ref={videoRef}
                        controls
                        className="w-full rounded-lg shadow-md"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onEnded={() => setIsPlaying(false)}
                    >
                        <source
                            src="/videos/traslochi-brandimarte-video.mp4"
                            type="video/mp4"
                        />
                        Il tuo browser non supporta HTML video
                    </video>

                    {!isPlaying && (
                        <button
                            type="button"
                            onClick={handlePlay}
                            className="hidden md:block absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer"
                            aria-label="Play video"
                        >
                            <FaRegPlayCircle className="text-[10rem] text-white hover:text-green-500 transition-colors duration-300" />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutVideo;
