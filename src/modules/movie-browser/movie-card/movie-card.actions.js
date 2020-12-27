export const keys = {
    'OPEN_MOVIE_PAGE' : 'OPEN_MOVIE_PAGE',
    'OPEN_EPISODE_PAGE' :'OPEN_EPISODE_PAGE'
}

//Two action creators to open and close the movie modal
export const openMoviePage = (movieId) => {
    console.log(`MOVIEPAGE ACTIONS : movieId ${movieId}`)
    return{
        type : 'OPEN_MOVIE_PAGE',
        movieId
    };
};

export const openEpisodePage = (episodeId) => {
    console.log(`MOVIEPAGE ACTIONS : episodeId ${episodeId}`)
    return{
        type : 'OPEN_EPISODE_PAGE',
        episodeId
    };
};