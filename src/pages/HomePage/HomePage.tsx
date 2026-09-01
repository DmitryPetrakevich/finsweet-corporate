import Hero from "../../components/sections/Hero/Hero"
import Posts from "../../components/sections/Posts/Posts"
import About from "../../components/sections/About/About"
import Categorues from "../../components/sections/Categories/Categories"
import SpecialPost from "../../components/sections/SpecialPost/SpecialPost"
import Authors from "../../components/sections/Authors/Authors"
import Logos from "../../components/sections/Logos/Logos"
import Testimonials from "../../components/sections/Testimonials/Testimonial"
import JoinUs from "../../components/sections/JoinUs/JoinUs"

function HomePage() {
    return (
        <>
            <Hero />
            <Posts />
            <About />
            <Categorues />
            <SpecialPost />
            <Authors />
            <Logos />
            <Testimonials />
            <JoinUs />
        </>
    )
}

export default HomePage