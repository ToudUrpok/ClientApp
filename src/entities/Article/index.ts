export {
    Article
} from './ui/Article/Article'

export type {
    IArticle
} from './model/types/article'

export type {
    ArticleState
} from './model/slice/articleSlice'

export {
    reducer as articleReducer,
    actions as articleActions,
    selectArticleData,
    selectArticleIsLoading,
    selectArticleError,
    selectArticleState
} from './model/slice/articleSlice'
