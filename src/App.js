import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//stylings
import './App.scss';
//components
import Navbar from './components/Header/Navbar';

// so what seems to be the problem?
// the problem is in components -> Header -> Navbar

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
