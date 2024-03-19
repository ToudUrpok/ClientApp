import { Card } from '../../../shared/ui/Card/Card'
import { cn } from '../../../shared/lib/classNames/classNames'
import cls from './CategoryTabsPanel.module.scss'
import { ReactNode, useCallback } from 'react'

export interface CategoryTab<T extends string> {
    value: T
    content: ReactNode
}

interface CategoryTabsPanelProps<T extends string> {
    className?: string
    tabs: Array<CategoryTab<T>>
    selectedValue?: string
    onSelect?: (selectedTabValue: T) => void
}

export const CategoryTabsPanel = <T extends string>(props: CategoryTabsPanelProps<T>) => {
    const {
        className,
        tabs,
        selectedValue,
        onSelect
    } = props

    const handleTabSelect = useCallback((tabValue: T) => () => {
        onSelect?.(tabValue)
    }, [onSelect])

    return (
        <div className={cn(cls.CategoryTabsPanel, {}, [className])}>
            {(tabs?.length > 0) && tabs.map(tab => (
                <Card
                    className={cls.TabItem}
                    key={tab.value}
                    theme={tab.value === selectedValue ? 'outlined' : 'contrast'}
                    onClick={handleTabSelect(tab.value)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
}
