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

    const containerStyle = {
      // border: 'solid black 1px',
      display: 'flex',
      // gridTemplateColumns: '1 fr 1 fr 1 fr'
      // gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    }

    return (
      <div className="main-container">
        <div className="prompts">
          <h1 style={containerStyle} >Prompts</h1>
          {boxes}
        </div>
      </div>
    )
  };
};

export default Prompts;