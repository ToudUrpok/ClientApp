import { memo } from 'react'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticleDetailedPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Article } from '../../../../entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from '../../../../shared/ui/Text/Text'
import { CommentsList } from '../../../../entities/Comment'

interface ArticleDetailedPageProps {
    className?: string
}

const comments = [
    {
        id: '1',
        text: 'Perfecrt article about JS!',
        articleId: '1',
        user: { id: '1', username: 'Eugene', avatar: 'https://i.natgeofe.com/n/2d706180-e778-4110-9c15-1a7435b72114/mountain-gorillas-rwanda-02_3x4.jpg' }
    },
    {
        id: '2',
        text: 'Good article! Thnx :)',
        articleId: '1',
        user: { id: '2', username: 'Mike', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vladimir_Lenin.jpg/800px-Vladimir_Lenin.jpg' }
    }
]

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
            <Text className={cls.CommentsTitle} title={`${t('article.Comments')} (${comments?.length ?? 0})`} />
            <CommentsList comments={comments} />
        </div>
    )
}

export default memo(ArticleDetailedPage)
