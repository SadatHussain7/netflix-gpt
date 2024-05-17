import { useEffect } from "react";
import { API_OPTIONS, getVideo } from "../utils/Constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const response = await fetch(getVideo(movieId), API_OPTIONS);
    const json = await response.json();

    const trailer = json.results.find((video) => video.type === "Trailer");
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
