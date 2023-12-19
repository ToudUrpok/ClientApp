import { IComment } from '../../../../entities/Comment'

export interface IArticleComment extends IComment {
    articleId: string
}
