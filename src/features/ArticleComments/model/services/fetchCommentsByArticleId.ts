import { createAsyncThunk } from '@reduxjs/toolkit'
import { $authAPI } from '../../../../shared/api/authorizedAPIInstance'
import { IArticleComment } from '../types/articleComment'

export const fetchCommentsByArticleId = createAsyncThunk<IArticleComment[], string, { rejectValue: Error }>(
    'articleComments/fetchCommentsByArticleId',
    async (articleId: string, thunkAPI) => {
        try {
            const response = await $authAPI.get<IArticleComment[]>('/articlesComments', {
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
