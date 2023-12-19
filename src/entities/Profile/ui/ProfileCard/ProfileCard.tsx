import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from '../../../../shared/ui/Input/Input'
import { IProfile } from '../../model/types/profile'
import { Avatar } from '../../../../shared/ui/Avatar/Avatar'
import { CurrencySelect } from '../../../../entities/Currency'
import { CountrySelect } from '../../../../entities/Country'
import { generateAvatarAlt } from '../../../../shared/lib/helpers/avatarHelper'

interface ProfileCardProps {
    className?: string
    profileData?: IProfile
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        profileData
    } = props

    const { t } = useTranslation('profile')

    return (
        <div className={cn(cls.ProfileCard, {}, [className])}>
            <Avatar
                src={profileData?.avatar}
                alt={generateAvatarAlt(profileData?.firstname, profileData?.lastname)}
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
    )
}
