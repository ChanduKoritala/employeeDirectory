import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
// import Sort from './components/Sort'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header /><br />
        {/* <Sort /><br /> */}
        <Table />
        
      </div>
    );
  }
}


export default App;
