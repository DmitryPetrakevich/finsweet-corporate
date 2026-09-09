import styles from "./BlogPosts.module.scss"
import BlogPost from "./components/BlogPost"

function BlogPosts() {
    return (
        <div className={styles.blogPosts}>
            <div className={styles.container}>
                <h2 className={styles.title}>All posts</h2>
                
                <div className={styles.divider}></div>

                <div className={styles.cardsList}>
                    <BlogPost 
                    title="Startup"
                    text="Design tips for designers that cover everything you need"
                    description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                    img="blogCard-1"
                    />

                    <BlogPost 
                    title="BUSINESS"
                    text="How to build rapport with your web design clients"
                    description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                    img="blogCard-2"
                    />

                    <BlogPost 
                    title="Startup"
                    text="Logo design trends to avoid in 2022"
                    description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                    img="blogCard-3"
                    />

                    <BlogPost 
                    title="TECHNOLOGY"
                    text="8 Figma design systems you can download for free today"
                    description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                    img="blogCard-4"
                    />
                </div>

                <div className={styles.btns}>
                    <p className={styles.btn}>&lt; Prev</p>
                    <p className={styles.btn}>Next &gt;</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPosts