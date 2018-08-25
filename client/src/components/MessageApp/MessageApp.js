import React, { Component } from 'react';
import MenuBar from '../MenuBar'
import MessageList from "../MessageList"
import SendMessageForm from "../SendMessageForm"

class MessageApp extends Component {
    state= {
        conversation:"default"
    }

    componentDidMount = () => {
        this.setState({
            conversations: this.props.conversations
        })
    }

    selectConversation = (convo) => {
        this.setState({
            conversation: convo
        })
    }

    render() {
        return (<div>
            <MenuBar sender={this.props.sender} conversations={this.props.conversations} selectConversation={this.selectConversation}/>
            <MessageList sender={this.props.sender} conversation={this.state.conversation} />
            <SendMessageForm sender={this.props.sender} conversation={this.state.conversation}/>
        </div>);
    }
}

export default MessageApp