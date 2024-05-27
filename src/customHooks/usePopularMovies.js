import { API_OPTIONS, POPULAR_MOVIE_URL } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(
    // @ts-ignore
    (state) => state.movies.popularMovies
  );

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIE_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    if (!popularMovies) getPopularMovies();
  }, []);
};

export default usePopularMovies;
