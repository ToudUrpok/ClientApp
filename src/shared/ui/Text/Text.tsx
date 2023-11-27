import { cn } from '../../../shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { memo } from 'react'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY
    } = props

    return (
        <div className={cn(cls.Text, {}, [className, cls[theme]])}>
            {title && <h2 className={cls.title}>{title}</h2>}
            {text && <p className={cls.textBlock}>{text}</p>}
        </div>
    )
})
