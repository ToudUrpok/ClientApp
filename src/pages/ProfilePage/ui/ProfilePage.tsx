import cls from './ProfilePage.module.scss'
import { useAppDispatch, useAppSelector } from '../../../app/hooks/redux'
import {
    IProfile,
    ProfileCard,
    EditableProfileCard,
    fetchProfileData,
    profileReducer,
    selectProfileData,
    selectProfileError,
    selectProfileIsLoading,
    updateProfileData
} from '../../../entities/Profile'
import { memo, useCallback, useState } from 'react'
import { ReducersList, useDynamicReducer } from '../../../shared/hooks/useDynamicReducer'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { useInitialEffect } from '../../../shared/hooks/useInitialEffect'
import { selectUserAuthData } from '../../../entities/User'

const reducersToLoad: ReducersList = {
    profile: profileReducer
}

const ProfilePage = () => {
    useDynamicReducer(reducersToLoad, true)
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(selectProfileIsLoading)
    const error = useAppSelector(selectProfileError)
    const profileData = useAppSelector(selectProfileData)
    const authData = useAppSelector(selectUserAuthData)

    const [editMode, setEditMode] = useState<boolean>(false)

    useInitialEffect(() => {
        if (authData?.id) {
            dispatch(fetchProfileData(authData.id))
        }
    })

    const isEdited = useCallback((editedProfile: IProfile): boolean => {
        const edited = editedProfile.firstname !== profileData?.firstname ||
                       editedProfile.lastname !== profileData?.lastname ||
                       editedProfile.age !== profileData?.age ||
                       editedProfile.country !== profileData?.country ||
                       editedProfile.city !== profileData?.city ||
                       editedProfile.currency !== profileData?.currency ||
                       editedProfile.avatar !== profileData?.avatar
        return edited
    }, [profileData])

    const onUpdateProfileData = useCallback(async (editedProfile: IProfile) => {
        if (isEdited(editedProfile)) {
            if (__PROJECT__ !== 'storybook') {
                await dispatch(updateProfileData(editedProfile))
            }
        }

        setEditMode(false)
    }, [dispatch, isEdited])

    const onCancelChanges = useCallback(() => {
        setEditMode(false)
    }, [])

    return (
        <div className={cls.ProfilePage}>
            <ProfilePageHeader
                editMode={editMode}
                onEdit={() => { setEditMode(true) }}
            />
            {!editMode
                ? <ProfileCard
                    profileData={profileData}
                    isLoading={isLoading}
                    error={error}
                />
                : profileData && <EditableProfileCard
                    profileData={profileData}
                    onSaveEditing={onUpdateProfileData}
                    onCancelEditing={onCancelChanges}
                />
            }
        </div>
    )
}

export default memo(ProfilePage)
