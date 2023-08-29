import {
    CombinedState,
    Reducer,
    ReducersMapObject,
    configureStore
} from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { StateSchema } from './StateSchema'

const staticReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
}

export function setupStore (initialState?: StateSchema) {
    const reducerManager = createReducerManager(staticReducers)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}
