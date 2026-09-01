import './App.scss'

import Header from "./components/layout/Header/Header"
import Footer from "./components/layout/Footer/Footer"

import HomePage from "./pages/HomePage/HomePage"
import BlogPage from "./pages/BlogPage/BlogPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import ContactPage from "./pages/ContactPage/ContactPage"

import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <div className='app'>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App