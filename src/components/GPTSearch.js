import React from "react";
import { BACKGROUND_IMAGE_URL } from "../utils/Constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BACKGROUND_IMAGE_URL}
          className="h-screen object-cover md:h-auto"
          alt="background"
        />
      </div>
      <div >
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
