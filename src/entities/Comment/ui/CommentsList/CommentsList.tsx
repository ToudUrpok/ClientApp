import { Text } from '../../../../shared/ui/Text/Text'
import { Loader } from '../../../../shared/ui/Loader/Loader'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './CommentsList.module.scss'
import { IComment } from '../../model/types/comment'
import { CommentCard } from '../Comment/CommentCard'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../../../app/hooks/redux'
import { selectUserAuthData } from '../../../../entities/User'
import { Modal } from '../../../../shared/ui/Modal/Modal'
import { EditableProfileView } from '../../../../features/EditableProfileView'

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
    const authData = useAppSelector(selectUserAuthData)
    const [profileModal, setProfileModal] = useState(false)
    const [selectedProfile, setSelectedProfile] = useState<string | undefined>(undefined)

    const handleModalProfileView = useCallback((profileId: string) => {
        setSelectedProfile(profileId)
        setProfileModal(true)
    }, [])

    if (isLoading) {
        return (
            <div className={cls.LoaderWrapper}>
                <Loader />
            </div>
        )
    }

    return (
        <div className={cn(cls.CommentsListWrapper, {}, [className])}>
            <Modal
                isOpened={profileModal}
                onClose={() => { setProfileModal(false) }}
            >
                <EditableProfileView
                    profileId={selectedProfile ?? ''}
                />
            </Modal>
            <Text className={cls.Title} title={`${t('comments.Comments')} (${comments?.length ?? 0})`} />
            <div className={cls.CommentsList}>
                {comments?.length
                    ? comments.map(c => (
                        <CommentCard
                            className={cls.CommentItem}
                            key={c.id}
                            comment={c}
                            isAuthorViewable={authData?.id !== c.user.id}
                            viewAuthorProfile={handleModalProfileView}
                        />
                    ))
                    : <Text text={t('comments.NoComments')} />
                }
            </div>
        </div>
    )
})
