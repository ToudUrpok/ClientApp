import cls from './ProfilePage.module.scss'
import { useAppDispatch, useAppSelector } from 'app/hooks/redux'
import {
    IProfile,
    ProfileCard,
    ProfileForm,
    ProfileValidationError,
    fetchProfileData,
    profileReducer,
    selectProfileData,
    selectProfileError,
    selectProfileIsLoading,
    updateProfileData,
    validateProfileData
} from 'entities/Profile'
import { IUser } from 'entities/User'
import { memo, useCallback, useEffect, useState } from 'react'
import { USER_AUTH_TOKEN } from 'shared/const/localStorage'
import { ReducersList, useDynamicReducer } from 'shared/hooks/useDynamicReducer'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

const reducersToLoad: ReducersList = {
    profile: profileReducer
}

const ProfilePage = memo(() => {
    useDynamicReducer(reducersToLoad, true)
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(selectProfileIsLoading)
    const error = useAppSelector(selectProfileError)
    const profileData = useAppSelector(selectProfileData)

    const [readonly, setReadonly] = useState<boolean>(true)
    const [profileForm, setProfileForm] = useState<ProfileForm | undefined>(undefined)
    const [validationErrors, setValidationErrors] = useState<ProfileValidationError[] | undefined>(undefined)

    const validationErrorsMessages = {
        [ProfileValidationError.EMPTY_FIRSTNAME]: t('profile.ValidationErrorEmptyFirstname'),
        [ProfileValidationError.EMPTY_LASTNAME]: t('profile.ValidationErrorEmptyLastname'),
        [ProfileValidationError.EMPTY_AGE]: t('profile.ValidationErrorEmptyAge'),
        [ProfileValidationError.INVALID_AGE]: t('profile.ValidationErrorInvalidAge'),
        [ProfileValidationError.EMPTY_COUNTRY]: t('profile.ValidationErrorEmptyCountry')
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(USER_AUTH_TOKEN) ?? '') as IUser
        dispatch(fetchProfileData(user.id))
    }, [dispatch])

    const refreshProfileForm = useCallback(() => {
        setProfileForm({
            firstname: profileData?.firstname,
            lastname: profileData?.lastname,
            age: profileData?.age,
            country: profileData?.country,
            city: profileData?.city,
            currency: profileData?.currency,
            avatar: profileData?.avatar
        })
    }, [profileData])

    const enableEditMode = useCallback(() => {
        refreshProfileForm()
        setReadonly(false)
    }, [refreshProfileForm])

    const disableEditMode = useCallback(() => {
        if (validationErrors) {
            setValidationErrors(undefined)
        }
        refreshProfileForm()
        setReadonly(true)
    }, [refreshProfileForm, validationErrors])

    const isEdited = useCallback((): boolean => {
        const edited = profileForm?.firstname !== profileData?.firstname ||
                       profileForm?.lastname !== profileData?.lastname ||
                       profileForm?.age !== profileData?.age ||
                       profileForm?.country !== profileData?.country ||
                       profileForm?.city !== profileData?.city ||
                       profileForm?.currency !== profileData?.currency ||
                       profileForm?.avatar !== profileData?.avatar
        return edited
    }, [profileData, profileForm])

    const onUpdateProfileData = useCallback(async () => {
        if (!profileData || !profileForm) {
            return
        }

        const updatedProfile: IProfile = {
            ...profileData,
            firstname: profileForm.firstname,
            lastname: profileForm.lastname,
            age: profileForm.age,
            country: profileForm.country,
            city: profileForm.city,
            currency: profileForm.currency,
            avatar: profileForm.avatar
        }

        const errors = validateProfileData(updatedProfile)
        if (!errors || errors.length === 0) {
            if (isEdited()) {
                await dispatch(updateProfileData(updatedProfile))
            }

            disableEditMode()
        } else {
            setValidationErrors(errors)
        }
    }, [isEdited, dispatch, profileData, profileForm, disableEditMode])

    const onCancelChanges = useCallback(() => {
        disableEditMode()
    }, [disableEditMode])

    const onChangeFirstname = useCallback((value?: string) => {
        setProfileForm({ ...profileForm, firstname: value })
    }, [profileForm])

    const onChangeLastname = useCallback((value?: string) => {
        setProfileForm({ ...profileForm, lastname: value })
    }, [profileForm])

    const onChangeAge = useCallback((value?: string) => {
        setProfileForm({ ...profileForm, age: Number(value) })
    }, [profileForm])

    const onChangeCountry = useCallback((value?: Country) => {
        setProfileForm({ ...profileForm, country: value })
    }, [profileForm])

    const onChangeCity = useCallback((value?: string) => {
        setProfileForm({ ...profileForm, city: value })
    }, [profileForm])

    const onChangeCurrency = useCallback((value?: Currency) => {
        setProfileForm({ ...profileForm, currency: value })
    }, [profileForm])

    const onChangeAvatar = useCallback((value?: string) => {
        setProfileForm({ ...profileForm, avatar: value })
    }, [profileForm])

    return (
        <div className={cls.ProfilePage}>
            <ProfilePageHeader
                readonly={readonly}
                onEdit={enableEditMode}
                onSave={onUpdateProfileData}
                onCancel={onCancelChanges}
            />
            <ProfileCard
                profileData={profileData}
                profileForm={profileForm}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCountry={onChangeCountry}
                onChangeCity={onChangeCity}
                onChangeCurrency={onChangeCurrency}
                onChangeAvatar={onChangeAvatar}
            />
            {validationErrors?.length && validationErrors.map(err => (
                <Text key={err} theme={TextTheme.ERROR} text={validationErrorsMessages[err]} />
            ))}
        </div>
    )
})

export default ProfilePage
