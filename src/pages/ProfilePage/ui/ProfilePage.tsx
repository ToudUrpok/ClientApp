import { profileReducer } from 'entities/Profile'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ReducersList, useDynamicReducer } from 'shared/hooks/useDynamicReducer'

const reducersToLoad: ReducersList = {
    profile: profileReducer
}

const ProfilePage = memo(() => {
    const { t } = useTranslation('profile')
    useDynamicReducer(reducersToLoad, true)

    return (
        <div>
            {t('ProfilePageHeader')}
        </div>
    )
})

export default ProfilePage
