import './App.css';
import React, { Component } from "react";
import UserCard from './Components/UserCard';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      myData: {},
      friends: []
    };
  }
  // componentDidMount() {
  //   axios.get('')
  // }

  render() {
    return (
      <div className="App">
        <h1>yo</h1>
        <UserCard/>
      </div>
    )
  }
  
}

export default App;
