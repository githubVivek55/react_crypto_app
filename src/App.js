import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {Navbar} from './components';
import './style.css';

function App () {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main" />
      <div className="footer" />
    </div>
  );
}

export default App;
