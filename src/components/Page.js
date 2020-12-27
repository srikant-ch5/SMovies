import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MoviePage from '../modules/movie-browser/movie-page/movie-page.container';

class Page extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const movieId = this.props.match.params.movieId
        const movie_params = this.props.location.param1
        return(
            <div className='container'>
                <MuiThemeProvider>
                    <MoviePage movieId={movieId} movie_params={movie_params}/>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Page;