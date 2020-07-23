import React, { Component } from 'react';
import { render } from 'react-dom';

// import ability to handle routers in React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PostAlgo from '../components/PostAlgo.jsx'
import SingleAlgo from '../components/SingleAlgo.jsx'

import Display from "./Display.jsx"
import Prompts from "./Prompts.jsx"
import Modal from '../components/Modal.jsx'

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedPrompts: false,
      prompts: [],
      openModal: false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/prompts')
      .then(res => res.json())
      .then((data) => {
        if (!Array.isArray(data)) prompts = []
        return this.setState({
          prompts: data,
          fetchedPrompts: true,
        });
      })
      .catch(err => console.log('Prompts.componentDidMount: get prompts controller: ERROR: ', err));
  }

  render() {
    const { prompts, boxes } = this.state;

    return (
      <main >

        <div className="header">
          <h1>Algorithms</h1>
          <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/add'>
            <button className="header-button">+</button>
          </Link>

        </div>
        <Display />
        <Prompts
          boxes={boxes}
          prompts={prompts}
        />

      </main>
    )
  };
};



export default MainContainer;