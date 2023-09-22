import { createSlice } from "@reduxjs/toolkit";

const ProductsSLice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        products: []
    },
    reducers: {
        productsRequest(state, action) {
            return {
                loading: true,
                products: []
            }
        },
        productsSuccess(state, action) {
            return {
                loading: false,
                products: action.payload.products
            }
        },
        productsFail(state, action) {
            return {
                loading: false,
                products: [],
                error: action.payload.response.data.message
            }
        }
    }
})

const { actions, reducer } = ProductsSLice;

export const { productsRequest, productsSuccess, productsFail } = actions;

export default reducer;