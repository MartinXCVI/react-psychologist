import { useState } from 'react';

import { Link } from 'react-router-dom'

import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";


const Navbar = () => {

  const [menuClass, setMenuClass] = useState('hidden-menu')

  function displayNavMenu() {
    setMenuClass('')
  }

  function hideNavMenu() {
    setMenuClass('hidden-menu')
  }

  return (
    <nav className="navbar">
      <div className="menu-div" onClick={displayNavMenu}>
        <IoMenu className='menu-icon' />
      </div>
      <ul className={`nav-list ${menuClass}`}>
        <div className="close-div" onClick={hideNavMenu}>
          <IoIosCloseCircleOutline className='close-icon' />
        </div>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={hideNavMenu}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={hideNavMenu}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link" onClick={hideNavMenu}>Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/faq" className="nav-link" onClick={hideNavMenu}>FAQ</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={hideNavMenu}>Contact</Link>
        </li>
      </ul>
    </nav>    
  )
}

export default Navbar
