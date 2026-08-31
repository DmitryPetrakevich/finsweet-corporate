import Button from "../../ui/Button"
import styles from "./JoinUs.module.scss"

function JoinUs() {
    return (
        <div className={styles.joinUs}>
            <div className={styles.container}>
                <h2 className={styles.title}>Join our team to be a part of our story</h2>

                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                
                <Button type="primary">
                    Join Now
                </Button>
            </div>
        </div>
    )
}

export default JoinUs