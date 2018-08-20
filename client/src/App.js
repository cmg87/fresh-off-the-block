import React, { Component } from 'react';
import MessageApp from './components/MessageApp';
import './App.css';
import LoginModule from './components/LoginModule';


class App extends React.Component { 
  constructor() {
    super()
    this.state = {
      sender: undefined,
      loggedIn : false
    }
  };

  handleLogIn = (obj) => {
    this.setState({
      loggedIn:true,
      sender:obj.sender
    })
  }

  render() {
    console.log(this.handleLogIn);
    return (
      <div className="app container">
        {this.state.sender ? <MessageApp sender={this.state.sender}/> : <LoginModule handleLogIn={this.handleLogIn}/>}
     </div>
    )
  }
}

export default App;
