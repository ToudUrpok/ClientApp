import { cn } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
    const { t } = useTranslation()

    return (
        <div className={cn(cls.NotFoundPage, {}, [className])}>
            { t('NotFoundPage') }
        </div>
    )
})
