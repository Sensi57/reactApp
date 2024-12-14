import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { setToLocalStorage } from "../../shared/helpers";
import { LS_USER_ACCESS_TOKEN } from "../../shared/constants/userAccess";

interface AuthState {
    isAuth: boolean
}

const initialState: AuthState = {
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        fetchLoginAccessToken(state, action: PayloadAction<boolean>) {
            setToLocalStorage(LS_USER_ACCESS_TOKEN, 'dasdasdasd')
        }
    }
})

export const { fetchLoginAccessToken } = authSlice.actions;
export default authSlice.reducer