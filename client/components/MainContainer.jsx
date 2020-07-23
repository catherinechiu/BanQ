import React, { Component } from 'react';
import { render } from 'react-dom';

// import ability to handle routers in React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PostAlgo from '../components/PostAlgo.jsx'
import SingleAlgo from '../components/SingleAlgo.jsx'

import Display from "./Display.jsx"
import Prompts from "./Prompts.jsx"

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedPrompts: false,
      prompts: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/prompts')
      .then(res => res.json())
      .then((data) => {
        if (!Array.isArray(data)) prompts = []
        console.log('data', data);
        console.log('HIII');


        // call globalUpdate to update state in App from child MainContainer
        this.props.updateGlobal({
          fetchedPrompts: true,
          prompts: data,
        })

        console.log('Succeeded: ', data);
        return this.setState({
          fetchedPrompts: true,
          prompts: data,
        });

      })
      .catch(err => console.log('Prompts.componentDidMount: get prompts controller: ERROR: ', err));
  }



  render() {
    const { prompts, boxes } = this.state;
    console.log('hii');
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