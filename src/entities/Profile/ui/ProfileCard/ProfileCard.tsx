import { cn } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from 'app/hooks/redux'
import { selectProfileData } from 'entities/Profile/model/slice/profileSlice'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile')
    // const isLoading = useAppSelector(selectProfileIsLoading)
    // const error = useAppSelector(selectProfileError)
    const profileData = useAppSelector(selectProfileData)

    return (
        <div className={cn(cls.ProfileCard, {}, [className])}>
            <Text title={profileData?.username ?? t('profile.Profile')} />
            <div className={cls.data} >
                <Input
                    value={profileData?.firstname ?? ''}
                    placeholder={t('profile.FirstName')}
                    onChange={() => {}}
                    className={cls.inputField}
                />
                <Input
                    value={profileData?.lastname ?? ''}
                    placeholder={t('profile.LastName')}
                    onChange={() => {}}
                    className={cls.inputField}
                />
            </div>
            <Button
                theme={ButtonTheme.OUTLINED}
            >
                {t('profile.Edit')}
            </Button>
        </div>
    )
}
