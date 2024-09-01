// CSS stylesheet
import './css/styles.css'

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages 
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Faq from './pages/Faq'
import Contact from './pages/Contact'


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/faq' element={<Faq />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App