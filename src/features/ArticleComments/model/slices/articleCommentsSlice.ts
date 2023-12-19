import {
    createEntityAdapter,
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit'
import { IComment } from '../../../../entities/Comment'
import { StateSchema } from '../../../../app/store/StateSchema'
import { ArticleCommentsState } from '../types/articleCommentsState'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId'

const initialState: ArticleCommentsState = {
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
}

const commentsAdapter = createEntityAdapter({
    selectId: (comment: IComment) => comment.id
})

const articleCommentsSlice = createSlice({
    name: 'articleComments',
    initialState: commentsAdapter.getInitialState<ArticleCommentsState>(initialState),
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsByArticleId.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.isLoading = false
            commentsAdapter.setAll(state, action.payload)
        })
        builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export const commentsSelectors = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleComments ?? commentsAdapter.getInitialState()
)
export const selectCommentsIsLoading = (state: StateSchema): boolean => state?.articleComments?.isLoading ?? false
export const selectCommentsError = (state: StateSchema): string | undefined => state?.articleComments?.error

export const { reducer, actions } = articleCommentsSlice
