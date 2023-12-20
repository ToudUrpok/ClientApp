import { Text } from '../../../../shared/ui/Text/Text'
import { generateAvatarAlt } from '../../../../shared/lib/helpers/avatarHelper'
import { Avatar } from '../../../../shared/ui/Avatar/Avatar'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { IComment } from '../../model/types/comment'
import { memo } from 'react'

interface CommentCardProps {
    className?: string
    comment: IComment
    isAuthorViewable?: boolean
    viewAuthorProfile?: (profileId: string) => void
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isAuthorViewable = false,
        viewAuthorProfile
    } = props

    const handleCardHeaderClick = () => {
        if (isAuthorViewable) {
            viewAuthorProfile?.(comment.user.id)
        }
    }

    return (
        <div className={cn(cls.CommentCard, {}, [className])}>
            <div
                className={cls.Header}
                onClick={handleCardHeaderClick}
            >
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
