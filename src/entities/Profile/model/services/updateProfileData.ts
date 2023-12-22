import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProfile } from '../types/profile'
import { $authAPI } from '../../../../shared/api/authorizedAPIInstance'
import { StateSchema } from '../../../../app/store/StateSchema'
import { selectUserAuthData } from '../../../../entities/User'

export const updateProfileData = createAsyncThunk<IProfile, IProfile, { rejectValue: Error, state: StateSchema }>(
    'profile/updateProfileData',
    async (profile: IProfile, thunkAPI) => {
        try {
            const user = selectUserAuthData(thunkAPI.getState())
            if (!((user?.id === profile.id) || (user?.role === 'admin'))) {
                return thunkAPI.rejectWithValue(new Error('Unable to edit requested Profile.'))
            }

            const response = await $authAPI.put<IProfile>(`/profiles/${profile.id}`, profile)
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err as Error)
        }
    }
)
