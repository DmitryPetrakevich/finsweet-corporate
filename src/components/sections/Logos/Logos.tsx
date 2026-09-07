import styles from "./Logos.module.scss"

import logo1 from "../../../assets/icons/logos/logo1.svg"

function Logos() {
    return (
        <div className={styles.logos}>
            <div className={styles.container}>

                <div className={styles.textGroup}>
                    <p className={styles.title}>We are</p>
                    <p className={styles.text}>Featured in</p>
                </div>

                <div className={styles.slider}>
                    <div className={styles.track}>

                        <div className={styles.logosList}>
                            <img className={styles.logo} src={logo1} />
                            <img className={styles.logo} src={logo1} />
                            <img className={styles.logo} src={logo1} />
                            <img className={styles.logo} src={logo1} />
                            <img className={styles.logo} src={logo1} />
                        </div>

                        <div className={styles.logosList}>
                            <img className={styles.logo} src={logo1} />
                            <img className={styles.logo} src={logo1} />
                            <img className={styles.logo} src={logo1} />
                            <img className={styles.logo} src={logo1} />
                            <img className={styles.logo} src={logo1} />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Logos