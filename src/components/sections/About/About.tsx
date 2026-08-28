import styles from "./About.module.scss"
import AboutUs from "./components/AboutUs"
import Mision from "./components/Mision"

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.container}>
                <AboutUs></AboutUs>
                <Mision></Mision>
            </div>
            
        </div>
    )
}


export default About