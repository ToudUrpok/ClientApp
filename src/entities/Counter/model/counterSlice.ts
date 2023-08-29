import { createSlice, PayloadAction, DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/store/StateSchema'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment (state, action: PayloadAction<number>) {
            state.value += action.payload
        },
        decrement (state, action: PayloadAction<number>) {
            state.value -= action.payload
        }
    }
})

export const selectCounterValue = (state: DeepPartial<StateSchema>): number | undefined => state.counter?.value
export const { reducer, actions } = counterSlice
