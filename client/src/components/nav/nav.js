import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './nav.css';

function Nav(props) {
  return (
    <div>
      <div className="App-header">
        <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
      </div>
    </div>
  );
}


export default Nav;