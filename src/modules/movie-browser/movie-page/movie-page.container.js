import React from 'react'
import {connect} from 'react-redux'
import MoviePageLayout from './movie-page.moviepage';
import {getDetails,getMovieVideos,getSimilarMovies,getMovieComments,getMovieCredits} from '../movie-page/movie-page.action';

class MoviePage extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getDetails(parseInt(this.props.movieId))
        this.props.getMovieVideos(parseInt(this.props.movieId))
        this.props.getSimilarMovies(parseInt(this.props.movieId))
        this.props.getMovieComments(parseInt(this.props.movieId))
        this.props.getMovieCredits(parseInt(this.props.movieId))
    }

    
    render(){        
        const movie_id = this.props.movieId
        const movie_params = this.props.movie_params
        console.log(`Movie id in page container is ${movie_id} ${movie_params}`)

        return(
            <div>
                <MoviePageLayout />     
            </div>
        )
    }    
}

export default connect(
    (state) => ({
        movieDetails    : state.movieBrowser.movieDetails,
        details         : state.movieBrowser.movieDetails.details,
        videos          : state.movieBrowser.movieDetails.videos,
        comments        : state.movieBrowser.movieDetails.comments,
        similar         : state.movieBrowser.movieDetails.similar,
        credits         : state.movieBrowser.movieDetails.credits    
    }),{getDetails,getMovieVideos,getSimilarMovies,getMovieComments,getMovieCredits}
) (MoviePage);