import React, { Component } from 'react';
import { render } from 'react-dom';

import ReactPlayer from 'react-player'

// import ability to handle routers in React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class SingleAlgo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="single-algo">
        <h4>REDUCE</h4>
        <div className="" >
          <p>Submitted by: WILL SENTANCE</p>
          <p>Difficulty: WARM-UP</p>
          <p>Prompt: Create a function, reduce, that takes an array and reduces the elements to a single value. The reduce function loops through the array and applies any operation that you can put into a function to each element in the array while keeping track of the outcome of each loop. In this way, we could use reduce to do things like sum all the numbers in an array or multiply them all together.
          </p>
        </div>
        <br></br>
        <br></br>

        <div className="player" >
          <ReactPlayer url='https://www.youtube.com/watch?v=ELX-FBXZ-3g' style={{}} />
        </div>
        <br></br>
        <br></br>
        <div>
          <Link to='/'>
            <button className="single-back"
            >Back</button>
          </Link>

          <button className="delete"
          >Delete</button>
        </div>
      </div>
    );
  }
}


export default SingleAlgo;