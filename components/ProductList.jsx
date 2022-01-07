import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';

function ProductList({ products }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST ANIMAL FARM IN LONDON!!</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className={styles.wrapper}>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
