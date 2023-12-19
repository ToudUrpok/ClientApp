import { createAsyncThunk } from '@reduxjs/toolkit'
import { $authAPI } from '../../../../shared/api/authorizedAPIInstance'
import { selectUserAuthData } from '../../../../entities/User'
import { StateSchema } from '../../../../app/store/StateSchema'
import { IArticleComment } from '../types/articleComment'

export interface CommentArgs {
    text?: string
    articleId?: string
}

export const postComment = createAsyncThunk<IArticleComment, CommentArgs, { rejectValue: Error, state: StateSchema }>(
    'articleComments/postComment',
    async (commentArgs: CommentArgs, thunkAPI) => {
        try {
            const user = selectUserAuthData(thunkAPI.getState())
            if (!user || !commentArgs.articleId || !commentArgs.text?.length) {
                return thunkAPI.rejectWithValue(new Error('Invalid comment data.'))
            }

            const response = await $authAPI.post<IArticleComment>('/articlesComments', {
                articleId: commentArgs.articleId,
                userId: user.id,
                text: commentArgs.text
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err as Error)
        }
    }
)
