import styles from "./Header.module.scss"
import logo from "../../../assets/icons/Logo.svg"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <img src={logo} />

                <div className={styles.rightBlock}>
                    <div className={styles.nav}>
                        <NavLink to="/" className={styles.navBtn}>
                            Home
                        </NavLink>

                        <NavLink to="/blog" className={styles.navBtn}>
                            Blog
                        </NavLink>

                        <NavLink to="/about" className={styles.navBtn}>
                            About us
                        </NavLink>

                        <NavLink to="/contact" className={styles.navBtn}>
                            Contact us
                        </NavLink>
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