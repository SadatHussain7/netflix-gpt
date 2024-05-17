import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // @ts-ignore
  const trailer = useSelector((state) => state.movies?.trailer);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-screen h-screen aspect-video"
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?autoplay=1" +
          "&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
