import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import List from "./components/list";
import Player from "./components/player";
import YTSearch from "youtube-api-search";
import Inp from "./components/inp";

const YT_KEY = "AIzaSyBfmq_w1eHXXHmjQEtNtYi1mBe87LIcufY";

class Decide extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    YTSearch({ key: YT_KEY, term: "decide" }, videos =>
      this.setState({ videos })
    );
  }

  render() {
    return (
      <div>
        DECIDE
        <br />
        <SearchBar />
        <br />
        <List videos={this.state.videos} />
        <br />
        <Inp />
      </div>
    );
  }
}

ReactDOM.render(<Decide />, document.getElementById("root"));
