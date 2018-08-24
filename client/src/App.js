import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MessageApp from './components/MessageApp';
import './App.css';
import Login from './components/Login';
import Landing from './pages/landing'
import Register from './components/Register';
import Nav from './components/landing/navbar'

class App extends Component { 
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
      <Router>
        <Switch>
        <Route exact path="/" navbar={<Nav/>} component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" render={(props) => <Login {...props} handleLogIn={this.handleLogIn} />} />
        <Route exact path="/messages" render={(props) => this.state.sender ? <MessageApp {...props} sender={this.state.sender}/> :  <Login {...props} handleLogIn={this.handleLogIn} />} />
        </Switch>
      </Router>
    )
  }
}

export default App;

// const App = () => (
//   <Router>
//     <div>
//       <Nav />
//       <Switch>
//         <Route exact path="/" component={Books} />
//         <Route exact path="/books" component={Books} />
//         <Route exact path="/books/:id" component={Detail} />
//         <Route component={NoMatch} />
//       </Switch>
//     </div>
//   </Router>
// );

// export default App;