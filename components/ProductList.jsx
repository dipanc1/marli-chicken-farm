import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';

function ProductList({ products }) {
    return (
        <div className={styles.container} id='Products'>
            <h1 className={styles.title}>THE BEST ANIMAL FARM IN LONDON!</h1>
            <p className={styles.desc}>
                Welcome to Marleen and Dipan's  Animal Farm.
                We sell all kinds of animals.
                We have chickens, cows, pigs, and even dogs.
                We also have a farm that sells fish.
                We also have a farm that sells vegetables.
                We also have a farm that sells fruits.
                We also have a farm that sells meat.
                We also have a farm that sells eggs.
                We also have a farm that sells seeds.
            </p>
            <p className={styles.desc2}>| Take a Look at our Products Below |</p>
            <div className={styles.wrapper}>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList