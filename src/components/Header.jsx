import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div>
        <nav>
         <div className="nav-wrapper">
           <ul id="nav-mobile" className="left">
             <li><a>Home</a></li>
             <li><a>Cart</a></li>
           </ul>
         </div>
        </nav>
        <h2>Camera Shop</h2>
      </div>
    )
  }
}

export default Header;
