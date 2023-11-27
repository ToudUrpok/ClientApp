import { cn } from '../../../shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button'
import { LoginModal } from '../../../features/AuthByUsername'
import { useAppDispatch, useAppSelector } from '../../../app/hooks/redux'
import { selectUserAuthData, userActions } from '../../../entities/User'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isLoginModal, setIsLoginModal] = useState(false)
    const authData = useAppSelector(selectUserAuthData)
    const dispatch = useAppDispatch()

    const showLoginModal = useCallback(() => {
        setIsLoginModal(true)
    }, [])

    const closeLoginModal = useCallback(() => {
        setIsLoginModal(false)
    }, [])

    const logOut = useCallback(() => {
        setIsLoginModal(false)
        dispatch(userActions.logOut())
    }, [dispatch])

    if (authData) {
        return (
            <div className={cn(cls.Navbar, {}, [className])}>
                <div className={cls.Links}>
                    <div className={cls.Link}>
                        <Button
                            theme={ButtonTheme.BACKGROUND_INVERTED}
                            onClick={logOut}
                        >
                            {t('LogOut')}
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

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

            {isLoginModal && <LoginModal
                isOpened={isLoginModal}
                onClose={closeLoginModal}
            />}
        </div>
    )
})
