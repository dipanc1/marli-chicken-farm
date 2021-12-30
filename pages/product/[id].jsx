import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";


function Product() {

    const [size, setSize] = useState(0);

    const chicken = {
        id: 1,
        name: "Chicken",
        price: [2.99, 13.99, 24.99],
        desc: "A delicious chicken",
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
                <h1 className={styles.title}>{chicken.name}</h1>
                <span className={styles.price}>${chicken.price[size]}</span>
                <p className={styles.desc}>{chicken.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image alt="" src="/img/size.png" layout="fill" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)}>
                        <Image alt="" src="/img/size.png" layout="fill" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image alt="" src="/img/size.png" layout="fill" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>
                    Choose Chicken Type
                </h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input
                            type="radio" id="laying" name="checkbox"
                            className={styles.checkbox} value="1" onclick="selectOnlyThis(this)"/>
                        <label htmlFor="laying">Laying</label>
                    </div>
                    <div className={styles.option}>
                        <input
                            type="radio" id="meat-producing" name="checkbox"
                            className={styles.checkbox} value="2" onclick="selectOnlyThis(this)"/>
                        <label htmlFor="meat-producing">Meat-Producing</label>
                    </div>
                    <div className={styles.option}>
                        <input
                            type="radio" id="dual-purpose breed" name="checkbox"
                            className={styles.checkbox} value="3" onclick="selectOnlyThis(this)" />
                        <label htmlFor="dual-purpose breed">Dual-Purpose Breed</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
