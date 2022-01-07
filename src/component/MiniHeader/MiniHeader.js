import styles from './miniHeader.styles.module.css'
import logo from './../../images/logo.png'
import shopBasketImg from './../../images/icons8-basket-48.png'
import searchImg from  './../../images/icons8-search-50.png'
function MiniHeader(){
    return(
        <div className={styles.miniHeader}>
            <div>
                <img id={'shopBasket'} className={styles.miniHeader__img} src={shopBasketImg}/>
                <p className={styles.basket_count}>10</p>

            </div>
            <img className={styles.logo} src={logo} alt={logo}/>
            <div>
                <input placeholder={'search'} className={styles.search}/>
                <img className={styles.miniHeader__img} src={searchImg}/>

            </div>
        </div>
    )
}
export default MiniHeader