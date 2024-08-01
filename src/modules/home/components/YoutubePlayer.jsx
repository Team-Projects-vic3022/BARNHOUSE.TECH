import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";

const YouTubePlayer = ({ videoSrc, autoplay = false }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-full">
      <iframe
        // ref={videoRef}
        src={videoSrc}
        // controls={false}
        // autoPlay={autoplay}
        allowFullScreen
        title="Youtube video"
        // className="w-full h-full object-contain"
      ></iframe>
      <button
        onClick={togglePlayPause}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded transition-all ease-in-out duration-200 hover:scale-125"
      >
        {isPlaying ? (
          <FaPause className="text-4xl font-bold" />
        ) : (
          <FaPlay className="text-4xl font-bold" />
        )}
      </button>
    </div>
  );
};

export default YouTubePlayer;
