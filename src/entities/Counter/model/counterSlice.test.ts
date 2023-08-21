import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/store/StateSchema'
import { CounterState, actions, reducer, selectCounterValue } from './counterSlice'

describe('counterSlice', () => {
    let initialState = {
        value: 0
    }

    beforeEach(() => {
        initialState = {
            value: 10
        }
    })

    test('test selector', () => {
        const state: DeepPartial<StateSchema> = {
            counter: initialState
        }

        expect(selectCounterValue(state)).toEqual(10)
    })

    test('test increment', () => {
        const state: CounterState = initialState
        expect(reducer(state, actions.increment(5))).toEqual({ value: 15 })
    })

    test('test decrement', () => {
        const state: CounterState = initialState
        expect(reducer(state, actions.decrement(8))).toEqual({ value: 2 })
    })

    test('test init state value', () => {
        expect(reducer(undefined, actions.decrement(3))).toEqual({ value: -3 })
    })
})
