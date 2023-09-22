import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from '../slices/productsSlice'
import productReducer from '../slices/productSlice'
import cartReducer from '../slices/cartSlice'
import authReducer from '../slices/authSlice'

const reducer = combineReducers({
    productsState: productsReducer,
    productState: productReducer,
    cartState: cartReducer,
    authState: authReducer,
})


const store = configureStore({
    reducer,
    middleware: [thunk]
})


export default store;