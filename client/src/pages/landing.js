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
                    <img src="/images/Blockchain.jpg"/>
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
                        In todays Global Economy 
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
            

 <div class="container section2 center valign-wrapper">
                <div class="container">
                    <div class="row">
                    <div class="col s12 white-text">
                        
                    
                    </div>
                    </div>
                </div>
            
                
                    <img src="/images/fresh.png"/>
               

            </div>


        </div>
        );
    }
}
  
export default Landing;