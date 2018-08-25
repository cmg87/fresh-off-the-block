import React, { Component } from 'react';
import API from "../../utils/API";
import "./MessageList.css"

class MessageList extends Component {
    state = {
      messages: []
    }
    componentDidMount() {
      console.log(this.props)
      this.loadMessages();
      setInterval(this.loadMessages,1000);
    }

    loadMessages = () => {
      API.getMessages()
        .then(res => {
          console.log(res);
          this.setState({ messages: res.data.messages })
          document.getElementById("messageList").scrollTop = document.getElementById("messageList").scrollHeight;
        })
        .catch(err => console.log(err));
    };

    render() {
      return (
        <ul className="message-list" id="messageList">                 
          {this.state.messages.map((message,index) => {
            return (
             <li key={index} className={this.props.sender === message.sender ? "me" : "other"}>
               <div className={this.props.sender === message.sender ? "me-message message" : "other-message message"}>
                 {message.message}
               </div>
               <div className={this.props.sender === message.sender ? "me-message sender" : "other-message sender"}>
                 {message.sender}
               </div>
             </li>
           )
         })}
       </ul>
      )
    }
}

export default MessageList