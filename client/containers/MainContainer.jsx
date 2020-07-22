import React, { Component } from 'react';
import { render } from 'react-dom';


import Display from "./Display.jsx"
import Prompts from "./Prompts.jsx"

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <h1>Main Container</h1>
        <h1>Algorithms</h1>
        <button>Add</button>
        <br></br>
        <br></br>
        <br></br>
        <Display />
        <Prompts />
      </div>
    )
  };
};

export default MainContainer;