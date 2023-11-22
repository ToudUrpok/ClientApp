import { cn } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { IProfile, ProfileForm } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { useMemo } from 'react'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'

interface ProfileCardProps {
    className?: string
    profileData?: IProfile | undefined
    profileForm?: ProfileForm
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCountry?: (value?: Country) => void
    onChangeCity?: (value?: string) => void
    onChangeCurrency?: (value?: Currency) => void
    onChangeAvatar?: (value?: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        profileData,
        profileForm,
        isLoading,
        error,
        readonly,
        onChangeFirstname = () => {},
        onChangeLastname = () => {},
        onChangeAge = () => {},
        onChangeCountry = () => {},
        onChangeCity = () => {},
        onChangeCurrency = () => {},
        onChangeAvatar = () => {}
    } = props

    const { t } = useTranslation('profile')

    const getAlt = useMemo((): string => {
        let alt = ':)'
        if (readonly) {
            if (profileData?.firstname && profileData?.lastname) {
                alt = `${profileData?.firstname[0].toUpperCase()}${profileData?.lastname[0].toUpperCase()}`
            }
        } else {
            if (profileForm?.firstname && profileForm?.lastname) {
                alt = `${profileForm?.firstname[0].toUpperCase()}${profileForm?.lastname[0].toUpperCase()}`
            }
        }
        return alt
    }, [readonly, profileData?.firstname, profileData?.lastname, profileForm?.firstname, profileForm?.lastname])

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
                    src={readonly ? profileData?.avatar : profileForm?.avatar}
                    alt={getAlt}
                    size={150}
                />
                <Input
                    value={readonly ? profileData?.firstname ?? '' : profileForm?.firstname ?? ''}
                    placeholder={t('profile.FirstName')}
                    onChange={onChangeFirstname}
                    className={cls.inputField}
                    readOnly={readonly}
                />
                <Input
                    value={readonly ? profileData?.lastname ?? '' : profileForm?.lastname ?? ''}
                    placeholder={t('profile.LastName')}
                    onChange={onChangeLastname}
                    className={cls.inputField}
                    readOnly={readonly}
                />
                <Input
                    value={readonly ? profileData?.age ?? '' : profileForm?.age ?? ''}
                    placeholder={t('profile.Age')}
                    type='number'
                    onChange={onChangeAge}
                    className={cls.inputField}
                    readOnly={readonly}
                />
                <CountrySelect
                    className={cls.ProfileSelect}
                    selectedCountry={readonly ? profileData?.country : profileForm?.country}
                    onChange={onChangeCountry}
                    disabled={readonly}
                />
                <Input
                    value={readonly ? profileData?.city ?? '' : profileForm?.city ?? ''}
                    placeholder={t('profile.City')}
                    onChange={onChangeCity}
                    className={cls.inputField}
                    readOnly={readonly}
                />
                <CurrencySelect
                    className={cls.ProfileSelect}
                    selectedCurrency={readonly ? profileData?.currency : profileForm?.currency}
                    onChange={onChangeCurrency}
                    disabled={readonly}
                />
                <Input
                    value={readonly ? profileData?.avatar ?? '' : profileForm?.avatar ?? ''}
                    placeholder={t('profile.AvatarLink')}
                    onChange={onChangeAvatar}
                    className={cls.inputField}
                    readOnly={readonly}
                />
            </div>
        </div>
    )
}
