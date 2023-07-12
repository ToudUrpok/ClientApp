import { cn } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/link-main-20-20.svg'
import AboutIcon from 'shared/assets/icons/link-about-20-20.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar-test"
            className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.sidebarCollapse}>
                <Button
                    data-testid="sidebar-test-toggle"
                    onClick={onToggle}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    square
                    size={ButtonSize.XL}
                >
                    { collapsed ? '>' : '<'}
                </Button>
            </div>
            <div className={cls.LinkItemsList}>
                <div className={cls.LinkItem}>
                    <AppLink
                        to={RoutePaths.main}
                        theme={AppLinkTheme.CONTRAST}
                    >
                        <MainIcon className={cls.LinkItemIcon}/>
                        <span className={cls.LinkItemLink}>
                            {t('Home')}
                        </span>
                    </AppLink>
                </div>
                <div className={cls.LinkItem}>
                    <AppLink
                        to={RoutePaths.about}
                        theme={AppLinkTheme.CONTRAST}
                    >
                        <AboutIcon className={cls.LinkItemIcon}/>
                        <span className={cls.LinkItemLink}>
                            {t('About')}
                        </span>
                    </AppLink>
                </div>
            </div>
            <div className={cls.Switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
