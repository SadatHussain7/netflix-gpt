export const BACKGROUND_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const USER_AVATAR_URL =
  "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/9/2023_9$largeimg_2030637279.jpg";

export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const MOVIE_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const getVideo = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjRlNzcwYzQ0Njk1MTAwZDRkYjYyYWMxM2JmYTdhZCIsInN1YiI6IjY2NDcxOTFhYmJmNmZlYjFhYzRjNDViYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0SiHSy8BCo3Ua5mxHxrRmk6s273Ocr6APTPtRQxoHsI",
  },
};
