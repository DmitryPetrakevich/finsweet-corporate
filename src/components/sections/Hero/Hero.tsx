import styles from "./Hero.module.scss"

function Hero() {
    return (
    <div className={styles.hero}>
        <div className={styles.heroContent}>
            <h3 className={styles.subTitle}>Posted on <span className={styles.subTitleStartup}>startup</span></h3>
            <h1 className={styles.title}>Step-by-step guide to choosing great font pairs</h1>

            <p className={styles.date}>By <span style={{color: '#FFD050'}}>James West</span>  |  May 23, 2022 </p>

            <p className={styles.description}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>

            <button className={styles.btn}>Read More &gt;</button>

        </div>
    </div>
    )
}

export default Hero