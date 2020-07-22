import React, { Component } from "react";
import { render } from 'react-dom';
import ReactDOM from "react-dom";

import MainContainer from "../containers/MainContainer.jsx"


class App extends Component {
  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

export default App;

render(<App />, document.querySelector('#root'));
