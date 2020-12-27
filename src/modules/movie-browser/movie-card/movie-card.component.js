import React from "react";
import { connect } from "react-redux";
import { Card } from "@material-ui/core";
import { CardTitle, CardMedia } from "material-ui";
import {
  getDetails,
  getMovieVideos,
  getSimilarMovies,
  getMovieComments,
  getMovieCredits,
} from "../movie-page/movie-page.action";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const styles = {
  cardMedia: {
    maxHeight: 394,
    overflow: "hidden",
  },
  card: {
    cursor: "pointer",
    height: 200,
    width: 150,
    overflow: "hidden",
  },
  bgImage: {
    width: "100%",
  },
  cardTitle: {
    fontFamily: "Roboto",
    fontSize: "50px",
  },
  cardDiv: {
    paddingLeft: 20,
  },
};

class MovieCardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseOver: false,
    };
  }

  render() {
    const {
      movie,
      getDetails,
      getMovieVideos,
      getSimilarMovies,
      getMovieComments,
      getMovieCredits,
    } = this.props;
    const subtitle = this.state.isMouseOver ? movie.overview : null;
    const movie_id = movie.id;
    let media_type = movie.media_type;
    const currentRoute = window.location.pathname;
    return (
      <div>
        <Link
          to={{
            pathname:
              currentRoute === "/TVSeries"
                ? `/tv/${movie_id}`
                : `/movie/${movie_id}`,
            param1: "MovieId",
          }}
        >
          <Card
            style={styles.card}
            onMouseOver={() => this.setState({ isMouseOver: true })}
            onMouseLeave={() => this.setState({ isMouseOver: false })}
            onClick={() => {
              let mt = "";
              currentRoute === "/TVSeries" ? (mt = "tv") : (mt = "movie");

              getDetails(movie_id, (media_type = mt));
              getMovieVideos(movie_id, (media_type = mt));
              getSimilarMovies(movie_id, (media_type = mt));
              getMovieComments(movie_id, (media_type = mt));
              getMovieCredits(movie_id, (media_type = mt));
            }}
          >
            <CardMedia
              style={styles.cardMedia}
              overlay={
                <CardTitle
                  style={styles.cardTitle}
                  title={
                    <Typography
                      gutterBottom
                      variant="h5"
                      style={{ color: "#00acc1", paddingBottom: "5px" }}
                    >
                      {movie.title}
                    </Typography>
                  }
                  subtitle={<Typography color="#FFFFFF">{subtitle}</Typography>}
                />
              }
            >
              <img style={styles.bgImage} src={movie.poster_path} />
            </CardMedia>
          </Card>
        </Link>
      </div>
    );
  }
}

export default connect(() => ({}), {
  getDetails,
  getMovieVideos,
  getSimilarMovies,
  getMovieComments,
  getMovieCredits,
})(MovieCardComponent);
