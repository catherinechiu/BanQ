import React, { Component } from 'react';
import { render } from 'react-dom';

const Boxes = (props) => {
  const { title, author } = props.info

  const boxStyle = {
    border: 'solid black 1px',
    width: '200px',
    textAlign: 'center',
  }

  return (
    < div className="boxes" style={boxStyle}>
      <h4>{title} </h4>
    </div >
  );
}


export default Boxes;