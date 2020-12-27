import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MovieBrowser from '../modules/movie-browser/movie-browser.movies.container';

class Movies extends Component {
    render(){
        return(
            <div className='container'>
                <MuiThemeProvider>
                    <MovieBrowser />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Movies;