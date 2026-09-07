import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import styles from "./Footer.module.scss"

import logo from "../../../assets/icons/logo.svg"
import facebookIcon from "../../../assets/icons/authors/socials/facebook.svg"
import instagramIcon from "../../../assets/icons/authors/socials/instagram.svg"
import twitterIcon from "../../../assets/icons/authors/socials/twitter.svg"
import linkedInIcon from "../../../assets/icons/authors/socials/linkedIn.svg"

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <img className={styles.logo} src={logo} />

                    <div className={styles.nav}>
                        <button className={styles.navBtn}>Home</button>
                        <button className={styles.navBtn}>Blog</button>
                        <button className={styles.navBtn}>About us</button>
                        <button className={styles.navBtn}>Contact us</button>
                        <button className={styles.navBtn}>Privacy Policy</button>
                    </div>
                </div>

                <div className={styles.content}>
                    <p className={styles.text}>Subscribe to our news letter to get latest updates and news</p>

                    <div className={styles.subscribeArea}>
                        <Input placeholder="Enter your email" />

                        <Button type="primary">
                            Subscribe
                        </Button>
                    </div>
                </div>

                <div className={styles.bottomBlock}>
                    <div className={styles.contact}>
                        <p className={styles.contacttext}>Finstreet 118 2561 Fintown</p>
                        <p className={styles.contacttext}>Hello@finsweet.com  020 7993 2905</p>
                    </div>

                    <div className={styles.socials}>
                        <img className={styles.socialsImg} src={facebookIcon} />
                        <img className={styles.socialsImg} src={twitterIcon} />
                        <img className={styles.socialsImg} src={instagramIcon} />
                        <img className={styles.socialsImg} src={linkedInIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;