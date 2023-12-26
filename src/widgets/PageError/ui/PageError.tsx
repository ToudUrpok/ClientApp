import { cn } from '../../../shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../shared/ui/Button/Button'

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <section className={cn(cls.PageError, {}, [className])}>
            <p>
                {t('UnexpectedError')}
            </p>
            <Button onClick={reloadPage}>
                {t('ReloadPage')}
            </Button>
        </section>
    )
}
