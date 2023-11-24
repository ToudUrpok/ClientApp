import { StateSchema } from 'app/store/StateSchema'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import {
    PreloadedState,
    ReducersMapObject,
    DeepPartial
} from '@reduxjs/toolkit'
import { setupStore } from 'app/store/store'

interface StoreProviderProps {
    children: ReactNode
    initialState?: PreloadedState<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers
    } = props

    return (
        <Provider store={setupStore(initialState, asyncReducers as ReducersMapObject<StateSchema>)}>
            { children }
        </Provider>
    )
}
