import React, { Component } from 'react';
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
        },this.props.handleLogIn);
        this.setState({
            username: '',
            password: ''
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
                        <input type="submit" onClick={this.handleFormSubmit}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login