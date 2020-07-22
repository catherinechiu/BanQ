import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

// uncomment so that webpack can bundle styles
// '/' means you're looking for a folder
import './stylesheets/style.css';

render(
  <App />,
  document.getElementById('root')
);
