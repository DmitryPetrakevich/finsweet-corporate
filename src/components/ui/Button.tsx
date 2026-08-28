import styles from "./Button.module.scss"

interface ButtonProps {
    type: string,
    children: any
    className?: string
}


function Button({type, children, className}: ButtonProps) {
    return (
        <button className={`${styles.btn} ${styles[type]} ${className || ""}`}>
            {children}
        </button>
    )
}

export default Button