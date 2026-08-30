import styles from "./Testimonials.module.scss";

function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <h3 className={styles.title}>TESTIMONIALs</h3>

          <p className={styles.text}>What people say about our blog</p>

          <p className={styles.subtext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.rightBlock}>
          <p className={styles.quote}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className={styles.btnSection}>
            <div className={styles.quoter}>
              <img src="src\assets\icons\quoter\jonathan-vallem.svg" />

              <div className={styles.quoterInfo}>
                <p className={styles.quoterName}>Jonathan Vallem</p>

                <p className={styles.quoterLocation}>New york, USA</p>
              </div>
            </div>

            <div className={styles.btns}>
                <div className={styles.btnWhite}>
                    <img src="src\assets\icons\decorations\arrow.svg" />
                </div>

                <div className={styles.btnBlack}>
                    <img src="src\assets\icons\decorations\arrow.svg" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
