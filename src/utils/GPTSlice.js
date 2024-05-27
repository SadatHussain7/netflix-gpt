import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { tmdbMovies, movieNames } = action.payload;
      state.movieResults = tmdbMovies;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults } = GPTSlice.actions;
export default GPTSlice.reducer;
