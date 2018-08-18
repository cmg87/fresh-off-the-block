import React, { Component } from 'react';
import logo from './logo.svg';
import MenuBar from './components/MenuBar'
import MessageList from "./components/MessageList"
import SendMessageForm from "./components/SendMessageForm"
import './App.css';
import Login from './components/Login';


class App extends React.Component { 
  constructor() {
    super()
    this.state = {
      sender: "Austin",
      loggedIn : false
    }
  }

  handleLogIn(){

  }

  render() {
    return (
      <div className="app container">
      {/* <Login /> */}
        <MenuBar />
        <MessageList sender={this.state.sender}/>
        <SendMessageForm />
     </div>
    )
  }
}

export default App;
