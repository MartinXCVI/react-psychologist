import Landing from "./Home/Landing"
import InfoBlock from "./Home/InfoBlock"
import Container from "../components/Container"
import HomeCard from "./Home/HomeCard"
import QuoteParallax from "../components/QuoteParallax"

const Home = () => {
  return (
    <>
      <Landing />
      <InfoBlock 
        img='/icons/therapy.png'
        alt='alt'
        title='title, title'
        subtitle='subtitle, subtitle'
        textOne='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis possimus corporis magni necessitatibus expedita dignissimos accusamus quisquam? Aspernatur neque temporibus autem, molestiae rerum tempore?'
        textTwo='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere iusto totam soluta magni ratione labore quaerat est, nam illo consequuntur consectetur, quis in repellat dolorem repellendus fuga exercitationem amet? Dolorem itaque totam quidem ullam magni!'
      />
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
      <Container className='why-wrapper'>
        <h2 className="page-subtitle">Why Us</h2>
        <Container className='why-container'>
        <HomeCard
          img='/icons/personalized.png'
          alt='alt'
          title='Personalized'
          data='We customize our therapy sessions to focus on your unique needs and objectives.'
        />
        <HomeCard
          img='/icons/remoteness.png'
          alt='alt'
          title='Remoteness'
          data='Receive high-quality care from the comfort of your home with our secure online therapy services.'
        />
        <HomeCard
          img='/icons/compassion.png'
          alt='alt'
          title='Compassion'
          data='Our team places a strong emphasis on empathy and understanding in every conversation.'
        />
        <HomeCard
          img='/icons/methodology.png'
          alt='alt'
          title='Methodology'
          data='We employ evidence-based therapeutic methods to foster long-term improvement and well-being.'
        />
        <HomeCard
          img='/icons/community.png'
          alt='alt'
          title='Community'
          data='Join our group therapy sessions to connect with others experiencing similar challenges and gain valuable perspectives.'
        />
        </Container>
      </Container>
      <QuoteParallax
        className='quote-parallax-home'
        quote='It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done!'
        author='Vincent Van Gogh'
      />
      <InfoBlock 
        img='/icons/therapy.png'
        alt='alt'
        title='title, title'
        subtitle='subtitle, subtitle'
        textOne='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis possimus corporis magni necessitatibus expedita dignissimos accusamus quisquam? Aspernatur neque temporibus autem, molestiae rerum tempore?'
        textTwo='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere iusto totam soluta magni ratione labore quaerat est, nam illo consequuntur consectetur, quis in repellat dolorem repellendus fuga exercitationem amet? Dolorem itaque totam quidem ullam magni!'
      />
    </>
  )
}

export default Home