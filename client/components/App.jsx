import React, { Component } from "react";
import { render } from 'react-dom';
import ReactDOM from "react-dom";

import MainContainer from "../containers/MainContainer.jsx"

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Algorithms</h1>
        <span><button>Add</button></span>
        <br></br>
        <MainContainer />
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));