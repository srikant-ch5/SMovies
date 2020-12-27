import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MovieTopIMDB from '../modules/movie-browser/movie-browser.topimdb.container';

class TopIMDB extends Component {
    render(){
        return(
            <div className='container'>
                <MuiThemeProvider>
                    <MovieTopIMDB />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default TopIMDB;