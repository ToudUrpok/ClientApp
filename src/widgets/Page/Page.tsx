import { MutableRefObject, ReactNode, useRef } from 'react'
import { cn } from '../../shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useIntersectionObserver } from 'shared/hooks/useIntersectionObserver'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

const Page = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd
    } = props

    const pageRef = useRef() as MutableRefObject<HTMLDivElement>
    const endOfPageRef = useRef() as MutableRefObject<HTMLDivElement>

    useIntersectionObserver({
        rootRef: pageRef,
        targetRef: endOfPageRef,
        callback: onScrollEnd
    })

    return (
        <section
            className={cn(cls.Page, {}, [className])}
            ref={pageRef}
        >
            {children}
            <div ref={endOfPageRef}/>
        </section>
    )
}

export default Page
