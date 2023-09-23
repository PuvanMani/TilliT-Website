import { BASE_URL } from "../../config.js/config"
import { authFail, authLogout, authRequest, authSuccess } from "../slices/authSlice"




export const getOtp = (Email) => async (dispatch) => {
    try {
        dispatch(authRequest())
        const { data } = await BASE_URL.post(`/auth/register/otp`, { Email })
        dispatch(authSuccess(data))
    } catch (err) {
        dispatch(authFail(err))
    }
}
export const register = (Email, Password, FullName) => async (dispatch) => {
    try {
        dispatch(authRequest())
        const { data } = await BASE_URL.post(`/auth/register`, { Email, Password, FullName })
        dispatch(authSuccess(data))
    } catch (err) {
        dispatch(authFail(err))
    }
}
export const login = (Email, Password) => async (dispatch) => {
    try {
        dispatch(authRequest())
        const { data } = await BASE_URL.post(`/auth/login`, { Email, Password })
        dispatch(authSuccess(data))
    } catch (err) {
        dispatch(authFail(err))
    }
}
export const logout = async (dispatch) => {
    try {
        dispatch(authRequest())
        const { data } = await BASE_URL.get(`/auth/logout`)
        dispatch(authLogout(data))
    } catch (err) {
        dispatch(authFail(err))
    }
}