import { cn } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { MouseEvent, ReactNode, useCallback, useEffect } from 'react'
import { Portal } from '../Portal/Portal'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpened: boolean
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpened,
        onClose
    } = props

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose()
        }
    }, [onClose])

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    const onContentClick = (event: MouseEvent) => {
        event.stopPropagation()
    }

    useEffect(() => {
        if (isOpened) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpened, onKeyDown])

    const attributes: Record<string, boolean> = {
        [cls.opened]: isOpened
    }

    return (
        <Portal>
            <div className={cn(cls.Modal, attributes, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        { children }
                    </div>
                </div>
            </div>
        </Portal>
    )
}
