import './App.css';
import React, { Component } from "react";
import axios from 'axios';

import UserCard from './Components/UserCard';
import FollowerCards from './Components/FollowerCards';


class App extends Component {
  constructor(){
    super();
    this.state = {
      myData: {},
      friends: []
    };
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/damonbogich')
    .then(res => {
      this.setState({myData: res.data})
    })
    .catch(err => {
      console.log(err)
    }) 
    axios.get('https://api.github.com/users/damonbogich/followers')
    .then(res => {

      this.setState({friends: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <UserCard data={this.state.myData}/>
        <FollowerCards data={this.state.friends} />
      </div>
    )
  }
  
}

export default App;
