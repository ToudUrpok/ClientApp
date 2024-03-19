import { createAsyncThunk } from '@reduxjs/toolkit'
import { $authAPI } from '../../../../shared/api/authorizedAPIInstance'
import { IArticle } from '../../../../entities/Article'
import {
    selectArticlesRepoFilters,
    selectArticlesRepoLimit,
    selectArticlesRepoPage
} from '../slice/articlesRepoSlice'
import { StateSchema } from '../../../../app/store/StateSchema'

export interface FetchArticlesArgs {
    refresh?: boolean
}

export interface FetchArticlesPayload {
    articles: IArticle[]
    total: number
}

export const fetchArticles = createAsyncThunk<FetchArticlesPayload, FetchArticlesArgs, { rejectValue: Error, state: StateSchema }>(
    'articlesRepo/fetchArticles',
    async (args: FetchArticlesArgs, thunkAPI) => {
        const page = selectArticlesRepoPage(thunkAPI.getState())
        const limit = selectArticlesRepoLimit(thunkAPI.getState())
        const filters = selectArticlesRepoFilters(thunkAPI.getState())

        try {
            const response = await $authAPI.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: filters?.sortField,
                    _order: filters?.sortOrder ? 'asc' : 'desc',
                    q: filters?.searchValue,
                    topic: filters?.topic === 'All' ? undefined : filters?.topic
                }
            })

            const totalCount = Number(response.headers['x-total-count'])

            if (!response.data) {
                throw new Error()
            }

            const result: FetchArticlesPayload = {
                articles: response.data,
                total: totalCount
            }

            return result
        } catch (err) {
            return thunkAPI.rejectWithValue(err as Error)
        }
    }
)
