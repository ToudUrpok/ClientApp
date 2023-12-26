import { memo, useCallback } from 'react'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticlesRepositoryPage.module.scss'
import { ArticlesCollection, ArticlesCollectionViewSelector, TArticlesCollectionView } from '../../../../entities/Article'
import { ReducersList, useDynamicReducer } from '../../../../shared/hooks/useDynamicReducer'
import { useInitialEffect } from '../../../../shared/hooks/useInitialEffect'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks/redux'
import {
    reducer as articlesRepoReducer,
    actions as articlesRepoActions,
    articlesSelectors,
    selectArticlesRepoIsLoading,
    selectArticlesRepoError,
    selectArticlesRepoView
} from '../../model/slice/articlesRepoSlice'
import { fetchArticles } from '../../model/services/fetchArticles'
import Page from '../../../../widgets/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage'
import { Text, TextTheme } from '../../../../shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

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
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(selectArticlesRepoIsLoading)
    const error = useAppSelector(selectArticlesRepoError)
    const view = useAppSelector(selectArticlesRepoView)
    const articles = useAppSelector(articlesSelectors.selectAll)

    useInitialEffect(() => {
        dispatch(articlesRepoActions.applyPreferences())
        dispatch(fetchArticles({}))
    })

    const switchView = useCallback((view: TArticlesCollectionView) => {
        dispatch(articlesRepoActions.setView(view))
    }, [dispatch])

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
        >
            <ArticlesCollectionViewSelector
                className={cls.ViewSelector}
                currentView={view ?? 'list'}
                onSwitchView={switchView}
            />
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
