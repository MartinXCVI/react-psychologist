import PropTypes from 'prop-types'

const InfoBlock = ({ className, img, alt, title, subtitle, textOne, textTwo }) => {
  return (
    <section className={`landing-info-block ${className}`}>
      <section className="left-block">
        <figure className="figure-block">
         <img src={img} alt={alt} />
        </figure>
      </section>
      <section className="right-block">
        <div className="heading-block">
          <h3 className='heading-block-title'>{title}</h3>
          <h4 className='heading-block-subtitle'>{subtitle}</h4>
        </div>
        <div className="text-block">
          <p>{textOne}</p>
          <p>{textTwo}</p>
        </div>
      </section>
    </section>
  )
}

InfoBlock.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  textOne: PropTypes.string,
  textTwo: PropTypes.string
}

export default InfoBlock