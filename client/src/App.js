import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/nav/nav';
import Events from './components/events/events';
import EventDetail from './components/events/eventDetail';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Route exact path='/' component={Events} />
            <Route exact path='/events/:id' component={EventDetail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
