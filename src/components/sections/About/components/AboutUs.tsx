import styles from "./AboutUs.module.scss"

function AboutUs() {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>ABOUT US</h3>

            <p className={styles.text}>We are a community of content writers who share their learnings</p>

            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <button className={styles.link}>
                Read More &gt;
            </button>
        </div>
    )
}

export default AboutUs