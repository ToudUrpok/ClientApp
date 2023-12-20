export type {
    ArticleCommentsState
} from './model/types/articleCommentsState'

export {
    ArticleCommentsLazy as ArticleComments
} from './ui/ArticleComments/ArticleComments.lazy'

export {
    reducer as articleCommentsReducer
} from './model/slices/articleCommentsSlice'
