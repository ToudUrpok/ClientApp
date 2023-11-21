import { cn } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { IProfile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'

interface ProfileCardProps {
    className?: string
    profileData?: IProfile
    isLoading?: boolean
    error?: string
    readonly?: boolean
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        profileData,
        isLoading,
        error,
        readonly
    } = props

    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <div className={cn(cls.ProfileCard, {}, [className, cls.Loading])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={cn(cls.ProfileCard, {}, [className, cls.Error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('profile.ProfileDataLoadingError')}
                    text={error}
                />
            </div>
        )
    }

    return (
        <div className={cn(cls.ProfileCard, {}, [className])}>
            <div className={cls.data} >
                <Input
                    value={profileData?.firstname ?? ''}
                    placeholder={t('profile.FirstName')}
                    onChange={() => {}}
                    className={cls.inputField}
                    readOnly={readonly}
                />
                <Input
                    value={profileData?.lastname ?? ''}
                    placeholder={t('profile.LastName')}
                    onChange={() => {}}
                    className={cls.inputField}
                    readOnly={readonly}
                />
            </div>
        </div>
    )
}
