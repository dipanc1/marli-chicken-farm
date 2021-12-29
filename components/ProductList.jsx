import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';

function ProductList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST ANIMAL FARM IN LONDON!!</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className={styles.wrapper}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductList
