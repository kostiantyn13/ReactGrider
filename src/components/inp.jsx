import React, { Component } from "react";

class Inp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <input type="range" max="100" oninput="fun()" />;
  }
}

export default Inp;
style`
  input[type="range"]{
    webkit-appearance: none;
    border-radius: 2px;
    width: 300px;
    height: 3px;
    background-image:
      -webkit-linear-gradient(left, rgb(34, 38, 255) 0%, rgb(34, 38, 255) 25%, #fff 25%, #fff 100%);
    box-shadow: inset rgb(88, 172, 206) 0 0 5px;
    outline: none;
    transition: "0.1s"
  }
  
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    background: rgb(13, 36, 168);
    border-radius: 50%;
    transition: 0.1s;
  }

  input[type="range"]::-webkit-slider-thumb:hover,
  input[type="range"]::-webkit-slider-thumb:active {
    width: 16px;
    height: 16px;
  }
 `;
