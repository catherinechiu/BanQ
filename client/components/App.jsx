import React, { Component } from "react";
import { render } from 'react-dom';
import ReactDOM from "react-dom";

// import ability to handle routers in React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import form to post algo 
import PostAlgo from '../components/PostAlgo.jsx'
import SingleAlgo from '../components/SingleAlgo.jsx'

import MainContainer from "../containers/MainContainer.jsx"


class App extends Component {
  render() {
    return (

      <Router>
        <div className="app">
          <Switch>
            <Route path='/' exact component={MainContainer} />
            <Route path='/add' exact component={PostAlgo} />
            <Route path='/algorithm' render={(props) => <SingleAlgo {...props} title={this.props.title} />} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

render(<App />, document.querySelector('#root'));
