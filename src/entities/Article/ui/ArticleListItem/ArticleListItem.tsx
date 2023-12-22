import { IArticle } from '../../model/types/article'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { memo } from 'react'
import { Card } from '../../../../shared/ui/Card/Card'
import { Avatar } from '../../../../shared/ui/Avatar/Avatar'
import { generateAvatarAlt } from '../../../../shared/lib/helpers/avatarHelper'
import { Text } from '../../../../shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Icon } from '../../../../shared/ui/Icon/Icon'
import ViewsIcon from '../../../../shared/assets/icons/views-20-20.svg'
import { ArticleBlock } from '../ArticleBlock/ArticleBlock'
import { AppLink, AppLinkTheme } from '../../../../shared/ui/AppLink/AppLink'
import { RoutePaths } from '../../../../shared/config/routeConfig/routeConfig'

interface ArticleListItemProps {
    className?: string
    article: IArticle
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article
    } = props
    const { t } = useTranslation('articles')

    const textBlock = article.blocks.find(block => block.type === 'TEXT')

    return (
        <div className={cn(cls.ArticleListItem, {}, [className])}>
            <Card>
                <div className={cls.Header}>
                    <Avatar
                        src={article.user.avatar}
                        alt={generateAvatarAlt(article.user.username)}
                        size={30}
                    />
                    <Text className={cls.AuthorName} text={article.user.username} />
                    <Text className={cls.CreationDate} text={article.createdAt} />
                </div>
                <Text className={cls.Title} title={article.title} />
                <Text className={cls.Topic} text={article.topic.join(', ')} />
                <img className={cls.Image} src={article.img} alt={article.title} />
                {textBlock && (
                    <ArticleBlock className={cls.TextBlock} block={textBlock} />
                )}
                <div className={cls.Footer}>
                    <AppLink
                        className={cls.ReadLink}
                        theme={AppLinkTheme.CONTRAST}
                        to={RoutePaths.article_detailed + article.id}
                    >
                        {t('articles.Read')}
                    </AppLink>
                    <Icon className={cls.Views} Svg={ViewsIcon} />
                    <Text text={article.views.toString()} />
                </div>
            </Card>
        </div>
    )
})
