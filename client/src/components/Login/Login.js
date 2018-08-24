import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from '../../utils/API';
import Nav from '../landing/navbar';


class Login extends Component{

    state = {
        username: '',
        password: ''
    }

    componentDidMount() {
        console.log(this.props);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        API.login({
            username: this.state.username,
            password: this.state.password
        }).then( res => {
            console.log(res.data.username)
        });
        this.setState({
            username: '',
            password: ''
        })
    }

    render(){
        return(
            <div>
                <Nav/>
                <form>
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" onChange={this.handleInputChange} value={this.state.username}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" onChange={this.handleInputChange} value={this.state.password} name="password"/>
                    </div>
                    <div>
                        <input type="submit" onClick={this.handleFormSubmit}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login