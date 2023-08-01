import { ThrowErrorButton } from 'app/providers/ErrorBoundary'
import { Counter } from 'features/Counter'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            <ThrowErrorButton />
            {t('HomePageContent')}
            <Counter />
        </div>
    )
}

export default MainPage
