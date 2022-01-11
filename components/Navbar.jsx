import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import { useSelector } from "react-redux"
import Link from "next/link";


const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity);

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width="32" height="32" />
                </div>
                <Link href={"tel:+919592738038"}>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>+91 95927 38038</div>
                </div>
                </Link>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/">
                        <li className={styles.listItem}>Homepage</li>
                    </Link>
                    <Link href="#Products">
                        <li className={styles.listItem}>Products</li>
                    </Link>
                    <Link href="/">
                        <Image src="/img/logo.png" alt="" width="150" height="150" className={styles.listItem}/>
                    </Link>
                    <Link href="/admin">
                        <li className={styles.listItem}>Admin Page</li>
                    </Link>
                    <Link href="#Contact">
                        <li className={styles.listItem}>Contact</li>
                    </Link>
                </ul>
            </div>
            <Link href="/cart">
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default Navbar
