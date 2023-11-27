import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextTheme } from '../../../../shared/ui/Text/Text'
import { Input } from '../../../../shared/ui/Input/Input'
import { IProfile } from '../../model/types/profile'
import { Loader } from '../../../../shared/ui/Loader/Loader'
import { Avatar } from '../../../../shared/ui/Avatar/Avatar'
import { useMemo } from 'react'
import { CurrencySelect } from '../../../../entities/Currency'
import { CountrySelect } from '../../../../entities/Country'
import { generateAvatarAlt } from '../../model/helpers/avatarHelper'

interface ProfileCardProps {
    className?: string
    profileData?: IProfile | undefined
    isLoading?: boolean
    error?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        profileData,
        isLoading,
        error
    } = props

    const { t } = useTranslation('profile')

    const altValue = useMemo((): string => {
        return generateAvatarAlt(profileData?.firstname, profileData?.lastname)
    }, [profileData?.firstname, profileData?.lastname])

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
                <Avatar
                    src={profileData?.avatar}
                    alt={altValue}
                    size={150}
                />
                <Input
                    value={profileData?.firstname ?? ''}
                    placeholder={t('profile.FirstName')}
                    className={cls.inputField}
                    readOnly={true}
                />
                <Input
                    value={profileData?.lastname ?? ''}
                    placeholder={t('profile.LastName')}
                    className={cls.inputField}
                    readOnly={true}
                />
                <Input
                    value={profileData?.age ?? ''}
                    placeholder={t('profile.Age')}
                    type='number'
                    className={cls.inputField}
                    readOnly={true}
                />
                <CountrySelect
                    className={cls.ProfileSelect}
                    value={profileData?.country}
                    disabled={true}
                />
                <Input
                    value={profileData?.city ?? ''}
                    placeholder={t('profile.City')}
                    className={cls.inputField}
                    readOnly={true}
                />
                <CurrencySelect
                    className={cls.ProfileSelect}
                    value={profileData?.currency}
                    disabled={true}
                />
                <Input
                    value={profileData?.avatar ?? ''}
                    placeholder={t('profile.AvatarLink')}
                    className={cls.inputField}
                    readOnly={true}
                />
            </div>
        </div>
    )
}
