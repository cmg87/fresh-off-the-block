import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MessageApp from './components/MessageApp';
import './App.css';
import Login from './components/Login';
import LoginModule from './components/LoginModule';
import Landing from './pages/landing'
import Register from './components/Register';
import Nav from './components/NavBar'

class App extends Component { 
  constructor() {
    super()
    this.state = {
      sender: undefined,
      loggedIn : false,
      conversations: []
    }
  };

  handleLogIn = (obj) => {
    console.log("OBJECT BE MATEE", obj)
    this.setState({
      loggedIn:true,
      sender:obj.sender,
      conversations:obj.conversations
    })
  }

  render() {
    console.log(this.handleLogIn);
    return (
      <Router>
        <Switch>
        <Route exact path="/" navbar={<Nav/>} component={Landing} />
        <Route exact path="/login" render={(props) => <LoginModule {...props} handleLogIn={this.handleLogIn} />} />
        <Route exact path="/messages" render={(props) => this.state.sender ? <MessageApp {...props} conversations={this.state.conversations} sender={this.state.sender} /> : <LoginModule {...props} handleLogIn={this.handleLogIn} /> } />
        </Switch>
      </Router>
    )
  }
}

export default App;