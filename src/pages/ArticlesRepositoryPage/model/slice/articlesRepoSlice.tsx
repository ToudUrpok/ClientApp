import {
    createEntityAdapter,
    createSelector,
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit'
import { ARTICLES_COLLECTION_VIEW } from '../../../../shared/const/localStorage'
import { IArticle, TArticlesCollectionView } from '../../../../entities/Article'
import { StateSchema } from '../../../../app/store/StateSchema'
import { ArticlesRepoState } from '../types/articlesRepoState'
import { fetchArticles } from '../services/fetchArticles'
import { IArticlesFilters } from '../types/filters'

const initialState: ArticlesRepoState = {
    isLoading: false,
    error: undefined,
    view: 'list',
    page: 1,
    limit: 21,
    totalCount: undefined,
    filters: {
        sortField: 'views',
        sortOrder: false,
        searchValue: '',
        topic: 'All'
    },
    ids: [],
    entities: {},
    _inited: false
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
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setFilters: (state, action: PayloadAction<IArticlesFilters>) => {
            state.filters = action.payload
        },
        initState: (state) => {
            const viewItem = localStorage.getItem(ARTICLES_COLLECTION_VIEW)
            if (viewItem) {
                state.view = viewItem as TArticlesCollectionView
            }
            state._inited = true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.pending, (state, action) => {
            state.error = undefined
            state.isLoading = true
            if (action.meta.arg.refresh) {
                articlesAdapter.removeAll(state)
            }
        })
        builder.addCase(fetchArticles.fulfilled, (state, action) => {
            state.isLoading = false
            state.totalCount = action.payload.total
            if (action.meta.arg.refresh) {
                articlesAdapter.setAll(state, action.payload.articles)
            } else {
                articlesAdapter.addMany(state, action.payload.articles)
            }
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
export const selectArticlesRepoPage = (state: StateSchema): number => state?.articlesRepo?.page ?? 1
export const selectArticlesRepoLimit = (state: StateSchema): number | undefined => state?.articlesRepo?.limit
export const selectArticlesRepoTotalCount = (state: StateSchema): number | undefined => state?.articlesRepo?.totalCount
export const selectArticlesRepoFilters = (state: StateSchema): IArticlesFilters | undefined => state?.articlesRepo?.filters
export const selectArticlesRepoInited = (state: StateSchema): boolean => state?.articlesRepo?._inited ?? false
export const selectArticlesRepoHasMore = createSelector([articlesSelectors.selectTotal, selectArticlesRepoTotalCount], (count, total) => {
    return total !== undefined ? count < total : true
})

export const { reducer, actions } = articlesRepoSlice
