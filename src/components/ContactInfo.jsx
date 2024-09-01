import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { BsEnvelope } from "react-icons/bs";

const ContactInfo = () => {
  return (
    <>
      <section className="contact-info">
        <p><BsEnvelope /> emailaddress@something.com</p>
        <p><CiPhone /> 123 - 444 - 5678</p>
        <p><CiLocationOn /> Street Name 123, City - State</p>
      </section>
    </>
  )
}

export default ContactInfo