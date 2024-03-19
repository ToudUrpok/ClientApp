import { TArticleTopic } from '../../../../entities/Article'

export interface IArticlesFilters {
    [index: string]: string | boolean | TArticleSortField | undefined
    sortField?: TArticleSortField
    sortOrder?: boolean
    searchValue?: string
    topic?: TArticleTopic
}

export type TArticleSortField = 'views' | 'createdAt' | 'user'
