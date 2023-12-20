import { ReducersList, useDynamicReducer } from '../../../../shared/hooks/useDynamicReducer'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks/redux'
import { selectUserAuthData, UserRole } from '../../../../entities/User'
import {
    IProfile,
    ProfileCard,
    EditableProfileCard,
    fetchProfileData,
    profileReducer,
    selectProfileData,
    selectProfileError,
    selectProfileIsLoading,
    updateProfileData
} from '../../../../entities/Profile'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './EditableProfileView.module.scss'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Button } from '../../../../shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Skeleton } from '../../../../shared/ui/Skeleton/Skeleton'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface EditableProfileViewProps {
    className?: string
    profileId: string
    editModeRequested?: boolean
}

const reducersToLoad: ReducersList = {
    profile: profileReducer
}

export const EditableProfileView = memo((props: EditableProfileViewProps) => {
    const {
        className,
        profileId,
        editModeRequested = false
    } = props

    useDynamicReducer(reducersToLoad, true)
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(selectProfileIsLoading)
    const error = useAppSelector(selectProfileError)
    const profileData = useAppSelector(selectProfileData)
    const authData = useAppSelector(selectUserAuthData)

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData(profileId))
        }
    }, [dispatch, profileId])

    const canEdit = useMemo(() => {
        return (authData?.id === profileId) || (authData?.role === UserRole.ADMIN)
    }, [authData?.id, profileId, authData?.role])
    const [editMode, setEditMode] = useState<boolean>(canEdit && editModeRequested)

    const onUpdateProfileData = useCallback(async (editedProfile: IProfile) => {
        if (__PROJECT__ !== 'storybook') {
            await dispatch(updateProfileData(editedProfile))
        }
        setEditMode(false)
    }, [dispatch])

    let content
    if (isLoading) {
        content = (
            <div className={cls.SkeletonCard}>
                <Skeleton width={150} height={150} border='50%' />
                <Skeleton className={cls.Field} width={300} height={38} />
                <Skeleton className={cls.Field} width={300} height={38} />
                <Skeleton className={cls.Field} width={300} height={38} />
                <Skeleton className={cls.Field} width={300} height={38} />
                <Skeleton className={cls.Field} width={300} height={38} />
                <Skeleton className={cls.Field} width={300} height={38} />
                <Skeleton className={cls.Field} width={300} height={38} />
            </div>
        )
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                title={t('profile.ProfileDataLoadingError')}
                text={error}
            />
        )
    } else {
        content = (
            <>
                <div className={cls.Header}>
                    {(canEdit && !editMode) && (
                        <Button
                            className={cls.HeaderBtn}
                            onClick={() => { setEditMode(canEdit) }}
                        >
                            {t('profile.Edit')}
                        </Button>
                    )}
                </div>
                {canEdit && editMode
                    ? profileData && <EditableProfileCard
                        profileData={profileData}
                        onSaveEditing={onUpdateProfileData}
                        onCancelEditing={() => { setEditMode(false) }}
                    />
                    : <ProfileCard
                        profileData={profileData}
                    />
                }
            </>
        )
    }

    return (
        <div className={cn(cls.EditableProfileView, {}, [className])}>
            {content}
        </div>
    )
})
