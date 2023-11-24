import { Story } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { StateSchema } from 'app/store/StateSchema'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername'
import { ReducersList } from 'shared/hooks/useDynamicReducer'
import {
    DeepPartial,
    PreloadedState
} from '@reduxjs/toolkit'

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer
}

export const LocalStoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state as PreloadedState<StateSchema>} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
)
