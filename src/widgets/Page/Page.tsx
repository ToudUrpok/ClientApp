import { ReactNode } from 'react'
import { cn } from '../../shared/lib/classNames/classNames'
import cls from './Page.module.scss'

interface PageProps {
    className?: string
    children: ReactNode
}

export const Page = (props: PageProps) => {
    const {
        className,
        children
    } = props

    return (
        <section className={cn(cls.Page, {}, [className])}>
            {children}
        </section>
    )
}
