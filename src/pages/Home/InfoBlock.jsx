import PropTypes from 'prop-types'

const InfoBlock = ({ img, alt, title, subtitle, textOne, textTwo }) => {
  return (
    <section className="landing-info-block">
      <section className="left-block">
        <figure className="figure-block">
         <img src={img} alt={alt} />
        </figure>
      </section>
      <section className="right-block">
        <div className="heading-block">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
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
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  textOne: PropTypes.string,
  textTwo: PropTypes.string
}

export default InfoBlock