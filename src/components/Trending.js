import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MoviesTrending from '../modules/movie-browser/movie-browser.trending.container';

class Trending extends Component {
    render(){
        return(
            <div className='container'>
                <MuiThemeProvider>
                    <MoviesTrending />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Trending;