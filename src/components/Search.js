import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchPage from "../modules/movie-browser/movie-search/movie-search.container";

class Search extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const query = this.props.match.params.searchKey
        return(
            <div className='container'>
                <MuiThemeProvider>
                   <SearchPage query={query} />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Search;