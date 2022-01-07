import {createContext, useReducer} from "react";
let ProductListContex=createContext({productData:[],dispatch:()=>{}})
function ProductContexProvider({children}){
    const [productlist,dispatch]=useReducer(reducer,productData)
        return(
            <ProductListContex.Provider value={{productlist,dispatch}}>
                {children}
            </ProductListContex.Provider>
            )

}
export default ProductContexProvider