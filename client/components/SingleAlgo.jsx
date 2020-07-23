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

    const algoStyle = {
      // backgroundColor: 'blue',
      marginTop: '20px 50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '30px 100px'
    }

    return (
      <div>
        <h4 style={{ fontSize: '36px', marginTop: '30px', padding: '0' }}>Title</h4>
        <div className="single-algo" style={algoStyle}>
          <p>Submitted by: </p>
          <p>Difficulty: </p>
          <p>Prompt: </p>
          {/* <p>Tags: </p> */}
        </div>
        <br></br>
        <br></br>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' style={{ border: 'solid white 10px' }} />
        </div>
        <br></br>
        <br></br>
        <div>
          <Link to='/'>
            <button style={{ margin: '20px', color: 'inherit', textDecoration: 'none', backgroundColor: 'inherit', color: 'white', border: 'solid white 1px', padding: '10px', fontSize: '25px' }}
            >Back</button>
          </Link>

          <button
            style={{ backgroundColor: 'inherit', color: 'white', border: 'solid white 1px', padding: '10px', fontSize: '25px' }}
          >Delete</button>
        </div>
      </div>
    );
  }
}


export default SingleAlgo;
