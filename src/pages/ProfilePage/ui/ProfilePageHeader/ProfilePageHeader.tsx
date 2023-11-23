import { cn } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

interface ProfilePageHeaderProps {
    className?: string
    editMode: boolean
    onEdit: () => void
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
        editMode,
        onEdit
    } = props
    const { t } = useTranslation('profile')

    return (
        <div className={cn(cls.ProfilePageHeader, {}, [className])}>
            <Text
                title={t('profile.Profile')}
            />
            {!editMode && (
                <Button
                    className={cls.Btn}
                    theme={ButtonTheme.OUTLINED}
                    onClick={onEdit}
                >
                    {t('profile.Edit')}
                </Button>
            )}
        </div>
    )
}
