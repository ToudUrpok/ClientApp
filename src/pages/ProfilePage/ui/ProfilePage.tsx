import { useAppDispatch } from 'app/hooks/redux'
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import { IUser } from 'entities/User'
import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { USER_AUTH_TOKEN } from 'shared/const/localStorage'
import { ReducersList, useDynamicReducer } from 'shared/hooks/useDynamicReducer'
import { Text } from 'shared/ui/Text/Text'

const reducersToLoad: ReducersList = {
    profile: profileReducer
}

const ProfilePage = memo(() => {
    const { t } = useTranslation('profile')
    useDynamicReducer(reducersToLoad, true)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(USER_AUTH_TOKEN) ?? '') as IUser
        dispatch(fetchProfileData(user.id))
    }, [dispatch])

    return (
        <div>
            <Text title={t('profile.ProfilePageHeader')} />
            <ProfileCard/>
        </div>
    )
})

export default ProfilePage
