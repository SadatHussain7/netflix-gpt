import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
  // @ts-ignore
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-4 gap-4 p-4">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="col-span-3 p-4 rounded-lg"
        />
        <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-lg col-span-1">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
