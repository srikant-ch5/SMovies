import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TVBrowser from '../modules/movie-browser/movie-browser.tvshows.container';

class TVSeries extends Component {
    render(){
        return(
            <div className='container'>
                <MuiThemeProvider>
                    <TVBrowser />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default TVSeries;