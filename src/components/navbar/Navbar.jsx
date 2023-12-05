import React from 'react'
import './NavbarStyle.css'

const Navbar = () => {
  return (
    <div>
       <div className='navbar'>
          <div className="navContainer">
            <span className="logo">Maxon</span>
            <div className="navItems">
              <button className="navButton">Signup</button>
              <button className="navButton">Login</button>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Navbar