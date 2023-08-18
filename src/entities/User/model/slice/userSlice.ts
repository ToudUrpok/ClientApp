import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store/store'
import { IUser } from '../types/user'
import { USER_AUTH_TOKEN } from 'shared/const/localStorage'

export interface UserSlice {
    authData?: IUser
}

const initialState: UserSlice = {

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

export const selectUserAuthData = (state: RootState): IUser => state.user.authData
export const { reducer, actions } = userSlice
