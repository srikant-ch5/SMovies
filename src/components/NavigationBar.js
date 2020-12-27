import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import top100Films from "../constants";
const NavigationBar = (props) => {
  return (
    <nav className="nav-wrapper" style={styles.back}>
      <div id="logo">
        <a
          className="brand-logo"
          href
          title="Watch online movies for free"
          style={styles.titleButton}
        >
          {" "}
          Smovies{" "}
        </a>
      </div>
      <div style={styles.content}>
        <ul className="right">
          {/*<li><Link to="/">Home</Link></li>*/}
          <li>
            <Link to="/Trending">Trending</Link>
          </li>
          <li>
            <Link to="/Movies">Movies</Link>
          </li>
          <li>
            <Link to="/TVSeries">TVSeries</Link>
          </li>
          <li>
            <Link to="/TopIMDB">TopIMDB</Link>
          </li>
          <li>
            <Autocomplete
              id="size-small-outlined"
              size="small"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={styles.searchBox}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Search for movies..."
                  placeholder="Favorites"
                  fullWidth
                  onKeyPress={(ev) => {
                    if (ev.key === "Enter") {
                      const { href } = window.location;
                      window.location.href = `/search/${ev.target.value}`;
                      ev.target.value = "";
                      ev.preventDefault();
                    }
                  }}
                />
              )}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  titleButton: {
    marginLeft: 30,
  },
  back: {
    backgroundColor: "#26243F",
    height: 85,
  },
  content: {
    display: "inline-block",
    paddingLeft: 180,
  },
  searchBox: {
    marginLeft: 400,
    paddingTop: 8,
    paddingRight: 10,
    width: 300,
  },
};

export default withRouter(NavigationBar);
