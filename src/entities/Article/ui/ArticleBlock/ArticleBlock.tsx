import { TextContent } from '../ArticleBlockContents/TextContent/TextContent'
import { CodeContent } from '../ArticleBlockContents/CodeContent/CodeContent'
import { ImageContent } from '../ArticleBlockContents/ImageContent/ImageContent'
import {
    IArticleBlock,
    ArticleBlockType,
    ITextContent,
    ICodeContent,
    IImageContent
} from '../../model/types/article'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticleBlock.module.scss'
import { memo } from 'react'

const renderContent = (block: IArticleBlock) => {
    switch (block.type) {
        case ArticleBlockType.TEXT:
            return <TextContent content={block.content as ITextContent} />
        case ArticleBlockType.CODE:
            return <CodeContent content={block.content as ICodeContent} />
        case ArticleBlockType.IMAGE:
            return <ImageContent content={block.content as IImageContent} />
        default:
            return null
    }
}

interface ArticleBlockProps {
    className?: string
    block: IArticleBlock
}

export const ArticleBlock = memo((props: ArticleBlockProps) => {
    const {
        className,
        block
    } = props

    return (
        <div className={cn(cls.ArticleBlock, {}, [className])}>
            {renderContent(block)}
        </div>
    )
})
