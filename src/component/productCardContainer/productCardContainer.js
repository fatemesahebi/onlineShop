import styles from './productCardContainer.styles.module.css'
import {useState} from "react"
import _ from "lodash";
function ProductCardContainer({list,cardCount}){
let result=_.chunk(list,cardCount)
    // console.log(_.chunk(list,cardCount))
    return(
        <div>

        </div>
    )
}
export default ProductCardContainer