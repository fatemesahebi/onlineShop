import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import cartReducer from "./reducers/cart.reducer";


const persistConfig={
    key:"root",
    storage,
};
const reducer = combineReducers({
cart:cartReducer,
});

const persistedReducer =persistReducer(persistConfig,reducer)

const store= configureStore({
reducer:persistedReducer,
    middleware:[logger]
})
export const persistor=persistStore(store)
export default store