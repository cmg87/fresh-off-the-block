import React from 'react';
import Nav from '../components/NavBar';
import M from 'materialize-css';
import './landing.css';

class Landing extends React.Component {
    state = {
        instance:undefined
    }
    componentDidMount() {
        let instances;
        let elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);
        this.setState({
            instance:instances
        })
    }

    componentWillUnmount() {
        this.state.instance.destroy();
    }

    render() {
        return(
        <div>
            <Nav/>
            <div class="parallax-container center valign-wrapper">
                <div class="container">
                    <div class="row">
                    <div class="col s12 white-text">
                        <h2 class="lighten-2 statement">Fresh Off The Block</h2>
                        <p class="statement">A new way to look at communication</p>
                    
                    </div>
                    </div>
                </div>
            
                <div class="parallax tinted">
                    <img src="/assets/messaging-saas-app.png"/>
                </div>

            </div>
            <div class="section white">
                <div class="row container">
                    <h2 class="header">What made us make this app?</h2>
                    <p class="grey-text text-darken-3 lighten-3">
                        We were out to create the buzziest App to get us jobs. So we took: messaging, cloud communication, the blockchain, and rolled them all into one application called fresh off the block.
                        Jokes asside; we were really engaged by blockchain technology, and after looking at existing uses (<a href="https://www.coindesk.com/ups-eyes-blockchain-in-bid-to-track-global-shipping-data/">Shipping</a>, <a href="https://brave.com/">browsers</a>, and <a href="https://blockgeeks.com/guides/blockchain-applications/">and dozens of others</a>)
                        we found a missed edge case with blockchain communication
                    </p>
                </div>
            </div>
            <div class="parallax-container center valign-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col s12 white-text">
                            <h2 class="lighten-2 statement">Our technology</h2>
                        </div>
                    </div>
                </div>
            
                <div class="parallax tinted">
                    <img src="/assets/rich-messaging.png"/>
                </div>

            </div>
            <div class="section white">
                <div class="row container">
                    <h3 class="header">What's driving us?</h3>
                    <p class="grey-text text-darken-3 lighten-3">
                        We utilized: lotion to drive our blockchain configuration, tendermint is being used to communicate between nodes in our chain, materialize is behind our layout,
                        react renders our frontend, node and express drive our routes, mongo and passport handle our users and authentication
                    </p>
                </div>
            </div>
            <div class="parallax-container center valign-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col s12 white-text">
                            <h2 class="lighten-2 statement">The future</h2>
                        </div>
                    </div>
                </div>
            
                <div class="parallax tinted">
                    <img src="/assets/the-future.jpg"/>
                </div>

            </div>
            <div class="section white">
                <div class="row container">
                    <h3 class="header">Where are we headed?</h3>
                    <p class="grey-text text-darken-3 lighten-3">
                        Over the last few weeks we cam pretty far, from battling nginx issues to wrapping our heads around encryption, but we still have a little bit to go. 
                        We'd like to implement: true session management, dynamic nodes and the ability to comput hashes on user devices, end user encryption and decryption, 
                        and ejecting our react apps into native apps.
                    </p>
                </div>
            </div>
            <div class="parallax-container center valign-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col s12 white-text">
                            <h2 class="lighten-2 statement">In summary</h2>
                        </div>
                    </div>
                </div>
            
                <div class="parallax tinted">
                    <img src="/assets/messaging.jpg"/>
                </div>

            </div>
            <div class="container">
                <div class="row">
                    <div class="col m4 s12">
                    <div class="icon-block">
                        <h2 class="center light-blue-text">
                        <i class="material-icons">flash_on</i>  
                        </h2>
                        <h5 class="center">Tomorrows technology for todays world</h5>
                        <p class="light">
                        In todays Global Economy there's a need for secure business oriented communication. By utilizing blockchain technology we allow 100s of immutable conversations to be held simultaneously.
                        </p>
                    </div>
                    
                    </div>
                    <div class="col m4 s12">
                    <div class="icon-block">
                        <h2 class="center light-blue-text">
                        <i class="material-icons">group</i>  
                        </h2>
                        <h5 class="center">User Experience Focused</h5>
                        <p class="light">
                        By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.
                        </p>
                    </div> 
                    </div>
                    <div class="col m4 s12">
                    <div class="icon-block">
                        <h2 class="center light-blue-text">
                        <i class="material-icons">settings</i>  
                        </h2>
                        <h5 class="center">Easy to use</h5>
                        <p class="light">
                        We took out all of the confusing work of having to implement your own blockchain, setting up nodes, addresses, hashing, and validation. Just register your name and you're chatting with your friends in an instant.
                        </p>
                    </div> 
                    </div>
                </div>
            </div>
            
        </div>
        );
    }
}
  
export default Landing;