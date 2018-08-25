import React, { Component } from 'react';
import API from "../../utils/API";
import "./MessageList.css"

class MessageList extends Component {
    state = {
      messages: []
    }
    componentDidMount() {
      this.loadMessages();
      setInterval(this.loadMessages,1000);
    }

    loadMessages = () => {
      API.getMessages()
        .then(res => {
          if(res.data.conversations[this.props.conversation]){
            this.setState({ 
              messages: res.data.conversations[this.props.conversation] 
            })
          }
          else {
            this.setState({
              messages: []
            })
          }
          document.getElementById("messageList").scrollTop = document.getElementById("messageList").scrollHeight;
        })
        .catch(err => console.log(err));
    };

    render() {
      return (
        <div className="message-list container" id="messageList">                 
          {this.state.messages.map((message,index) => {
            return (
              <div className="row">
                <div key={index} className={this.props.sender === message.sender ? "right me col s6" : "other col s6"}>
                  <div className={this.props.sender === message.sender ? "me-message sender" : "other-message sender"}>
                    {message.sender}
                  </div>
                  <div className={this.props.sender === message.sender ? "me-message message" : "other-message message"}>
                    {message.message}
                  </div>
                </div>
             </div>
           )
         })}
       </div>
      )
    }
}

export default MessageList