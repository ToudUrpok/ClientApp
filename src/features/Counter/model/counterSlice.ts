import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store/store'

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

export const selectCounterValue = (state: RootState) => state.counter.value
export const { reducer, actions } = counterSlice
