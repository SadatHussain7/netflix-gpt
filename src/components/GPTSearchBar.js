import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovieResults } from "../utils/GPTSlice";

const GPTSearchBar = () => {
  // @ts-ignore
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movieName) => {
    const tmdbResults = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const tmdbJson = await tmdbResults.json();
    return tmdbJson.results;
  };

  const handleGptSearch = async () => {
    const text = searchText.current.value;

    const gptQuery =
      "Act as a Movie recommender system and suggest me a movie based on the following description:" +
      text +
      " Only provide me the names of the top 5 movies separated by commas. For example, 'The Dark Knight, Inception, Interstellar, The Prestige, Tenet'";

    const gptResults = [];
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // @ts-ignore
    // if (!gptResults?.choices) {
    //   // TODO - Write error handling code
    //   console.error("No choices found in GPT response");
    //   return;
    // }

    // const gptMovies = gptResults.choices[0].message.content.split(",");
    const gptMovies = [
      "The Dark Knight",
      "Inception",
      "Interstellar",
      "The Prestige",
      "Tenet",
    ];

    const moviesPromiseArray = gptMovies.map((movieName) =>
      searchMovieTmdb(movieName)
    );
    const tmdbMovies = await Promise.all(moviesPromiseArray);

    dispatch(addGptMovieResults({tmdbMovies: tmdbMovies, movieNames: gptMovies}));

    console.log(tmdbMovies);
  };

  return (
    <div className="md:pt-[10%] pt-[40%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-4 gap-4 p-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="col-span-3 p-4 rounded-lg"
        />
        <button
          className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-lg col-span-1"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
