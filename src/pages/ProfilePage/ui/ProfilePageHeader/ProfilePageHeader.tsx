import { cn } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

interface ProfilePageHeaderProps {
    className?: string
    readonly: boolean
    onEdit: () => void
    onSave: () => void
    onCancel: () => void
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
        readonly,
        onEdit,
        onSave,
        onCancel
    } = props
    const { t } = useTranslation('profile')

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
