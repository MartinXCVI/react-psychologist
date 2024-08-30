import { useState } from 'react';
import { motion } from "framer-motion"

import { Link } from 'react-router-dom'

import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuClosed, setIsMenuClosed] = useState(true)
  const [displayStyle, setDisplayStyle] = useState('none')

  function displayNavMenu() {
    if(!isMenuOpen) {
    setDisplayStyle('flex')
    setIsMenuOpen(true)
    setIsMenuClosed(false)
    }
  }

  function hideNavMenu() {
    if(!isMenuClosed) {
    setIsMenuOpen(false)
    setIsMenuClosed(true)
    }
  }

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  }

  return (
    <nav className="navbar">
      <div className="menu-div" onClick={displayNavMenu}>
        <IoMenu className='menu-icon' />
      </div>
      <motion.ul className={`nav-list`}
        style={{display: displayStyle}}
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{duration: 0.5}}
      >
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
      </motion.ul>
    </nav>    
  )
}

export default Navbar
