import React, { Component } from 'react';
import { render } from 'react-dom';

import Boxes from '../components/Boxes.jsx'

class Prompts extends Component {
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
        if (!Array.isArray(data)) characters = [];
        return this.setState({
          prompts: data,
          fetchedPrompts: true,
        });
      })
      .catch(err => console.log('Prompts.componentDidMount: get prompts controller: ERROR: ', err));
  }

  render() {
    console.log('prompts array: ', this.state.prompts[0]);
    let boxes = [];
    for (let i = 0; i < 3; i++) {
      let algo = this.state.prompts[i]
      console.log('info', algo);
      boxes.push(<Boxes
        key={i}
        id={i}
        title={this.state.prompts.title}
      />)
    }
    return (
      <div className="main-container">
        <div className="prompts">
          <h1>Prompts</h1>
        </div>
        {boxes}
      </div>
    )
  };
};

export default Prompts;