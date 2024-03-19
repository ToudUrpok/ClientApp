import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { cn } from '../../../../shared/lib/classNames/classNames'
import { ReducersList, useDynamicReducer } from '../../../../shared/hooks/useDynamicReducer'
import { Text, TextTheme } from '../../../../shared/ui/Text/Text'
import { Page } from '../../../../widgets/Page'
import {
    ArticlesCollection,
    ArticlesCollectionViewSelector,
    TArticlesCollectionView,
    TArticleTopic
} from '../../../../entities/Article'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks/redux'
import cls from './ArticlesRepositoryPage.module.scss'
import {
    reducer as articlesRepoReducer,
    actions as articlesRepoActions,
    articlesSelectors,
    selectArticlesRepoIsLoading,
    selectArticlesRepoError,
    selectArticlesRepoView,
    selectArticlesRepoFilters
} from '../../model/slice/articlesRepoSlice'
import { initArticlesRepo } from '../../model/services/initArticlesRepo'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage'
import { ArticleFilters } from '../ArticleFilters/ArticleFilters'
import { TArticleSortField } from '../../model/types/filters'
import { fetchArticles } from '../../model/services/fetchArticles'
import { useDebounce } from '../../../../shared/hooks/useDebounce'
import { getQueryString } from '../../../../shared/lib/url/getQueryString'

interface ArticlesRepositoryPageProps {
    className?: string
}

const reducersToLoad: ReducersList = {
    articlesRepo: articlesRepoReducer
}

const ArticlesRepositoryPage = (props: ArticlesRepositoryPageProps) => {
    useDynamicReducer(reducersToLoad, false)
    const {
        className
    } = props
    const { t } = useTranslation('articles')
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(selectArticlesRepoIsLoading)
    const error = useAppSelector(selectArticlesRepoError)
    const view = useAppSelector(selectArticlesRepoView)
    const filters = useAppSelector(selectArticlesRepoFilters)
    const articles = useAppSelector(articlesSelectors.selectAll)

    const fetchData = useCallback(() => {
        dispatch(fetchArticles({ refresh: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    useEffect(() => {
        dispatch(initArticlesRepo({ searchParams }))
        if (filters !== undefined) {
            setSearchParams(getQueryString(searchParams, filters))
        }
    }, [dispatch, filters, searchParams, setSearchParams])

    const switchView = useCallback((view: TArticlesCollectionView) => {
        dispatch(articlesRepoActions.setView(view))
    }, [dispatch])

    const switchSortField = useCallback((field: TArticleSortField) => {
        dispatch(articlesRepoActions.setFilters({ ...filters, sortField: field }))
        dispatch(articlesRepoActions.setPage(1))
        fetchData()
    }, [dispatch, filters, fetchData])

    const switchSortOrder = useCallback((order: boolean) => {
        dispatch(articlesRepoActions.setFilters({ ...filters, sortOrder: order }))
        dispatch(articlesRepoActions.setPage(1))
        fetchData()
    }, [dispatch, filters, fetchData])

    const changeSearchValue = useCallback((value: string) => {
        dispatch(articlesRepoActions.setFilters({ ...filters, searchValue: value }))
        dispatch(articlesRepoActions.setPage(1))
        debouncedFetchData()
    }, [dispatch, filters, debouncedFetchData])

    const selectTopic = useCallback((value: TArticleTopic) => {
        dispatch(articlesRepoActions.setFilters({ ...filters, topic: value }))
        dispatch(articlesRepoActions.setPage(1))
        fetchData()
    }, [dispatch, filters, fetchData])

    const loadNextPage = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage())
        }
    }, [dispatch])

    if (error) {
        return (
            <Page className={cn(cls.ArticlesRepositoryPage, {}, [className])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('articles.ArtilcesLoadingError')}
                    text={error}
                />
            </Page>
        )
    }

    return (
        <Page
            className={cn(cls.ArticlesRepositoryPage, {}, [className])}
            onScrollEnd={loadNextPage}
            restoreScrollPosition
        >
            <div className={cls.Header}>
                <ArticleFilters
                    filters={filters}
                    onChangeSortField={switchSortField}
                    onChangeSortOrder={switchSortOrder}
                    onChangeSearchValue={changeSearchValue}
                    onSelectTopic={selectTopic}
                />
                <ArticlesCollectionViewSelector
                    className={cls.ViewSelector}
                    currentView={view ?? 'list'}
                    onSwitchView={switchView}
                />
            </div>

            <ArticlesCollection
                className={cls.Collection}
                isLoading={isLoading}
                articles={articles}
                view={view}
            />
        </Page>
    )
}

export default memo(ArticlesRepositoryPage)
