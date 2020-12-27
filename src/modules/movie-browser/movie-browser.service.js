const MOVIE_DB_API_KEY = '0038ed1d5237a83984bbd343e436425f';
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';

export const createMovieUrl = (relativeUrl, queryParams) => {
    let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
    if(queryParams){
        Object.keys(queryParams)
            .forEach(paramName=>baseUrl += `&${paramName}=${queryParams[paramName]}`);
    }

    return baseUrl;
}


//service functions which makes request to the endpoints

export const getTopMovies = async ({page}) => {
    const fullUrl = createMovieUrl('/movie/top_rated',{
        page
    });

    console.log(`MOVIEBROWSER.SERVICE . Fetching url ${fullUrl} `)

    return fetch(fullUrl);
}

export const searchMovies = async({page,query}) => {
    const fullUrl = createMovieUrl('/search/movie',{
        page,
        query
    });

    return fetch(fullUrl);
}

export const searchSeries = async({page,query}) => {
    const fullUrl = createMovieUrl('/search/movie',{
        page,
        query
    });

    return fetch(fullUrl);
}

export const getMovieDetails = async({movieId,media_type}) => {
    let  movieFullUrl = ''
    if (media_type === "movie") {  movieFullUrl = createMovieUrl(`/movie/${movieId}`)} else{ movieFullUrl = createMovieUrl(`/tv/${movieId}`);}
    
    const movieInfoData = fetch(movieFullUrl)

    console.log(`MOVIEBROWSER.SERVICE . Fetching url getMovieDetails movieInfo${movieFullUrl} `)

    return movieInfoData;
}

export const getTVDetails = async({TVId}) => {
    const TVFullUrl = createMovieUrl(`/TV/${TVId}`);
    const TVInfoData = fetch(TVFullUrl)

    console.log(`MOVIEBROWSER.SERVICE . Fetching url getTVDetails TVInfo${TVInfoData} `)

    return TVInfoData;
}

export const getTrending = async({page,query}) => {
    const fullUrl = createMovieUrl('/trending/all/day',{
        page
    });

    console.log(`MOVIEBROWSER.SERVICE . Fetching url ${fullUrl} `)

    return fetch(fullUrl);
}

export const getLatestMovies = async({page,query}) => {
    const fullUrl = createMovieUrl('/movie/now_playing',{
        page
    });

    console.log(`MOVIEBROWSER.SERVICE . Fetching url ${fullUrl} `)

    return fetch(fullUrl);
}

export const getLatestTVShows = async({page,query}) => {
    const fullUrl = createMovieUrl('/tv/on_the_air',{
        page
    });

    console.log(`MOVIEBROWSER.SERVICE . Fetching url ${fullUrl} `)

    return fetch(fullUrl);
}

export const fetchSimilarMovies = async({movieId}) => {
    const fullUrl = createMovieUrl(`/movie/${movieId}/similar`)

    return fetch(fullUrl)
}

export const fetchMovieVideos = async({movieId,media_type}) => {
    const fullUrl = createMovieUrl(`/movie/${movieId}/video`)

    return fetch(fullUrl)
}


export const fetchMovieComments = async({movieId}) => {
    const fullUrl = createMovieUrl(`/movie/${movieId}/reviews`)

    return fetch(fullUrl)
}
