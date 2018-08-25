import React, { Component } from 'react';
import Login from '../Login';
import Register from '../Register';
import Nav from '../NavBar';
import "./LoginModule.css"

class LoginModule extends Component{
    timer = undefined;

    componentDidMount() {
        console.log(this.props);
    }

    state = {
        view: true
    }

    hider = e => {
        clearInterval(this.timer);
        document.getElementById("loginCard").classList.toggle("hidden");
    }

    flipBoy = e => {
        e.preventDefault();
        clearInterval(this.timer);
        document.getElementsByClassName("content")[0].classList.toggle("rotate");
        this.timer = setTimeout(this.hider, 100);
    }

    clickBoy = value => {
        this.props.history.push('/messages');
    };

    render(props){
        return(
            <div>
                <Nav/>
                <div className="container">
                    <div className="card bigger" id="cardGuy">
                        <div className="content" id="flipSection">
                            <div className="front" id="loginCard">
                                <Login clickBoy={this.clickBoy} flipBoy={this.flipBoy} handleLogIn={this.props.handleLogIn}/>
                            </div>
                            <div className="back">
                                <Register flipBoy={this.flipBoy}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginModule