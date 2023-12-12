import { ITextContent } from '../../../model/types/article'
import { cn } from '../../../../../shared/lib/classNames/classNames'
import cls from './TextContent.module.scss'
import { memo } from 'react'
import { Text } from '../../../../../shared/ui/Text/Text'

interface TextContentProps {
    className?: string
    content: ITextContent
}

export const TextContent = memo((props: TextContentProps) => {
    const {
        className,
        content
    } = props

    return (
        <div className={cn(cls.TextContent, {}, [className])}>
            {content.title && (
                <Text className={cls.Title} title={content.title} />
            )}
            {content.paragraphs.map((parph, index) => (
                <Text key={index} className={cls.Paragraph} text={parph} />
            ))}
        </div>
    )
})
