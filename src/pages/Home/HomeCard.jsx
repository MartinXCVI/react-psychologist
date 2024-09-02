
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

export default HomeCard