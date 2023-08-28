import { cn } from 'shared/lib/classNames/classNames'
import cls from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { ISidebarItem } from '../../model/items'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { memo } from 'react'

interface SidebarItemProps {
    item: ISidebarItem
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation()

    return (
        <div className={cn(cls.SidebarItem, { [cls.collapsed]: collapsed })}>
            <AppLink
                to={item.Path}
                theme={AppLinkTheme.CONTRAST}
            >
                <item.Icon className={cls.SidebarItemIcon}/>
                <span className={cls.SidebarItemLink}>
                    {t(item.LabelKey)}
                </span>
            </AppLink>
        </div>
    )
})
