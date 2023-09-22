import { createSlice } from "@reduxjs/toolkit";

const ProductSLice = createSlice({
    name: "product",
    initialState: {
        loading: false,
    },
    reducers: {
        productRequest(state, action) {
            return {
                loading: true,
            }
        },
        productSuccess(state, action) {
            return {
                loading: false,
                product: action.payload.product
            }
        },
        productFail(state, action) {
            return {
                loading: false,
                error: action.payload.response.data.message
            }
        },
    }
})

const { actions, reducer } = ProductSLice;

export const { productRequest, productSuccess, productFail } = actions;

export default reducer;