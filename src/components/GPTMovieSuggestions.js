import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  // @ts-ignore
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames || !movieResults) {
    return <div>No movie suggestions available</div>;
  }

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieResults[index].id}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
