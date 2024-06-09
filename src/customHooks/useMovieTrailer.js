import { useEffect } from "react";
import { API_OPTIONS, getVideo } from "../utils/Constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(
    // @ts-ignore
    (state) => state.movies.trailerVideo
  );

  const getMovieVideos = async () => {
    const response = await fetch(getVideo(movieId), API_OPTIONS);
    const json = await response.json();

    const trailer = json.results.find((video) => video.type === "Trailer");
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!trailerVideo) getMovieVideos();
  }, []);
};

export default useMovieTrailer;
