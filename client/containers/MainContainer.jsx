import React, { Component } from 'react';
import { render } from 'react-dom';


import Display from "./Display.jsx"
import Prompts from "./Prompts.jsx"
import Modal from "../components/Modal.jsx"

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedPrompts: false,
      prompts: [],
      openModal: false,
    }
    this.addPrompt = this.addPrompt.bind(this)
    // this.openModal = this.openModal.bind(this)
    // this.closeModal = this.closeModal.bind(this)
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

  // openModal() {
  //   console.log('open modal clicked');
  //   this.setState({ openModal: true })
  // }

  // closeModal() {
  //   console.log('close modal clicked');
  //   this.setState({ openModal: false })
  // }

  // drill down props to boxes
  // update database & state; then new object will be added to prompts array; set state will trigger re-render of main container & all its children
  // when re-render of box is triggered, prompt will get most updated state with new object, prop drill, then children will get updated 
  addPrompt() {
    console.log('i was clicked');
    // copy current prompts array in state 
    let prompts = this.state.prompts.slice();

    // fetch request to post route on server to add prompt 
    const newBox = {
      title: 'new title',
      author: 'new author',
      likes: 7,
      prompt: 'new prompt',
      difficulty: 'advanced',
      tests: ['tests'],
      tags: ['tags'],
    }

    prompts.push(newBox)

    // re renders components 
    return this.setState({ prompts });
  }

  // TODO: connect add prompt to modal button!!

  render() {
    const { prompts, boxes } = this.state;

    return (
      <main >
        <h1>Algorithms</h1>
        {/* <Modal open={this.state.open} handleClose={this.closeModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button onClick={this.openModal}>Open Modal</button> */}
        <button>Add</button>
        <br></br>
        <br></br>
        <br></br>
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