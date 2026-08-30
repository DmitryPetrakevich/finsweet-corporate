import styles from "./Logos.module.scss"

function Logos() {
    return (
        <div className={styles.logos}>
            <div className={styles.container}>
                <div className={styles.textGroup}>
                    <p className={styles.title}>We are</p>
                    <p className={styles.text}>Featured in</p>
                </div>
                
                <div className={styles.logosList}>
                    <img className={styles.logo} src="src\assets\icons\logos\logo1.svg" />
                    <img className={styles.logo} src="src\assets\icons\logos\logo1.svg" />
                    <img className={styles.logo} src="src\assets\icons\logos\logo1.svg" />
                    <img className={styles.logo} src="src\assets\icons\logos\logo1.svg" />
                    <img className={styles.logo} src="src\assets\icons\logos\logo1.svg" />
                </div>
            </div>
        </div>
    )
}

export default Logos