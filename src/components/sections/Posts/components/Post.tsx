import styles from "./Post.module.scss"

interface PostProps {
    date: string,
    title: string;
    isPrimary?: boolean;
}

function Post({date, title, isPrimary}: PostProps) {
    return (
        <div className={`${styles.wrapper} ${isPrimary ? styles.primary : ''}`}>
            <p className={styles.date}>{date}</p>
            
            <p className={styles.title}>{title}</p>
        </div>
    )
}

export default Post