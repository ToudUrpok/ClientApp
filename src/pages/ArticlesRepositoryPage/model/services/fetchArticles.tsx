import { createAsyncThunk } from '@reduxjs/toolkit'
import { $authAPI } from '../../../../shared/api/authorizedAPIInstance'
import { IArticle } from '../../../../entities/Article'

export interface FetchArticlesArgs {
    filters?: string
}

export const fetchArticles = createAsyncThunk<IArticle[], FetchArticlesArgs, { rejectValue: Error }>(
    'articlesRepo/fetchArticles',
    async (args: FetchArticlesArgs, thunkAPI) => {
        try {
            const response = await $authAPI.get<IArticle[]>('/articles', {
                params: {
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
