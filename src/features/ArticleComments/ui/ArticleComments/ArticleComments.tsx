import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticleComments.module.scss'
import { memo, useCallback } from 'react'
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
import { AddCommentForm } from '../AddCommentForm/AddCommentForm'
import { postComment } from 'features/ArticleComments/model/services/postComment'

interface ArticleCommentsProps {
    className?: string
    articleId?: string
}

const reducersToLoad: ReducersList = {
    articleComments: commentsReducer
}

const ArticleComments = (props: ArticleCommentsProps) => {
    useDynamicReducer(reducersToLoad, true)
    const {
        className,
        articleId
    } = props
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const comments = useAppSelector(commentsSelectors.selectAll)
    const isCommentsLoading = useAppSelector(selectCommentsIsLoading)

    const initCommentsList = useCallback(async () => {
        if (articleId) {
            await dispatch(fetchCommentsByArticleId(articleId))
        }
    }, [articleId, dispatch])

    useInitialEffect(() => {
        initCommentsList()
    })

    const saveCommentHandler = useCallback(async (text: string): Promise<boolean> => {
        const result = await dispatch(postComment({
            text,
            articleId
        }))
        await initCommentsList()
        return await new Promise(function (resolve) { resolve(result.meta.requestStatus === 'fulfilled') })
    }, [articleId, initCommentsList, dispatch])

    return (
        <div className={cn(cls.ArticleComments, {}, [className])}>
            {articleId && <AddCommentForm saveComment={saveCommentHandler}/>}
            <Text className={cls.CommentsTitle} title={`${t('article.Comments')} (${comments?.length ?? 0})`} />
            <CommentsList comments={comments} isLoading={isCommentsLoading} />
        </div>
    )
}

export default memo(ArticleComments)
