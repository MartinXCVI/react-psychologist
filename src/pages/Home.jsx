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
        img='/icons/empathy.png'
        alt='alt'
        title='Promoting Compassion,'
        subtitle='Embracing Empathy'
        textOne='Quos quis possimus corporis magni necessitatibus expedita dignissimos accusamus quisquam? Aspernatur neque temporibus autem, molestiae rerum tempore?'
        textTwo='Facere iusto totam soluta magni ratione labore quaerat est, nam illo consequuntur consectetur, quis in repellat dolorem repellendus fuga exercitationem amet?'
      />
      <Container className={`home-container`}>
        <HomeCard
          img='/images/online-sessions.jpg'
          alt='alt name'
          title={<><strong className="home-card-strong">Online</strong> <br/> Sessions</>}
          data='Quos quis possimus corporis magni necessitatibus expedita dignissimos accusamus quisquam. Facere iusto totam soluta magni'
        />
        <HomeCard
          img='/images/group-sessions.jpg'
          alt='alt name'
          title={<><strong className="home-card-strong">Group</strong><br/> Sessions</>}
          data='Quos quis possimus corporis magni necessitatibus expedita dignissimos accusamus quisquam. Facere iusto totam soluta magni'
        />
        <HomeCard
          img='/images/individual-therapies.jpg'
          alt='alt name'
          title={<><strong className="home-card-strong">Individual</strong> <br/> Therapies</>}
          data='Quos quis possimus corporis magni necessitatibus expedita dignissimos accusamus quisquam. Facere iusto totam soluta magni'
        />
      </Container>
      <Container className='why-wrapper'>
        <h2 className="page-subtitle">Why Working With Us</h2>
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
        className='final-info-block'
        img='/icons/potential.png'
        alt='alt'
        title="Emotional Blooming,"
        subtitle='For Personal Growth'
        textOne='Quos quis possimus corporis magni necessitatibus expedita dignissimos accusamus quisquam. Facere iusto totam soluta magni'
        textTwo='Quos quis possimus corporis magni necessitatibus expedita dignissimos accusamus quisquam. Facere iusto totam soluta magni'
      />
    </>
  )
}

export default Home