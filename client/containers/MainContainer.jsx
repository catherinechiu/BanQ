import React, { Component } from 'react';
import { render } from 'react-dom';


import Display from "./Display.jsx"
import Prompts from "./Prompts.jsx"

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedPrompts: false,
      // boxes: [],
      prompts: [],
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


  // drill down props to boxes
  // update database & state; then new object will be added to prompts array; set state will trigger re-render of main container & all its children
  // when re-render of box is triggered, prompt will get most updated state with new object, prop drill, then children will get updated 
  addPrompt() {
    // fetch request to post route on server to add prompt 
    // return this.setState();
    // re renders components 
  }

  render() {
    const { prompts, boxes } = this.state;

    return (
      <div >
        <h1>Algorithms</h1>
        <button onClick={this.addPrompt}>Add</button>
        <br></br>
        <br></br>
        <br></br>
        <Display />
        <Prompts
          boxes={boxes}
          prompts={prompts}
        />
      </div>
    )
  };
};

export default MainContainer;