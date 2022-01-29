import styles from './miniHeader.styles.module.css'
import logo from './../../images/logo.png'
import shopBasketImg from './../../images/icons8-basket-48.png'
import searchImg from  './../../images/icons8-search-50.png'
import {Link, Outlet} from "react-router-dom";
function MiniHeader(){
    return(
        <>
        <div className={styles.miniHeader}>
            <div>
                <img id={'shopBasket'} className={styles.miniHeader__img} src={shopBasketImg}/>
                <p className={styles.basket_count}>10</p>

            </div>
            <Link to={'/'}><img className={styles.logo} src={logo} alt={logo}/></Link>
            <div>
                <input placeholder={'search'} className={styles.search}/>
                <img className={styles.miniHeader__img} src={searchImg}/>

            </div>

        </div>
            <Outlet/>
            </>
    )
}
export default MiniHeader