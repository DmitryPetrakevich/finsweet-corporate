import styles from "./AllPosts.module.scss"
import Post from "./Post"

function AllPosts() {
    return (
        <div className={styles.allPosts}>
            <h2 className={styles.title}>All Posts</h2>

            <div className={styles.wrapper}>
                <Post
                date="By John Deo   l   Aug 23, 2021 "
                title="8 Figma design systems that you can download for free today."
                />

                <Post
                date="By John Deo   l   Aug 23, 2021 "
                title="8 Figma design systems that you can download for free today."
                isPrimary
                />

                <Post
                date="By John Deo   l   Aug 23, 2021 "
                title="8 Figma design systems that you can download for free today."
                />

                <Post
                date="By John Deo   l   Aug 23, 2021 "
                title="8 Figma design systems that you can download for free today."
                />
                
            </div>
        </div>
    )
}

export default AllPosts