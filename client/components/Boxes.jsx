import React, { Component } from 'react';
import { render } from 'react-dom';

const Boxes = (props) => {
  const { title, author } = props.info

  const boxStyle = {
    // border: 'solid whitesmoke 1px',
  }

  return (
    < div className="box" style={boxStyle}>
      <h4>{title} </h4>
    </div >
  );
}


export default Boxes;