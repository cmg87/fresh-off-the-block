import React, { Component } from 'react';
import API from '../../utils/API';

class Register extends Component{

    state = {
        username: '',
        password1: '',
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
            password: this.state.password1,
            password2: this.state.password2,
        });
        this.setState({
            username: '',
            password1: '',
            password2: '',
        })
    }


    render(){
        return(
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s2"></div>
                        <div className="input-field col s8">
                            <input type="text" className="validate" onChange={this.handleInputChange} value={this.state.username}/>
                            <label for="first_name">username</label>
                        </div>
                        <div className="input-field col s2"></div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2"></div>
                        <div className="input-field col s8">
                            <input id="password1" type="password" className="validate" onChange={this.handleInputChange} value={this.state.password} name="password1"/>
                            <label for="password">password</label>
                        </div>
                        <div className="input-field col s2"></div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2"></div>
                        <div className="input-field col s8">
                            <input id="password2" type="password" className="validate" onChange={this.handleInputChange} value={this.state.password} name="password2"/>
                            <label for="password">confim password</label>
                        </div>
                        <div className="input-field col s2"></div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4"></div>
                        <div className="input-field col s2">
                            <button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleFormSubmit}>Register</button>
                        </div>
                        <div className="input-field col s2">
                            <button class="btn waves-effect waves-light" type="flip" name="action" onClick={this.props.flipBoy}>Login</button>
                        </div>
                        <div className="input-field col s4"></div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register