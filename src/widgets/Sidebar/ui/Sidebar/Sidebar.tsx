import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { memo, useMemo, useState } from 'react'
import { ThemeSwitcher } from '../../../../shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from '../../../../shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from '../../../../shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSidebarNavItems } from '../../model/useSidebarNavItems'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarNavItems = useSidebarNavItems()

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const items = useMemo(() => sidebarNavItems.map((item) => (
        <SidebarItem
            key={item.Path}
            item={item}
            collapsed={collapsed}
        />
    )), [collapsed, sidebarNavItems])

    return (
        <aside
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
                {items}
            </div>
            <div className={cls.Switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </aside>
    )
})
