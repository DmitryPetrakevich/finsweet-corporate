import styles from "./Posts.module.scss"
import AllPosts from "./components/AllPosts";
import FeaturedPost from "./components/FeaturedPost";


function Posts() {
    return (
        <div className={styles.posts}>
            <div className={styles.container}>
                <FeaturedPost />
                <AllPosts /> 
            </div>
        </div>
    )
}

export default Posts;