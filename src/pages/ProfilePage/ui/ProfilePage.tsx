import cls from './ProfilePage.module.scss'
import { useAppDispatch, useAppSelector } from 'app/hooks/redux'
import {
    ProfileCard,
    ProfileForm,
    fetchProfileData,
    profileActions,
    profileReducer,
    selectProfileData,
    selectProfileError,
    selectProfileIsLoading
} from 'entities/Profile'
import { IUser } from 'entities/User'
import { memo, useCallback, useEffect, useState } from 'react'
import { USER_AUTH_TOKEN } from 'shared/const/localStorage'
import { ReducersList, useDynamicReducer } from 'shared/hooks/useDynamicReducer'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducersToLoad: ReducersList = {
    profile: profileReducer
}

const ProfilePage = memo(() => {
    useDynamicReducer(reducersToLoad, true)
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(selectProfileIsLoading)
    const error = useAppSelector(selectProfileError)
    const profileData = useAppSelector(selectProfileData)

    const [readonly, setReadonly] = useState<boolean>(true)
    const [isEdited, setIsEdited] = useState<boolean>(false)
    const [profileForm, setProfileForm] = useState<ProfileForm>({
        firstname: profileData?.firstname,
        lastname: profileData?.lastname
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(USER_AUTH_TOKEN) ?? '') as IUser
        dispatch(fetchProfileData(user.id))
    }, [dispatch])

    const refreshProfileForm = useCallback(() => {
        setProfileForm({
            firstname: profileData?.firstname,
            lastname: profileData?.lastname
        })
    }, [profileData])

    const onEnableEditMode = useCallback(() => {
        refreshProfileForm()
        setIsEdited(false)
        setReadonly(false)
    }, [refreshProfileForm])

    const onUpdateProfileData = useCallback(() => {
        if (profileData) {
            dispatch(profileActions.updateProfile({
                ...profileData,
                firstname: profileForm.firstname,
                lastname: profileForm.lastname
            }))
        }
        refreshProfileForm()
        setReadonly(true)
    }, [dispatch, profileData, profileForm, refreshProfileForm])

    const onCancelChanges = useCallback(() => {
        refreshProfileForm()
        setReadonly(true)
    }, [refreshProfileForm])

    const areChangesMade = useCallback((): boolean => {
        return profileForm.firstname === profileData?.firstname ||
               profileForm.lastname === profileData?.lastname
    }, [profileData, profileForm])

    const onChangeFirstname = useCallback((value?: string) => {
        setProfileForm({ ...profileForm, firstname: value })
        setIsEdited(areChangesMade())
    }, [profileForm, areChangesMade])

    const onChangeLastname = useCallback((value?: string) => {
        setProfileForm({ ...profileForm, lastname: value })
        setIsEdited(areChangesMade())
    }, [profileForm, areChangesMade])

    return (
        <div className={cls.ProfilePage}>
            <ProfilePageHeader
                readonly={readonly}
                onEdit={onEnableEditMode}
                isSaveEnabled={isEdited}
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
            />
        </div>
    )
})

export default ProfilePage
