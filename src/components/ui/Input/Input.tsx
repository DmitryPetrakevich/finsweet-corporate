import styles from "./Input.module.scss"

interface InputProps {
    placeholder: string;
}

function Input({placeholder}: InputProps) {
    return (
        <input className={styles.input} placeholder={placeholder}>
        </input>
    )
}

export default Input