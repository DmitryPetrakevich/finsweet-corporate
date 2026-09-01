import styles from "./FeaturedPost.module.scss"
import Button from "../../../ui/Button/Button"

function FeaturedPost() {
    return (
        <div className={styles.featuredPost}>
            <h2 className={styles.title}>Featured Post</h2>
            
            <div className={styles.wrapper}>
                <img className={styles.img} src="src\assets\images\posts\featured-post.jpg"/>
                
                <p className={styles.date}>By <span style={{color: "#592EA9"}}>John Doe</span> l May 23, 2022</p>

                <div className={styles.info}>
                    <p className={styles.infoTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

                    <p className={styles.infoSubtitle}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                    <Button type="primary">
                        Read More &gt;
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPost