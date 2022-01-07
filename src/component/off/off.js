import {useEffect} from "react";
function Off(){
    const getProductData=async ()=>{
        const resp= await fetch('/api/off-products')
        const data=await resp.json()
        return data
    }
    useEffect(()=>{
        getProductData().then(result=>{
           let data2=result
            console.log(data2)
        })
    })
    return(
        <div>
            off
        </div>
    )
}
export default Off