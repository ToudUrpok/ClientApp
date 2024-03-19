import { cn } from '../../../shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { HTMLAttributes, ReactNode, memo } from 'react'

export type CardTheme = 'normal' | 'outlined' | 'contrast'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
    theme?: CardTheme
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = 'normal',
        ...otherProps
    } = props

    return (
        <div
            className={cn(cls.Card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    )
})
