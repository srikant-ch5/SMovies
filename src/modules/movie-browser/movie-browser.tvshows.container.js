import React from 'react';
import {connect} from 'react-redux';
import {Grid,Row,Col} from 'react-bootstrap';
import {AppBar, TextField, RaisedButton} from 'material-ui';
import * as movieActions from './movie-browser.action';
import * as movieHelpers from './movie-browser.helpers';
import * as scrollHelpers from '../common/scroll.helpers';
import MovieList from './movie-list/movie-list.component';
import MovieModalContainer from './movie-modal/movie-modal.container';
import DummyModal from './movie-modal/movie-modal.dummy';
import ReactPaginate from 'react-paginate'

const     styles = {
    pageStyle: {
        paddingLeft: 400
    }
}

class TVBrowser extends React.Component{
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
        
        console.log(`Component Did mount`)
        console.log(`mounting currentpage ${this.state.currentPage}`)
        this.props.getLatestTVShows(this.state.currentPage);
        this.setState({
            showModal :true
        })
    }

    scrollHandle() {
        const {topMovies} = this.props;
        if(!topMovies.isLoading){
            let percentageScrolled = scrollHelpers.getScroolDownPercentage(window);
            if(percentageScrolled > .8){
                const nextPage = this.state.currentPage + 1;
                this.props.getLatestTVShows(nextPage);
                this.setState({currentPage: nextPage});
            }
        }
    }

    handlePageClick =(data) => {
        const selectedPage = data.selected;
        const loadPage = selectedPage + 1;
        this.props.getLatestTVShows(loadPage);
        this.setState({currenPage:loadPage})
        console.log(`The selected Page is ${loadPage}` )
    }


    render(){
        const actions =  this.props;
        console.log(`MOVIEBROWSER CONTAINER : Reciev props withh keys  ${Object.keys(actions)}`)
        const movieModal = actions.movieDetails;
        let modalLoad = movieModal.isOpen
        console.log(`movieModal ${movieModal.isOpen}`)
        const topMovies = actions.topMovies
        const movies = movieHelpers.getMoviesList(topMovies.response);

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
            <div className="pageNumber" style={styles.pageStyle}>
            {paginationElement}
            {this.state.elements}
            </div>
            <Grid>
                <Row>   
                    <MovieList movies={movies} isLoading={topMovies.isLoading} />
                </Row>
            </Grid>
            {modalLoad ? <MovieModalContainer /> : console.log("Error loading modal")}
        </div>)
    }
}



export default connect(
    //Map nodes in state to properties in component
    (state) => ({
        topMovies : state.movieBrowser.topMoviesReducer,
        movieDetails : state.movieBrowser.movieDetails
    }),

    //Map action creators to props in component
    {...movieActions}
)(TVBrowser);