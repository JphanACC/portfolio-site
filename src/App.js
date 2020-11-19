import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'react-router-dom';

//stylings
import './App.scss';
//components
import Navbar from './components/Header/Navbar';
import Routes from './config/Routes';


function App(props) {
    return (
        <div className="App">
          <Navbar />
          <Routes />
        </div>
    );
}

export default App;
