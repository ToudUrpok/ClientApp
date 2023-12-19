import { IImageContent } from '../../../model/types/article'
import { cn } from '../../../../../shared/lib/classNames/classNames'
import cls from './ImageContent.module.scss'
import { memo } from 'react'
import { Text } from '../../../../../shared/ui/Text/Text'

interface ImageContentProps {
    className?: string
    content: IImageContent
}

export const ImageContent = memo((props: ImageContentProps) => {
    const {
        className,
        content
    } = props

    return (
        <div className={cn(cls.ImageContent, {}, [className])}>
            <img className={cls.Image} src={content.src} alt={content.title} />
            {content.title && (
                <Text className={cls.Title} text={content.title} />
            )}
        </div>
    )
})
