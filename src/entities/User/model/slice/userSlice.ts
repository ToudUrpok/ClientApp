import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/store/StateSchema'
import { IUser } from '../types/user'
import { USER_AUTH_TOKEN } from 'shared/const/localStorage'

export interface UserState {
    authData?: IUser
}

const initialState: UserState = {

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_AUTH_TOKEN)
            if (user) {
                state.authData = JSON.parse(user)
            }
        },
        logOut: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_AUTH_TOKEN)
        }
    },
    extraReducers: (builder) => {
        /* builder.addCase(fetchUserById.fulfilled, (state, action) => {
            // Add user to the state array
            state.entities.push(action.payload)
        }) */
    }
})

export const selectUserAuthData = (state: StateSchema): IUser => state.user.authData
export const { reducer, actions } = userSlice
