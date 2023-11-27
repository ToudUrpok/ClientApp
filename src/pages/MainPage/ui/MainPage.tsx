import { ThrowErrorButton } from '../../../app/providers/ErrorBoundary'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = memo(() => {
    const { t } = useTranslation()

    return (
        <div>
            <ThrowErrorButton />
            {t('HomePageContent')}
        </div>
    )
})

export default MainPage
