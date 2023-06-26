import { cn } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'

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
            <button
                data-testid="sidebar-test-toggle"
                onClick={onToggle}
            >
                { t('Toggle') }
            </button>
            <div className={cls.Switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
