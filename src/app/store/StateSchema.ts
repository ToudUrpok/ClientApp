import {
    EnhancedStore,
    ReducersMapObject,
    Reducer,
    AnyAction,
    CombinedState
} from '@reduxjs/toolkit'
import { CounterState } from '../../entities/Counter'
import { UserState } from '../../entities/User'
import { LoginState } from '../../features/AuthByUsername'
import { setupStore } from './store'
import { ProfileState } from '../../entities/Profile'
import { ArticleState } from '../../entities/Article'
import { ArticleCommentsState } from '../../features/ArticleComments'
import { ArticlesRepoState } from '../../pages/ArticlesRepositoryPage'
import { PageState } from '../../widgets/Page'

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export interface StateSchema {
    counter: CounterState
    user: UserState
    pages: PageState
    login?: LoginState
    profile?: ProfileState
    article?: ArticleState
    articleComments?: ArticleCommentsState
    articlesRepo?: ArticlesRepoState
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
