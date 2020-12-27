import {combineReducers} from 'redux';
import { createReducer, createAsyncReducer } from '../../common/redux.helpers'
import {keys as movieActionKeys } from './movie-page.action'

const moviePageReducer = (state,action) => {
    console.log(`MOVIEBROWSER : movieDetailsSuccessReducer stateis ${Object.keys(state)} actionis ${action}  `)
    
    switch(action.type){
        case `${movieActionKeys.GET_MOVIE_DETAILS}_SUCCESS`:
        case `${movieActionKeys.GET_MOVIE_CREDITS}_SUCCESS`:
            return {
                ...state,
                isOpen : true,
                isLoading : false,
                response
                 : {
                    results : [
                        action.response
                    ]
                } 
            }
            break;
        case `${movieActionKeys.GET_MOVIE_VIDEOS}_SUCCESS`      :
        case `${movieActionKeys.GET_SIMILAR_MOVIES}_SUCCESS`    :
        case `${movieActionKeys.GET_MOVIE_COMMENTS}_SUCCESS`    :
            return {
                ...state,
                isOpen : true,
                isLoading : false,
                response
                 : {
                    results : [
                        ...action.response.results
                    ]
                } 
            }
            break;
    }
           
}

export const combinedMovieDetailsReducers = combineReducers({
    details : createAsyncReducer(movieActionKeys.GET_MOVIE_DETAILS,{
        [`${movieActionKeys.GET_MOVIE_DETAILS}_SUCCESS`] : moviePageReducer,
    }),
    videos : createAsyncReducer(movieActionKeys.GET_MOVIE_VIDEOS,{
        [`${movieActionKeys.GET_MOVIE_VIDEOS}_SUCCESS`] : moviePageReducer,
    }),
    similar : createAsyncReducer(movieActionKeys.GET_SIMILAR_MOVIES,{
        [`${movieActionKeys.GET_SIMILAR_MOVIES}_SUCCESS`] : moviePageReducer,
    }),
    comments : createAsyncReducer(movieActionKeys.GET_MOVIE_COMMENTS,{
        [`${movieActionKeys.GET_MOVIE_COMMENTS}_SUCCESS`] : moviePageReducer,
    }),
    credits : createAsyncReducer(movieActionKeys.GET_MOVIE_CREDITS,{
        [`${movieActionKeys.GET_MOVIE_CREDITS}_SUCCESS`] : moviePageReducer,
    }),
})