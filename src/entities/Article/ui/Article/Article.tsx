import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './Article.module.scss'
import { ReducersList, useDynamicReducer } from '../../../../shared/hooks/useDynamicReducer'
import {
    reducer as articleReducer,
    selectArticleData,
    selectArticleError,
    selectArticleIsLoading
} from '../../model/slice/articleSlice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks/redux'
import { memo } from 'react'
import { fetchArticleById } from '../../../../entities/Article/model/services/fetchArticleById'
import { useTranslation } from 'react-i18next'
import { Text, TextSize, TextTheme } from '../../../../shared/ui/Text/Text'
import { Skeleton } from '../../../../shared/ui/Skeleton/Skeleton'
import { Avatar } from '../../../../shared/ui/Avatar/Avatar'
import ViewsIcon from '../../../../shared/assets/icons/views-20-20.svg'
import CalendorIcon from '../../../../shared/assets/icons/calendar-20-20.svg'
import { Icon } from '../../../../shared/ui/Icon/Icon'
import { ArticleBlock } from '../ArticleBlock/ArticleBlock'
import { useInitialEffect } from '../../../../shared/hooks/useInitialEffect'

interface ArticleProps {
    className?: string
    id: string | undefined
}

const reducersToLoad: ReducersList = {
    article: articleReducer
}

export const Article = memo((props: ArticleProps) => {
    useDynamicReducer(reducersToLoad, true)
    const { t } = useTranslation('article')
    const {
        className,
        id
    } = props

    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(selectArticleIsLoading)
    const error = useAppSelector(selectArticleError)
    const data = useAppSelector(selectArticleData)

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchArticleById(id))
        }
    })

    let content

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.Avatar} width={200} height={200} border='50%' />
                <Skeleton className={cls.Title} width={300} height={32} />
                <Skeleton className={cls.Skeleton} width={600} height={24} />
                <Skeleton className={cls.Skeleton} width={'100%'} height={200} />
                <Skeleton className={cls.Skeleton} width={'100%'} height={200} />
            </>
        )
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                title={t('article.ArticleDataLoadingError')}
                text={error}
            />
        )
    } else {
        content = (
            <>
                <div className={cls.AvatarWrapper}>
                    <Avatar className={cls.avatar} size={200} src={data?.img} />
                </div>
                <Text className={cls.Title} title={data?.title} text={data?.subtitle} size={TextSize.L} />
                <div className={cls.ArticleAttribte}>
                    <Icon className={cls.ArticleAttribteIcon} Svg={ViewsIcon} />
                    <Text text={String(data?.views)} />
                </div>
                <div className={cls.ArticleAttribte}>
                    <Icon className={cls.ArticleAttribteIcon} Svg={CalendorIcon} />
                    <Text text={data?.createdAt} />
                </div>
                {data?.blocks.map(block => (
                    <ArticleBlock key={block.id} className={cls.ArticleBlock} block={block} />
                ))}
            </>
        )
    }

    return (
        <div className={cn(cls.Article, {}, [className])}>
            {content}
        </div>
    )
})
