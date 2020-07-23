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
    return (
      < div className="PostAlgo">

        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <br></br>
            Author:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <br></br>
            Likes:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <br></br>
            Difficulty:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <br></br>
            Tags:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <br></br>
          </label>


          <input type="submit" value="Submit" />
        </form>
      </div >
    );
  }
}


export default PostAlgo;