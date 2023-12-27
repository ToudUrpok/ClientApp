import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, StateSchema } from '../../../../app/store/StateSchema'
import { fetchArticles } from './fetchArticles'
import {
    actions as articlesRepoActions,
    selectArticlesRepoInited
} from '../slice/articlesRepoSlice'

export const initArticlesRepo = createAsyncThunk<
boolean,
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
void,
{ state: StateSchema, dispatch: AppDispatch, rejectValue: Error }
>(
    'articlesRepo/initArticlesRepo',
    async (_, thunkAPI) => {
        try {
            const inited = selectArticlesRepoInited(thunkAPI.getState())

            if (!inited) {
                thunkAPI.dispatch(articlesRepoActions.initState())
                await thunkAPI.dispatch(fetchArticles({}))
            }

            return true
        } catch (err) {
            return thunkAPI.rejectWithValue(err as Error)
        }
    }
)
