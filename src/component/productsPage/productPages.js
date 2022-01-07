import {useEffect} from "react";
import {useParams} from "react-router-dom";
function ProductPages(){
   let param=useParams()
useEffect(()=>{
 fetch( `api/products/${param.title}`)
     .then(res=>res.json())
     .then(data=>console.log(data))

},[])
    return(
        <div>
            <h1>Products</h1>
        </div>
    )
}
export default ProductPages