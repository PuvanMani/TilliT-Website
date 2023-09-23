import { BASE_URL } from "../../config.js/config"
import { productsFail, productsRequest, productsSuccess } from "../slices/productsSlice"




export const getProducts = (query) => async (dispatch) => {
    try {
        var link
        if (query) {
            link = `/products${query}`
        } else {
            link = `/products`
        }
        dispatch(productsRequest())
        const { data } = await BASE_URL.get(link)
        dispatch(productsSuccess(data))
    } catch (err) {
        dispatch(productsFail(err))
    }
}