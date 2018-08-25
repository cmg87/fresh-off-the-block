import React from 'react';
import "./MenuBar.css";
import M from 'materialize-css';

class MenuBar extends React.Component {
    state = {
        instance:undefined
    }

    componentDidMount() {
        console.log("IN HERE 1")
        let elems = document.querySelectorAll('.sidenav');
        let instances = M.Sidenav.init(elems); 
        this.setState({
            instance:instances
        })
    }

    componentWillUnmount = () => {
        this.state.instance.destroy();
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
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background" style={{background:"grey"}}>
                        </div>
                        <a href="#user"><img className="circle" src="https://media.licdn.com/dms/image/C5603AQE6e2iF93uy3g/profile-displayphoto-shrink_200_200/0?e=1540425600&v=beta&t=N-1NLyEyJXnZk7o4JpPTVvhUTccC0tAmhSpy8D2qT6w"/></a>
                        <a href="#name"><span className="white-text name">{this.props.sender}</span></a>
                    </div>
                </li>
                <li>
                    <a href="#!">
                        <i className="material-icons">cloud</i>First Link With Icon
                    </a>
                </li>
                <li>
                    <a href="#!">Second Link</a>
                </li>
                <li>
                    <div className="divider"></div>
                </li>
                <li>
                    <a className="subheader">Subheader</a>
                </li>
                <li>
                    <a className="waves-effect" href="#!">Third Link With Waves</a>
                </li>
            </ul>
        </header>
        )
    }
}

export default MenuBar