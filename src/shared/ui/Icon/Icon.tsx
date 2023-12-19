import { cn } from '../../../shared/lib/classNames/classNames'
import cls from './Icon.module.scss'
import { memo } from 'react'

interface IconProps {
    className?: string
    Svg: React.FC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg
    } = props

    return (
        <Svg className={cn(cls.Icon, {}, [className])} />
    )
})
