import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from '../../../../app/store/StateSchema'
import { LoginState } from '../types/loginState'
import {
    reducer as loginReducer,
    actions as loginActions,
    selectLoginError,
    selectLoginIsLoading,
    selectLoginPassword,
    selectLoginState,
    selectLoginUsername
} from './loginSlice'

describe('Test loginSlice', () => {
    const testUsername = 'Eugene'
    const testPassword = '123456'
    const testError = 'ERROR'

    const loginInitState: DeepPartial<LoginState> = {
        username: testUsername,
        password: testPassword,
        isLoading: false,
        error: testError
    }

    test('selectLoginState from initialized state', () => {
        const state: DeepPartial<StateSchema> = {
            login: loginInitState as LoginState
        }
        expect(selectLoginState(state as StateSchema)).toEqual(loginInitState)
    })
    test('selectLoginUsername from initialized state', () => {
        const state: DeepPartial<StateSchema> = {
            login: loginInitState as LoginState
        }
        expect(selectLoginUsername(state as StateSchema)).toEqual(testUsername)
    })
    test('selectLoginPassword from initialized state', () => {
        const state: DeepPartial<StateSchema> = {
            login: loginInitState as LoginState
        }
        expect(selectLoginPassword(state as StateSchema)).toEqual(testPassword)
    })
    test('selectLoginIsLoading from initialized state', () => {
        const state: DeepPartial<StateSchema> = {
            login: loginInitState as LoginState
        }
        expect(selectLoginIsLoading(state as StateSchema)).toEqual(false)
    })
    test('selectLoginError from initialized state', () => {
        const state: DeepPartial<StateSchema> = {
            login: loginInitState as LoginState
        }
        expect(selectLoginError(state as StateSchema)).toEqual(testError)
    })

    test('selectLoginState from undefined state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectLoginState(state as StateSchema)).toEqual(undefined)
    })
    test('selectLoginUsername from undefined state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectLoginUsername(state as StateSchema)).toEqual('')
    })
    test('selectLoginPassword from undefined state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectLoginPassword(state as StateSchema)).toEqual('')
    })
    test('selectLoginIsLoading from undefined state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectLoginIsLoading(state as StateSchema)).toEqual(false)
    })
    test('selectLoginError from undefined state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectLoginError(state as StateSchema)).toEqual(undefined)
    })

    test('setUsername', () => {
        const state: DeepPartial<LoginState> = {}
        expect(selectLoginUsername(state as StateSchema)).not.toEqual(testUsername)
        expect(loginReducer(state as LoginState, loginActions.setUsername(testUsername)))
            .toEqual({ username: testUsername })
    })
    test('setPassword', () => {
        const state: DeepPartial<LoginState> = {}
        expect(selectLoginPassword(state as StateSchema)).not.toEqual(testPassword)
        expect(loginReducer(state as LoginState, loginActions.setPassword(testPassword)))
            .toEqual({ password: testPassword })
    })
})
