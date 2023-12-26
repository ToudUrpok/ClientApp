import { createAsyncThunk } from '@reduxjs/toolkit'
import { $authAPI } from '../../../../shared/api/authorizedAPIInstance'
import { IArticle } from '../../../../entities/Article'
import { selectArticlesRepoLimit, selectArticlesRepoPage } from '../slice/articlesRepoSlice'
import { StateSchema } from '../../../../app/store/StateSchema'

export interface FetchArticlesArgs {
    filters?: string
}

export const fetchArticles = createAsyncThunk<IArticle[], FetchArticlesArgs, { rejectValue: Error, state: StateSchema }>(
    'articlesRepo/fetchArticles',
    async (args: FetchArticlesArgs, thunkAPI) => {
        const page = selectArticlesRepoPage(thunkAPI.getState())
        const limit = selectArticlesRepoLimit(thunkAPI.getState())

        try {
            const response = await $authAPI.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit
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
