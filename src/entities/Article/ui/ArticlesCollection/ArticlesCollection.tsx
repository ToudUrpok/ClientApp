import { IArticle } from '../../model/types/article'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticlesCollection.module.scss'
import { memo, useMemo } from 'react'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleGridItem } from '../ArticleGridItem/ArticleGridItem'
import { ArticleGridItemSkeleton } from '../ArticleGridItem/ArticleGridItemSkeleton'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

export type TArticlesCollectionView = 'list' | 'grid'

interface ArticlesCollectionProps {
    className?: string
    articles: IArticle[]
    isLoading?: boolean
    view?: TArticlesCollectionView
}

const getSkeleton = (view: TArticlesCollectionView) => {
    const isListView = view === 'list'
    return new Array(isListView ? 2 : 21)
        .fill(0)
        .map((item, index) => (
            isListView
                ? <ArticleListItemSkeleton key={index} />
                : <ArticleGridItemSkeleton key={index} />
        ))
}

export const ArticlesCollection = memo((props: ArticlesCollectionProps) => {
    const {
        className,
        articles,
        isLoading,
        view = 'list'
    } = props

    const items = useMemo(() => {
        switch (view) {
            case 'list':
                return articles.map(a => <ArticleListItem key={a.id} article={a} />)
            case 'grid':
                return articles.map(a => <ArticleGridItem key={a.id} article={a} />)
            default:
                return null
        }
    }, [articles, view])

    return (
        <div className={cn(cls.ArticlesCollection, {}, [className, cls[view]])}>
            {articles.length
                ? items
                : null
            }
            {isLoading && getSkeleton(view)}
        </div>
    )
})
