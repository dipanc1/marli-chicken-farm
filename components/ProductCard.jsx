import styles from '../styles/ProductCard.module.css';
import Image from 'next/image'

function ProductCard() {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="500" height="500" />
            <h1 className={styles.title}>THE BEST ANIMAL FARM IN LONDON!!</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    )
}

export default ProductCard
4