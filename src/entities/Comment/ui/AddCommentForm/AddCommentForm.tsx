import { Input } from '../../../../shared/ui/Input/Input'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { memo, useState } from 'react'
import { Button } from '../../../../shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface AddCommentFormProps {
    className?: string
    saveComment?: (text: string) => Promise<boolean>
}

export const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
        saveComment
    } = props
    const { t } = useTranslation('comments')
    const [text, setText] = useState('')
    const [addBtnDisabled, setAddBtnDisabled] = useState(true)

    const handleTextInputChange = (value: string) => {
        if (value.trim().length) {
            setAddBtnDisabled(false)
        } else {
            setAddBtnDisabled(true)
        }
        setText(value)
    }

    const addComment = async () => {
        const commentText = text.trim()
        if (commentText.length) {
            const isSaved = await saveComment?.(commentText)
            if (isSaved) {
                setText('')
            }
        }
    }

    return (
        <div className={cn(cls.AddCommentForm, {}, [className])}>
            <Input
                className={cls.CommentInput}
                placeholder={t('comments.CommentText')}
                value={text}
                onChange={handleTextInputChange}
            />
            <Button
                className={cls.AddBtn}
                onClick={addComment}
                disabled={addBtnDisabled}
            >
                {t('comments.AddComment')}
            </Button>
        </div>
    )
})
