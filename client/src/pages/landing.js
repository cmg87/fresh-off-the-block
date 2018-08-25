import React from 'react';
import Nav from '../components/NavBar';
import M from 'materialize-css';

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
                        <h2 class="teal-text teal-text lighten-2">Parallax Template</h2>
                        <p>A modern responsive front-end framework based on Material Design</p>
                        <a class="waves-effect waves-light btn-large teal lighten-2">Get Started</a>
                    </div>
                    </div>
                </div>
            
                <div class="parallax">
                    <img src="https://cdn-images-1.medium.com/max/1500/1*-4ApniIsTOg1_1vOjaQvnQ.jpeg"/>
                </div>

            </div>
            <div class="container">
                <div class="row">
                    <div class="col m4 s12">
                    <div class="icon-block">
                        <h2 class="center light-blue-text">
                        <i class="material-icons">flash_on</i>  
                        </h2>
                        <h5 class="center">Speeds up development</h5>
                        <p class="light">
                        We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.
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
                        <h5 class="center">Easy to work with</h5>
                        <p class="light">
                        We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.
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