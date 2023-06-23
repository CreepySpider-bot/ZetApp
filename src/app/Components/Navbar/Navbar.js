import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
    <div>
      <nav className='navbar'>
            <a className='navtags'>
                <img className='logo' src="logo.svg">
                </img>
            </a>
        <div className='navbar_under'>
            <a className='navtags' href='/' style={{textDecoration:"none"}}>Home</a>
            <a className='navtags' href='/About' style={{textDecoration:"none"}}>About Us</a>
            <a className='navtags'>Parter With Us</a>
            <a className='navtags'>Blog</a>
            <button className='nav_btn'>Download ZET</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar