import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        loading: false,
        items: localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : []
    },
    reducers: {
        addcartItemRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        addcartItemSuccess(state, action) {
            const item = action.payload
            const existingItemIndex = state.items.findIndex(i => i.ProductID === item.ProductID);

            if (existingItemIndex !== -1) {

                const updatedItems = [...state.items];
                updatedItems[existingItemIndex] = { ...updatedItems[existingItemIndex], Quantity: item.Quantity };

                const newState = {
                    ...state,
                    items: updatedItems,
                    loading: false
                };
                localStorage.setItem("cartList", JSON.stringify(newState.items));
                return newState;
            } else {

                const newState = {
                    ...state,
                    items: [...state.items, item],
                    loading: false
                };

                localStorage.setItem("cartList", JSON.stringify(newState.items));
                return newState;
            }
        },
        removecartItemSuccess(state, action) {
            const newState = {
                ...state,
                items: action.payload,
                loading: false
            }
            localStorage.setItem("cartList", JSON.stringify(newState.items));
            return newState
        }
    }
})

const { actions, reducer } = cartSlice;

export const { addcartItemRequest, removecartItemSuccess, addcartItemSuccess } = actions;

export default reducer;