import { cn } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { CSSProperties, useMemo } from 'react'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size = 100,
        alt
    } = props

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
            fontSize: size * 0.65
        }
    }, [size])

    return (
        <img
            className={cn(cls.Avatar, {}, [className])}
            alt={alt}
            src={src}
            style={styles}
        />
    )
}
