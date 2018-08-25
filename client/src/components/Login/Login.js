import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from '../../utils/API';


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
            console.log(res.data.username);
            if(res.data.username) {
                this.props.handleLogIn({sender: res.data.username});
                this.props.clickBoy();
            }
            
        });
        this.setState({
            username: '',
            password: ''
        })
    }

    render(){
        return(
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s2"></div>
                        <div className="input-field col s8">
                            <input id="username" type="text" name="username" className="validate" onChange={this.handleInputChange} value={this.state.username}/>
                            <label for="first_name">username</label>
                        </div>
                        <div className="input-field col s2"></div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2"></div>
                        <div className="input-field col s8">
                            <input id="password" type="password" className="validate" onChange={this.handleInputChange} value={this.state.password} name="password"/>
                            <label for="password">password</label>
                        </div>
                        <div className="input-field col s2"></div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4"></div>
                        <div className="input-field col s2">
                            <button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleFormSubmit}>Login</button>
                        </div>
                        <div className="input-field col s2">
                            <button class="btn waves-effect waves-light" type="flip" name="action" onClick={this.props.flipBoy}>Register</button>
                        </div>
                        <div className="input-field col s4"></div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login