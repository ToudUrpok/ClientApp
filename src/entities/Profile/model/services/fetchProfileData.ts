import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProfile } from '../types/profile'
import { $authAPI } from 'shared/api/authorizedAPIInstance'

export const fetchProfileData = createAsyncThunk<IProfile, undefined, { rejectValue: Error }>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        try {
            const response = await $authAPI.get<IProfile>('/profile')
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err as Error)
        }
    }
)
