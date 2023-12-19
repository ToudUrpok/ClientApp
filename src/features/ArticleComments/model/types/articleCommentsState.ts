import { EntityState } from '@reduxjs/toolkit'
import { IArticleComment } from './articleComment'

export interface ArticleCommentsState extends EntityState<IArticleComment> {
    isLoading?: boolean
    error?: string
}
