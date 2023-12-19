import { ICodeContent } from '../../../model/types/article'
import { cn } from '../../../../../shared/lib/classNames/classNames'
import cls from './CodeContent.module.scss'
import { memo } from 'react'
import { Code } from 'shared/ui/Code/Code'

interface CodeContentProps {
    className?: string
    content: ICodeContent
}

export const CodeContent = memo((props: CodeContentProps) => {
    const {
        className,
        content
    } = props

    return (
        <div className={cn(cls.CodeContent, {}, [className])}>
            <Code content={content.code} />
        </div>
    )
})
