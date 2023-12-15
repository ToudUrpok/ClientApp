import { memo } from 'react'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticleDetailedPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Article } from '../../../../entities/Article'
import { useParams } from 'react-router-dom'
import { ArticleComments } from 'features/ArticleComments'

interface ArticleDetailedPageProps {
    className?: string
}

const ArticleDetailedPage = (props: ArticleDetailedPageProps) => {
    const {
        className
    } = props
    const { t } = useTranslation('article')
    const { id } = useParams()

    if (!id) {
        return (
            <div className={cn(cls.ArticleDetailedPage, {}, [className])}>
                { t('article.ArticleNotFound') }
            </div>
        )
    }

    return (
        <div className={cn(cls.ArticleDetailedPage, {}, [className])}>
            <Article id={id} />
            <ArticleComments articleId={id} />
        </div>
    )
}

export default memo(ArticleDetailedPage)
