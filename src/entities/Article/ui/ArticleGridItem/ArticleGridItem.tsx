import { IArticle } from '../../model/types/article'
import { Text } from '../../../../shared/ui/Text/Text'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticleGridItem.module.scss'
import { memo } from 'react'
import { Icon } from '../../../../shared/ui/Icon/Icon'
import ViewsIcon from '../../../../shared/assets/icons/views-20-20.svg'
import { Card } from '../../../../shared/ui/Card/Card'
import { AppLink, AppLinkTheme } from '../../../../shared/ui/AppLink/AppLink'
import { RoutePaths } from '../../../../shared/config/routeConfig/routeConfig'

interface ArticleGridItemProps {
    className?: string
    article: IArticle
}

export const ArticleGridItem = memo((props: ArticleGridItemProps) => {
    const {
        className,
        article
    } = props

    return (
        <div className={cn(cls.ArticleGridItem, {}, [className])}>
            <AppLink
                to={RoutePaths.article_detailed + article.id}
                theme={AppLinkTheme.CLEAR}
            >
                <Card>
                    <div className={cls.ImageWrapper}>
                        <img className={cls.Image} src={article.img} alt={article.title} />
                        <Text className={cls.Date} text={article.createdAt} />
                    </div>
                    <div className={cls.Info}>
                        <Text className={cls.Topic} text={article.topic.join(', ')} />
                        <Icon className={cls.Views} Svg={ViewsIcon} />
                        <Text text={article.views.toString()} />
                    </div>
                    <Text className={cls.Title} text={article.title} />
                </Card>
            </AppLink>
        </div>
    )
})
