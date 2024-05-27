import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-2xl md:text-6xl pt-[10%] md:p-0">
        {title}
      </h1>
      <p
        className={`hidden md:inline-block py-6 text-lg w-1/4 max-h-48 line-clamp-3`}
      >
        {overview}
      </p>
      <div className="my-4 md:mt-2">
        <button className="bg-white text-black py-1 md:py-4 px-2 md:px-12 mx-2 text-xl rounded-lg hover:bg-opacity-80">
          {"▶ Play"}
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
          {"ℹ  More Info"}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
