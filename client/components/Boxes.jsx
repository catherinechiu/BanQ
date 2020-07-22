import React, { Component } from 'react';
import { render } from 'react-dom';

const Boxes = (props) => {

  // console.log("box props", props)

  const { name } = props;

  const boxStyle = {
    border: 'solid black 1px',
    display: 'flex',
    // gridTemplateColumns: '280px 280px 280px',
  }

  return (

    < li className="boxes" style={boxStyle}>
      <h4>POW</h4>
    </li >
  );
}


export default Boxes;