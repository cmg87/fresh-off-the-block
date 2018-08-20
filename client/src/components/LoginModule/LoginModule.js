import React, { Component } from 'react';
import Login from '../Login';
import Register from '../Register'

class LoginModule extends Component{

    componentDidMount() {
        console.log(this.props);
    }

    state = {
        view: true
    }

    clickBoy = value => {
        this.setState({
          view: value
        });
    };

    render(){
        console.log("UP IN HERE");
        return(
            <div>
                {this.state.view ? <Login handleLogIn={this.props.handleLogIn}/> : <Register />}
                <a onClick={() => this.clickBoy(true)}>login</a>
                <a onClick={() => this.clickBoy(false)}>register</a>     
            </div>
        )
    }
}

export default LoginModule