import React from "react";
import { connect } from "react-redux";
import * as movieHelpers from "../movie-browser.helpers";
import ReactPlayer from "react-player";
import LoaderComponent from "../../common/loader.component";
import CommentsComp from "./movie-page.comments";
import PropTypes from "prop-types";
import { Link } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Slider from "infinite-react-carousel";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../movie-card/movie-card.component";
const styles = {
  movieContainer: {
    paddingTop: "50px",
    paddingLeft: "50px",
    paddingRight: "50px",
    backgroundColor: "#f1f1f1",
  },
  videoOptions: {
    paddingTop: "20",
  },
  content: {
    width: "calc(100%-340px)",
    float: "left",
    position: "relative",
  },
  dooplayPlayerH2: {
    fontSize: "18px",
    fontWeight: "500",
    width: "100%",
    float: "left",
    paddingTop: "20px",
    background: "0 0 0 0.7",
  },
  options: {
    padding: "0 25px",
    float: "left",
    width: "100%",
    position: "relative",
  },
  playeroption: {
    float: "left",
    width: "100%",

    fontWeight: "500",
    cursor: "pointer",
    lineHeight: "20px",
  },
  mveImg: {
    width: "150px",
    height: "200px",
    borderRadius: "5px",
  },
  details: {
    paddingTop: "20px",
  },
  mveName: {
    display: "inline",
    marginTop: "10px",
    paddingTop: "20px",
    color: "#00acc1",
    fontWeight: "400",
    fontSize: "1.8rem",
  },
  heading: {
    display: "inline",
    marginTop: "10px",
    paddingTop: "20px",
    paddingLeft: "20px",
    color: "#00acc1",
    fontWeight: "400",
    fontSize: "2.8rem",
  },
  linkText: {
    color: "#848484",
    fontWeight: "400",
    fontSize: "1.3rem",
  },
  videoContainer: {
    width: "100%",
  },
};

class MoviePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urlPlay: "",
      movieImg: "",
      playClicked: false,
    };
  }

  render() {
    const settings = {
      autoplay: false,
      autopalySpeed: 4000,
      pauseOnHover: false,
    };

    let details = this.props.details;
    let comments = this.props.comments;
    let video = this.props.videos;
    let similar = this.props.similar;
    let credits = this.props.credits;
    let similarMovies;
    let detailsLoading = this.props.details.isLoading;
    let commentsLoading = this.props.comments.isLoading;
    let videoLoading = this.props.videos.isLoading;
    let similarLoading = this.props.similar.isLoading;
    let creditsLoading = this.props.credits.isLoading;

    let movieTitle,
      movieOverview,
      releaseDate,
      director,
      actors,
      language,
      country,
      rating,
      releasedate,
      imdb_id,
      status = "Not Loaded";
    let mveCast = "Not Loaded";
    let mveCrew = "Not Loaded";
    let genres = ["Not Loaded"];
    let videosDiv = " Not loaded";
    let movieImgLinkFull = "";
    let videoDefaultPlay = "";

    let loader = true;
    if (
      detailsLoading === false &&
      commentsLoading === false &&
      videoLoading === false &&
      similarLoading === false &&
      creditsLoading === false
    )
      loader = false;

    if (detailsLoading === false && details.response !== null) {
      const movieDetails = details.response.results[0];
      movieTitle = movieDetails.title;
      movieOverview = movieDetails.overview;
      releaseDate = movieDetails.release_date;
      let genresListA = movieDetails.genres;
      let genresList = genresListA.map((genreinfo) => genreinfo.name);
      genres = genresList.map((genre) => `${genre},`);
      if (genres.indexOf(",") === genres.length) {
        genres = genres.substring(0, genres.length - 1);
      }
      let movieImgLink = movieDetails.poster_path;
      movieImgLinkFull = `https://image.tmdb.org/t/p/w400${movieImgLink}`;
      rating = movieDetails.vote_average;
      releasedate = movieDetails.release_date;
      status = movieDetails.status;
      imdb_id = movieDetails.imdb_id;
    }
    //video.response !== null
    if (video.response !== null && videoLoading === false) {
      let x;
      let videoKeysIds;

      videoDefaultPlay =
        video.response.results[0] !== undefined
          ? "https://www.youtube.com/watch?v=" + video.response.results[0].key
          : null;

      videosDiv = video.response.results.map((videoInfo) => {
        let videoKey = videoInfo.key;
        let videoId = videoInfo.id;
        let videoType = videoInfo.type;
        let typeName = videoInfo.name;
        let site = videoInfo.site;

        return (
          <Row
            key={videoId}
            style={styles.playeroption}
            onClick={() => {
              this.setState({
                playClicked: true,
                urlPlay: "https://www.youtube.com/watch?v=" + videoKey,
              });
            }}
          >
            <i class="icon-play3"></i>
            <span class="title" style={styles.linkText}>
              Watch {videoType} - {typeName}
            </span>
            <span
              className="float-left"
              style={{
                float: "right",
                color: "#848484",
                fontWeight: "400",
                fontSize: "1rem",
              }}
            >
              {site}
            </span>
          </Row>
        );
      });
    }

    if (credits.response !== null && creditsLoading === false) {
      mveCast = credits.response.results[0].cast.map((cst, id) => {
        if (id <= 6) return `${cst.name}, `;
      });

      mveCrew = credits.response.results[0].crew.map((crw) => {
        if (crw.job === "Director") return `${crw.name},`;
      });
    }
    console.log("url plays " + videoDefaultPlay);
    let cr1, cr2;
    if (similar.response !== null && similarLoading === false) {
      similarMovies = movieHelpers.getMoviesList(similar.response);

      cr1 = similarMovies.map((movie, id) => {
        if (id < 4) {
          return (
            <Col key={movie.id} xs={12} sm={4} md={3} lg={3}>
              <MovieCard movie={movie} />
            </Col>
          );
        }
      });

      cr2 = similarMovies.map((movie, id) => {
        if (id >= 4 && id <= 7) {
          return (
            <Col key={movie.id} xs={12} sm={4} md={3} lg={3}>
              <MovieCard movie={movie} />
            </Col>
          );
        }
      });
    }

    return (
      <div>
        <Grid>
          <LoaderComponent isLoading={loader} />
        </Grid>

        <Grid>
          {this.state.playClicked === true ? (
            <ReactPlayer
              url={this.state.urlPlay}
              playing
              width="100%"
              height="500px"
            />
          ) : (
            <ReactPlayer url={videoDefaultPlay} width="100%" height="500px" />
          )}
        </Grid>
        <div className="content" style={styles.content}>
          <div style={styles.dooplayPlayer}>
            <Typography style={styles.heading}>Video Sources</Typography>
            <div style={styles.options}>
              <div style={styles.playerotionsul}>
                <Grid>{videosDiv}</Grid>
              </div>
            </div>
          </div>
        </div>
        <Paper>
          <Grid container spacing={16}>
            <Grid item>
              <img style={styles.mveImg} alt="complex" src={movieImgLinkFull} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs style={{ paddingLeft: "30px" }}>
                  <Typography
                    style={styles.mveName}
                    gutterBottom
                    variant="subtitle1"
                  >
                    {movieTitle}
                  </Typography>
                  <Typography gutterBottom>TMDb {rating}</Typography>
                  <Typography color="textSecondary">{movieOverview}</Typography>
                  <Typography gutterBottom>Genre : {genres}</Typography>
                  <Typography gutterBottom>Stars : {mveCast}</Typography>
                  <Typography gutterBottom>Director : {mveCrew}</Typography>
                  <Typography gutterBottom>
                    Release Date : {releasedate}
                  </Typography>
                  <Typography gutterBottom>
                    <Link href={`https://www.imdb.com/title/${imdb_id}`}>
                      IMDb Link
                    </Link>
                  </Typography>
                  <Typography gutterBottom>
                    Release Status : {status}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1"></Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper style={{ marginTop: "60px" }}>
          <Grid>
            <Row>
              <Typography style={styles.heading}>COMMENTS</Typography>
            </Row>
            <Row>
              {commentsLoading === false && comments.response !== null ? (
                <CommentsComp comments={comments.response.results} />
              ) : null}
            </Row>
          </Grid>
        </Paper>
        <Paper style={{ marginTop: "60px" }}>
          <Grid>
            <Row>
              <Typography style={styles.heading}>
                YOU MIGHT ALSO LIKE
              </Typography>
            </Row>
            <Row>
              <Slider style={{ paddingLeft: "20px" }} {...settings}>
                <Grid>
                  <Row>{cr1}</Row>
                </Grid>
                <Grid>
                  <Row>{cr2}</Row>
                </Grid>
              </Slider>
            </Row>
          </Grid>
        </Paper>
      </div>
    );
  }
}

MoviePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect((state) => ({
  movieDetails: state.movieBrowser.movieDetails,
  details: state.movieBrowser.movieDetails.details,
  videos: state.movieBrowser.movieDetails.videos,
  comments: state.movieBrowser.movieDetails.comments,
  similar: state.movieBrowser.movieDetails.similar,
  credits: state.movieBrowser.movieDetails.credits,
}))(MoviePage);
