import { BASE_URL } from "../../config.js/config"
import { productsFail, productsRequest, productsSuccess } from "../slices/productsSlice"




export const getProducts = (query) => async (dispatch) => {
    try {
        dispatch(productsRequest())
        const { data } = await BASE_URL.get('/products')
        dispatch(productsSuccess(data))
    } catch (err) {
        dispatch(productsFail(err))
    }
}