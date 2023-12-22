import { memo, useCallback } from 'react'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticlesRepositoryPage.module.scss'
// import { useTranslation } from 'react-i18next'
import { ArticlesCollection, ArticlesCollectionViewSelector, TArticlesCollectionView } from '../../../../entities/Article'
import { ReducersList, useDynamicReducer } from '../../../../shared/hooks/useDynamicReducer'
import { useInitialEffect } from '../../../../shared/hooks/useInitialEffect'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks/redux'
import {
    reducer as articlesRepoReducer,
    actions as articlesRepoActions,
    articlesSelectors,
    selectArticlesRepoIsLoading,
    // selectArticlesRepoError,
    selectArticlesRepoView
} from '../../model/slice/articlesRepoSlice'
import { fetchArticles } from '../../model/services/fetchArticles'

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
    // const { t } = useTranslation('articles')
    const dispatch = useAppDispatch()
    const isLaoding = useAppSelector(selectArticlesRepoIsLoading)
    // const error = useAppSelector(selectArticlesRepoError)
    const view = useAppSelector(selectArticlesRepoView)
    const articles = useAppSelector(articlesSelectors.selectAll)

    useInitialEffect(() => {
        dispatch(fetchArticles({}))
        dispatch(articlesRepoActions.applyPreferences())
    })

    const switchView = useCallback((view: TArticlesCollectionView) => {
        dispatch(articlesRepoActions.setView(view))
    }, [dispatch])

    return (
        <div className={cn(cls.ArticlesRepositoryPage, {}, [className])}>
            <ArticlesCollectionViewSelector
                className={cls.ViewSelector}
                currentView={view ?? 'list'}
                onSwitchView={switchView}
            />
            <ArticlesCollection
                className={cls.Collection}
                isLoading={isLaoding}
                articles={articles}
                view={view}
            />
        </div>
    )
}

export default memo(ArticlesRepositoryPage)
