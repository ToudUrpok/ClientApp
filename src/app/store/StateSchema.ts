import {
    EnhancedStore,
    ReducersMapObject,
    Reducer,
    AnyAction,
    CombinedState
} from '@reduxjs/toolkit'
import { CounterState } from 'entities/Counter'
import { UserState } from 'entities/User'
import { LoginState } from 'features/AuthByUsername'
import { setupStore } from './store'
import { ProfileState } from 'entities/Profile'

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export interface StateSchema {
    counter: CounterState
    user: UserState
    login?: LoginState
    profile?: ProfileState
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ManagedReduxStore extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
