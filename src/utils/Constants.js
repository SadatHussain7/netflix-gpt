export const BACKGROUND_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const USER_AVATAR_URL =
  "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/9/2023_9$largeimg_2030637279.jpg";

export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NOW_PLAYING_MOVIE_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIE_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const getVideo = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { value: "en", label: "English" },
  { value: "hi", label: "Hindi" },
  { value: "es", label: "Spanish" },
];

export const MY_OPENAI_API_KEY = process.env.REACT_APP_MY_OPENAI_API_KEY;
export const MY_OPENAI_ORG_ID = process.env.REACT_APP_MY_OPENAI_ORG_ID;
export const OLD_OPENAI_API_KEY = process.env.REACT_APP_OLD_OPENAI_API_KEY;
