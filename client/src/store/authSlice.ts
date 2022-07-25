import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const {user, accessToken} = action.payload
            state.user = user
            state.token = accessToken
        },
        logout: (state, action) => {
            state.user = null
            state.token = null
        },
    }
})

export const { setCredentials, logout} = authSlice.actions

export default authSlice.reducer