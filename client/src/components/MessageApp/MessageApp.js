import React, { Component } from 'react';
import MenuBar from '../MenuBar'
import MessageList from "../MessageList"
import SendMessageForm from "../SendMessageForm"

class MessageApp extends Component {
    render() {
        return (<div>
            <MenuBar />
            <MessageList sender={this.props.sender}/>
            <SendMessageForm sender={this.props.sender}/>
        </div>);
    }
}

export default MessageApp