import { cn } from '../../../shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../Button/Button'
import cls from './Code.module.scss'
import { memo, useCallback } from 'react'
import CopyIcon from '../../assets/icons/copy-20-20.svg'

interface CodeProps {
    className?: string
    content?: string
}

export const Code = memo((props: CodeProps) => {
    const {
        className,
        content
    } = props

    const handleCopyClick = useCallback(async () => {
        await navigator.clipboard.writeText(content ?? '')
    }, [content])

    return (
        <pre className={cn(cls.Code, {}, [className])}>
            <Button className={cls.CopyBtn} onClick={handleCopyClick} theme={ButtonTheme.PLAIN} >
                <CopyIcon className={cls.CopyIcon} />
            </Button>
            <code >
                {content}
            </code>
        </pre>
    )
})
