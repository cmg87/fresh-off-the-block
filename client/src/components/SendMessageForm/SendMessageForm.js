import React, { Component } from 'react';
import API from "../../utils/API";

class SendMessageForm extends React.Component {
    state = {
        message: ''
    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
    
    handleSubmit = e => {
        e.preventDefault()
        console.log("What up", this.state);
        let message = {
            sender: "Austin",
            message: this.state.message
        }
        API.sendMessage(message)
        this.setState({
            message: ''
        })
    }
    
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input
                    name = "message"
                    onChange={this.handleInputChange}
                    onSubmit={this.handleSubmit}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

export default SendMessageForm