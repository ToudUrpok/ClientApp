import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from 'app/store/StateSchema'
import { IProfile } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData'

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
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        updateProfile: (state, action: PayloadAction<IProfile>) => {
            state.profileData = {
                ...state.profileData,
                ...action.payload
            }
        }
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
    }
})

export const selectProfileState = (state: StateSchema): ProfileState | undefined => state.profile
export const selectProfileIsLoading = (state: StateSchema): boolean => state?.profile?.isLoading || false
export const selectProfileError = (state: StateSchema): string => state?.profile?.error || ''
export const selectProfileData = (state: StateSchema): IProfile | undefined => state.profile?.profileData
export const selectProfileReadonly = (state: StateSchema): boolean => state?.profile?.readonly || false

export const { reducer, actions } = profileSlice
