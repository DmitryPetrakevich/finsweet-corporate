import styles from "./Button.module.scss"

interface ButtonProps {
    type: string,
    children: any
}


function Button({type, children}: ButtonProps) {
    return (
        <button className={`${styles.btn} ${styles[type]}`}>
            {children}
        </button>
    )
}

export default Button