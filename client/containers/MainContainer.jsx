import React, { Component } from 'react';

class MainContainer extends Component {
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
  }
}

export default MainContainer;