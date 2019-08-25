import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import RightBar from '../src/components/rightbar'
import LeftBar from '../src/components/leftBar'


class App extends Component {
  state= {

  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Simple React App.
        </p>
       
      </header>

     

<div class="row">
    <div className="col-sm-3"><LeftBar/></div>
    <div class="col-sm-8">col-sm-4</div>
  </div>
    </div>
  );
}
}
export default App;
