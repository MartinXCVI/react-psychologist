import Logo from "./Logo"
import ContactInfo from "./ContactInfo"
import Hourlies from "./Hourlies"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="footer-section-left">
          <Logo />
          <ContactInfo />
        </section>
        <section className="footer-section-right">
          <Hourlies />
        </section>
      </footer>
    </>
  )
}

export default Footer