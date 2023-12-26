import { ThrowErrorButton } from '../../../app/providers/ErrorBoundary'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import Page from '../../../widgets/Page/Page'

const MainPage = memo(() => {
    const { t } = useTranslation()

    return (
        <Page>
            <ThrowErrorButton />
            {t('HomePageContent')}
        </Page>
    )
})

export default MainPage
