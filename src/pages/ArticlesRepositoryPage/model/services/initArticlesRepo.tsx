import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, StateSchema } from '../../../../app/store/StateSchema'
import { fetchArticles } from './fetchArticles'
import {
    actions as articlesRepoActions,
    selectArticlesRepoInited,
    selectArticlesRepoFilters
} from '../slice/articlesRepoSlice'
import { IArticlesFilters } from '../types/filters'

export interface InitArticlesRepoArgs {
    searchParams: URLSearchParams
}

export const initArticlesRepo = createAsyncThunk<
boolean,
InitArticlesRepoArgs,
{ state: StateSchema, dispatch: AppDispatch, rejectValue: Error }
>(
    'articlesRepo/initArticlesRepo',
    async (args, thunkAPI) => {
        try {
            const inited = selectArticlesRepoInited(thunkAPI.getState())

            if (!inited) {
                thunkAPI.dispatch(articlesRepoActions.initState())

                // apply filters from url query params
                const filters = selectArticlesRepoFilters(thunkAPI.getState())
                if (filters !== undefined) {
                    const updatedFilters: IArticlesFilters = {}
                    Object.entries(filters).forEach(([name, value]) => {
                        const filterValue = args.searchParams.get(name)
                        updatedFilters[name] = filterValue ?? value
                    })
                    thunkAPI.dispatch(articlesRepoActions.setFilters(updatedFilters))
                }

                await thunkAPI.dispatch(fetchArticles({}))
            }

            return true
        } catch (err) {
            return thunkAPI.rejectWithValue(err as Error)
        }
    }
)
