import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProfile } from '../types/profile'
import { $authAPI } from '../../../../shared/api/authorizedAPIInstance'

export const updateProfileData = createAsyncThunk<IProfile, IProfile, { rejectValue: Error }>(
    'profile/updateProfileData',
    async (profile: IProfile, thunkAPI) => {
        try {
            console.log(profile)
            const response = await $authAPI.put<IProfile>(`/profiles/${profile.id}`, profile)
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err as Error)
        }
    }
)
