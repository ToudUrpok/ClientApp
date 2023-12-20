import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from '../../../../app/store/StateSchema'
import {
    reducer as profileReducer,
    ProfileState,
    selectProfileData,
    selectProfileError,
    selectProfileIsLoading,
    selectProfileState
} from './profileSlice'
import { Country } from '../../../../entities/Country'
import { Currency } from '../../../../entities/Currency'
import { IProfile } from '../types/profile'
import { updateProfileData } from '../services/updateProfileData'

describe('Test profileSlice', () => {
    const testProfileData: IProfile = {
        id: '7',
        firstname: 'John',
        lastname: 'Smith',
        age: 20,
        country: Country.USA,
        city: 'New York',
        currency: Currency.usd,
        avatar: 'https://i.natgeofe.com/n/2d706180-e778-4110-9c15-1a7435b72114/mountain-gorillas-rwanda-02_3x4.jpg'
    }

    const initState: DeepPartial<ProfileState> = {
        profileData: testProfileData,
        isLoading: false,
        error: undefined
    }

    // Selectors
    test('selectProfileState from initialized state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: initState as ProfileState
        }
        expect(selectProfileState(state as StateSchema)).toEqual(initState)
    })
    test('selectProfileData from initialized state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: initState as ProfileState
        }
        expect(selectProfileData(state as StateSchema)).toEqual(testProfileData)
    })
    test('selectProfileError from initialized state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: initState as ProfileState
        }
        expect(selectProfileError(state as StateSchema)).toEqual('')
    })
    test('selectProfileState from initialized state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: initState as ProfileState
        }
        expect(selectProfileIsLoading(state as StateSchema)).toEqual(false)
    })

    test('selectProfileState from empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectProfileState(state as StateSchema)).toEqual(undefined)
    })
    test('selectProfileData from empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectProfileData(state as StateSchema)).toEqual(undefined)
    })
    test('selectProfileError from empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectProfileError(state as StateSchema)).toEqual('')
    })
    test('selectProfileState from empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectProfileIsLoading(state as StateSchema)).toEqual(false)
    })

    // extraReducers
    test('updateProfileData.pending testing', () => {
        const state: DeepPartial<ProfileState> = {
            isLoading: false,
            error: 'ERROR'
        }

        const result = profileReducer(state as ProfileState, updateProfileData.pending)
        expect(result).toEqual({
            isLoading: true,
            error: undefined
        })
    })
    test('updateProfileData.fulfilled testing', () => {
        const state: DeepPartial<ProfileState> = {
            isLoading: true
        }

        const result = profileReducer(
            state as ProfileState,
            updateProfileData.fulfilled(testProfileData, '', { ...testProfileData, firstname: '' }))
        expect(result).toEqual({
            profileData: testProfileData,
            isLoading: false,
            error: undefined
        })
    })
})
