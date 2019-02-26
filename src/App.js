import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Time from './Dynamic';
import Timer from './timer'

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Time ms ={20010000}/>
        
       {/* 
         <Timer/> */}
      </div>
    );
  }
}

export default App;
