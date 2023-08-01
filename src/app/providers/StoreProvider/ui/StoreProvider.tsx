import { RootState, setupStore } from 'app/store/store'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import {
    PreloadedState
} from '@reduxjs/toolkit'

interface StoreProviderProps {
    children: ReactNode
    initialState?: PreloadedState<RootState>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState
    } = props

    return (
        <Provider store={setupStore(initialState)}>
            { children }
        </Provider>
    )
}
