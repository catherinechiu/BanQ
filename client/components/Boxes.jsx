import React, { Component } from 'react';
import { render } from 'react-dom';

// import ability to handle routers in React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import SingleAlgo from '../components/SingleAlgo.jsx'

const Boxes = (props) => {
  const { title, author, _id, key, difficulty } = props.info

  const url = `/algorithm/${_id}`

  // color code boxes by difficulty
  let color = 'blue'
  if (difficulty.toLowerCase() === 'warm-up') color = '#00FF00'
  if (difficulty.toLowerCase() === 'intermediate') color = '#00FFFF'
  if (difficulty.toLowerCase() === 'advanced') color = '#FF0099'


  return (
    < button className='box'>
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={url} >
        <h4 style={{ color: `${color}` }}>{title}</h4>
      </Link>
    </button >
  );
}








export default Boxes;