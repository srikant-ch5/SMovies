import {fetchMoviesPending,fetchMoviesSuccess,fetchMoviesError} from './';

function fetchMovies(){
    return dispatch => {
        dispatch(fetchMoviesPending());
        fetch("https://api.themoviedb.org/3/movie/550?api_key=0038ed1d5237a83984bbd343e436425f")        
        .then(res => res.json() 
        )
        .then(res =>  console.log("This is the api response " + res.original_title))
        .then(res => {
            if (res.error){
                throw(res.error);
            }
            dispatch(fetchMoviesSuccess(res.original_title));
            return res.original_title;
        })
        .catch(error => {
            dispatch(fetchMoviesError(error));
        })
    }
}

export default fetchMovies;