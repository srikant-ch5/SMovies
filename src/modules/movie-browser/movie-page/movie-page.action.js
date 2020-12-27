import {
  createAsyncActionCreator,
  createAction,
} from "../../common/redux.helpers";
import * as movieService from "./movie-page.service";

export const keys = {
  GET_MOVIE_DETAILS: "GET_MOVIE_DETAILS",
  GET_MOVIE_VIDEOS: "GET_MOVIE_VIDEOS",
  GET_SIMILAR_MOVIES: "GET_SIMILAR_MOVIES",
  GET_MOVIE_COMMENTS: "GET_MOVIE_COMMENTS",
  GET_MOVIE_CREDITS: "GET_MOVIE_CREDITS",
};

//********** ACTION CREATORS ******************* */
//********** THESE ACTION CREATORS NEEDS TO BE DISPATCHED FROM THE COMPONENTS ************8//

export const getDetails = (movieId, media_type) =>
  createAsyncActionCreator(
    keys.GET_MOVIE_DETAILS,
    movieService.getMovieDetails,
    { movieId, media_type }
  );
export const closeDetails = () => createAction(keys.CLOSE_MOVIE_DETAILS);

export const getMovieVideos = (movieId, media_type) =>
  createAsyncActionCreator(
    keys.GET_MOVIE_VIDEOS,
    movieService.fetchMovieVideos,
    { movieId, media_type }
  );

export const getSimilarMovies = (movieId, media_type) =>
  createAsyncActionCreator(
    keys.GET_SIMILAR_MOVIES,
    movieService.fetchSimilarMovies,
    { movieId }
  );

export const getMovieComments = (movieId, media_type) =>
  createAsyncActionCreator(
    keys.GET_MOVIE_COMMENTS,
    movieService.fetchMovieComments,
    { movieId }
  );

export const getMovieCredits = (movieId, media_type) =>
  createAsyncActionCreator(
    keys.GET_MOVIE_CREDITS,
    movieService.fetchMovieCredits,
    { movieId }
  );
