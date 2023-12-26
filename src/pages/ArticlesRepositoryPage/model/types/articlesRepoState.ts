import { EntityState } from '@reduxjs/toolkit'
import { IArticle, TArticlesCollectionView } from '../../../../entities/Article'

export interface ArticlesRepoState extends EntityState<IArticle> {
    isLoading?: boolean
    error?: string
    view?: TArticlesCollectionView
    page?: number
    limit?: number
    totalCount?: number
}
