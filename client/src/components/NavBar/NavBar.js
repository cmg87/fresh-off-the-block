import React from 'react';


const NavBar = () => (
  <header>
    <nav>
      <div className="nav-wrapper">
        <ul className="right hide-on-small-and-down" id="nav-mobile">
          <li className="hide-on-small-only">
            <a href='/login'>Login | Register</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
  
export default NavBar;