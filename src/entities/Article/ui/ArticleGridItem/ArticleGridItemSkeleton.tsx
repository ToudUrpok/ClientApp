import { Skeleton } from '../../../../shared/ui/Skeleton/Skeleton'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticleGridItem.module.scss'
import { memo } from 'react'
import { Card } from '../../../../shared/ui/Card/Card'

interface ArticleGridItemSkeletonProps {
    className?: string
}

export const ArticleGridItemSkeleton = memo((props: ArticleGridItemSkeletonProps) => {
    const {
        className
    } = props

    return (
        <div className={cn(cls.ArticleGridItem, {}, [className])}>
            <Card>
                <div className={cls.ImageWrapper}>
                    <Skeleton className={cls.Image} width={200} height={200} />
                </div>
                <div className={cls.Info}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton className={cls.Title} width={150} height={16} />
            </Card>
        </div>
    )
})
