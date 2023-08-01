import {
    PreloadedState,
    combineReducers,
    configureStore
} from '@reduxjs/toolkit'
import { counterReducer } from 'features/Counter'

const rootReducer = combineReducers({
    counter: counterReducer
})

export function setupStore (preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
