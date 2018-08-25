import React from 'react';
import "./MenuBar.css";
import M from 'materialize-css';
import API from '../../utils/API';
import "./MenuBar.css"

class MenuBar extends React.Component {
    state = {
        instance:undefined,
        conversationName:"",
        conversations:[]
    }

    componentDidMount() {
        this.setState({
            conversations: this.props.conversations
        })
        console.log("IN HERE 1", this.props.conversations);
        let elems = document.querySelectorAll('.sidenav');
        let instances = M.Sidenav.init(elems); 
        this.setState({
            instance:instances
        })
    }

    componentWillUnmount = () => {
        this.state.instance.destroy();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("WHAT UP");
        API.addConvo({
            username: this.props.sender,
            conversation: this.state.conversationName
        }).then( res => {
            console.log(res.data.conversations);
            if(res.data.conversations) {
                this.setState({
                    conversations: res.data.conversations
                });
                this.reveal();
            }
        });
        this.setState({
            conversationName:""
        })
    }

    clickBoy = (convo) => {
        console.log("THE CONVO," ,convo)
        this.props.selectConversation(convo)
    }

    reveal = () => {
        document.getElementById("addAConvo").classList.toggle("hidden");
        document.getElementById("addButton").classList.toggle("hidden");
        document.getElementById("convoName").classList.toggle("hidden");
    }

    render = () => {
        return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a data-target="slide-out" className="sidenav-trigger" onClick={this.openNav}>
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </nav>
            <ul id="slide-out" className="sidenav sidenav-fixed">
                <li>
                    <div className="user-view">
                        <div className="background" style={{background:"grey"}}>
                            {this.props.sender}
                        </div>
                    </div>
                </li>
                {this.state.conversations.map((conversation,index) => {
                    return(
                    <li key={index} onClick={()=>this.clickBoy(conversation)}>
                        <a className="waves-effect waves-teal">{conversation}</a>
                    </li>)
                })}

                <a id="addButton" className="btn-floating btn-medium waves-effect waves-light green" onClick={this.reveal}>
                        <i className="material-icons">add</i>
                </a>
                <span id="addAConvo" onClick={this.reveal}>Add a conversation</span>
                <span id="convoName" className="hidden">
                    <form onSubmit={this.handleFormSubmit}>
                        <input 
                            id="conversationName" 
                            placeholder="Conversation name" 
                            type="text" 
                            name="conversationName" 
                            className="validate"
                            onChange={this.handleInputChange} 
                            value={this.state.conversationName}/>
                    </form>
                </span>
            </ul>
        </header>
        )
    }
}

export default MenuBar