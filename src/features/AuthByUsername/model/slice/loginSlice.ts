import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { RootState } from 'app/store/store'
import { loginByUsername } from '../services/loginByUsername'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(loginByUsername.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export const selectLoginSchema = (state: RootState): LoginSchema => state.login
export const { reducer, actions } = loginSlice
