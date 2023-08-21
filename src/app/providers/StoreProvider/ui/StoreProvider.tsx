import { StateSchema } from 'app/store/StateSchema'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import {
    PreloadedState
} from '@reduxjs/toolkit'
import { setupStore } from 'app/store/store'

interface StoreProviderProps {
    children: ReactNode
    initialState?: PreloadedState<StateSchema>
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
