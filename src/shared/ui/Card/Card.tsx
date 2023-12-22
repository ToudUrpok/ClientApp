import { cn } from '../../../shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { HTMLAttributes, ReactNode, memo } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    return (
        <div
            className={cn(cls.Card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    )
})
