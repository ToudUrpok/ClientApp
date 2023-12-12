import { TextContent } from '../ArticleBlockContents/TextContent/TextContent'
import { CodeContent } from '../ArticleBlockContents/CodeContent/CodeContent'
import { ImageContent } from '../ArticleBlockContents/ImageContent/ImageContent'
import {
    ArticleBlock as TArticleBlock,
    ArticleBlockType
} from '../../model/types/article'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticleBlock.module.scss'
import { memo } from 'react'

const renderContent = (block: TArticleBlock) => {
    switch (block.type) {
        case ArticleBlockType.TEXT:
            return <TextContent content={block.content} />
        case ArticleBlockType.CODE:
            return <CodeContent content={block.content} />
        case ArticleBlockType.IMAGE:
            return <ImageContent content={block.content} />
        default:
            return null
    }
}

interface ArticleBlockProps {
    className?: string
    block: TArticleBlock
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
