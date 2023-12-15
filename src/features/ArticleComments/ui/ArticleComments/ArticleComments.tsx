import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticleComments.module.scss'
import { memo } from 'react'
import { Text } from '../../../../shared/ui/Text/Text'
import { CommentsList } from '../../../../entities/Comment'
import { ReducersList, useDynamicReducer } from '../../../../shared/hooks/useDynamicReducer'
import {
    reducer as commentsReducer, commentsSelectors, selectCommentsIsLoading
} from '../../model/slices/articleCommentsSlice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks/redux'
import { useInitialEffect } from '../../../../shared/hooks/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId'
import { useTranslation } from 'react-i18next'

interface ArticleCommentsProps {
    className?: string
    articleId?: string
}

const reducersToLoad: ReducersList = {
    articleComments: commentsReducer
}

export const ArticleComments = memo((props: ArticleCommentsProps) => {
    useDynamicReducer(reducersToLoad, true)
    const {
        className,
        articleId
    } = props
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const comments = useAppSelector(commentsSelectors.selectAll)
    const isCommentsLoading = useAppSelector(selectCommentsIsLoading)

    useInitialEffect(() => {
        if (articleId) {
            dispatch(fetchCommentsByArticleId(articleId))
        }
    })

    return (
        <div className={cn(cls.ArticleComments, {}, [className])}>
            <Text className={cls.CommentsTitle} title={`${t('article.Comments')} (${comments?.length ?? 0})`} />
            <CommentsList comments={comments} isLoading={isCommentsLoading} />
        </div>
    )
})
