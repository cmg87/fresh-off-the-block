import React, { Component } from 'react';
import API from '../../utils/API';

class Register extends Component{

    state = {
        username: '',
        password: '',
        password2: '',
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
       
        API.createUser({
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
        });
        this.setState({
            username: '',
            password: '',
            password2: '',
        })
    }

    render(){
        return(
            <div>
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
        <label> Confirm Password:</label>
        <input type="password" onChange={this.handleInputChange} value={this.state.password2} name="password2"/>
    </div>
    <div>
        <input type="submit" onClick={this.handleFormSubmit}/>
    </div>
</form>
            </div>
        )
    }
}

export default Register