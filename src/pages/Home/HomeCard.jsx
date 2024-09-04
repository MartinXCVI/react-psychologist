import { PropTypes } from 'prop-types'

const HomeCard = ({ img, alt, title, data }) => {
  return (
    <div className="home-card">
      <figure className="home-card-figure">
        <img src={img} alt={alt} />
      </figure>
      <h4 className='home-card-title'>{title}</h4>
      <p className='home-card-text'>{data}</p>
    </div>
  )
}

HomeCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.node,
  data: PropTypes.string
}

export default HomeCard