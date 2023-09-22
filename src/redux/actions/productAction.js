import { BASE_URL } from "../../config.js/config"
import { productFail, productRequest, productSuccess } from "../slices/productSlice"




export const getSingleProduct = (id) => async (dispatch) => {
    try {
        dispatch(productRequest())
        const { data } = await BASE_URL.get(`/product/${id}`)
        dispatch(productSuccess(data))
    } catch (err) {
        dispatch(productFail(err))
    }
}