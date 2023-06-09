import { ThrowErrorButton } from 'app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            <ThrowErrorButton />
            {t('HomePageContent')}
        </div>
    )
}

export default MainPage
