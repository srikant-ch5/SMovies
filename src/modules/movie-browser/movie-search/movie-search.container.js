import React from 'react';
import {connect} from 'react-redux';
import {Grid,Row,Col} from 'react-bootstrap';
import{searchMovies,searchSeries} from '../movie-browser.action';
import * as movieHelpers from '../movie-browser.helpers';
import MovieList from '../movie-list/movie-list.component';
import ReactPaginate from 'react-paginate'
const     styles = {
    pageStyle: {
        paddingLeft: 400
    }
}

class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage : 1,
            currentMovies:[],
            showModal : false,
            offset:0,
            data:[],
            elements : [],
            perPage : 32,
            pageCount:20   
        };

    }

    componentDidMount(){
        //window.onscroll = this.scrollHandle;
        this.props.searchMovies(this.props.query,1)
        this.props.searchSeries(this.props.query,1)        
    }


    handlePageClick =(data) => {
        const selectedPage = data.selected;
        const loadPage = selectedPage + 1;
        this.props.searchMovies(loadPage);
        this.props.searchSeries(loadPage);
        this.setState({currenPage:loadPage})
        console.log(`The selected Page is ${loadPage}` )
    }


    render(){
        const actions =  this.props;
        console.log(`MOVIEBROWSER CONTAINER : Reciev props withh keys  ${Object.keys(actions)}`)

        const movies = movieHelpers.getMoviesList(this.props.movieSearch.response);
        const series = movieHelpers.getMoviesList(this.props.seriesSearch.response);

        let paginationElement;
        
        paginationElement = (
            <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            breakLabel={<span className="gap">...</span>}
            pageCount={this.state.pageCount}
            onPageChange={this.handlePageClick}
            forcePage={this.state.currentPage-1}
            containerClassName={"pagination"}
            previousLinkClassName={"previous_page"}
            nextLinkClassName={"next_page"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
            />
        );
       

        return(
        <div className="homePage">
            
            <Grid>
                <Row>   
                    <MovieList movies={movies} isLoading={this.props.movieSearch.isLoading} />
                    <MovieList movies={series} isLoading={this.props.seriesSearch.isLoading} />
                </Row>
            </Grid>
            
        </div>)
    }
}



export default connect(
    //Map nodes in state to properties in component
    (state) => ({
        movieSearch :  state.movieBrowser.searchResponse.movieSearch,
        seriesSearch    :   state.movieBrowser.searchResponse.seriesSearch,
    }),

    //Map action creators to props in component
    {searchMovies,searchSeries}
)(SearchPage);