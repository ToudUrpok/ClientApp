export interface IArticle {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    blocks: ArticleBlock[]
}

export enum ArticleType {
    IT = 'IT',
    FOOD = 'Food',
    ECONOMICS = 'Economics',
    SCIENCE = 'Science',
    EDUCATION = 'Education',
    SHOPPING = 'Shopping'
}

export type ArticleBlock = IArticleTextBlock | IArticleCodeBlock | IArticleImageBlock

export interface IArticleTextBlock extends IArticleBlockBase {
    type: ArticleBlockType.TEXT
    content: ITextContent
}

export interface IArticleCodeBlock extends IArticleBlockBase {
    type: ArticleBlockType.CODE
    content: ICodeContent
}

export interface IArticleImageBlock extends IArticleBlockBase {
    type: ArticleBlockType.IMAGE
    content: IImageContent
}

export interface IArticleBlockBase {
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
