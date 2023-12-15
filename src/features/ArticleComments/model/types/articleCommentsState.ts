import { EntityState } from '@reduxjs/toolkit'
import { IComment } from '../../../../entities/Comment'

export interface ArticleCommentsState extends EntityState<IComment> {
    isLoading?: boolean
    error?: string
}
