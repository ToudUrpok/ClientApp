import { cn } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

interface ProfilePageHeaderProps {
    className?: string
    readonly: boolean
    onEdit: () => void
    isSaveEnabled: boolean
    onSave: () => void
    onCancel: () => void
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
        readonly,
        onEdit,
        isSaveEnabled,
        onSave,
        onCancel
    } = props
    const { t } = useTranslation('profile')

    const handleSaveClick = () => {
        if (isSaveEnabled) {
            onSave()
        }
    }

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
                            disabled={!isSaveEnabled}
                            onClick={handleSaveClick}
                        >
                            {t('profile.Save')}
                        </Button>
                    </div>
                )
            }
        </div>
    )
}
