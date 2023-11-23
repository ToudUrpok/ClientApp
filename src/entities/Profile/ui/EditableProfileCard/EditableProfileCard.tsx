import { cn } from 'shared/lib/classNames/classNames'
import cls from './EditableProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { IProfile } from '../../model/types/profile'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { memo, useMemo } from 'react'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { generateAvatarAlt } from '../../model/helpers/avatarHelper'

interface IProfileForm {
    firstname?: string
    lastname?: string
    age?: number
    country?: Country
    city?: string
    currency?: Currency
    avatar?: string
}

interface EditableProfileCardProps {
    className?: string
    profileData: IProfile
    onSaveEditing: (profile: IProfile) => void
    onCancelEditing: () => void
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {
        className,
        profileData,
        onSaveEditing,
        onCancelEditing
    } = props

    const { t } = useTranslation('profile')
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<IProfileForm>({
        defaultValues: {
            firstname: profileData.firstname,
            lastname: profileData.lastname,
            age: profileData.age,
            country: profileData.country,
            city: profileData.city,
            currency: profileData.currency,
            avatar: profileData.avatar
        }
    })
    const onSubmit: SubmitHandler<IProfileForm> = (data) => {
        const editedProfileData: IProfile = {
            ...profileData,
            firstname: data.firstname,
            lastname: data.lastname,
            age: data.age,
            country: data.country,
            city: data.city,
            currency: data.currency,
            avatar: data.avatar
        }
        onSaveEditing(editedProfileData)
    }

    const watchAvatar = watch('avatar')
    const watchFirstname = watch('firstname')
    const watchLastname = watch('lastname')

    const altValue = useMemo((): string => {
        return generateAvatarAlt(watchFirstname, watchLastname)
    }, [watchFirstname, watchLastname])

    return (
        <div className={cn(cls.EditableProfileCard, {}, [className])}>
            <Avatar
                className={cls.Avatar}
                src={watchAvatar}
                alt={altValue}
                size={150}
            />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className={cls.Form}
            >
                <Controller
                    name='firstname'
                    control={control}
                    rules={{ required: true }}
                    aria-invalid={errors.firstname ? 'true' : 'false'}
                    render={({ field }) =>
                        <Input
                            placeholder={t('profile.FirstName')}
                            className={cls.InputField}
                            maxLength={20}
                            {...field}
                        />
                    }
                />
                {errors.firstname?.type === 'required' && (
                    <Text theme={TextTheme.ERROR} text={t('profile.ValidationErrorRequired', { fieldName: t('profile.FirstName') })} />
                )}
                <Controller
                    name='lastname'
                    control={control}
                    rules={{ required: true }}
                    aria-invalid={errors.lastname ? 'true' : 'false'}
                    render={({ field }) =>
                        <Input
                            placeholder={t('profile.LastName')}
                            className={cls.InputField}
                            maxLength={20}
                            {...field}
                        />
                    }
                />
                {errors.lastname?.type === 'required' && (
                    <Text theme={TextTheme.ERROR} text={t('profile.ValidationErrorRequired', { fieldName: t('profile.LastName') })} />
                )}
                <Controller
                    name='age'
                    control={control}
                    rules={{ required: true, min: 18, max: 150 }}
                    aria-invalid={errors.age ? 'true' : 'false'}
                    render={({ field }) =>
                        <Input
                            placeholder={t('profile.Age')}
                            type='number'
                            className={cls.InputField}
                            {...field}
                        />
                    }
                />
                {errors.age?.type === 'required' && (
                    <Text theme={TextTheme.ERROR} text={t('profile.ValidationErrorRequired', { fieldName: t('profile.Age') })} />
                )}
                {(errors.age?.type === 'min' || errors.age?.type === 'max') && (
                    <Text theme={TextTheme.ERROR} text={t('profile.ValidationErrorInvalidRangedInteger', { fieldName: t('profile.Age'), min: 18, max: 150 })} />
                )}
                <Controller
                    name='country'
                    control={control}
                    render={({ field }) =>
                        <CountrySelect
                            className={cls.ProfileSelect}
                            {...field}
                        />
                    }
                />
                <Controller
                    name='city'
                    control={control}
                    render={({ field }) =>
                        <Input
                            placeholder={t('profile.City')}
                            className={cls.InputField}
                            {...field}
                        />
                    }
                />
                <Controller
                    name='currency'
                    control={control}
                    render={({ field }) =>
                        <CurrencySelect
                            className={cls.ProfileSelect}
                            {...field}
                        />
                    }
                />
                <Controller
                    name='avatar'
                    control={control}
                    render={({ field }) =>
                        <Input
                            placeholder={t('profile.AvatarLink')}
                            className={cls.InputField}
                            {...field}
                        />
                    }
                />
                <div className={cls.EditBtns} >
                    <Button
                        className={cls.Btn}
                        theme={ButtonTheme.OUTLINED}
                        type='submit'
                    >
                        {t('profile.Save')}
                    </Button>
                    <Button
                        className={cls.Btn}
                        theme={ButtonTheme.OUTLINED}
                        onClick={onCancelEditing}
                    >
                        {t('profile.Cancel')}
                    </Button>
                </div>
            </form>
        </div>
    )
})
