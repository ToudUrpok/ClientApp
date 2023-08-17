import { createSlice/* , PayloadAction */ } from '@reduxjs/toolkit'
// import { RootState } from 'app/store/store'
import { IUser } from '../types/user'

export interface UserSlice {
    authData?: IUser
}

const initialState: UserSlice = {

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        /* builder.addCase(fetchUserById.fulfilled, (state, action) => {
            // Add user to the state array
            state.entities.push(action.payload)
        }) */
    }
})

// export const selectCounterValue = (state: RootState) => state.counter.value
export const { reducer, actions } = userSlice
