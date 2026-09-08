import Button from "../../ui/Button/Button";
import styles from "./BlogHeader.module.scss";

import blogheaderIcon from "../../../assets/icons/blogHeader/blogHeader.jpg"

function BlogHeader() {
    return (
        <div className={styles.blogHeader}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.title}>Featured Post</p>

                    <h3 className={styles.text}>
                        Step-by-step guide to choosing great font pairs
                    </h3>

                    <p className={styles.date}>By <span>John Doe</span>  l  May 23, 2022 </p>

                    <p className={styles.description}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>

                    <Button type="primary">
                        Read More &gt;
                    </Button>
                </div>

                <img 
                src={blogheaderIcon}
                className={styles.img}>
                </img>
            </div>
        </div>
    )
}

export default BlogHeader;