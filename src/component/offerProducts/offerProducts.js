import {useEffect, useState} from "react";
import styles from './offerProducts.styles.module.css'
import {ProductCard, Slider,} from "../index";
import {offerImg} from "../index";

import {SwiperSlide } from 'swiper/react';


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
               <Slider>
                   {productList.map(product =>
                       <SwiperSlide>
                           <ProductCard title={product.title} price={product.price}
                                        type={product.type}
                                        offPrice={product.OffPrice}
                                        offPercent={product.offerPercent}
                                        image={product.image} id={product.id}/>
                       </SwiperSlide>
                   )}
               </Slider>


        </div>

    )
}

export default OfferProducts