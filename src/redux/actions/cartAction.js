import { BASE_URL } from "../../config.js/config"
import { addcartItemRequest, addcartItemSuccess, removecartItemSuccess } from "../slices/cartSlice"




export const addCartItem = (id, quantity) => async (dispatch) => {
    try {
        dispatch(addcartItemRequest())
        const { data } = await BASE_URL.get(`/product/${id}`)
        dispatch(addcartItemSuccess({
            "ProductID": data.product._id,
            "ProductName": data.product.ProductName,
            "Price": data.product.Price,
            "Image": data.product.Images[0].Image,
            "Quantity": Number(quantity),
            "NetQuantity": Number(data.product.NetQuantity),
        }));

    } catch (err) {
        console.log("data", err)
    }
}
export const removeCartItemAction = (ProductID) => async (dispatch) => {
    try {
        dispatch(addcartItemRequest())
        const data = JSON.parse(localStorage.getItem('cartList'))
        const FilterdData = data.filter(val => val.ProductID !== ProductID)
        dispatch(removecartItemSuccess(FilterdData))
    } catch (err) {
        console.log("data", err)
    }
}