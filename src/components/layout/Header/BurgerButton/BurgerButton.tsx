import styles from "./BurgerButton.module.scss"

interface BurgerButtonProps {
    isOpen: boolean,
    onClick: () => void;
}

function BurgerButton({isOpen, onClick}: BurgerButtonProps) {
    return (
        // <button 
        // className={styles.burger}
        // onClick={onClick}
        // >
        //     {isOpen ? "X" : "☰"}
        //  </button>

        <div
        className={styles.burger}
        onClick={onClick}
        >
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
        </div>
    )
}
export default BurgerButton