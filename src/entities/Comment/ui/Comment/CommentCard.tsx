import { Avatar } from '../../../../shared/ui/Avatar/Avatar'
import { IComment } from '../../../../entities/Comment/model/types/comment'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { memo } from 'react'
import { Text } from '../../../../shared/ui/Text/Text'
import { generateAvatarAlt } from '../../../../shared/lib/helpers/avatarHelper'

interface CommentCardProps {
    className?: string
    comment: IComment
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment
    } = props

    return (
        <div className={cn(cls.CommentCard, {}, [className])}>
            <div className={cls.Header}>
                <Avatar
                    className={cls.HeaderAvatar}
                    src={comment.user.avatar}
                    alt={generateAvatarAlt(comment.user.username)}
                    size={40}
                />
                <Text title={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    )
})
