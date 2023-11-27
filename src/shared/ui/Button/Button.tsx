import { cn } from '../../../shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, ReactNode, memo } from 'react'

export enum ButtonTheme {
    PLAIN = 'plain',
    OUTLINED = 'outlined',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINED,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props

    const attributes: Record<string, boolean | undefined> = {
        [cls.square]: square,
        [cls.disabled]: disabled
    }

    return (
        <button
            className={cn(cls.Button, attributes, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            { children }
        </button>
    )
})
