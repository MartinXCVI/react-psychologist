import PropTypes from 'prop-types'

const Container = ({ children, className }) => {
  return (
    <section className={`container ${className}`}>
      {children}
    </section>
  )
}

Container.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string
}

export default Container