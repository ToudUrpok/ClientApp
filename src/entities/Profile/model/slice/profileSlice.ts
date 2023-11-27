import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from '../../../../app/store/StateSchema'
import { IProfile } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData'

export interface ProfileState {
    profileData?: IProfile
    isLoading?: boolean
    error?: string
}

const initialState: ProfileState = {
    profileData: undefined,
    isLoading: false,
    error: undefined
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
            state.isLoading = false
            state.profileData = action.payload
        })
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
        builder.addCase(updateProfileData.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
            state.isLoading = false
            state.profileData = action.payload
        })
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export const selectProfileState = (state: StateSchema): ProfileState | undefined => state.profile
export const selectProfileIsLoading = (state: StateSchema): boolean => state?.profile?.isLoading ?? false
export const selectProfileError = (state: StateSchema): string => state?.profile?.error ?? ''
export const selectProfileData = (state: StateSchema): IProfile | undefined => state.profile?.profileData

export const { reducer, actions } = profileSlice
