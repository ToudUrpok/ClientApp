import { memo } from 'react'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticlesRepositoryPage.module.scss'
import { useTranslation } from 'react-i18next'

interface ArticlesRepositoryPageProps {
    className?: string
}

const ArticlesRepositoryPage = (props: ArticlesRepositoryPageProps) => {
    const {
        className
    } = props
    const { t } = useTranslation('articles')

    return (
        <div className={cn(cls.ArticlesRepositoryPage, {}, [className])}>
            { t('articles.ArticlesRepositoryPage') }
        </div>
    )
}

export default memo(ArticlesRepositoryPage)
