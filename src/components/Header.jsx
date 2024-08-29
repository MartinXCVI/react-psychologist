import Logo from './Logo'
import Navbar from './Navbar'
import AppointBtn from './AppointBtn'

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
      <AppointBtn />
    </header>
  )
}

export default Header