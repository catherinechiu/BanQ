import React, { Component } from 'react';
import { render } from 'react-dom';

// import ability to handle routers in React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class SingleAlgo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    // const buttonStyle = {
    //   color: 'black'
    // }

    return (
      <div className="single-algo">
        <p>Title: </p>
        <p>Submitted By: </p>
        <p>Difficulty: </p>
        <p>Prompt: </p>
        <p>Tags: </p>

        <label>
          Title
        </label>
        <br></br>

        <label>
          Submitted By
        </label>
        <br></br>

        <label>
          Difficulty
        </label>
        <br></br>

        <label>
          Prompt
        </label>
        <br></br>

        <label>
          Tags
        </label>

      </div>
    );
  }
}


export default SingleAlgo;
