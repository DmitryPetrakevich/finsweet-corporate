import styles from "./Categories.module.scss"
import Category from "./components/Category"

function Categorues() {
    return (
        <div className={styles.categories}>
            <div className={styles.container}>
                <h2 className={styles.title}> Choose A Catagory </h2>

                <div className={styles.items}>
                    <Category 
                    img="business"
                    title="Business"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                    />

                    <Category 
                    img="startup"
                    title="Startup"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                    isPrimary
                    />

                    <Category 
                    img="economy"
                    title="Economy"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                    />

                    <Category 
                    img="technology"
                    title="Technology"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                    />
                </div>
            </div>
        </div>
    )
}

export default Categorues