import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProfile } from '../types/profile'
import { $authAPI } from '../../../../shared/api/authorizedAPIInstance'

export const updateProfileData = createAsyncThunk<IProfile, IProfile, { rejectValue: Error }>(
    'profile/updateProfileData',
    async (profile: IProfile, thunkAPI) => {
        try {
            const response = await $authAPI.put<IProfile>('/profile', profile)
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err as Error)
        }
    }
)
