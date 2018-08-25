import React from 'react';
import API from "../../utils/API";
import "./SendMessageForm.css";

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
        console.log("What up", this.props);
        let message = {
            sender: this.props.sender,
            message: this.state.message,
            conversation: this.props.conversation
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