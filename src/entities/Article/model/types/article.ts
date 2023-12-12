export interface IArticle {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    blocks: IArticleBlock[]
}

export enum ArticleType {
    IT = 'IT',
    FOOD = 'Food',
    ECONOMICS = 'Economics',
    SCIENCE = 'Science',
    EDUCATION = 'Education',
    SHOPPING = 'Shopping'
}

export interface IArticleBlock {
    id: string
    type: ArticleBlockType
    content: ArticleBlockContent
}

export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}

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
