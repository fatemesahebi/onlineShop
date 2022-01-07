import {useEffect, useState} from "react";
import styles from './offerProducts.styles.module.css'
import {ProductCard, ProductCardContainer,} from "../index";
import {offerImg} from "../index";

function OfferProducts() {
    const [productList, setProductList] = useState([])
    const getData = () => {
        fetch('api/off-products')
            .then(res => res.json()).then(data => {
            setProductList(data.products)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className={styles.offerProducts}>
            <h3>
                <img src={offerImg}/>
                OFF PRODUCTS
            </h3>
            <ProductCardContainer list={productList} cardCount={3}/>
            <div style={{display: 'flex', flexDirection: 'row', columnGap: '30px'}}>
                {
                    productList.map(product =>
                        <ProductCard title={product.title} price={product.price} type={product.type}
                                     offPrice={product.OffPrice} offPercent={product.offerPercent}
                        image={product.image} id={product.id} />)
                }

            </div>
        </div>

    )
}

export default OfferProducts