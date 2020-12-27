import React from 'react';
import {connect} from 'react-redux';
import {Dialog} from 'material-ui';
import _ from 'lodash';
import { closeDetails } from '../movie-browser.action';
import * as movieHelpers from '../movie-browser.helpers';

const styles = {
    // Can use functions to dynamically build our CSS
    dialogContent: (backgroundUrl) => ({
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      height: '100%',
      minHeight: 400,
      color: 'white',
      padding: 10
    }),
    buttonContent : {   
        backgroundColor: "#21b6ae",
        padding: "18px 206px",
        fontSize: "18px"
    },
    buttonDiv : {
      padding : "50px 250px 0px  "
    }
  }

  class MovieModalContainer extends React.Component {

    constructor(props){
      super(props);
      this.state ={
        movieOpen : false
      }

    }
     
    //This is triggered right after receiving the props

      openDetails=() => {
        this.setState({
          movieOpen: true
        })
      }
      render(){

        const {isOpen, closeDetails, isLoading } = this.props;
        console.log(`The movie in modal is ${Object.keys(this.props.movie)}`)
        const movie = movieHelpers.updateMoviePictureUrls(this.props.movie);
        const genres = movie && movie.genres ? movie.genres.map(genre => genre.name).join(",") : "";

        return(
          <div>
            <Dialog 
                autoScrollBoduContent= {true}
                title={null}
                modal={false}
                open={isOpen}
                onRequestClose={closeDetails}
            >                
              <div style={styles.dialogContent(movie.backdrop_path)}>
                  <h1>{movie.title}</h1>
                  <h5>{genres}</h5>
                  <p>{movie.overview}</p>
                  <p>Budget : {(movie.budget===0) ? 'Not available' : `$ ${movie.budget}`}</p>
                  <div  style={styles.buttonDiv}>
                                                                 
                  </div>
              </div>                
            </Dialog>
            
            </div>
        );
      }
  }


  export default connect(
      (state) => {
        console.log(`Keys in state in movie modal ${Object.keys(state)}`)  
        return {
          isOpen        : _.get(state,'movieBrowser.movieDetails.isOpen',false),
          movie         : _.get(state,'movieBrowser.movieDetails.response.results[0]',{}),
          isLoading     : _.get(state,'movieBrowser.movieDetails.isLoading',false)
      }},
      //Map an action to a prop, ready to be dispatched
      { closeDetails } 
  )(MovieModalContainer);