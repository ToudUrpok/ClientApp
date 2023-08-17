import {
    PreloadedState,
    combineReducers,
    configureStore
} from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
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
