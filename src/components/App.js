import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import TVSeries from "./TVSeries";
import TopIMDB from "./TopIMDB";
import Trending from "./Trending";
import Page from "./Page";
import Search from "./Search";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/Trending" />;
            }}
          />
          <Route exact path="/Trending" component={Trending} />
          <Route exact path="/Movies" component={Movies} />
          <Route exact path="/TVSeries" component={TVSeries} />
          <Route exact path="/TopIMDB" component={TopIMDB} />
          <Route path="/movie/:movieId" component={Page} />
          <Route path="/search/:searchKey" component={Search} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
