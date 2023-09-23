import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        isLoggedIn: localStorage.getItem('token') ? localStorage.getItem('token') : false,
        otp: null,
    },
    reducers: {
        authRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        authSuccess(state, action) {
            let y = action.payload.token ? localStorage.setItem('token', action.payload.token) : null
            return {
                ...state,
                otp: action.payload.otp ? action.payload.otp : null,
                isLoggedIn: action.payload.token ? true : false
            }
        },
        authFail(state, action) {
            return {
                loading: false,
                error: action.payload.response.data.message
            }
        },
        authLogout(state, action) {
            localStorage.removeItem('token')
            return {
                loading: false,
                isLoggedIn: false,
                otp: null,
            }
        },
    }
})

const { actions, reducer } = AuthSlice;

export const { authFail, authRequest, authSuccess, authLogout } = actions;

export default reducer;