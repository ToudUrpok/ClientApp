import { StoryFn } from '@storybook/react'
import { StoreProvider } from '../../../../app/providers/StoreProvider'
import { StateSchema } from '../../../../app/store/StateSchema'
import { articleReducer } from '../../../../entities/Article'
import { profileReducer } from '../../../../entities/Profile'
import { loginReducer } from '../../../../features/AuthByUsername'
import { articleCommentsReducer } from '../../../../features/ArticleComments'
import { ReducersList } from '../../../../shared/hooks/useDynamicReducer'
import {
    DeepPartial,
    PreloadedState
} from '@reduxjs/toolkit'

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    article: articleReducer,
    articleComments: articleCommentsReducer
}

export const LocalStoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state as PreloadedState<StateSchema>} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
)
