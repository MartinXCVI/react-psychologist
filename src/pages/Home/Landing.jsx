import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      <section className="landing-section">
        <section className="landing-section-left">
          <h1 className="landing-title">Welcome to <br/>Our Website</h1>
          <Link to="/services" className="landing-button">More Info</Link>
        </section>
        <section className="landing-section-right">
          <figure className="landing-section-figure">
            <img src="/icons/home-landing.png" alt="" />
          </figure>
          <h2 className="landing-text">Your healing journey starts here</h2>
          <h2 className="landing-text">Your new beginning awaits</h2>
        </section>
      </section>
    </>
  )
}

export default Landing