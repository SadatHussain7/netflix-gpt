import React from "react";
import { BACKGROUND_IMAGE_URL } from "../utils/Constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMAGE_URL} alt="background" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
