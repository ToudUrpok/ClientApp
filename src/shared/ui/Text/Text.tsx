import { cn } from '../../../shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { memo } from 'react'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    size?: TextSize
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        size = TextSize.M
    } = props

    return (
        <div className={cn(cls.Text, {}, [className, cls[theme], cls[size]])}>
            {title && <h2 className={cls.title}>{title}</h2>}
            {text && <p className={cls.textBlock}>{text}</p>}
        </div>
    )
})
