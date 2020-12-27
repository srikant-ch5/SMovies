import { createMovieUrl } from "../movie-browser.service";

export const getMovieDetails = async ({ movieId }) => {
  const movieFullUrl = createMovieUrl(`/movie/${movieId}`);
  const movieInfoData = fetch(movieFullUrl);

  console.log(
    `MOVIEBROWSER.SERVICE . Fetching url getMovieDetails movieInfo${movieFullUrl} `
  );

  return movieInfoData;
};

export const getTVDetails = async ({ TVId }) => {
  const TVFullUrl = createMovieUrl(`/TV/${TVId}`);
  const TVInfoData = fetch(TVFullUrl);

  console.log(
    `MOVIEBROWSER.SERVICE . Fetching url getTVDetails TVInfo${TVInfoData} `
  );

  return TVInfoData;
};

export const fetchSimilarMovies = async ({ movieId }) => {
  const fullUrl = createMovieUrl(`/movie/${movieId}/similar`);
  console.log(
    `MOVIEBROWSER.SERVICE . Fetching url fetchSimilarMovies movieInfo${fullUrl} `
  );
  return fetch(fullUrl);
};

export const fetchMovieVideos = async ({ movieId }) => {
  const fullUrl = createMovieUrl(`/movie/${movieId}/videos`);
  console.log(
    `MOVIEBROWSER.SERVICE . Fetching url fetchMovieVideos movieInfo${fullUrl} `
  );
  return fetch(fullUrl);
};

export const fetchMovieComments = async ({ movieId }) => {
  const fullUrl = createMovieUrl(`/movie/${movieId}/reviews`);
  console.log(
    `MOVIEBROWSER.SERVICE . Fetching url fetchMovieComments movieInfo${fullUrl} `
  );
  return fetch(fullUrl);
};

export const fetchMovieCredits = async ({ movieId }) => {
  const fullUrl = createMovieUrl(`/movie/${movieId}/credits`);
  console.log(
    `MOVIEBROWSER.SERVICE . Fetching url fetchMovieCredits movieInfo${fullUrl} `
  );
  return fetch(fullUrl);
};
