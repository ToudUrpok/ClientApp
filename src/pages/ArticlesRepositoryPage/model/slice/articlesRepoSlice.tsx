import {
    createEntityAdapter,
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit'
import { StateSchema } from '../../../../app/store/StateSchema'
import { IArticle, TArticlesCollectionView } from '../../../../entities/Article'
import { ArticlesRepoState } from '../types/articlesRepoState'
import { fetchArticles } from '../services/fetchArticles'
import { ARTICLES_COLLECTION_VIEW } from '../../../../shared/const/localStorage'

const initialState: ArticlesRepoState = {
    isLoading: false,
    error: undefined,
    view: undefined,
    ids: [],
    entities: {}
}

const articlesAdapter = createEntityAdapter({
    selectId: (article: IArticle) => article.id
})

const articlesRepoSlice = createSlice({
    name: 'articlesRepo',
    initialState: articlesAdapter.getInitialState<ArticlesRepoState>(initialState),
    reducers: {
        setView: (state, action: PayloadAction<TArticlesCollectionView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLES_COLLECTION_VIEW, action.payload)
        },
        applyPreferences: (state) => {
            const viewItem = localStorage.getItem(ARTICLES_COLLECTION_VIEW)
            console.log(viewItem)
            if (viewItem) {
                state.view = viewItem as TArticlesCollectionView
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(fetchArticles.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
            state.isLoading = false
            articlesAdapter.setAll(state, action.payload)
        })
        builder.addCase(fetchArticles.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export const articlesSelectors = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesRepo ?? articlesAdapter.getInitialState()
)
export const selectArticlesRepoIsLoading = (state: StateSchema): boolean => state?.articlesRepo?.isLoading ?? false
export const selectArticlesRepoError = (state: StateSchema): string | undefined => state?.articlesRepo?.error
export const selectArticlesRepoView = (state: StateSchema): TArticlesCollectionView | undefined => state?.articlesRepo?.view

export const { reducer, actions } = articlesRepoSlice
