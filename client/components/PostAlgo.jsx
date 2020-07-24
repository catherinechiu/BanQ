import React, { Component } from 'react';
import { render } from 'react-dom';

// import ability to handle routers in React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class PostAlgo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      difficulty: '',
      prompt: '',
      url: '',
      // tags: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    // deconstruct form data out of state 
    const { title, author, difficulty, prompt, url } = this.state;

    fetch('/add/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      // stringify this.state (populated by input form) and place in request.body to send to server
      body: JSON.stringify(this.state)
    })
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          data = [];
        }
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log('error: ', err)
        this.props.history.push("/");
      })
  }


  render() {

    // const backStyle = {
    //   padding: '20%',
    //   width: '150px',
    //   height: '40px',
    //   // display: 'flex',
    //   // alignItems: 'center',
    //   // textDecoration: 'underline',
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
              <input type='text' name="title" value={this.state.title} onChange={this.handleChange}></input>
            </label>

            <label>
              Submitted By
              <input type='text' name="author" value={this.state.author} onChange={this.handleChange}></input>
            </label>

            <label>
              Difficulty
              <input type='text' name="difficulty" value={this.state.difficulty} onChange={this.handleChange}></input>
            </label>

            <label>
              Prompt
              <input type='text' name="prompt" value={this.state.prompt} onChange={this.handleChange}></input>
            </label>

            <label>
              URL (optional)
              <input type='text' name="url" value={this.state.url} onChange={this.handleChange}></input>
            </label>

          </form>

          <div className="buttons">
            <Link className="back" to='/'>
              <button  > Back</button>
            </Link>

            <a href='/'><input
              className='submit-button'
              type='submit' value='Submit'
              onClick={(event) => this.onSubmit(event)}
            ></input></a>
          </div>

        </div >


      </div>
    );
  }
}


export default PostAlgo;

// styling for back buton
// style={{ color: 'inherit', textDecoration: 'inherit' }}



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