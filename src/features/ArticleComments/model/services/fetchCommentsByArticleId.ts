import { createAsyncThunk } from '@reduxjs/toolkit'
import { $authAPI } from '../../../../shared/api/authorizedAPIInstance'
import { IComment } from '../../../../entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<IComment[], string, { rejectValue: Error }>(
    'articleComments/fetchCommentsByArticleId',
    async (articleId: string, thunkAPI) => {
        try {
            const response = await $authAPI.get<IComment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user'
                }
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
