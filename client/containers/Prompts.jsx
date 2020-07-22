import React, { Component } from 'react';
import { render } from 'react-dom';

import Boxes from '../components/Boxes.jsx'

class Prompts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let boxes = [];
    for (let i = 0; i < 3; i++) {
      boxes.push(<Boxes
        key={i}
        id={i}
      />)
    }
    return (
      <div className="main-container">
        <div className="difficulty">
          <h1>Prompts</h1>
        </div>
        {boxes}
      </div>
    )
  };
};

export default Prompts;