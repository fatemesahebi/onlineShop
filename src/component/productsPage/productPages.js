import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import styles from "./productpage.styles.module.css"

const modStyles = {
    fontWeight: '700',
    borderBottom: '2px solid white'
}
const modeList = ['DESCRIPTION', 'DETAILS', 'COMMENTS']

function ProductPages() {
    let param = useParams()
    const [product, setProduct] = useState({})
    const [mode, setMode] = useState('DESCRIPTION')
    useEffect(() => {
        fetch(`/api/products/${param.id}`)
            .then(res => res.json())
            .then(data => setProduct(data.product))

    }, [])
    return (
        <div className={styles.productPageContainer}>
            <div>
                <img src={product.image} className={styles.productPageContainer__image}/>

            </div>
            <div className={styles.productPageContainer__info}>
                <p>
                    <span><Link className={'link'} to={'/'}>Shop</Link></span>/
                    <span><Link className={'link'} to={`/${product.type}`}>{product.type}</Link></span>/
                    <span>{product.title}</span>
                </p>
                <h2>{product.title}</h2>
                <ul>
                    {modeList.map((item, index) => <li key={index} style={(item === mode) ? modStyles : {}}
                                                       onClick={() => setMode(item)}>{item}</li>)}
                </ul>
                <div className={styles.productPageContainer__info__body}>
                    {(mode === 'DESCRIPTION') &&
                    <p>{product.desc}<br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi commodi cum cumque debitis
                        deleniti deserunt, dolore doloribus ea eos excepturi, expedita fugiat illo inventore maiores
                        neque non optio perferendis porro quo rem sapiente soluta sunt ullam ut vitae voluptatibus?
                    </p>}
                    {(mode === 'DETAILS') && <p>there is no detail</p>}
                    {(mode === 'COMMENTS') && <p>{product.comments.map(item => <p>{item}</p>)}</p>}
                </div>
                <div className={styles.productPageContainer__info__price}>
                    <p className={(product.isOff) ? styles.productPageContainer__info_offLabel : ''}>{product.price} $</p>
                    {(product.isOff) && <><p style={{color: "var(--first-color)"}}>- {product.offerPercent} %</p>
                        <p>{product.OffPrice} $</p></>}
                </div>
                <button className={'btn__yellow'}>Add To Card</button>


            </div>


        </div>
    )
}

export default ProductPages