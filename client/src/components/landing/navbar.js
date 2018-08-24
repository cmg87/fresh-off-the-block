import React from 'react';


const Nav = () => (
  <header>
    <nav>
      <div class="nav-wrapper">
        <ul className="right hide-on-small-and-down" id="nav-mobile">
          <li className="hide-on-small-only">
            <a href='/register'>  Register</a>
          </li>
          <li className="hide-on-small-only">
            <a href='/Login'>  Login</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
  
export default Nav;