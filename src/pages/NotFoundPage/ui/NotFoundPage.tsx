import { cn } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation()

    return (
        <div className={cn(cls.NotFoundPage, {}, [className])}>
            { t('NotFoundPage') }
        </div>
    )
}
