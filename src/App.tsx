import './App.scss'
import Header from "./components/layout/Header/Header"
import Hero from "./components/sections/Hero/Hero"
import Posts from './components/sections/Posts/Posts'

function App() {

  return (
    <div className='app'>
      <Header></Header>
      <Hero></Hero>
      <Posts></Posts>
    </div>
  )
}

export default App
