import {
  createAsyncActionCreator,
  createAction,
} from "../common/redux.helpers";
import * as movieService from "./movie-browser.service";

export const keys = {
  GET_TOP_MOVIES: "GET_TOP_MOVIES",
  SEARCH_MOVIES: "SEARCH_MOVIES",
  CLOSE_MOVIE_DETAILS: "CLOSE_MOVIE_DETAILS",
  GET_TRENDING: "GET_TRENDING",
  GET_LATEST_MOVIES: "GET_LATEST_MOVIES",
  GET_LATEST_TVSHOWS: "GET_LATEST_TVSHOWS",
  GET_MOVIE_DETAILS: "GET_MOVIE_DETAILS",
  GET_TV_DETAILS: "GET_TV_DETAILS",
  SEARCH_SERIES: "SEARCH_SERIES",
};

//********** ACTION CREATORS ******************* */
//********** THESE ACTION CREATORS NEEDS TO BE DISPATCHED FROM THE COMPONENTS ************8//

export const getTopMovies = (page) =>
  createAsyncActionCreator(
    //actionType
    keys.GET_TOP_MOVIES,
    //requestFn
    movieService.getTopMovies,
    //requestParams
    { page }
  );

export const searchMovies = (query, page) =>
  createAsyncActionCreator(keys.SEARCH_MOVIES, movieService.searchMovies, {
    query,
    page,
  });

export const closeDetails = () => createAction(keys.CLOSE_MOVIE_DETAILS);

export const getTrending = (page) =>
  createAsyncActionCreator(keys.GET_TRENDING, movieService.getTrending, {
    page,
  });

export const getLatestMovies = (page) =>
  createAsyncActionCreator(
    keys.GET_LATEST_MOVIES,
    movieService.getLatestMovies,
    { page }
  );

export const getLatestTVShows = (page) =>
  createAsyncActionCreator(
    keys.GET_LATEST_TVSHOWS,
    movieService.getLatestTVShows,
    { page }
  );

export const getDetails = (movieId, media_type) => {
  media_type === "movie"
    ? createAsyncActionCreator(
        keys.GET_MOVIE_DETAILS,
        movieService.getMovieDetails,
        { movieId }
      )
    : createAsyncActionCreator(keys.GET_TV_DETAILS, movieService.getTVDetails, {
        movieId,
      });
};

export const searchSeries = (query, page) =>
  createAsyncActionCreator(keys.SEARCH_SERIES, movieService.searchSeries, {
    query,
    page,
  });
