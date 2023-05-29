import { cn } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <div className={cls.Links}>
                <AppLink to="/" theme={AppLinkTheme.CONTRAST}>{t('Home')}</AppLink>
                <AppLink to="/about" theme={AppLinkTheme.CONTRAST}>{t('About')}</AppLink>
            </div>
        </div>
    )
}
