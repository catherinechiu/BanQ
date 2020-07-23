import React, { Component } from 'react';
import { render } from 'react-dom';

// import ability to handle routers in React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import SingleAlgo from '../components/SingleAlgo.jsx'

const Boxes = (props) => {
  const { title, author, _id, key } = props.info

  const url = `/algorithm/${_id}`

  const boxStyle = {
    // border: 'solid whitesmoke 1px',
  }


  return (
    < div className='box' style={boxStyle}>
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={url} >
        <h4>{title}</h4>
      </Link>
    </div >
  );
}








export default Boxes;