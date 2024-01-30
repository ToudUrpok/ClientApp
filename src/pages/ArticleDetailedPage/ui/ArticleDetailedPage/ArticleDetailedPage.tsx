import { memo, useCallback } from 'react'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticleDetailedPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Article } from '../../../../entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { ArticleComments } from '../../../../features/ArticleComments'
import { Button } from '../../../../shared/ui/Button/Button'
import { RoutePaths } from '../../../../shared/config/routeConfig/routeConfig'
import { Page } from '../../../../widgets/Page'

interface ArticleDetailedPageProps {
    className?: string
}

const ArticleDetailedPage = (props: ArticleDetailedPageProps) => {
    const {
        className
    } = props
    const { t } = useTranslation('article')
    const { id } = useParams()
    const navigate = useNavigate()

    const navigateBack = useCallback(() => {
        navigate(RoutePaths.articles_repository)
    }, [navigate])

    if (!id) {
        return (
            <div className={cn(cls.ArticleDetailedPage, {}, [className])}>
                { t('article.ArticleNotFound') }
            </div>
        )
    }

    return (
        <Page className={cn(cls.ArticleDetailedPage, {}, [className])}>
            <Button
                className={cls.BackBtn}
                onClick={navigateBack}
            >
                {t('article.Back')}
            </Button>
            <Article id={id} />
            <ArticleComments articleId={id} />
        </Page>
    )
}

export default memo(ArticleDetailedPage)
