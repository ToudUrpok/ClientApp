import { createAsyncThunk } from '@reduxjs/toolkit'
import { IArticle } from '../types/article'
import { $authAPI } from '../../../../shared/api/authorizedAPIInstance'

export const fetchArticleById = createAsyncThunk<IArticle, string, { rejectValue: Error }>(
    'article/fetchArticleById',
    async (id: string, thunkAPI) => {
        try {
            const response = await $authAPI.get<IArticle>(`/articles/${id}`)
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err as Error)
        }
    }
)
