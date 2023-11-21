import cls from './ProfilePage.module.scss'
import { useAppDispatch, useAppSelector } from 'app/hooks/redux'
import { ProfileCard, fetchProfileData, /* profileActions, */ profileReducer, selectProfileData, selectProfileError, selectProfileIsLoading, selectProfileReadonly } from 'entities/Profile'
import { IUser } from 'entities/User'
import { memo, /* useCallback, */ useEffect/* , useState */ } from 'react'
import { USER_AUTH_TOKEN } from 'shared/const/localStorage'
import { ReducersList, useDynamicReducer } from 'shared/hooks/useDynamicReducer'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducersToLoad: ReducersList = {
    profile: profileReducer
}

/* interface ProfileForm {
    firstname: string | undefined
    lastname: string | undefined
} */

const ProfilePage = memo(() => {
    useDynamicReducer(reducersToLoad, true)
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(selectProfileIsLoading)
    const error = useAppSelector(selectProfileError)
    const profileData = useAppSelector(selectProfileData)
    const readonly = useAppSelector(selectProfileReadonly)
    /* const [profileForm, setProfileForm] = useState<ProfileForm>({
        firstname: profileData?.firstname,
        lastname: profileData?.lastname
    }) */

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(USER_AUTH_TOKEN) ?? '') as IUser
        dispatch(fetchProfileData(user.id))
    }, [dispatch])

    /* const onUpdateProfileData = useCallback(() => {
        if (profileData) {
            dispatch(profileActions.updateProfile({
                ...profileData,
                firstname: profileForm.firstname,
                lastname: profileForm.lastname
            }))
        }
    }, [dispatch, profileData, profileForm])

    const onCancelChanges = useCallback(() => {
        setProfileForm({
            firstname: profileData?.firstname,
            lastname: profileData?.lastname
        })
    }, [profileData])

    const onChangeFirstname = useCallback((value?: string) => {
        setProfileForm({ ...profileForm, firstname: value })
    }, [profileForm])

    const onChangeLastname = useCallback((value?: string) => {
        setProfileForm({ ...profileForm, lastname: value })
    }, [profileForm]) */

    return (
        <div className={cls.ProfilePage}>
            <ProfilePageHeader
                readonly={readonly}
                /* onUpdateProfileData={onUpdateProfileData} */
            />
            <ProfileCard
                profileData={profileData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                /* onChangeFirstname={onChangeFirstname} */
                /* onChangeLastname={onChangeLastname} */
            />
        </div>
    )
})

export default ProfilePage
