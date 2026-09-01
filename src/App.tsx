import './App.scss'
import Header from "./components/layout/Header/Header"
import About from './components/sections/About/About'
import Categorues from './components/sections/Categories/Categories'
import Hero from "./components/sections/Hero/Hero"
import Posts from './components/sections/Posts/Posts'
import SpecialPost from './components/sections/SpecialPost/SpecialPost'
import Authors from './components/sections/Authors/Authors'
import Logos from './components/sections/Logos/Logos'
import Testimonials from './components/sections/Testimonials/Testimonial'
import JoinUs from './components/sections/JoinUs/JoinUs'
import Footer from './components/layout/Footer/Footer'

function App() {

  return (
    <div className='app'>
      <Header></Header>
      <Hero></Hero>
      <Posts></Posts>
      <About></About>
      <Categorues></Categorues>
      <SpecialPost></SpecialPost>
      <Authors></Authors>
      <Logos></Logos>
      <Testimonials />
      <JoinUs></JoinUs>
      <Footer></Footer>
    </div>
  )
}

export default App
