import { use, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss"
import logo from "../../../assets/icons/Logo.svg"
import BurgerButton from "./BurgerButton/BurgerButton";
import MobileMenu from "./MobileMenu/MobileMenu";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <img className={styles.logo} src={logo} />

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

                    <BurgerButton
                    
                    isOpen={isMenuOpen}
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    />
                </div>
            </div>

            <MobileMenu 
            isOpen={isMenuOpen} 
            onClose={() => setIsMenuOpen(false)}
            />
        </div>
    )
}

export default Header;