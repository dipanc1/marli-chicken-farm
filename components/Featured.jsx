import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

function Featured() {

    const [index, setIndex] = useState(0);

    const images = [
        "/img/featured (1).jpg",
        "/img/featured (4).jpg",
        "/img/featured (5).jpg",
    ]

    const handleArrow = direction => {
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 2);
        }
        if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
                <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
            </div>
            <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                <div className={styles.imgContainer}>
                    {images.map((img, i) => (
                        <Image src={img} alt="" width={1536} height={826} key={i} />
                    ))}
                </div>
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
                <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain"/>
            </div>
        </div>
    )
}

export default Featured
