import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'authorization',
    initialState: {user: null, token:null},
    reducers: {
        setData: (state, action) => {
            const {user, accessToken} = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        }
    }
})

export const { setData, logOut} = authSlice.actions

export default authSlice.reducer