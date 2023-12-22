import { Card } from '../../../../shared/ui/Card/Card'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { memo } from 'react'
import { Skeleton } from '../../../../shared/ui/Skeleton/Skeleton'

interface ArticleListItemSkeletonProps {
    className?: string
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const {
        className
    } = props

    return (
        <div className={cn(cls.ArticleListItem, {}, [className])}>
            <Card>
                <div className={cls.Header}>
                    <Skeleton border='50%' width={30} height={30} />
                    <Skeleton className={cls.AuthorName} width={150} height={16} />
                    <Skeleton className={cls.CreationDate} width={150} height={16} />
                </div>
                <Skeleton className={cls.Title} width={250} height={24} />
                <Skeleton className={cls.Topic} width={250} height={16} />
                <Skeleton className={cls.Image} height={250} />
                <div className={cls.Footer}>
                    <Skeleton height={36} width={200} />
                </div>
            </Card>
        </div>
    )
})
