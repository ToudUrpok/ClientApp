import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticlesCollectionViewSelector.module.scss'
import { memo } from 'react'
import { TArticlesCollectionView } from '../ArticlesCollection/ArticlesCollection'
import ListIcon from '../../../../shared/assets/icons/list-24-24.svg'
import GridIcon from '../../../../shared/assets/icons/tiled-24-24.svg'
import { Button, ButtonTheme } from '../../../../shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'

interface ArticlesCollectionViewSelectorProps {
    className?: string
    currentView: TArticlesCollectionView
    onSwitchView?: (view: TArticlesCollectionView) => void
}

interface SelectItem {
    view: TArticlesCollectionView
    icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const viewItems: SelectItem[] = [
    {
        view: 'list',
        icon: ListIcon
    },
    {
        view: 'grid',
        icon: GridIcon
    }
]

export const ArticlesCollectionViewSelector = memo((props: ArticlesCollectionViewSelectorProps) => {
    const {
        className,
        currentView,
        onSwitchView
    } = props

    const handleClick = (view: TArticlesCollectionView) => () => {
        onSwitchView?.(view)
    }

    return (
        <div className={cn(cls.ViewSelector, {}, [className])}>
            {viewItems.map(item => (
                <Button
                    key={item.view}
                    theme={ButtonTheme.PLAIN}
                    onClick={handleClick(item.view)}
                >
                    <Icon
                        className={item.view === currentView ? cls.Selected : cls.Unselected}
                        Svg={item.icon}
                    />
                </Button>
            ))}
        </div>
    )
})
