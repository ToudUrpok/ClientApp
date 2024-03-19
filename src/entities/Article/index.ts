export {
    Article
} from './ui/Article/Article'

export type {
    IArticle,
    TArticleTopic
} from './model/types/article'

export {
    ArticleTopics
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

export type {
    TArticlesCollectionView
} from './ui/ArticlesCollection/ArticlesCollection'

export {
    ArticlesCollection
} from './ui/ArticlesCollection/ArticlesCollection'

export {
    ArticlesCollectionViewSelector
} from './ui/ArticlesCollectionViewSelector/ArticlesCollectionViewSelector'
