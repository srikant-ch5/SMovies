export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR'

export function fetchMoviesPending(){
    return {
        type: FETCH_MOVIES_PENDING
    }
}

export function fetchMoviesSuccess(movies){
    return {
        type: FETCH_MOVIES_SUCCESS,
        movies: movies
    }
}

export function fetchMoviesError(error){
    return {
        type: FETCH_MOVIES_ERROR,
        error :error
    }
}