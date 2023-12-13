import { memo } from 'react'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticleDetailedPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Article } from '../../../../entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from '../../../../shared/ui/Text/Text'
import { CommentsList } from '../../../../entities/Comment'
import { ReducersList, useDynamicReducer } from '../../../../shared/hooks/useDynamicReducer'
import {
    reducer as commentsReducer, commentsSelectors, selectCommentsIsLoading
} from '../../model/slices/articleCommentsSlice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks/redux'
import { useInitialEffect } from '../../../../shared/hooks/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId'

interface ArticleDetailedPageProps {
    className?: string
}

const reducersToLoad: ReducersList = {
    articleComments: commentsReducer
}

const ArticleDetailedPage = (props: ArticleDetailedPageProps) => {
    useDynamicReducer(reducersToLoad, true)
    const {
        className
    } = props
    const { t } = useTranslation('article')
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const comments = useAppSelector(commentsSelectors.selectAll)
    const isCommentsLoading = useAppSelector(selectCommentsIsLoading)

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id))
        }
    })

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
            <CommentsList comments={comments} isLoading={isCommentsLoading} />
        </div>
    )
}

export default memo(ArticleDetailedPage)
