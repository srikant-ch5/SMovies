import {combineReducers} from 'redux';
import { createReducer, createAsyncReducer } from '../common/redux.helpers'
import {keys as movieActionKeys } from './movie-browser.action'
import {keys as moviePageKeys} from './movie-card/movie-card.actions'
import {combinedMovieDetailsReducers} from './movie-page/movie-page.reducers'

console.log("Reducer")

const movieSuccessReducer = (state,action) => {
    const existingMovies = state.response ? state.response.results : []
    console.log(`MOVIEBROWSER : moviesuccessReducer stateis ${Object.keys(state)} actionis ${action} existingMovies ${existingMovies} `)
    return {
        ...state,
        isLoading : false,
        response
         : {
            results : [
                ...action.response.results
            ]
        } 
    }
}

const moviePageSuccessReducer = (state,action) => {
    return {
        ...state,
        isLoading : false,
        isOpen : true,
        movieId : action.movieId
    }
}

const searchMovieTV = combineReducers({
    movieSearch :  createAsyncReducer(movieActionKeys.SEARCH_MOVIES,{
        [`${movieActionKeys.SEARCH_MOVIES}_SUCCESS`] : movieSuccessReducer
    }),
    seriesSearch :  createAsyncReducer(movieActionKeys.SERIES_MOVIES,{
        [`${movieActionKeys.SERIES_MOVIES }_SUCCESS`] : movieSuccessReducer
    }),
})



console.log("MOVIEBROWSER.REDUCER creating reducer movieBrowserReducer" )

const movieBrowserReducer = combineReducers({

    topMoviesReducer : createAsyncReducer(movieActionKeys.GET_TOP_MOVIES, {
        [`${movieActionKeys.GET_TOP_MOVIES}_SUCCESS`] : movieSuccessReducer,
        [`${movieActionKeys.GET_TRENDING}_SUCCESS`] : movieSuccessReducer,
        [`${movieActionKeys.GET_LATEST_MOVIES}_SUCCESS`] : movieSuccessReducer,
        [`${movieActionKeys.GET_LATEST_TVSHOWS}_SUCCESS`] : movieSuccessReducer
    }),
    searchResponse : searchMovieTV,
    movieDetails: combinedMovieDetailsReducers,
    moviePage : createReducer(moviePageKeys.OPEN_MOVIE_PAGE,{
        [`${movieActionKeys.OPEN_MOVIE_PAGE}`] : moviePageSuccessReducer
    })
});

export default movieBrowserReducer;
