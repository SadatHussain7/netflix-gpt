import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  // @ts-ignore
  const movies = useSelector((state) => state?.movies);

  return (
    <div className="bg-black">
      <div className="-mt-56 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
