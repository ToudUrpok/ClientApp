import { cn } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import { useAppDispatch } from 'app/hooks/redux'
import { profileActions } from 'entities/Profile'

interface ProfilePageHeaderProps {
    className?: string
    readonly?: boolean
}

export const ProfilePageHeader = ({ className, readonly }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancel = useCallback(() => {
        dispatch(profileActions.setReadonly(true))
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(profileActions.setReadonly(true))
    }, [dispatch])

    return (
        <div className={cn(cls.ProfilePageHeader, {}, [className])}>
            <Text
                title={t('profile.Profile')}
            />
            {readonly
                ? (
                    <Button
                        className={cls.Btn}
                        theme={ButtonTheme.OUTLINED}
                        onClick={onEdit}
                    >
                        {t('profile.Edit')}
                    </Button>
                )
                : (
                    <div
                        className={cls.EditBtns}
                    >
                        <Button
                            className={cls.Btn}
                            theme={ButtonTheme.OUTLINED}
                            onClick={onCancel}
                        >
                            {t('profile.Cancel')}
                        </Button>
                        <Button
                            className={cls.Btn}
                            theme={ButtonTheme.OUTLINED}
                            onClick={onSave}
                        >
                            {t('profile.Save')}
                        </Button>
                    </div>
                )
            }
        </div>
    )
}
