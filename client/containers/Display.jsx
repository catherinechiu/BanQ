import React, { Component } from 'react';
import { render } from 'react-dom';

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="difficulty">
          <button>Warm-Up</button>
          <button>Intermediate</button>
          <button>Advanced</button>
        </div>
      </div>
    )
  };
};

export default Display;