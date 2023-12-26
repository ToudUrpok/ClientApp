import cls from './ProfilePage.module.scss'
import { useAppSelector } from '../../../app/hooks/redux'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from '../../../shared/ui/Text/Text'
import { selectUserAuthData } from '../../../entities/User'
import { EditableProfileView } from '../../../features/EditableProfileView'
import { Page } from '../../../widgets/Page/Page'

const ProfilePage = () => {
    const authData = useAppSelector(selectUserAuthData)
    const { t } = useTranslation('profile')

    return (
        <Page className={cls.ProfilePage}>
            <Text className={cls.Title}
                title={t('profile.Profile')}
            />
            {authData && <EditableProfileView
                profileId={authData?.id}
            />}
        </Page>
    )
}

export default memo(ProfilePage)
