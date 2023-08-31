import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProfile } from '../types/profile'
import { $authAPI } from 'shared/api/authorizedAPIInstance'

export const fetchProfileData = createAsyncThunk<IProfile, string, { rejectValue: Error }>(
    'profile/fetchProfileData',
    async (id: string, thunkAPI) => {
        try {
            const response = await $authAPI.get<IProfile>(`/profiles/${id}`)
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err as Error)
        }
    }
)
