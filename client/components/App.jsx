import React, { Component } from "react";
import { render } from 'react-dom';
import ReactDOM from "react-dom";

import MainContainer from "../containers/MainContainer.jsx"


class App extends Component {
  render() {
    return (
      <div>
        <h1>Algorithms</h1>
        <button>Add</button>
        <br></br>
        <br></br>
        <br></br>
        <MainContainer />
      </div>
    );
  }
}

export default App;

render(<App />, document.querySelector('#root'));
