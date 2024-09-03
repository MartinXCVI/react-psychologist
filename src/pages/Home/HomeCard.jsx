import { PropTypes } from 'prop-types'

const HomeCard = ({ img, alt, title, data }) => {
  return (
    <div className="home-card">
      <figure className="card-figure">
        <img src={img} alt={alt} />
      </figure>
      <h4>{title}</h4>
      <p>{data}</p>
    </div>
  )
}

HomeCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.string
}

export default HomeCard