import React, { Component } from 'react';
import { render } from 'react-dom';

import Boxes from '../components/Boxes.jsx'

class Prompts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // deconstruct from props
    const { prompts } = this.props;
    let boxes = [];

    for (let i = 0; i < prompts.length; i++) {
      let info = prompts[i]
      boxes.push(<Boxes
        key={i}
        id={i}
        info={info}
      />)
    }

    return (
      <div className="main-container">
        <h1>Prompts</h1>
        <div className="prompts">
          {boxes}
        </div>
      </div>
    )
  };
};

export default Prompts;