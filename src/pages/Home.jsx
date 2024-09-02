import Landing from "./Home/Landing"
import InfoBlock from "./Home/InfoBlock"
import Container from "../components/Container"
import HomeCard from "./Home/HomeCard"

const Home = () => {
  return (
    <>
      <Landing />
      <InfoBlock />
      <Container className={`home-container`}>
        <HomeCard
          img='/icons/therapy.png'
          alt='alt name'
          title='title'
          data='description'
        />
        <HomeCard
          img='/icons/therapy.png'
          alt='alt name'
          title='title'
          data='description'
        />
        <HomeCard
          img='/icons/therapy.png'
          alt='alt name'
          title='title'
          data='description'
        />
      </Container>
    </>
  )
}

export default Home