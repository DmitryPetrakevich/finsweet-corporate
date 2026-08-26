import styles from "./Header.module.scss"
import logo from "../../../assets/icons/Logo.svg"

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <img src={logo} />

                <div className={styles.rightBlock}>
                    <div className={styles.nav}>
                        <button className={styles.navBtn}>Home</button>
                        <button className={styles.navBtn}>Blog</button>
                        <button className={styles.navBtn}>About us</button>
                        <button className={styles.navBtn}>Contact us</button>
                    </div>

                    <button className={styles.btnSub}>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;