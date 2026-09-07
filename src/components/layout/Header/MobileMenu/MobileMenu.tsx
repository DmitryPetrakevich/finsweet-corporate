import { NavLink } from "react-router-dom"
import styles from "./MobileMenu.module.scss"

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void

}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <>
        <div 
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        onClick={onClose}
        ></div>

            <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>

            <nav className={styles.nav}>
                <NavLink className={styles.navBtn} to="/" onClick={onClose}>Home</NavLink>
                <NavLink className={styles.navBtn} to="/blog" onClick={onClose}>Blog</NavLink>
                <NavLink className={styles.navBtn} to="/about" onClick={onClose}>About us</NavLink>
                <NavLink className={styles.navBtn} to="/contact" onClick={onClose}>Contact us</NavLink>
            </nav>
        
            <button className={styles.btnSub}>
                Subscribe
            </button>
        </div>
        </>

    )
}

export default MobileMenu