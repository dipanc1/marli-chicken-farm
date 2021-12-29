import styles from "../../styles/Product.module.css";
import Image from "next/image";


function Product() {
    const chicken = {
        id: 1,
        name: "Chicken",
        price: "1.99",
        description: "A delicious chicken",
        image: "/img/pizza.png",
        imageAlt: "Chicken"
    }


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={chicken.image} layout="fill" alt="" />
                </div>
            </div>
            <div className={styles.right}>

            </div>

        </div>
    )
}

export default Product
