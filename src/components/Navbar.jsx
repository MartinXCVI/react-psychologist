import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link">FAQ</Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>    
  )
}

export default Navbar
