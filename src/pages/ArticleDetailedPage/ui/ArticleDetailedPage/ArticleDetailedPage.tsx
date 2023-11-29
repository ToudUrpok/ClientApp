import { memo } from 'react'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticleDetailedPage.module.scss'
import { useTranslation } from 'react-i18next'

interface ArticleDetailedPageProps {
    className?: string
}

const ArticleDetailedPage = (props: ArticleDetailedPageProps) => {
    const {
        className
    } = props
    const { t } = useTranslation('article')

    return (
        <div className={cn(cls.ArticleDetailedPage, {}, [className])}>
            { t('article.ArticleDetailedPage') }
        </div>
    )
}

export default memo(ArticleDetailedPage)
