import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser, userActions } from 'entities/User'
import { USER_AUTH_TOKEN } from 'shared/const/localStorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, { rejectValue: Error }>(
    'login/loginByUsername',
    async (loginData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', loginData)
            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_AUTH_TOKEN, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err as Error)
        }
    }
)
