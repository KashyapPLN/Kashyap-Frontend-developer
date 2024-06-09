import React from 'react';
import './navbar.css';
import logo from '../assets/logo-transparent.png'

export default function NavBar() {
  return (
    <div className='navbar'>
<div className='navbar-left'>
<div className='navbar-logo'>
    <img src={logo} alt='logo'/>
</div>
<div className='navbar-menu'>
    <ul>
        <li>Features</li>
        <li>Roadmap</li>
        <li>Tokenomics</li>
    </ul>
</div>
</div>
<div className='navbar-right'>
    <button className='navbar-whitepaper-button'>Whitepaper</button>
    <button className='navbar-get-started-button'>Get Started</button>
</div>
    </div>
  )
}
