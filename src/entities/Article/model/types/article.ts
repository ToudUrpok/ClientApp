import { IUser } from '../../../../entities/User'

export interface IArticle {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    user: IUser
    topic: TArticleTopic[]
    blocks: IArticleBlock[]
}

export type TArticleTopic = 'IT' | 'Food' | 'Economics' | 'Science' | 'Education' | 'Shopping'

export interface IArticleBlock {
    id: string
    type: TArticleBlockType
    content: ArticleBlockContent
}

export type TArticleBlockType = 'TEXT' | 'CODE' | 'IMAGE'

export type ArticleBlockContent = ITextContent | ICodeContent | IImageContent

export interface ITextContent {
    title?: string
    paragraphs: string[]
}

export interface ICodeContent {
    code: string
}

export interface IImageContent {
    src: string
    title?: string
}
