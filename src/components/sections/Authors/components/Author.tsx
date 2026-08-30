import styles from "./Author.module.scss"

interface AuthorProps {
    img: string,
    name: string,
    job: string,
    isPrimary?: boolean
}

function Author({img, name, job, isPrimary}: AuthorProps) {
    const imagePath = `/src/assets/icons/authors/${img}.svg`

    return (
        <div className={`${styles.wrapper} ${isPrimary ? styles.isPrimary : ""}`}>
            <img className={styles.img} src={imagePath} alt={name}/>

            <p className={styles.name}> {name} </p>

            <p className={styles.job}> {job} </p>

            <div className={styles.socials}>
                <img className={styles.social} src="src\assets\icons\authors\socials\facebook.svg"/>
                <img className={styles.social} src="src\assets\icons\authors\socials\twitter.svg"/>
                <img className={styles.social} src="src\assets\icons\authors\socials\instagram.svg"/>
                <img className={styles.social} src="src\assets\icons\authors\socials\linkedIn.svg"/>
            </div>
        </div>
    )

}

export default Author