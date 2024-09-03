import PropTypes from 'prop-types'

const QuoteParallax = ({ className, quote, author }) => {
  return (
    <>
      <section className={`quote-parallax-section ${className}`}>
        <blockquote className="blockquote-parallax">
          <p className="quote-parallax-text">&quot;{quote}&quot;</p>
          <p className='quote-parallax-author'>—{author}</p>
        </blockquote>
      </section>
    </>
  )
}

QuoteParallax.propTypes = {
  className: PropTypes.string,
  quote: PropTypes.string,
  author: PropTypes.string,
}

export default QuoteParallax