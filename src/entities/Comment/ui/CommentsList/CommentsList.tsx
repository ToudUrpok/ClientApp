import { IComment } from '../../model/types/comment'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './CommentsList.module.scss'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from '../../../../shared/ui/Text/Text'
import { CommentCard } from '../Comment/CommentCard'
import { Loader, LoaderSize } from '../../../../shared/ui/Loader/Loader'

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

    const { t } = useTranslation('articles')

    if (isLoading) {
        return (
            <div className={cls.LoaderWrapper}>
                <Loader size={LoaderSize.S} />
            </div>
        )
    }

    return (
        <div className={cn(cls.CommentsList, {}, [className])}>
            {comments?.length
                ? comments.map(c => (
                    <CommentCard className={cls.CommentItem} key={c.id} comment={c} />
                ))
                : <Text text={t('articles.NoComments')} />
            }
        </div>
    )
})
