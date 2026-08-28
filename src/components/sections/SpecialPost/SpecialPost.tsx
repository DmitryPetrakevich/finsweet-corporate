import styles from "./SpecialPost.module.scss"
import Button from "../../ui/Button"

function SpecialPost() {
    return (
        <div className={styles.specialPost}>
            <div className={styles.container}>
                <img className={styles.img} src="src\assets\images\specialPost\about-special.jpg" /> 

                <div className={styles.content}>
                    <h3 className={styles.title}>Why we started </h3>

                    <p className={styles.text}>It started out as a simple idea and evolved into our passion</p>

                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>

                    <Button type="primary" >
                        Discover our story &gt;
                    </Button>

                </div>

            </div>

        </div>
    )
}

export default SpecialPost