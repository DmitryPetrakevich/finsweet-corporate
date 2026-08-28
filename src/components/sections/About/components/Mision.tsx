import styles from "./Mision.module.scss"

function Mision() {
    return (
        <div className={styles.mision}>
            <div className={styles.container}>
                <h3 className={styles.title}>Our mision</h3>

                <p className={styles.text}>
                    Creating valuable content for creatives all around the world
                </p>

                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    )
}

export default Mision