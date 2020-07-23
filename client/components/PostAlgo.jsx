import React, { Component } from 'react';
import { render } from 'react-dom';

// import ability to handle routers in React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class PostAlgo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    // const buttonStyle = {
    //   color: 'black'
    // }

    return (
      <div className="post-algo">
        <div>
          <h1>Add Algo</h1>
        </div>

        < div className="form-details">
          <form method='POST' action='/add'>
            <label>
              Title
              <input id='' type='text'></input>
            </label>
            <br></br>

            <label>
              Submitted By
              <input id='' type='text'></input>
            </label>
            <br></br>

            <label>
              Difficulty
              <input id='' type='text'></input>
            </label>
            <br></br>

            <label>
              Prompt
              <input id='' type='text'></input>
            </label>
            <br></br>

            <label>
              Tags
              <input id='' type='text'></input>
            </label>
            <br></br>

            <br></br>
            <br></br>

            <Link to='/'>
              <button style={{ color: 'inherit', textDecoration: 'inherit' }}> Back</button>
            </Link>
            <input className='submit-button' type='submit' value='Submit'></input>
          </form>
        </div >


      </div>
    );
  }
}


export default PostAlgo;



// <form onSubmit={this.handleSubmit}>
// <label>
//   Title:
//   <input type="text" value={this.state.value} onChange={this.handleChange} />
// </label>
// <label>
//   <br></br>
//   Submitted By:
//   <input type="text" value={this.state.value} onChange={this.handleChange} />
// </label>

// <label>
//   <br></br>
//   Difficulty:
//   <input type="text" value={this.state.value} onChange={this.handleChange} />
// </label>

// <label>
//   <br></br>
//   Prompt:
//   <input type="text" value={this.state.value} onChange={this.handleChange} />
// </label>

// <label>
//   <br></br>
//   Tags:
//   <input type="text" value={this.state.value} onChange={this.handleChange} />
// </label>
// <br></br>
// <br></br>
// <input className="add-button" type="submit" value="Submit" />
// </form>
// <button>Back</button>