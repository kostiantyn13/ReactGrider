import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <input value={this.state.term} onChange={this.onInputChange.bind(this)} />
    );
  }

  onInputChange(ev) {
    this.setState({ term: ev.target.value });
  }
}

export default SearchBar;
