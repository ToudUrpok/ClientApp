import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { cn } from '../../../shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useIntersectionObserver } from '../../../shared/hooks/useIntersectionObserver'
import { useAppDispatch } from '../../../app/hooks/redux'
import {
    pagesActions,
    selectPageScrollPositionByPath
} from '..'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from '../../../shared/hooks/useInitialEffect'
import { useSelector } from 'react-redux'
import { StateSchema } from '../../../app/store/StateSchema'
import { useThrottle } from '../../../shared/hooks/useThrottle'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
    restoreScrollPosition?: boolean
}

export const Page = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
        restoreScrollPosition = false
    } = props

    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector(
        (state: StateSchema) => selectPageScrollPositionByPath(state, pathname)
    )
    const pageRef = useRef() as MutableRefObject<HTMLDivElement>
    const endOfPageRef = useRef() as MutableRefObject<HTMLDivElement>

    useIntersectionObserver({
        rootRef: pageRef,
        targetRef: endOfPageRef,
        callback: onScrollEnd
    })

    useInitialEffect(() => {
        if (restoreScrollPosition) {
            pageRef.current.scrollTop = scrollPosition
        }
    })

    const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        if (restoreScrollPosition) {
            dispatch(pagesActions.setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop
            }))
        }
    }, 500)

    return (
        <section
            className={cn(cls.Page, {}, [className])}
            ref={pageRef}
            onScroll={handleScroll}
        >
            {children}
            <div ref={endOfPageRef}/>
        </section>
    )
}
