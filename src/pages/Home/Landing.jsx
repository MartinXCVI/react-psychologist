import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      <section className="landing-section">
        <section className="landing-section-left">
          <h1 className="landing-title">Welcome to <br/>Our Website</h1>
          <Link to="/services" className="landing-button">More Info</Link>
          <h2 className="landing-text">Your healing journey starts here</h2>
          <h2 className="landing-text">Your new beginning awaits</h2>
        </section>
        <section className="landing-section-right">
          <article className="blockquote-wrapper">
            <blockquote className="landing-blockquote">
              <p className="landing-quote"><q>To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.</q></p>
              <p className="landing-quote-author">—Ralph Waldo Emerson</p>
            </blockquote>
          </article>

        </section>
      </section>
    </>
  )
}

export default Landing