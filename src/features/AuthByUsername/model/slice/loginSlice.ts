import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginState } from '../types/loginState'
import { StateSchema } from 'app/store/StateSchema'
import { loginByUsername } from '../services/loginByUsername'

const initialState: LoginState = {
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

export const selectLoginState = (state: StateSchema): LoginState => state.login
export const selectLoginUsername = (state: StateSchema): string => state?.login?.username || ''
export const selectLoginPassword = (state: StateSchema): string => state?.login?.password || ''
export const selectLoginIsLoading = (state: StateSchema): boolean => state?.login?.isLoading || false
export const selectLoginError = (state: StateSchema): string => state?.login?.error

export const { reducer, actions } = loginSlice
