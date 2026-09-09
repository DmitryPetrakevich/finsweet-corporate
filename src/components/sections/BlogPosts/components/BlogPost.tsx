import styles from "./BlogPost.module.scss"

interface BlogPostProps {
    title: string,
    text: string,
    description: string,
    img: string
}

function BlogPost({title, text, description, img}: BlogPostProps) {
    const imagePath = `/src/assets/icons/blogCards/${img}.jpg`

    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={imagePath}></img>

            <div className={styles.content}>
                <h4 className={styles.title}>{title}</h4>

                <p className={styles.text}>{text}</p>

                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export default BlogPost