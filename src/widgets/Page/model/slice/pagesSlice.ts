import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from '../../../../app/store/StateSchema'
import { PageState } from '../types/pageState'

const initialState: PageState = {
    scrollPosition: {}
}

const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
            state.scrollPosition[payload.path] = payload.position
        }
    }
})

export const selectPagesState = (state: StateSchema): PageState => state.pages
export const selectPageScrollPosition = (state: StateSchema): Record<string, number | undefined> => state.pages.scrollPosition
export const selectPageScrollPositionByPath = createSelector(
    selectPageScrollPosition,
    (state: StateSchema, path: string) => path,
    (scrollPosition, path) => scrollPosition[path] ?? 0
)

export const { reducer, actions } = pagesSlice
