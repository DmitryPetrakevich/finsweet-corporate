import './App.scss'
import Header from "./components/layout/Header/Header"
import About from './components/sections/About/About'
import Categorues from './components/sections/Categories/Categories'
import Hero from "./components/sections/Hero/Hero"
import Posts from './components/sections/Posts/Posts'
import SpecialPost from './components/sections/SpecialPost/SpecialPost'

function App() {

  return (
    <div className='app'>
      <Header></Header>
      <Hero></Hero>
      <Posts></Posts>
      <About></About>
      <Categorues></Categorues>
      <SpecialPost></SpecialPost>
    </div>
  )
}

export default App
