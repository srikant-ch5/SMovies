export const keys = {
    'OPEN_MOVIE_MODAL' : 'OPEN_MOVIE_MODAL',
    'CLOSE_MOVIE_MODAL' :'CLOSE_MOVIE_MODAL'
}

//Two action creators to open and close the movie modal
export const openMovieModal = (movieId) => {
    console.log(`MOVIEMODAL ACTIONS : movieId ${movieId}`)
    return{
        type : 'GET_MOVIE_DETAILS',
        movieId
    };
};

export const closeMovieModal = () => {
    return {
        type : keys.CLOSE_MOVIE_MODAL
    };
}