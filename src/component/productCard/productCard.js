import {Link} from "react-router-dom";
import styles from './productCard.styles.module.css'

function ProductCard({title,price,type,offPrice,offPercent,image,id}){
    return(
        <>

                <Link className={'link'} to={`/products/${title}`}>
                    <div className={styles.productCard}>
                    <img src={image}/>
                    <h4>{title}</h4>
                    <div className={styles.productCard_offInfo}>
                        <p className={styles.productCard_offLabel}>{price}$</p>
                        <p className={styles.productCard_offPercent}>-{offPercent}%</p>
                    </div>

                    <p>{offPrice}$</p>
                    </div>
                </Link>


        </>

    )
}
export default ProductCard