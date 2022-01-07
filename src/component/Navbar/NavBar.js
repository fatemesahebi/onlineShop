import styles from './Navbar.styles.module.css'
// import {shopImg,questionImg,plusImg,payImg,offerImg,gridImg} from "../index"
import gridImg from './../../images/icons8-grid-64.png'
import offerImg from './../../images/icons8-black-friday-tag-30.png'
import payImg from './../../images/icons8-pay-48.png'
import plusImg from './../../images/icons8-plus-48.png'
import questionImg from './../../images/icons8-questions-24.png'
import shopImg from './../../images/icons8-shop-24.png'
let navbarItems=[
    {title:' products Classification',img:gridImg},
    {title:'offers',img:offerImg},
    {title:'shop plus',img:plusImg},
    {title:'my shop',img:shopImg},
    {title:'shop pay',img:payImg},
    {title:' questions',img:questionImg}]
function NavBar(){
    return(
        <div className={styles.navbar}>
            <ul className={styles.navbar__items}>
                {navbarItems.map((item,index)=><li className={styles.hover__underline} key={index}>
                    <img className={styles.navbar__items__img} src={item.img} alt={'menu item'}/>
                    <span>{item.title}</span>
                    </li>)}

            </ul>
        </div>
    )
}
export default NavBar