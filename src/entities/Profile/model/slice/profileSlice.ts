import { createSlice } from '@reduxjs/toolkit'
import { StateSchema } from 'app/store/StateSchema'
import { IProfile } from '../types/profile'

export interface ProfileState {
    profileData?: IProfile
    isLoading: boolean
    error?: string
    readonly: boolean
}

const initialState: ProfileState = {
    profileData: undefined,
    isLoading: false,
    error: undefined,
    readonly: true
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    }
})

export const selectProfileData = (state: StateSchema): IProfile => state?.profile?.profileData
export const { reducer, actions } = profileSlice
