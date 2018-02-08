import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar.js';
import Card from './components/Card/Card.js';

import postData from './data.js';

class App extends Component {
  render() {
    return (
      <div className='app__container'>
        <NavBar />
        <div className='body__container'>
          <Card />
        </div>
      </div>
    );
  }
}

export default App;