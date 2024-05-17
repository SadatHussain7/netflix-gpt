import React, { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className={`py-6 text-lg w-1/4 ${isExpanded ? "" : "line-clamp-3"}`}>
        {overview}
      </p>
      <button
        onClick={handleMoreClick}
        className="text-gray-500 text-right p-2"
      >
        {isExpanded ? "Less" : "More"}
      </button>
      <div className="">
        <button className="bg-white text-black p-4 px-12 mx-2 text-xl rounded-lg hover:bg-opacity-80">
          {"▶ Play"}
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
          {"ℹ  More Info"}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
