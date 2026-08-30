import styles from "./Authors.module.scss"
import Author from "../Authors/components/Author"

function Authors() {
    return (
        <div className={styles.authors}>
            <h2 className={styles.title}>List of Authors</h2>

            <div className={styles.container}>
                <Author img="floyd-miles" name="Floyd Miles" job="Content Writer @Company" />
                <Author img="dianne-russell" name="Dianne Russell" job="Content Writer @Company" isPrimary />
                <Author img="jenny-wilson" name="Jenny Wilson" job="Content Writer @Company" />
                <Author img="leslie-alexander" name="Leslie Alexander" job="Content Writer @Company" />
            </div>
        </div>
    )
}

export default Authors