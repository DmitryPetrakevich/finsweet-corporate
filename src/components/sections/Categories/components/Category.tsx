import styles from "./Category.module.scss"

interface CategoryProps {
    img: string,
    title: string,
    description: string,
    isPrimary?: boolean
}

function Category({img, title, description, isPrimary}: CategoryProps) {
     const imagePath = `/src/assets/icons/categories/${img}.svg`

    return (
        <div className={`${styles.wrapper} ${isPrimary ? styles.primary : ""}`}>
            <div className={styles.imgWrapper}>
                 <img className={styles.img} src={imagePath} alt={title} />
            </div>
            
            <h3 className={styles.title}> {title} </h3>

            <p className={styles.description}> {description} </p>

        </div>
    )
}

export default Category