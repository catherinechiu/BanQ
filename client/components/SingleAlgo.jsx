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
      backgroundColor: 'blue',
      marginTop: '20px 50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '30px 100px'
    }

    return (
      <div className="single-algo">
        <h4 style={{ fontSize: '36px', marginTop: '30px', padding: '0' }}>REDUCE</h4>
        <div className="single-algo" >
          <p>Submitted by: WILL SENTANCE</p>
          <p>Difficulty: WARM-UP</p>
          <p>Prompt: Create a function, reduce, that takes an array and reduces the elements to a single value. The reduce function loops through the array and applies any operation that you can put into a function to each element in the array while keeping track of the outcome of each loop. In this way, we could use reduce to do things like sum all the numbers in an array or multiply them all together.
          </p>
          {/* <p>Tags: </p> */}
        </div>
        <br></br>
        <br></br>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ReactPlayer url='https://www.youtube.com/watch?v=ELX-FBXZ-3g' style={{}} />
        </div>
        <br></br>
        <br></br>
        <div>
          <Link to='/'>
            <button style={{ margin: '20px', color: 'inherit', textDecoration: 'none', backgroundColor: 'inherit', color: 'white', border: 'solid white 1px', borderRadius: '10px', padding: '10px', fontSize: '25px' }}
            >Back</button>
          </Link>

          <button
            style={{ backgroundColor: 'inherit', color: 'white', border: 'solid white 1px', borderRadius: '10px', padding: '10px', fontSize: '25px' }}
          >Delete</button>
        </div>
      </div>
    );
  }
}


export default SingleAlgo;


// style={algoStyle}