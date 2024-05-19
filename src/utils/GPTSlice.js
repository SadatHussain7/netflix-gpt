import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearchView } = GPTSlice.actions;
export default GPTSlice.reducer;
