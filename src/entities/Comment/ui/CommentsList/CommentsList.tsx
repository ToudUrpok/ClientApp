import { Text } from '../../../../shared/ui/Text/Text'
import { Loader } from '../../../../shared/ui/Loader/Loader'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './CommentsList.module.scss'
import { IComment } from '../../model/types/comment'
import { CommentCard } from '../Comment/CommentCard'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

interface CommentsListProps {
    className?: string
    comments?: IComment[]
    isLoading?: boolean
}

export const CommentsList = memo((props: CommentsListProps) => {
    const {
        className,
        comments,
        isLoading
    } = props

    const { t } = useTranslation('comments')

    if (isLoading) {
        return (
            <div className={cls.LoaderWrapper}>
                <Loader />
            </div>
        )
    }

    return (
        <div className={cn(cls.CommentsListWrapper, {}, [className])}>
            <Text className={cls.Title} title={`${t('comments.Comments')} (${comments?.length ?? 0})`} />
            <div className={cls.CommentsList}>
                {comments?.length
                    ? comments.map(c => (
                        <CommentCard className={cls.CommentItem} key={c.id} comment={c} />
                    ))
                    : <Text text={t('comments.NoComments')} />
                }
            </div>
        </div>
    )
})
