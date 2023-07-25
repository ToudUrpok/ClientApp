import { cn } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleAuthModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])

    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <div className={cls.Links}>
                <div className={cls.Link}>
                    <Button
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        onClick={onToggleAuthModal}
                    >
                        {t('Log In')}
                    </Button>
                </div>
            </div>

            <Modal isOpened={isAuthModal} onClose={onToggleAuthModal}>
                {t('ModalTestContent')}
            </Modal>
        </div>
    )
}
