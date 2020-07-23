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

        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

        <Link to='/'>
          <button style={{ margin: '20px', color: 'inherit', textDecoration: 'none', backgroundColor: 'inherit', color: 'white', border: 'solid white 1px', padding: '10px', fontSize: '25px' }}
          >Back</button>
        </Link>

        <button
          style={{ backgroundColor: 'inherit', color: 'white', border: 'solid white 1px', padding: '10px', fontSize: '25px' }}
        >Delete</button>
      </div>
    );
  }
}


export default SingleAlgo;
