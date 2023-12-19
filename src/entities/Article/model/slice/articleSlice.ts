import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from '../../../../app/store/StateSchema'
import { IArticle } from '../types/article'
import { fetchArticleById } from '../services/fetchArticleById'

export interface ArticleState {
    articleData?: IArticle
    isLoading?: boolean
    error?: string
}

const initialState: ArticleState = {
    articleData: undefined,
    isLoading: false,
    error: undefined
}

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<IArticle>) => {
            state.isLoading = false
            state.articleData = action.payload
        })
        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export const selectArticleState = (state: StateSchema): ArticleState | undefined => state.article
export const selectArticleIsLoading = (state: StateSchema): boolean => state?.article?.isLoading ?? false
export const selectArticleError = (state: StateSchema): string => state?.article?.error ?? ''
export const selectArticleData = (state: StateSchema): IArticle | undefined => state.article?.articleData

export const { reducer, actions } = articleSlice
