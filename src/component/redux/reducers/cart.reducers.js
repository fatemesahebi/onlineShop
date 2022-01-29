import { createSlice } from "@reduxjs/toolkit";
import {value} from "lodash/seq";
export const cartSlice =createSlice({
    name:'cart',
initialState:{
        items:[]
},
reducers:{
addToCart:(state,action)=>{
    let p = state.items.findIndex(item=>item.id===action.payload.id)
    if (p>=0) state.items[p].count++
    else state.items.push({...action.payload,count:1})
},
    decreaseItem :(state,action)=>{
        let p = state.items.findIndex(item=>item.id===action.payload.id)
if (p>=0){
    let value= state.items[p].count
    (value-1>0)? state.items[p].count-- : state.items.splice(p,1)
}
    },
removeItem: (state,action)=>{
    const p = state.items.findIndex((item) => item.id === action.payload.id);
    if (p > -1) {
        state.items.splice(p, 1);
    }
}
}
});
export const {addToCard, decreaseItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;

