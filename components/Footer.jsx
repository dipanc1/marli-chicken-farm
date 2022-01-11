import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container} id="Contact">
            <div className={styles.item}>
                <Image src="/img/bg.jpeg" width={520} height={325} objectFit="cover" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        MARLEEN SELLS CHICKENS AND WHAT NOT.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        WE HAVE NO OTHER BRANCH.
                    </h1>
                    <p className={styles.text}>
                        we might open another branch in the future.
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        OPENING HOURS
                    </h1>
                    <p className={styles.text}>
                        Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                    <p className={styles.text}>
                        Saturday: 9:00 AM - 2:00 PM
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
