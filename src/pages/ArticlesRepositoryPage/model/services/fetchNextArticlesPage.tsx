import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    selectArticlesRepoHasMore,
    selectArticlesRepoIsLoading,
    selectArticlesRepoPage,
    actions as articlesRepoActions
} from '../slice/articlesRepoSlice'
import { AppDispatch, StateSchema } from '../../../../app/store/StateSchema'
import { fetchArticles } from './fetchArticles'

export const fetchNextArticlesPage = createAsyncThunk<
boolean,
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
void,
{ state: StateSchema, dispatch: AppDispatch, rejectValue: Error }
>(
    'articlesRepo/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        try {
            const isLoading = selectArticlesRepoIsLoading(thunkAPI.getState())
            const hasMore = selectArticlesRepoHasMore(thunkAPI.getState())

            if (!hasMore || isLoading) {
                return false
            }

            const page = selectArticlesRepoPage(thunkAPI.getState())
            thunkAPI.dispatch(articlesRepoActions.setPage(page + 1))
            await thunkAPI.dispatch(fetchArticles({}))
            return true
        } catch (err) {
            return thunkAPI.rejectWithValue(err as Error)
        }
    }
)
