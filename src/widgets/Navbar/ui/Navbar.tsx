import { cn } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isLoginModal, setIsLoginModal] = useState(false)

    const showLoginModal = useCallback(() => {
        setIsLoginModal(true)
    }, [])

    const closeLoginModal = useCallback(() => {
        setIsLoginModal(false)
    }, [])

    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <div className={cls.Links}>
                <div className={cls.Link}>
                    <Button
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        onClick={showLoginModal}
                    >
                        {t('Log In')}
                    </Button>
                </div>
            </div>

            <LoginModal isOpened={isLoginModal} onClose={closeLoginModal} />
        </div>
    )
}
